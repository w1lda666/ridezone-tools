(function() {
    var target = document.getElementById('ridezone-kite-calculator');
    if (!target) return;

    // Detectar idioma en PrestaShop 8.2
    var lang = 'es';
    var htmlLang = document.documentElement.lang;
    var bodyClass = document.body.className;

    if (htmlLang && htmlLang.indexOf('en') === 0) {
        lang = 'en';
    } else if (bodyClass.indexOf('lang-en') !== -1) {
        lang = 'en';
    } else if (window.prestashop && window.prestashop.language && window.prestashop.language.iso_code) {
        lang = window.prestashop.language.iso_code;
    }

    var urlPath = window.location.pathname;
    if (urlPath.indexOf('/en/') !== -1) {
        lang = 'en';
    }

    var isEN = (lang === 'en');

    var textos = {
        title: isEN ? '🧮 Calculate your ideal kite size' : '🧮 Calcula tu tamaño de kite ideal',
        subtitle: isEN ? 'Approximate recommendations based on weight, wind and riding style using the North Kiteboarding range.' : 'Recomendaciones orientativas basadas en peso, viento y estilo de navegación usando la gama North Kiteboarding.',
        pesoLabel: isEN ? 'Rider weight (kg)' : 'Peso del rider (kg)',
        pesoOptions: [
            { val: '45', text: isEN ? '40-50 kg' : '40-50 kg' },
            { val: '60', text: isEN ? '50-65 kg' : '50-65 kg' },
            { val: '75', text: isEN ? '65-80 kg' : '65-80 kg', sel: true },
            { val: '90', text: isEN ? '80-95 kg' : '80-95 kg' },
            { val: '100', text: isEN ? '95+ kg' : '95+ kg' }
        ],
        vientoLabel: isEN ? 'Wind (knots)' : 'Viento (nudos)',
        vientoPlaceholder: isEN ? 'E.g. 25' : 'Ej: 25',
        disciplinaLabel: isEN ? 'Discipline' : 'Disciplina',
        freeride: isEN ? 'Freeride' : 'Freeride',
        bigair: isEN ? 'Big Air' : 'Big Air',
        wave: isEN ? 'Wave / Strapless' : 'Wave / Strapless',
        freestyle: isEN ? 'Freestyle' : 'Freestyle',
        foil: isEN ? 'Foil' : 'Foil',
        calcular: isEN ? 'CALCULATE' : 'CALCULAR',
        alertViento: isEN ? 'Enter a wind speed' : 'Introduce una velocidad de viento',
        resultado: isEN ? '📊 Result' : '📊 Resultado',
        tamanoRec: isEN ? 'Recommended size:' : 'Tamaño recomendado:',
        modeloRec: isEN ? 'Recommended model:' : 'Modelo recomendado:',
        avisoLowWind: isEN ? 'There is very little wind to sail comfortably in ' : 'Hay muy poco viento para navegar cómodamente en ',
        avisoLowWindReco: isEN ? 'We recommend:' : 'Te recomendamos:',
        avisoLowWind1: isEN ? 'Use a large board' : 'Usar una tabla grande',
        avisoLowWind2: isEN ? 'A lightwind kite' : 'Una cometa lightwind',
        avisoLowWind3: isEN ? 'Or switch to hydrofoil' : 'O pasarte al hydrofoil',
        avisoStrong: isEN ? 'Strong wind conditions.' : 'Condiciones de viento fuerte.',
        avisoStrongReco: isEN ? 'Recommended for experienced riders with appropriate gear.' : 'Recomendado para riders con experiencia y material adecuado.',
        avisoExtreme: isEN ? 'Extreme conditions.' : 'Condiciones extremas.',
        avisoExtremeReco: isEN ? 'Only advanced riders should sail in this wind.' : 'Solo riders avanzados deberían navegar con este viento.',
        avisoDanger: isEN ? 'Extremely dangerous wind.' : 'Viento extremadamente peligroso.',
        avisoDangerReco: isEN ? 'Sail only under your own responsibility and with appropriate gear.' : 'Navega únicamente bajo tu responsabilidad y con material adecuado.',
        msgFreeride: isEN ? 'The North Reach is the most versatile kite in the range. Perfect for freeride, progression and daily sailing.' : 'La North Reach es la cometa más polivalente de la gama. Perfecta para freeride, progresión y navegación diaria.',
        msgBigair: isEN ? 'The North Orbit stands out for its stability, hangtime and control in strong wind. Designed for Big Air and megaloops.' : 'La North Orbit destaca por su estabilidad, hangtime y control en viento fuerte. Diseñada para Big Air y megaloops.',
        msgWave: isEN ? 'The North Carve offers drift, fast turning and excellent control in waves and strapless.' : 'La North Carve ofrece drift, giro rápido y muchísimo control en olas y strapless.',
        msgFreestyle: isEN ? 'The North Pulse is designed for freestyle and unhooked, offering explosive pop and powered riding.' : 'La North Pulse está diseñada para freestyle y unhooked, ofreciendo pop explosivo y navegación powered.',
        msgFoil: isEN ? 'The North Code Zero maximizes light wind and foil performance thanks to its efficiency and lightness.' : 'La North Code Zero maximiza el rendimiento en viento flojo y foil gracias a su eficiencia y ligereza.',
        avisoFinal: isEN ? 'These recommendations are approximate and may vary according to:' : 'Estas recomendaciones son orientativas y pueden variar según:',
        avisoItem1: isEN ? 'Rider level' : 'Nivel del rider',
        avisoItem2: isEN ? 'Type of board' : 'Tipo de tabla',
        avisoItem3: isEN ? 'Sea conditions' : 'Estado del mar',
        avisoItem4: isEN ? 'Gusts and wind stability' : 'Rachas y estabilidad del viento',
        avisoItem5: isEN ? 'Currents and tides' : 'Corrientes y mareas',
        avisoItem6: isEN ? 'Personal preferences' : 'Preferencias personales',
        cta: isEN ? '👉 At Ridezone we can help you choose the perfect North Kiteboarding quiver.' : '👉 En Ridezone podemos ayudarte a elegir el quiver North Kiteboarding perfecto.'
    };

    // Construir opciones del select de peso
    var pesoOptionsHTML = '';
    textos.pesoOptions.forEach(function(opt) {
        var selected = opt.sel ? ' selected' : '';
        pesoOptionsHTML += '<option value="' + opt.val + '"' + selected + '>' + opt.text + '</option>';
    });

    target.innerHTML = '<div style="max-width:850px;margin:auto;padding:30px;background:#f5f5f5;border-radius:14px;font-family:Arial,sans-serif;box-sizing:border-box;">' +
        '<h2 style="text-align:center;margin-bottom:25px;">' + textos.title + '</h2>' +
        '<p style="text-align:center;color:#666;margin-bottom:30px;">' + textos.subtitle + '</p>' +
        '<label style="font-weight:bold;display:block;margin-bottom:5px;">' + textos.pesoLabel + '</label>' +
        '<select id="peso-kite" style="width:100%;padding:12px;margin-bottom:20px;border-radius:8px;border:1px solid #ccc;box-sizing:border-box;font-size:16px;background:#fff;">' +
        pesoOptionsHTML +
        '</select>' +
        '<label style="font-weight:bold;display:block;margin-bottom:5px;">' + textos.vientoLabel + '</label>' +
        '<input type="number" id="viento-kite" placeholder="' + textos.vientoPlaceholder + '" style="width:100%;padding:12px;margin-bottom:20px;border-radius:8px;border:1px solid #ccc;box-sizing:border-box;font-size:16px;">' +
        '<label style="font-weight:bold;display:block;margin-bottom:5px;">' + textos.disciplinaLabel + '</label>' +
        '<select id="disciplina-kite" style="width:100%;padding:12px;margin-bottom:25px;border-radius:8px;border:1px solid #ccc;box-sizing:border-box;font-size:16px;background:#fff;">' +
        '<option value="freeride">' + textos.freeride + '</option>' +
        '<option value="bigair">' + textos.bigair + '</option>' +
        '<option value="wave">' + textos.wave + '</option>' +
        '<option value="freestyle">' + textos.freestyle + '</option>' +
        '<option value="foil">' + textos.foil + '</option>' +
        '</select>' +
        '<button id="calcular-kite-btn" style="width:100%;padding:15px;background:#000;color:#fff;border:none;border-radius:8px;font-size:18px;cursor:pointer;font-weight:bold;">' + textos.calcular + '</button>' +
        '<div id="resultado-kite" style="margin-top:30px;padding:25px;background:white;border-radius:12px;display:none;"></div>' +
        '</div>';

    document.getElementById('calcular-kite-btn').addEventListener('click', function() {
        var peso = parseInt(document.getElementById('peso-kite').value);
        var viento = parseInt(document.getElementById('viento-kite').value);
        var disciplina = document.getElementById('disciplina-kite').value;

        if (!viento) {
            alert(textos.alertViento);
            return;
        }

        var tamano = "";
        var modelo = "";
        var mensaje = "";
        var advertencia = "";

        // MODELOS
        if (disciplina == "freeride") modelo = "North Reach";
        if (disciplina == "bigair") modelo = "North Orbit";
        if (disciplina == "wave") modelo = "North Carve";
        if (disciplina == "freestyle") modelo = "North Pulse";
        if (disciplina == "foil") modelo = "North Code Zero";

        // AVISOS DE VIENTO
        if (viento < 8 && disciplina != "foil") {
            advertencia = '<div style="padding:15px;background:#fff4d6;border-radius:10px;color:#8a5a00;margin-bottom:20px;">' +
                '⚠️ ' + textos.avisoLowWind + disciplina + '.<br><br>' +
                textos.avisoLowWindReco + '<ul><li>' + textos.avisoLowWind1 + '</li><li>' + textos.avisoLowWind2 + '</li><li>' + textos.avisoLowWind3 + '</li></ul></div>';
        } else if (viento >= 35 && viento < 45) {
            advertencia = '<div style="padding:15px;background:#fff4d6;border-radius:10px;color:#8a5a00;margin-bottom:20px;">' +
                '⚠️ ' + textos.avisoStrong + '<br><br>' + textos.avisoStrongReco + '</div>';
        } else if (viento >= 45 && viento < 50) {
            advertencia = '<div style="padding:15px;background:#ffe7e7;border-radius:10px;color:#a00000;margin-bottom:20px;">' +
                '⚠️ ' + textos.avisoExtreme + '<br><br>' + textos.avisoExtremeReco + '</div>';
        } else if (viento >= 50) {
            advertencia = '<div style="padding:15px;background:#ffdddd;border-radius:10px;color:#900000;margin-bottom:20px;">' +
                '⚠️ ' + textos.avisoDanger + '<br><br>' + textos.avisoDangerReco + '</div>';
        }

        // FOIL
        if (disciplina == "foil") {
            if (viento <= 6) tamano = "11m-13m";
            else if (viento <= 10) tamano = "9m-11m";
            else if (viento <= 14) tamano = "8m-9m";
            else if (viento <= 20) tamano = "6m-8m";
            else if (viento <= 30) tamano = "5m-6m";
            else tamano = "4m-5m";
        } else {
            // 40-50 KG
            if (peso <= 50) {
                if (viento < 12) tamano = "12m-15m";
                else if (viento < 18) tamano = "9m-10m";
                else if (viento < 25) tamano = "7m-8m";
                else if (viento < 35) tamano = "5m-6m";
                else if (viento < 45) tamano = "4m-5m";
                else tamano = "4m";
            }
            // 50-65 KG
            else if (peso <= 65) {
                if (viento < 12) tamano = "13m-17m";
                else if (viento < 18) tamano = "10m-11m";
                else if (viento < 25) tamano = "8m-9m";
                else if (viento < 35) tamano = "6m-7m";
                else if (viento < 45) tamano = "5m";
                else tamano = "4m-5m";
            }
            // 65-80 KG
            else if (peso <= 80) {
                if (viento < 12) tamano = "15m-19m";
                else if (viento < 18) tamano = "11m-13m";
                else if (viento < 25) tamano = "9m-10m";
                else if (viento < 35) tamano = "7m-8m";
                else if (viento < 45) tamano = "5m-6m";
                else tamano = "5m";
            }
            // 80-95 KG
            else if (peso <= 95) {
                if (viento < 12) tamano = "17m-19m";
                else if (viento < 18) tamano = "13m-15m";
                else if (viento < 25) tamano = "10m";
                else if (viento < 35) tamano = "8m";
                else if (viento < 45) tamano = "6m-7m";
                else tamano = "5m-6m";
            }
            // 95+ KG
            else {
                if (viento < 12) tamano = "19m";
                else if (viento < 18) tamano = "15m-17m";
                else if (viento < 25) tamano = "11m-12m";
                else if (viento < 35) tamano = "9m";
                else if (viento < 45) tamano = "7m";
                else tamano = "6m-7m";
            }
        }

        // MENSAJES MODELOS
        if (disciplina == "freeride") mensaje = textos.msgFreeride;
        if (disciplina == "bigair") mensaje = textos.msgBigair;
        if (disciplina == "wave") mensaje = textos.msgWave;
        if (disciplina == "freestyle") mensaje = textos.msgFreestyle;
        if (disciplina == "foil") mensaje = textos.msgFoil;

        // RESULTADO
        document.getElementById('resultado-kite').style.display = "block";
        document.getElementById('resultado-kite').innerHTML =
            advertencia +
            '<h3 style="margin-top:0;">' + textos.resultado + '</h3>' +
            '<p style="font-size:18px;"><strong>' + textos.tamanoRec + '</strong> <span style="color:#e74c3c;font-size:22px;">' + tamano + '</span></p>' +
            '<p style="font-size:18px;"><strong>' + textos.modeloRec + '</strong> <span style="color:#2ecc71;font-size:22px;">' + modelo + '</span></p>' +
            '<p style="margin-top:20px;font-size:15px;">' + mensaje + '</p>' +
            '<hr style="margin:25px 0;">' +
            '<p style="font-size:14px;color:#666;">' + textos.avisoFinal + '<br><br>' +
            '• ' + textos.avisoItem1 + '<br>' +
            '• ' + textos.avisoItem2 + '<br>' +
            '• ' + textos.avisoItem3 + '<br>' +
            '• ' + textos.avisoItem4 + '<br>' +
            '• ' + textos.avisoItem5 + '<br>' +
            '• ' + textos.avisoItem6 + '</p>' +
            '<p style="margin-top:20px;font-weight:bold;">' + textos.cta + '</p>';

        document.getElementById('resultado-kite').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
})();

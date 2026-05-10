(function() {
    var target = document.getElementById('ridezone-kite-calculator');
    if (!target) return;

    // --- DETECCIÓN DE IDIOMA ---
    var lang = 'es';
    var htmlLang = document.documentElement.lang;
    var bodyClass = document.body.className;
    if (htmlLang && htmlLang.indexOf('en') === 0) lang = 'en';
    else if (bodyClass.indexOf('lang-en') !== -1) lang = 'en';
    else if (window.prestashop && window.prestashop.language && window.prestashop.language.iso_code) lang = window.prestashop.language.iso_code;
    var urlPath = window.location.pathname;
    if (urlPath.indexOf('/en/') !== -1) lang = 'en';
    var isEN = (lang === 'en');

    // --- TEXTOS TRADUCIDOS ---
    var t = {
        title: isEN ? 'Ridezone Kite Size Calculator' : 'Calculadora de Talla de Cometa Ridezone',
        subtitle: isEN ? 'Realistic recommendations based on weight, wind and discipline using the North Kiteboarding range.' : 'Recomendaciones realistas basadas en peso, viento y disciplina usando la gama North Kiteboarding.',
        pesoLabel: isEN ? 'Rider weight (kg)' : 'Peso del rider (kg)',
        pesoPlaceholder: isEN ? 'E.g. 75' : 'Ej: 75',
        vientoLabel: isEN ? 'Wind (knots)' : 'Viento (nudos)',
        vientoPlaceholder: isEN ? 'E.g. 28' : 'Ej: 28',
        disciplinaLabel: isEN ? 'Discipline' : 'Disciplina',
        freeride: 'Freeride',
        bigair: 'Big Air',
        wave: isEN ? 'Wave / Strapless' : 'Wave / Strapless',
        freestyle: 'Freestyle',
        foil: 'Foil',
        calcular: isEN ? 'CALCULATE' : 'CALCULAR',
        alert: isEN ? 'Enter weight and wind' : 'Introduce peso y viento',

        // Avisos rider ligero
        lightRiderTitle: isEN ? '⚠️ Rider too light for these conditions' : '⚠️ Rider demasiado ligero para estas condiciones',
        lightRiderDesc: isEN ? 'Riders under 40 kg should not sail in winds above 20 knots. The smallest kite may still be dangerous.' : 'Riders de menos de 40 kg no deberían navegar con más de 20 nudos. Incluso la cometa más pequeña puede ser peligrosa.',

        // Avisos viento
        lowWindTitle: isEN ? '⚠️ Very low wind' : '⚠️ Muy poco viento',
        lowWindDesc: isEN ? 'With less than 8 knots it is usually not viable to sail comfortably on a twin tip, even using very large kites.' : 'Con menos de 8 nudos normalmente no es viable navegar cómodamente en twin tip, incluso usando cometas muy grandes.',
        lowWindReco: isEN ? 'For these conditions we recommend:' : 'Para estas condiciones recomendamos:',
        lowWindItem1: 'Hydrofoil',
        lowWindItem2: isEN ? 'Lightwind board' : 'Tabla lightwind',
        lowWindItem3: 'North Code Zero',
        lowWindItem4: 'Reach 17m o 19m',

        strongWindTitle: isEN ? '⚠️ Very strong wind' : '⚠️ Viento muy fuerte',
        strongWindDesc: isEN ? 'Conditions recommended only for experienced riders with appropriate gear.' : 'Condiciones recomendadas únicamente para riders experimentados y material adecuado.',

        extremeWindTitle: isEN ? '⚠️ Extreme conditions' : '⚠️ Condiciones extremas',
        extremeWindDesc: isEN ? 'Only advanced riders should sail in this wind.' : 'Solo riders avanzados deberían navegar con este viento.',

        stormWindTitle: isEN ? '⚠️ Storm Riding / Very dangerous' : '⚠️ Storm Riding / Muy peligroso',
        stormWindDesc1: isEN ? 'Over 50 knots is considered extremely dangerous wind.' : 'Más de 50 nudos se considera viento extremadamente peligroso.',
        stormWindDesc2: isEN ? 'Sail only under your own responsibility and with advanced experience.' : 'Navega únicamente bajo tu responsabilidad y con experiencia avanzada.',

        // Resultado
        resultado: isEN ? '📊 Result' : '📊 Resultado',
        tamanoRec: isEN ? 'Recommended size:' : 'Tamaño recomendado:',
        modeloRec: isEN ? 'Recommended model:' : 'Modelo recomendado:',

        // Comentarios modelos
        msgFreeride: isEN ? 'The North Reach is the most versatile and recommended option for most riders.' : 'La North Reach es la opción más polivalente y recomendable para la mayoría de riders.',
        msgBigair: isEN ? 'The North Orbit offers maximum control, hangtime and stability in strong wind.' : 'La North Orbit ofrece máximo control, hangtime y estabilidad en viento fuerte.',
        msgWave: isEN ? 'The North Carve stands out for its drift and turning speed in waves.' : 'La North Carve destaca por su drift y velocidad de giro en olas.',
        msgFreestyle: isEN ? 'The North Pulse is designed for riders looking for explosive pop and powered freestyle.' : 'La North Pulse está diseñada para riders que buscan pop explosivo y freestyle powered.',
        msgFoil: isEN ? 'The North Code Zero maximizes light wind and foil performance.' : 'La North Code Zero maximiza el rendimiento en viento flojo y foil.',

        // Disclaimer
        avisoFinal: isEN ? 'These recommendations are approximate and may vary according to:' : 'Estas recomendaciones son orientativas y pueden variar según:',
        avisoItem1: isEN ? 'Rider level' : 'Nivel del rider',
        avisoItem2: isEN ? 'Type of board' : 'Tipo de tabla',
        avisoItem3: isEN ? 'Sea conditions' : 'Estado del mar',
        avisoItem4: isEN ? 'Gusts and wind stability' : 'Rachas y estabilidad del viento',
        avisoItem5: isEN ? 'Currents and tides' : 'Corrientes y mareas',
        avisoItem6: isEN ? 'Personal preferences' : 'Preferencias personales',
        cta: isEN ? '👉 At Ridezone we can help you choose the perfect North Kiteboarding quiver.' : '👉 En Ridezone podemos ayudarte a elegir el quiver North Kiteboarding perfecto.'
    };

    // --- CONSTRUIR HTML ---
    target.innerHTML = '<div style="max-width:900px;margin:auto;padding:35px;background:#111827;border-radius:18px;font-family:Arial,sans-serif;color:white;border:2px solid #00D4FF;box-sizing:border-box;">' +
        '<div style="text-align:center;margin-bottom:30px;">' +
        '<h2 style="margin:0;font-size:32px;color:#00D4FF;">' + t.title + '</h2>' +
        '<p style="color:#cbd5e1;margin-top:12px;">' + t.subtitle + '</p>' +
        '</div>' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.pesoLabel + '</strong></label>' +
        '<input type="number" id="peso-kite" placeholder="' + t.pesoPlaceholder + '" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.vientoLabel + '</strong></label>' +
        '<input type="number" id="viento-kite" placeholder="' + t.vientoPlaceholder + '" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.disciplinaLabel + '</strong></label>' +
        '<select id="disciplina-kite" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:30px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<option value="freeride">' + t.freeride + '</option>' +
        '<option value="bigair">' + t.bigair + '</option>' +
        '<option value="wave">' + t.wave + '</option>' +
        '<option value="freestyle">' + t.freestyle + '</option>' +
        '<option value="foil">' + t.foil + '</option>' +
        '</select>' +
        '<button id="calcular-kite-btn" style="width:100%;padding:18px;background:#00D4FF;color:#000;font-size:18px;font-weight:bold;border:none;border-radius:12px;cursor:pointer;transition:0.3s;">' + t.calcular + '</button>' +
        '<div id="resultado-kite" style="display:none;margin-top:35px;padding:30px;background:#1f2937;border-radius:16px;"></div>' +
        '</div>';

    // --- LÓGICA DE CÁLCULO ---
    document.getElementById('calcular-kite-btn').addEventListener('click', function() {
        var peso = parseInt(document.getElementById('peso-kite').value);
        var viento = parseInt(document.getElementById('viento-kite').value);
        var disciplina = document.getElementById('disciplina-kite').value;

        if (!peso || !viento) {
            alert(t.alert);
            return;
        }

        var advertencia = "";
        var modelo = "";
        var tamano = "";
        var comentario = "";

        // MODELOS
        if (disciplina == "freeride") modelo = "North Reach";
        if (disciplina == "bigair") modelo = "North Orbit";
        if (disciplina == "wave") modelo = "North Carve";
        if (disciplina == "freestyle") modelo = "North Pulse";
        if (disciplina == "foil") modelo = "North Code Zero";

        // AVISO RIDER LIGERO
        if (peso < 40 && viento > 20) {
            advertencia = '<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff4d4d;">' +
                '<h3 style="margin-top:0;color:#ff8080;">' + t.lightRiderTitle + '</h3>' +
                '<p style="line-height:1.6;">' + t.lightRiderDesc + '</p></div>';
        }
        // INTERPRETACIÓN GLOBAL DEL VIENTO
        else if (viento <= 8 && disciplina != "foil") {
            advertencia = '<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff4d4d;">' +
                '<h3 style="margin-top:0;color:#ff8080;">' + t.lowWindTitle + '</h3>' +
                '<p style="line-height:1.6;">' + t.lowWindDesc + '</p>' +
                '<p style="line-height:1.6;">' + t.lowWindReco + '</p>' +
                '<ul style="line-height:1.8;">' +
                '<li>' + t.lowWindItem1 + '</li>' +
                '<li>' + t.lowWindItem2 + '</li>' +
                '<li>' + t.lowWindItem3 + '</li>' +
                '<li>' + t.lowWindItem4 + '</li>' +
                '</ul></div>';
        } else if (viento > 35 && viento <= 45) {
            advertencia = '<div style="background:#3b341d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ffd000;">' +
                '<h3 style="margin-top:0;color:#ffe066;">' + t.strongWindTitle + '</h3>' +
                '<p style="line-height:1.6;">' + t.strongWindDesc + '</p></div>';
        } else if (viento > 45 && viento <= 50) {
            advertencia = '<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff7b7b;">' +
                '<h3 style="margin-top:0;color:#ff9e9e;">' + t.extremeWindTitle + '</h3>' +
                '<p style="line-height:1.6;">' + t.extremeWindDesc + '</p></div>';
        } else if (viento > 50) {
            advertencia = '<div style="background:#2a0000;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid red;">' +
                '<h3 style="margin-top:0;color:#ff6666;">' + t.stormWindTitle + '</h3>' +
                '<p style="line-height:1.6;">' + t.stormWindDesc1 + '</p>' +
                '<p style="line-height:1.6;">' + t.stormWindDesc2 + '</p></div>';
        }

        // AJUSTE DISCIPLINA
        var ajuste = 0;
        if (disciplina == "bigair") ajuste = -1;
        if (disciplina == "wave") ajuste = -1;
        if (disciplina == "freestyle") ajuste = -0.5;
        if (disciplina == "foil") ajuste = -3;

        // BASE REALISTA POR PESO Y VIENTO
        function calcularBase(p, v) {
            if (p <= 50) {
                if (p < 40) {
                    if (v <= 10) return 12;
                    if (v <= 14) return 9;
                    if (v <= 18) return 7;
                    if (v <= 22) return 5;
                    if (v <= 28) return 4;
                    return 3;
                }
                if (v <= 8) return 17;
                if (v <= 12) return 12;
                if (v <= 16) return 10;
                if (v <= 20) return 8;
                if (v <= 25) return 6;
                if (v <= 30) return 5;
                if (v <= 35) return 4;
                return 3;
            }
            if (p <= 65) {
                if (v <= 8) return 19;
                if (v <= 12) return 15;
                if (v <= 16) return 12;
                if (v <= 20) return 10;
                if (v <= 25) return 9;
                if (v <= 30) return 8;
                if (v <= 35) return 7;
                if (v <= 40) return 6;
                return 5;
            }
            if (p <= 80) {
                if (v <= 8) return 19;
                if (v <= 12) return 17;
                if (v <= 16) return 13;
                if (v <= 20) return 11;
                if (v <= 25) return 9;
                if (v <= 30) return 8;
                if (v <= 35) return 7;
                if (v <= 40) return 6;
                return 5;
            }
            if (p <= 95) {
                if (v <= 8) return 19;
                if (v <= 12) return 19;
                if (v <= 16) return 15;
                if (v <= 20) return 12;
                if (v <= 25) return 10;
                if (v <= 30) return 9;
                if (v <= 35) return 8;
                if (v <= 40) return 7;
                return 6;
            }
            // 95+
            if (v <= 8) return 19;
            if (v <= 12) return 19;
            if (v <= 16) return 17;
            if (v <= 20) return 14;
            if (v <= 25) return 12;
            if (v <= 30) return 10;
            if (v <= 35) return 9;
            if (v <= 40) return 8;
            return 7;
        }

        var base = calcularBase(peso, viento);
        var finalSize = base + ajuste;

        // LÍMITES
        if (finalSize < 3) finalSize = 3;
        if (finalSize > 19) finalSize = 19;

        // TEXTO TAMAÑO
        if (finalSize >= 17) tamano = "17m - 19m";
        else if (finalSize >= 14) tamano = "14m - 17m";
        else if (finalSize >= 12) tamano = "12m - 14m";
        else if (finalSize >= 10) tamano = "10m - 12m";
        else if (finalSize >= 8) tamano = "8m - 10m";
        else if (finalSize >= 6) tamano = "6m - 8m";
        else tamano = "4m - 6m";

        // COMENTARIOS
        if (disciplina == "freeride") comentario = t.msgFreeride;
        if (disciplina == "bigair") comentario = t.msgBigair;
        if (disciplina == "wave") comentario = t.msgWave;
        if (disciplina == "freestyle") comentario = t.msgFreestyle;
        if (disciplina == "foil") comentario = t.msgFoil;

        // RESULTADO
        document.getElementById('resultado-kite').style.display = "block";
        document.getElementById('resultado-kite').innerHTML =
            advertencia +
            '<h2 style="margin-top:0;color:#00D4FF;">' + t.resultado + '</h2>' +
            '<p style="font-size:20px;line-height:1.8;"><strong>' + t.tamanoRec + '</strong> ' + tamano + '</p>' +
            '<p style="font-size:20px;line-height:1.8;"><strong>' + t.modeloRec + '</strong> ' + modelo + '</p>' +
            '<p style="line-height:1.8;color:#d1d5db;margin-top:20px;">' + comentario + '</p>' +
            '<hr style="margin:30px 0;border-color:#374151;">' +
            '<p style="color:#9ca3af;line-height:1.8;font-size:14px;">' + t.avisoFinal + '<br><br>' +
            '• ' + t.avisoItem1 + '<br>' +
            '• ' + t.avisoItem2 + '<br>' +
            '• ' + t.avisoItem3 + '<br>' +
            '• ' + t.avisoItem4 + '<br>' +
            '• ' + t.avisoItem5 + '<br>' +
            '• ' + t.avisoItem6 + '</p>' +
            '<p style="margin-top:25px;font-weight:bold;color:#00D4FF;">' + t.cta + '</p>';

        document.getElementById('resultado-kite').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
})();

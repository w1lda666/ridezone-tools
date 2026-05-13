(function() {
    var target = document.getElementById('ridezone-kite-calculator');
    if (!target) return;

    var lang = 'es';
    var htmlLang = document.documentElement.lang;
    var bodyClass = document.body.className;
    if (htmlLang && htmlLang.indexOf('en') === 0) lang = 'en';
    else if (bodyClass.indexOf('lang-en') !== -1) lang = 'en';
    else if (window.prestashop && window.prestashop.language && window.prestashop.language.iso_code) lang = window.prestashop.language.iso_code;
    var urlPath = window.location.pathname;
    if (urlPath.indexOf('/en/') !== -1) lang = 'en';
    var isEN = (lang === 'en');

    var t = {
        title: isEN ? 'Ridezone Kite Size Calculator' : 'Calculadora de Talla de Cometa Ridezone',
        subtitle: isEN ? 'Realistic recommendations based on weight, wind and discipline using the North Kiteboarding range.' : 'Recomendaciones realistas basadas en peso, viento y disciplina usando la gama North Kiteboarding.',
        pesoLabel: isEN ? 'Rider weight (kg)' : 'Peso del rider (kg)',
        pesoPH: isEN ? 'E.g. 75' : 'Ej: 75',
        vientoLabel: isEN ? 'Wind (knots)' : 'Viento (nudos)',
        vientoPH: isEN ? 'E.g. 25' : 'Ej: 25',
        disciplinaLabel: isEN ? 'Discipline' : 'Disciplina',
        freeride: 'Freeride',
        bigair: 'Big Air',
        wave: isEN ? 'Wave / Strapless' : 'Wave / Strapless',
        freestyle: 'Freestyle',
        foil: 'Foil',
        calcular: isEN ? 'CALCULATE' : 'CALCULAR',
        alert: isEN ? 'Enter weight and wind' : 'Introduce peso y viento',
        lowWeightTitle: isEN ? '⚠️ Weight too low' : '⚠️ Peso demasiado bajo',
        lowWeightDesc: isEN ? 'Below 35 kg, conventional kitesurfing is not recommended due to the power of the equipment and safety conditions.' : 'Por debajo de 35 kg no se recomienda practicar kitesurf convencional debido a la potencia del material y las condiciones de seguridad.',
        lowWindTitle: isEN ? '⚠️ Very low wind' : '⚠️ Muy poco viento',
        lowWindDesc: isEN ? 'With less than 8 knots it is usually not viable to sail comfortably on a twin tip, even using very large kites.' : 'Con menos de 8 nudos normalmente no es viable navegar cómodamente en twin tip, incluso usando cometas muy grandes.',
        lowWindReco: isEN ? 'We recommend:' : 'Te recomendamos:',
        lowWind1: 'Hydrofoil',
        lowWind2: isEN ? 'Lightwind board' : 'Tabla lightwind',
        lowWind3: 'North Code Zero',
        lowWind4: 'Reach 17m o 19m',
        strongWindTitle: isEN ? '⚠️ Very strong wind' : '⚠️ Viento muy fuerte',
        strongWindDesc: isEN ? 'Conditions recommended for experienced riders.' : 'Condiciones recomendadas para riders experimentados.',
        extremeWindTitle: isEN ? '⚠️ Extreme conditions' : '⚠️ Condiciones extremas',
        extremeWindDesc: isEN ? 'Only advanced riders should sail in this wind.' : 'Solo riders avanzados deberían navegar con este viento.',
        stormWindTitle: isEN ? '⚠️ Storm Riding / Very dangerous' : '⚠️ Storm Riding / Muy peligroso',
        stormWindDesc: isEN ? 'Over 50 knots is considered extremely dangerous wind.' : 'Más de 50 nudos se considera viento extremadamente peligroso.',
        resultado: isEN ? 'Result' : 'Resultado',
        tamanoRec: isEN ? 'Recommended size:' : 'Tamaño recomendado:',
        modeloRec: isEN ? 'Recommended model:' : 'Modelo recomendado:',
        msgFreeride: isEN ? 'The North Reach is the most versatile and recommended option for most riders.' : 'La North Reach es la opción más polivalente y recomendable para la mayoría de riders.',
        msgBigair: isEN ? 'The Orbit is usually used one size smaller thanks to its control and stability.' : 'La Orbit suele utilizarse una talla más pequeña gracias a su control y estabilidad.',
        msgWave: isEN ? 'The Carve is usually used slightly smaller for its drift and turning speed.' : 'La Carve suele usarse algo más pequeña por su drift y velocidad de giro.',
        msgFreestyle: isEN ? 'The Pulse is designed for powered and unhooked freestyle riding.' : 'La Pulse está diseñada para navegar powered y freestyle unhooked.',
        msgFoil: isEN ? 'The Code Zero allows you to ride with much less wind than a conventional kite.' : 'La Code Zero permite navegar con muchísimo menos viento que una cometa convencional.',
        aviso: isEN ? 'These recommendations are approximate and may vary according to:' : 'Estas recomendaciones son orientativas y pueden variar según:',
        aviso1: isEN ? 'Rider level' : 'Nivel del rider',
        aviso2: isEN ? 'Type of board' : 'Tipo de tabla',
        aviso3: isEN ? 'Sea conditions' : 'Estado del mar',
        aviso4: isEN ? 'Gusts and wind stability' : 'Rachas y estabilidad del viento',
        aviso5: isEN ? 'Currents and tides' : 'Corrientes y mareas',
        aviso6: isEN ? 'Personal preferences' : 'Preferencias personales',
        cta: isEN ? '👉 At Ridezone we can help you choose the perfect North Kiteboarding quiver.' : '👉 En Ridezone podemos ayudarte a elegir el quiver North Kiteboarding perfecto.'
    };

    target.innerHTML =
        '<div style="max-width:900px;margin:auto;padding:35px;background:#111827;border-radius:18px;font-family:Arial,sans-serif;color:white;border:2px solid #00D4FF;box-sizing:border-box;">' +
        '<div style="text-align:center;margin-bottom:30px;">' +
        '<h2 style="margin:0;font-size:32px;color:#00D4FF;">' + t.title + '</h2>' +
        '<p style="color:#cbd5e1;margin-top:12px;">' + t.subtitle + '</p>' +
        '</div>' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.pesoLabel + '</strong></label>' +
        '<input type="number" id="peso-kite" placeholder="' + t.pesoPH + '" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.vientoLabel + '</strong></label>' +
        '<input type="number" id="viento-kite" placeholder="' + t.vientoPH + '" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.disciplinaLabel + '</strong></label>' +
        '<select id="disciplina-kite" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:30px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<option value="freeride">' + t.freeride + '</option>' +
        '<option value="bigair">' + t.bigair + '</option>' +
        '<option value="wave">' + t.wave + '</option>' +
        '<option value="freestyle">' + t.freestyle + '</option>' +
        '<option value="foil">' + t.foil + '</option>' +
        '</select>' +
        '<button id="calcular-kite-btn" style="width:100%;padding:18px;background:#00D4FF;color:#000;font-size:18px;font-weight:bold;border:none;border-radius:12px;cursor:pointer;">' + t.calcular + '</button>' +
        '<div id="resultado-kite" style="display:none;margin-top:35px;padding:30px;background:#1f2937;border-radius:16px;"></div>' +
        '</div>';

    document.getElementById('calcular-kite-btn').addEventListener('click', function() {
        var peso = parseInt(document.getElementById('peso-kite').value);
        var viento = parseInt(document.getElementById('viento-kite').value);
        var disciplina = document.getElementById('disciplina-kite').value;

        if (!peso || !viento) { alert(t.alert); return; }

        var advertencia = "", modelo = "", tamano = "", comentario = "";

        if (peso < 35) {
            document.getElementById('resultado-kite').style.display = "block";
            document.getElementById('resultado-kite').innerHTML =
                '<div style="background:#3b1d1d;padding:20px;border-radius:12px;border-left:5px solid red;">' +
                '<h3 style="margin-top:0;color:#ff8080;">' + t.lowWeightTitle + '</h3>' +
                '<p style="line-height:1.7;">' + t.lowWeightDesc + '</p></div>';
            return;
        }

        if (disciplina == "freeride") modelo = "North Reach";
        if (disciplina == "bigair") modelo = "North Orbit";
        if (disciplina == "wave") modelo = "North Carve";
        if (disciplina == "freestyle") modelo = "North Pulse";
        if (disciplina == "foil") modelo = "North Code Zero";

        if (viento < 8 && disciplina != "foil") {
            advertencia = '<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff4d4d;">' +
                '<h3 style="margin-top:0;color:#ff8080;">' + t.lowWindTitle + '</h3>' +
                '<p style="line-height:1.7;">' + t.lowWindDesc + '</p>' +
                '<p style="line-height:1.7;">' + t.lowWindReco + '</p>' +
                '<ul style="line-height:1.8;"><li>' + t.lowWind1 + '</li><li>' + t.lowWind2 + '</li><li>' + t.lowWind3 + '</li><li>' + t.lowWind4 + '</li></ul></div>';
        } else if (viento >= 35 && viento < 45) {
            advertencia = '<div style="background:#3b341d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ffd000;">' +
                '<h3 style="margin-top:0;color:#ffe066;">' + t.strongWindTitle + '</h3>' +
                '<p style="line-height:1.7;">' + t.strongWindDesc + '</p></div>';
        } else if (viento >= 45 && viento < 50) {
            advertencia = '<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff7b7b;">' +
                '<h3 style="margin-top:0;color:#ff9e9e;">' + t.extremeWindTitle + '</h3>' +
                '<p style="line-height:1.7;">' + t.extremeWindDesc + '</p></div>';
        } else if (viento >= 50) {
            advertencia = '<div style="background:#2a0000;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid red;">' +
                '<h3 style="margin-top:0;color:#ff6666;">' + t.stormWindTitle + '</h3>' +
                '<p style="line-height:1.7;">' + t.stormWindDesc + '</p></div>';
        }

        if (disciplina == "freeride") {
            if (peso <= 50) {
                if (viento < 8) tamano = "17m-19m";
                else if (viento < 12) tamano = "12m-15m";
                else if (viento < 18) tamano = "9m-10m";
                else if (viento < 25) tamano = "7m-8m";
                else if (viento < 35) tamano = "5m-6m";
                else tamano = "4m-5m";
            } else if (peso <= 65) {
                if (viento < 8) tamano = "17m-19m";
                else if (viento < 12) tamano = "13m-15m";
                else if (viento < 18) tamano = "10m-11m";
                else if (viento < 25) tamano = "8m-9m";
                else if (viento < 35) tamano = "6m-7m";
                else tamano = "5m";
            } else if (peso <= 80) {
                if (viento < 8) tamano = "19m";
                else if (viento < 12) tamano = "15m-17m";
                else if (viento < 18) tamano = "11m-13m";
                else if (viento < 25) tamano = "9m-10m";
                else if (viento < 35) tamano = "7m-8m";
                else tamano = "5m-6m";
            } else if (peso <= 95) {
                if (viento < 8) tamano = "19m";
                else if (viento < 12) tamano = "17m-19m";
                else if (viento < 18) tamano = "13m-15m";
                else if (viento < 25) tamano = "10m";
                else if (viento < 35) tamano = "8m";
                else tamano = "6m-7m";
            } else {
                if (viento < 8) tamano = "19m";
                else if (viento < 12) tamano = "19m";
                else if (viento < 18) tamano = "15m-17m";
                else if (viento < 25) tamano = "11m-12m";
                else if (viento < 35) tamano = "9m";
                else tamano = "7m";
            }
            comentario = t.msgFreeride;
        }

        if (disciplina == "bigair") {
            comentario = t.msgBigair;
            if (peso <= 65) {
                if (viento < 12) tamano = "12m-13m";
                else if (viento < 18) tamano = "9m-10m";
                else if (viento < 25) tamano = "8m";
                else if (viento < 35) tamano = "6m-7m";
                else tamano = "5m";
            } else if (peso <= 80) {
                if (viento < 12) tamano = "14m";
                else if (viento < 18) tamano = "10m-11m";
                else if (viento < 25) tamano = "9m";
                else if (viento < 35) tamano = "7m";
                else tamano = "5m-6m";
            } else {
                if (viento < 12) tamano = "14m";
                else if (viento < 18) tamano = "11m-12m";
                else if (viento < 25) tamano = "9m-10m";
                else if (viento < 35) tamano = "8m";
                else tamano = "6m-7m";
            }
        }

        if (disciplina == "wave") {
            comentario = t.msgWave;
            if (peso <= 65) {
                if (viento < 12) tamano = "10m-12m";
                else if (viento < 18) tamano = "8m-9m";
                else if (viento < 25) tamano = "7m";
                else if (viento < 35) tamano = "5m-6m";
                else tamano = "4m-5m";
            } else {
                if (viento < 12) tamano = "11m-13m";
                else if (viento < 18) tamano = "9m";
                else if (viento < 25) tamano = "7m-8m";
                else if (viento < 35) tamano = "6m";
                else tamano = "5m";
            }
        }

        if (disciplina == "freestyle") {
            comentario = t.msgFreestyle;
            if (peso <= 65) {
                if (viento < 12) tamano = "12m";
                else if (viento < 18) tamano = "10m";
                else if (viento < 25) tamano = "8m-9m";
                else if (viento < 35) tamano = "7m";
                else tamano = "5m-6m";
            } else {
                if (viento < 12) tamano = "13m";
                else if (viento < 18) tamano = "10m-11m";
                else if (viento < 25) tamano = "9m";
                else if (viento < 35) tamano = "7m-8m";
                else tamano = "6m";
            }
        }

        if (disciplina == "foil") {
            comentario = t.msgFoil;
            if (viento < 6) tamano = "11m-13m";
            else if (viento < 8) tamano = "10m-11m";
            else if (viento < 12) tamano = "8m-9m";
            else if (viento < 18) tamano = "6m-8m";
            else if (viento < 25) tamano = "5m-6m";
            else tamano = "4m-5m";
        }

        document.getElementById('resultado-kite').style.display = "block";
        document.getElementById('resultado-kite').innerHTML =
            advertencia +
            '<h2 style="margin-top:0;color:#00D4FF;">' + t.resultado + '</h2>' +
            '<p style="font-size:20px;line-height:1.8;"><strong>' + t.tamanoRec + '</strong> ' + tamano + '</p>' +
            '<p style="font-size:20px;line-height:1.8;"><strong>' + t.modeloRec + '</strong> ' + modelo + '</p>' +
            '<p style="line-height:1.8;color:#d1d5db;margin-top:20px;">' + comentario + '</p>' +
            '<hr style="margin:30px 0;border-color:#374151;">' +
            '<p style="color:#9ca3af;line-height:1.8;font-size:14px;">' + t.aviso + '<br><br>' +
            '• ' + t.aviso1 + '<br>• ' + t.aviso2 + '<br>• ' + t.aviso3 + '<br>• ' + t.aviso4 + '<br>• ' + t.aviso5 + '<br>• ' + t.aviso6 + '</p>' +
            '<p style="margin-top:25px;font-weight:bold;color:#00D4FF;">' + t.cta + '</p>';

        document.getElementById('resultado-kite').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
})();

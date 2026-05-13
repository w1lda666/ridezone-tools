(function() {
    var target = document.getElementById('ridezone-kite-calculator');
    if (!target) return;

    // Detección de idioma
    var lang = 'es';
    var htmlLang = document.documentElement.lang;
    var bodyClass = document.body.className;
    if (htmlLang && htmlLang.indexOf('en') === 0) lang = 'en';
    else if (bodyClass.indexOf('lang-en') !== -1) lang = 'en';
    else if (window.prestashop && window.prestashop.language && window.prestashop.language.iso_code) lang = window.prestashop.language.iso_code;
    var urlPath = window.location.pathname;
    if (urlPath.indexOf('/en/') !== -1) lang = 'en';
    var isEN = (lang === 'en');

    // Textos traducidos
    var t = {
        title: isEN ? 'Ridezone Kite Size Calculator' : 'Calculadora de Talla de Cometa Ridezone',
        subtitle: isEN ? 'Realistic recommendations based on weight, wind and discipline using the North Kiteboarding range.' : 'Recomendaciones realistas basadas en peso, viento y disciplina usando la gama North Kiteboarding.',
        pesoLabel: isEN ? 'Rider weight (kg)' : 'Peso del rider (kg)',
        pesoPH: isEN ? 'E.g. 75' : 'Ej: 75',
        vientoLabel: isEN ? 'Wind (knots)' : 'Viento (nudos)',
        vientoPH: isEN ? 'E.g. 28' : 'Ej: 28',
        disciplinaLabel: isEN ? 'Discipline' : 'Disciplina',
        freeride: 'Freeride',
        bigair: 'Big Air',
        wave: isEN ? 'Wave / Strapless' : 'Wave / Strapless',
        freestyle: 'Freestyle',
        foil: 'Foil',
        calcular: isEN ? 'CALCULATE' : 'CALCULAR',
        alert: isEN ? 'Enter weight and wind' : 'Introduce peso y viento',
        lowWindTitle: isEN ? '⚠️ Very low wind' : '⚠️ Muy poco viento',
        lowWindDesc: isEN ? 'With less than 8 knots it is usually not viable to sail comfortably on a twin tip, even using very large kites.' : 'Con menos de 8 nudos normalmente no es viable navegar cómodamente en twin tip, incluso usando cometas muy grandes.',
        lowWindReco: isEN ? 'For these conditions we recommend:' : 'Para estas condiciones recomendamos:',
        lowWind1: 'Hydrofoil',
        lowWind2: isEN ? 'Lightwind board' : 'Tabla lightwind',
        lowWind3: 'North Code Zero',
        lowWind4: 'Reach 17m o 19m',
        strongWindTitle: isEN ? '⚠️ Very strong wind' : '⚠️ Viento muy fuerte',
        strongWindDesc: isEN ? 'Conditions recommended only for experienced riders with appropriate gear.' : 'Condiciones recomendadas únicamente para riders experimentados y material adecuado.',
        extremeWindTitle: isEN ? '⚠️ Extreme conditions' : '⚠️ Condiciones extremas',
        extremeWindDesc: isEN ? 'Only advanced riders should sail in this wind.' : 'Solo riders avanzados deberían navegar con este viento.',
        stormWindTitle: isEN ? '⚠️ Storm Riding / Very dangerous' : '⚠️ Storm Riding / Muy peligroso',
        stormWindDesc1: isEN ? 'Over 50 knots is considered extremely dangerous wind.' : 'Más de 50 nudos se considera viento extremadamente peligroso.',
        stormWindDesc2: isEN ? 'Sail only under your own responsibility and with advanced experience.' : 'Navega únicamente bajo tu responsabilidad y con experiencia avanzada.',
        resultado: isEN ? 'Result' : 'Resultado',
        tamanoRec: isEN ? 'Recommended size:' : 'Tamaño recomendado:',
        modeloRec: isEN ? 'Recommended model:' : 'Modelo recomendado:',
        msgFreeride: isEN ? 'The North Reach is the most versatile and recommended option for most riders.' : 'La North Reach es la opción más polivalente y recomendable para la mayoría de riders.',
        msgBigair: isEN ? 'The North Orbit offers maximum control, hangtime and stability in strong wind.' : 'La North Orbit ofrece máximo control, hangtime y estabilidad en viento fuerte.',
        msgWave: isEN ? 'The North Carve stands out for its drift and turning speed in waves.' : 'La North Carve destaca por su drift y velocidad de giro en olas.',
        msgFreestyle: isEN ? 'The North Pulse is designed for riders looking for explosive pop and powered freestyle.' : 'La North Pulse está diseñada para riders que buscan pop explosivo y freestyle powered.',
        msgFoil: isEN ? 'The North Code Zero maximizes light wind and foil performance.' : 'La North Code Zero maximiza el rendimiento en viento flojo y foil.',
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
        '<button id="calcular-kite-btn" style="width:100%;padding:18px;background:#00D4FF;color:#000;font-size:18px;font-weight:bold;border:none;border-radius:12px;cursor:pointer;transition:0.3s;">' + t.calcular + '</button>' +
        '<div id="resultado-kite" style="display:none;margin-top:35px;padding:30px;background:#1f2937;border-radius:16px;"></div>' +
        '</div>';

    document.getElementById('calcular-kite-btn').addEventListener('click', function() {
        var peso = parseInt(document.getElementById('peso-kite').value);
        var viento = parseInt(document.getElementById('viento-kite').value);
        var disciplina = document.getElementById('disciplina-kite').value;

        if (!peso || !viento) { alert(t.alert); return; }

        var advertencia = "", modelo = "", tamano = "", comentario = "";

        if (disciplina == "freeride") modelo = "North Reach";
        if (disciplina == "bigair") modelo = "North Orbit";
        if (disciplina == "wave") modelo = "North Carve";
        if (disciplina == "freestyle") modelo = "North Pulse";
        if (disciplina == "foil") modelo = "North Code Zero";

        if (viento <= 8 && disciplina != "foil") {
            advertencia = '<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff4d4d;">' +
                '<h3 style="margin-top:0;color:#ff8080;">' + t.lowWindTitle + '</h3>' +
                '<p style="line-height:1.6;">' + t.lowWindDesc + '</p>' +
                '<p style="line-height:1.6;">' + t.lowWindReco + '</p>' +
                '<ul style="line-height:1.8;">' +
                '<li>' + t.lowWind1 + '</li><li>' + t.lowWind2 + '</li><li>' + t.lowWind3 + '</li><li>' + t.lowWind4 + '</li>' +
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

        var ajuste = 0;
        if (disciplina == "bigair") ajuste = -1;
        if (disciplina == "wave") ajuste = -1;
        if (disciplina == "freestyle") ajuste = -0.5;
        if (disciplina == "foil") ajuste = -3;

        function calcularBase(peso, viento) {
            if (peso <= 50) {
                if (viento <= 8) return 19;
                if (viento <= 12) return 13;
                if (viento <= 16) return 11;
                if (viento <= 20) return 9;
                if (viento <= 25) return 8;
                if (viento <= 30) return 7;
                if (viento <= 35) return 6;
                if (viento <= 40) return 5;
                return 4;
            }
            if (peso <= 65) {
                if (viento <= 8) return 19;
                if (viento <= 12) return 15;
                if (viento <= 16) return 12;
                if (viento <= 20) return 10;
                if (viento <= 25) return 9;
                if (viento <= 30) return 8;
                if (viento <= 35) return 7;
                if (viento <= 40) return 6;
                return 5;
            }
            if (peso <= 80) {
                if (viento <= 8) return 19;
                if (viento <= 12) return 17;
                if (viento <= 16) return 13;
                if (viento <= 20) return 11;
                if (viento <= 25) return 9;
                if (viento <= 30) return 8;
                if (viento <= 35) return 7;
                if (viento <= 40) return 6;
                return 5;
            }
            if (peso <= 95) {
                if (viento <= 8) return 19;
                if (viento <= 12) return 19;
                if (viento <= 16) return 15;
                if (viento <= 20) return 12;
                if (viento <= 25) return 10;
                if (viento <= 30) return 9;
                if (viento <= 35) return 8;
                if (viento <= 40) return 7;
                return 6;
            }
            if (viento <= 8) return 19;
            if (viento <= 12) return 19;
            if (viento <= 16) return 17;
            if (viento <= 20) return 14;
            if (viento <= 25) return 12;
            if (viento <= 30) return 10;
            if (viento <= 35) return 9;
            if (viento <= 40) return 8;
            return 7;
        }

        var base = calcularBase(peso, viento);
        var finalSize = base + ajuste;

        if (finalSize < 4) finalSize = 4;
        if (finalSize > 19) finalSize = 19;

        if (finalSize >= 17) tamano = "17m - 19m";
        else if (finalSize >= 14) tamano = "14m - 17m";
        else if (finalSize >= 12) tamano = "12m - 14m";
        else if (finalSize >= 10) tamano = "10m - 12m";
        else if (finalSize >= 8) tamano = "8m - 10m";
        else if (finalSize >= 6) tamano = "6m - 8m";
        else tamano = "4m - 6m";

        if (disciplina == "freeride") comentario = t.msgFreeride;
        if (disciplina == "bigair") comentario = t.msgBigair;
        if (disciplina == "wave") comentario = t.msgWave;
        if (disciplina == "freestyle") comentario = t.msgFreestyle;
        if (disciplina == "foil") comentario = t.msgFoil;

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

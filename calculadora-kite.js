(function() {
    var target = document.getElementById('ridezone-kite-calculator');
    if (!target) return;

    var lang = document.documentElement.lang || 'es';
    var isEN = lang.indexOf('en') === 0;

    var t = {
        title: isEN ? 'Ridezone Kite Size Calculator' : 'Calculadora de Talla de Cometa Ridezone',
        subtitle: isEN ? 'Realistic recommendations based on weight, wind and discipline.' : 'Recomendaciones realistas basadas en peso, viento y disciplina.',
        peso: isEN ? 'Rider weight (kg)' : 'Peso del rider (kg)',
        viento: isEN ? 'Wind (knots)' : 'Viento (nudos)',
        disciplina: isEN ? 'Discipline' : 'Disciplina',
        freeride: '🏄 Freeride',
        bigair: '🚀 Big Air',
        wave: isEN ? '🌊 Wave / Strapless' : '🌊 Olas / Strapless',
        freestyle: '🎯 Freestyle',
        foil: '🪽 Foil',
        calcular: isEN ? 'CALCULATE' : 'CALCULAR',
        pesoPH: isEN ? 'E.g. 75' : 'Ej: 75',
        vientoPH: isEN ? 'E.g. 28' : 'Ej: 28',
        error: isEN ? '⚠️ Enter valid values' : '⚠️ Introduce valores válidos',
        alert: isEN ? 'Enter weight and wind' : 'Introduce peso y viento',
        resultado: isEN ? '📊 Result' : '📊 Resultado',
        tamanoRec: isEN ? 'Recommended size:' : 'Tamaño recomendado:',
        modeloRec: isEN ? 'Recommended model:' : 'Modelo recomendado:',

        lightRider: isEN ? '⚠️ Rider too light for these conditions' : '⚠️ Rider demasiado ligero para estas condiciones',
        lightRiderDesc: isEN ? 'Riders under 40 kg should not sail in winds above 20 knots.' : 'Riders de menos de 40 kg no deberían navegar con más de 20 nudos.',
        lowWind: isEN ? '⚠️ Very low wind' : '⚠️ Muy poco viento',
        lowWindDesc: isEN ? 'Not viable on twin tip. We recommend:' : 'No viable en twin tip. Recomendamos:',
        lowWind1: 'Hydrofoil',
        lowWind2: isEN ? 'Lightwind board' : 'Tabla lightwind',
        lowWind3: 'North Code Zero',
        lowWind4: 'Reach 17m o 19m',
        strongWind: isEN ? '⚠️ Very strong wind' : '⚠️ Viento muy fuerte',
        strongWindDesc: isEN ? 'Only for experienced riders.' : 'Solo para riders experimentados.',
        extremeWind: isEN ? '⚠️ Extreme conditions' : '⚠️ Condiciones extremas',
        extremeWindDesc: isEN ? 'Only advanced riders.' : 'Solo riders avanzados.',
        stormWind: isEN ? '⚠️ Storm Riding' : '⚠️ Storm Riding / Muy peligroso',
        stormWindDesc: isEN ? 'Over 50 knots is extremely dangerous.' : 'Más de 50 nudos es extremadamente peligroso.',

        msgFreeride: isEN ? 'The North Reach is the most versatile kite.' : 'La North Reach es la cometa más polivalente.',
        msgBigair: isEN ? 'The North Orbit offers maximum control and hangtime.' : 'La North Orbit ofrece máximo control y hangtime.',
        msgWave: isEN ? 'The North Carve excels in waves.' : 'La North Carve destaca en olas.',
        msgFreestyle: isEN ? 'The North Pulse is perfect for freestyle.' : 'La North Pulse es perfecta para freestyle.',
        msgFoil: isEN ? 'The North Code Zero maximizes foil performance.' : 'La North Code Zero maximiza el rendimiento en foil.',

        aviso: isEN ? '📝 These recommendations are approximate:' : '📝 Estas recomendaciones son orientativas:',
        nivel: isEN ? 'Rider level' : 'Nivel del rider',
        tabla: isEN ? 'Type of board' : 'Tipo de tabla',
        rachas: isEN ? 'Gusts and sea conditions' : 'Rachas y estado del mar',
        preferencias: isEN ? 'Personal preferences' : 'Preferencias personales',
        cta: isEN ? '👉 At Ridezone we can help you choose the perfect North Kiteboarding quiver.' : '👉 En Ridezone podemos ayudarte a elegir el quiver North Kiteboarding perfecto.'
    };

    target.innerHTML = '<div style="max-width:900px;margin:auto;padding:35px;background:#111827;border-radius:18px;font-family:Arial,sans-serif;color:white;border:2px solid #00D4FF;box-sizing:border-box;">' +
        '<div style="text-align:center;margin-bottom:30px;">' +
        '<h2 style="margin:0;font-size:32px;color:#00D4FF;">' + t.title + '</h2>' +
        '<p style="color:#cbd5e1;margin-top:12px;">' + t.subtitle + '</p>' +
        '</div>' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.peso + '</strong></label>' +
        '<input type="number" id="peso-kite" placeholder="' + t.pesoPH + '" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.viento + '</strong></label>' +
        '<input type="number" id="viento-kite" placeholder="' + t.vientoPH + '" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.disciplina + '</strong></label>' +
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

        if (isNaN(peso) || isNaN(viento) || peso <= 0 || viento <= 0) {
            document.getElementById('resultado-kite').style.display = "block";
            document.getElementById('resultado-kite').innerHTML = '<p style="color:red;text-align:center;">' + t.error + '</p>';
            return;
        }

        var advertencia = "", modelo = "", tamano = "", comentario = "";

        if (disciplina == "freeride") modelo = "North Reach";
        if (disciplina == "bigair") modelo = "North Orbit";
        if (disciplina == "wave") modelo = "North Carve";
        if (disciplina == "freestyle") modelo = "North Pulse";
        if (disciplina == "foil") modelo = "North Code Zero";

        if (peso < 40 && viento > 20) {
            advertencia = '<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff4d4d;"><h3 style="margin-top:0;color:#ff8080;">' + t.lightRider + '</h3><p>' + t.lightRiderDesc + '</p></div>';
        } else if (viento <= 8 && disciplina != "foil") {
            advertencia = '<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff4d4d;"><h3 style="margin-top:0;color:#ff8080;">' + t.lowWind + '</h3><p>' + t.lowWindDesc + '</p><ul><li>' + t.lowWind1 + '</li><li>' + t.lowWind2 + '</li><li>' + t.lowWind3 + '</li><li>' + t.lowWind4 + '</li></ul></div>';
        } else if (viento > 35 && viento <= 45) {
            advertencia = '<div style="background:#3b341d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ffd000;"><h3 style="margin-top:0;color:#ffe066;">' + t.strongWind + '</h3><p>' + t.strongWindDesc + '</p></div>';
        } else if (viento > 45 && viento <= 50) {
            advertencia = '<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff7b7b;"><h3 style="margin-top:0;color:#ff9e9e;">' + t.extremeWind + '</h3><p>' + t.extremeWindDesc + '</p></div>';
        } else if (viento > 50) {
            advertencia = '<div style="background:#2a0000;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid red;"><h3 style="margin-top:0;color:#ff6666;">' + t.stormWind + '</h3><p>' + t.stormWindDesc + '</p></div>';
        }

        var ajuste = 0;
        if (disciplina == "bigair") ajuste = -1;
        if (disciplina == "wave") ajuste = -1;
        if (disciplina == "freestyle") ajuste = -0.5;
        if (disciplina == "foil") ajuste = -3;

        function calcularBase(p, v) {
            if (p <= 50) {
                if (p < 40) {
                    if (v <= 10) return 12; if (v <= 14) return 9; if (v <= 18) return 7;
                    if (v <= 22) return 5; if (v <= 28) return 4; return 3;
                }
                if (v <= 8) return 17; if (v <= 12) return 12; if (v <= 16) return 10;
                if (v <= 20) return 8; if (v <= 25) return 6; if (v <= 30) return 5;
                if (v <= 35) return 4; return 3;
            }
            if (p <= 65) {
                if (v <= 8) return 19; if (v <= 12) return 15; if (v <= 16) return 12;
                if (v <= 20) return 10; if (v <= 25) return 9; if (v <= 30) return 8;
                if (v <= 35) return 7; if (v <= 40) return 6; return 5;
            }
            if (p <= 80) {
                if (v <= 8) return 19; if (v <= 12) return 17; if (v <= 16) return 13;
                if (v <= 20) return 11; if (v <= 25) return 9; if (v <= 30) return 8;
                if (v <= 35) return 7; if (v <= 40) return 6; return 5;
            }
            if (p <= 95) {
                if (v <= 8) return 19; if (v <= 12) return 19; if (v <= 16) return 15;
                if (v <= 20) return 12; if (v <= 25) return 10; if (v <= 30) return 9;
                if (v <= 35) return 8; if (v <= 40) return 7; return 6;
            }
            if (v <= 8) return 19; if (v <= 12) return 19; if (v <= 16) return 17;
            if (v <= 20) return 14; if (v <= 25) return 12; if (v <= 30) return 10;
            if (v <= 35) return 9; if (v <= 40) return 8; return 7;
        }

        var finalSize = calcularBase(peso, viento) + ajuste;
        if (finalSize < 3) finalSize = 3;
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
            '<h3 style="margin-top:0;font-size:20px;color:#00D4FF;">' + t.resultado + '</h3>' +
            '<p style="font-size:18px;"><strong>' + t.tamanoRec + '</strong> <span style="color:#e74c3c;font-size:22px;">' + tamano + '</span></p>' +
            '<p style="font-size:18px;"><strong>' + t.modeloRec + '</strong> <span style="color:#2ecc71;font-size:22px;">' + modelo + '</span></p>' +
            '<hr style="border-top:1px solid #374151;margin:20px 0;">' +
            '<p style="font-size:14px;color:#cbd5e1;">' + t.aviso + '</p>' +
            '<ul style="font-size:14px;color:#cbd5e1;padding-left:20px;">' +
            '<li>' + t.nivel + '</li><li>' + t.tabla + '</li><li>' + t.rachas + '</li><li>' + t.preferencias + '</li>' +
            '</ul>' +
            '<p style="margin-top:20px;text-align:center;font-size:16px;color:#00D4FF;">' + t.cta + '</p>';

        document.getElementById('resultado-kite').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
})();

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
    var textos = {
        title: isEN ? '🧮 Calculate your ideal kite size' : '🧮 Calcula tu tamaño de kite ideal',
        subtitle: isEN ? 'Recommendations based on North Kiteboarding official wind ranges, adjusted for rider weight.' : 'Recomendaciones basadas en los rangos de viento oficiales de North Kiteboarding, ajustadas al peso del rider.',
        pesoLabel: isEN ? 'Rider weight (kg)' : 'Peso del rider (kg)',
        pesoOptions: [
            { val: '45', text: '40-50 kg' },
            { val: '60', text: '50-65 kg' },
            { val: '75', text: '65-80 kg', sel: true },
            { val: '90', text: '80-95 kg' },
            { val: '100', text: '95+ kg' }
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
        
        // Avisos de viento
        avisoInsuficiente: isEN ? '⚠️ Wind insufficient for most riders.' : '⚠️ Viento insuficiente para la mayoría.',
        avisoLightwind: isEN ? '💡 Lightwind conditions. A larger board and lightwind kite are recommended.' : '💡 Condiciones de viento flojo. Se recomienda tabla grande y cometa de lightwind.',
        avisoIdeal: isEN ? '✅ Ideal wind range.' : '✅ Rango de viento ideal.',
        avisoFuerte: isEN ? '⚠️ Strong wind. Recommended for experienced riders with appropriate gear.' : '⚠️ Viento fuerte. Recomendado para riders expertos con material adecuado.',
        avisoMuyFuerte: isEN ? '⚠️ Very strong wind. Only advanced riders should sail in these conditions.' : '⚠️ Viento muy fuerte. Solo riders avanzados deberían navegar.',
        avisoExtremo: isEN ? '🚫 Extreme conditions. Sail only under your own responsibility.' : '🚫 Condiciones extremas. Navega solo bajo tu responsabilidad.',
        
        // Mensajes de modelos
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

    // --- CONSTRUCCIÓN DEL HTML ---
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

    // --- LÓGICA DE CÁLCULO ---
    document.getElementById('calcular-kite-btn').addEventListener('click', function() {
        var peso = parseInt(document.getElementById('peso-kite').value);
        var viento = parseInt(document.getElementById('viento-kite').value);
        var disciplina = document.getElementById('disciplina-kite').value;

        if (!viento) {
            alert(textos.alertViento);
            return;
        }

        // --- Rangos de viento oficiales para un rider de 75kg (peso de referencia) ---
        // Formato: [tamaño, viento_min, viento_max]
        var tablasReferencia = {
            freeride: [[4,22,39],[5,21,37],[6,20,34],[7,17,34],[8,16,30],[9,13,27],[10,12,26],[11,10,25],[12,9,23],[13,8,20],[15,8,20],[17,8,18]], // Reach
            bigair: [[6,21,99],[7,19,36],[8,17,35],[9,15,32],[10,13,29],[11,12,27],[12,10,25],[14,8,22]], // Orbit
            wave: [[4,24,38],[5,22,36],[6,20,34],[7,18,32],[8,16,30],[9,14,28],[10,12,26],[11,11,24],[12,10,22],[13,9,20]], // Carve
            freestyle: [[7,19,35],[9,16,30],[11,13,26],[13,11,23]], // Pulse
            foil: [[4,17,35],[5,16,28],[6,14,25],[7,12,22],[8,10,21],[9,8,19],[10,8,18],[11,7,17],[14,7,16]] // Code Zero
        };

        var tablaDisciplina = tablasReferencia[disciplina];
        var factorAjustePeso = peso / 75; // Un rider más pesado necesita más tamaño para el mismo viento

        var tamanoRecomendado = null;
        var mensaje = "";

        // 1. Buscar el tamaño óptimo
        for (var i = 0; i < tablaDisciplina.length; i++) {
            var tamano = tablaDisciplina[i][0];
            var vientoMin = tablaDisciplina[i][1];
            var vientoMax = tablaDisciplina[i][2];

            // Ajustar el viento mínimo según el peso del rider
            var vientoMinAjustado = vientoMin * factorAjustePeso;

            if (viento >= vientoMinAjustado && viento <= vientoMax) {
                tamanoRecomendado = tamano + "m";
                break;
            }
        }

        // 2. Casos extremos fuera de rango
        if (!tamanoRecomendado) {
            var primerTamano = tablaDisciplina[0];
            var ultimoTamano = tablaDisciplina[tablaDisciplina.length - 1];
            var vientoMinMasPequeno = primerTamano[1] * factorAjustePeso;
            var vientoMaxMasGrande = ultimoTamano[2];

            if (viento < vientoMinMasPequeno) {
                tamanoRecomendado = primerTamano[0] + "m";
                mensaje = isEN ? '⚠️ Very low wind. Even the smallest kite will have difficulty flying.' : '⚠️ Viento muy bajo. Incluso la cometa más pequeña tendrá dificultades para volar.';
            } else if (viento > vientoMaxMasGrande) {
                tamanoRecomendado = ultimoTamano[0] + "m";
                mensaje = isEN ? '⚠️ Extreme wind. The smallest kite may still be overpowered.' : '⚠️ Viento extremo. La cometa más pequeña podría estar aún sobrepotenciada.';
            }
        }

        // 3. Determinar aviso según la tabla de interpretación del viento
        var avisoViento = "";
        var colorFondo = "";
        var colorTexto = "";
        
        if (viento < 8) {
            avisoViento = textos.avisoInsuficiente;
            colorFondo = "#ffdddd"; colorTexto = "#900000";
        } else if (viento <= 12) {
            avisoViento = textos.avisoLightwind;
            colorFondo = "#fff4d6"; colorTexto = "#8a5a00";
        } else if (viento <= 25) {
            avisoViento = textos.avisoIdeal;
            colorFondo = "#e6ffe6"; colorTexto = "#006600";
        } else if (viento <= 35) {
            avisoViento = textos.avisoFuerte;
            colorFondo = "#fff4d6"; colorTexto = "#8a5a00";
        } else if (viento <= 45) {
            avisoViento = textos.avisoMuyFuerte;
            colorFondo = "#ffe7e7"; colorTexto = "#a00000";
        } else {
            avisoViento = textos.avisoExtremo;
            colorFondo = "#ffdddd"; colorTexto = "#900000";
        }

        var modelo = "";
        if (disciplina == "freeride") { modelo = "North Reach"; mensaje = mensaje || textos.msgFreeride; }
        if (disciplina == "bigair") { modelo = "North Orbit"; mensaje = mensaje || textos.msgBigair; }
        if (disciplina == "wave") { modelo = "North Carve"; mensaje = mensaje || textos.msgWave; }
        if (disciplina == "freestyle") { modelo = "North Pulse"; mensaje = mensaje || textos.msgFreestyle; }
        if (disciplina == "foil") { modelo = "North Code Zero"; mensaje = mensaje || textos.msgFoil; }

        // --- MOSTRAR RESULTADO ---
        document.getElementById('resultado-kite').style.display = "block";
        document.getElementById('resultado-kite').innerHTML = 
            '<div style="padding:15px;background:' + colorFondo + ';border-radius:10px;color:' + colorTexto + ';margin-bottom:20px;text-align:center;font-weight:bold;">' +
            avisoViento + '</div>' +
            '<h3 style="margin-top:0;">' + textos.resultado + '</h3>' +
            '<p style="font-size:18px;"><strong>' + textos.tamanoRec + '</strong> <span style="color:#e74c3c;font-size:22px;">' + tamanoRecomendado + '</span></p>' +
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

(function() {
    var target = document.getElementById('ridezone-kite-calculator');
    if (!target) return;

    var lang = document.documentElement.lang || 'es';
    var isEN = lang.indexOf('en') === 0;
    var isES = lang.indexOf('es') === 0;

    var textos = {
        title: isEN ? '🧮 Calculate your ideal kite size' : '🧮 Calcula tu tamaño de kite ideal',
        peso: isEN ? 'Rider weight (kg)' : 'Peso del rider (kg)',
        viento: isEN ? 'Wind (knots)' : 'Viento (nudos)',
        disciplina: isEN ? 'Discipline' : 'Disciplina',
        freeride: '🏄 Freeride',
        bigair: '🚀 Big Air',
        wave: isEN ? '🌊 Wave / Strapless' : '🌊 Olas / Strapless',
        foil: '🪽 Foil',
        calcular: isEN ? 'CALCULATE' : 'CALCULAR',
        pesoPlaceholder: isEN ? 'E.g. 75' : 'Ej: 75',
        vientoPlaceholder: isEN ? 'E.g. 22' : 'Ej: 22',
        error: isEN ? '⚠️ Enter valid values' : '⚠️ Introduce valores válidos',
        resultado: isEN ? '📊 Result' : '📊 Resultado',
        tamanoRec: isEN ? 'Recommended size:' : 'Tamaño recomendado:',
        modeloIdeal: isEN ? 'Ideal model:' : 'Modelo ideal:',
        aviso: isEN ? '📝 This recommendation is approximate and may vary according to:' : '📝 Esta recomendación es orientativa y puede variar según:',
        nivel: isEN ? 'Rider level' : 'Nivel del rider',
        tabla: isEN ? 'Type of board' : 'Tipo de tabla',
        rachas: isEN ? 'Gusts and sea conditions' : 'Rachas y estado del mar',
        preferencias: isEN ? 'Personal preferences' : 'Preferencias personales',
        cta: isEN ? '👉 At <strong>Ridezone</strong> we can help you choose the perfect <strong>North Kiteboarding</strong> quiver.' : '👉 En <strong>Ridezone</strong> podemos ayudarte a elegir el quiver <strong>North Kiteboarding</strong> perfecto.'
    };

    target.innerHTML = '<div style="max-width:700px;margin:auto;padding:30px;background:#f5f5f5;border-radius:12px;font-family:Arial,sans-serif;box-sizing:border-box;">' +
        '<h2 style="text-align:center;margin-bottom:20px;font-size:24px;">' + textos.title + '</h2>' +
        '<label style="font-weight:bold;display:block;margin-bottom:5px;">' + textos.peso + '</label>' +
        '<input type="number" id="peso-kite" placeholder="' + textos.pesoPlaceholder + '" style="width:100%;padding:12px;margin-bottom:20px;border-radius:8px;border:1px solid #ccc;box-sizing:border-box;font-size:16px;">' +
        '<label style="font-weight:bold;display:block;margin-bottom:5px;">' + textos.viento + '</label>' +
        '<input type="number" id="viento-kite" placeholder="' + textos.vientoPlaceholder + '" style="width:100%;padding:12px;margin-bottom:20px;border-radius:8px;border:1px solid #ccc;box-sizing:border-box;font-size:16px;">' +
        '<label style="font-weight:bold;display:block;margin-bottom:5px;">' + textos.disciplina + '</label>' +
        '<select id="disciplina-kite" style="width:100%;padding:12px;margin-bottom:25px;border-radius:8px;border:1px solid #ccc;box-sizing:border-box;font-size:16px;background:#fff;">' +
        '<option value="freeride">' + textos.freeride + '</option>' +
        '<option value="bigair">' + textos.bigair + '</option>' +
        '<option value="wave">' + textos.wave + '</option>' +
        '<option value="foil">' + textos.foil + '</option>' +
        '</select>' +
        '<button id="calcular-kite-btn" style="width:100%;padding:15px;background:#000;color:#fff;border:none;border-radius:8px;font-size:18px;cursor:pointer;font-weight:bold;">' + textos.calcular + '</button>' +
        '<div id="resultado-kite" style="margin-top:30px;padding:20px;background:#fff;border-radius:10px;display:none;box-shadow:0 2px 10px rgba(0,0,0,0.1);"></div>' +
        '</div>';

    document.getElementById('calcular-kite-btn').addEventListener('click', function() {
        var peso = parseInt(document.getElementById('peso-kite').value);
        var viento = parseInt(document.getElementById('viento-kite').value);
        var disciplina = document.getElementById('disciplina-kite').value;

        if (isNaN(peso) || isNaN(viento) || peso <= 0 || viento <= 0) {
            document.getElementById('resultado-kite').style.display = "block";
            document.getElementById('resultado-kite').innerHTML = '<p style="color:red;text-align:center;">' + textos.error + '</p>';
            return;
        }

        var tamano = "";

        if (peso <= 50) {
            if (viento < 18) tamano = "9m - 10m";
            else if (viento < 25) tamano = "7m - 8m";
            else tamano = "5m - 6m";
        } else if (peso <= 65) {
            if (viento < 18) tamano = "10m - 11m";
            else if (viento < 25) tamano = "8m - 9m";
            else tamano = "6m - 7m";
        } else if (peso <= 80) {
            if (viento < 18) tamano = "11m - 12m";
            else if (viento < 25) tamano = "9m";
            else tamano = "7m";
        } else if (peso <= 95) {
            if (viento < 18) tamano = "13m - 14m";
            else if (viento < 25) tamano = "10m";
            else tamano = "8m";
        } else {
            if (viento < 18) tamano = "15m";
            else if (viento < 25) tamano = "11m - 12m";
            else tamano = "9m";
        }

        var modelos = {
            'freeride': 'North Reach',
            'bigair': 'North Orbit',
            'wave': 'North Carve',
            'foil': 'North Code Zero'
        };

        var iconos = {
            'freeride': '🏄',
            'bigair': '🚀',
            'wave': '🌊',
            'foil': '🪽'
        };

        document.getElementById('resultado-kite').style.display = "block";
        document.getElementById('resultado-kite').innerHTML =
            '<h3 style="margin-top:0;font-size:20px;">' + textos.resultado + '</h3>' +
            '<p style="font-size:18px;"><strong>' + textos.tamanoRec + '</strong> <span style="color:#e74c3c;font-size:22px;">' + tamano + '</span></p>' +
            '<p style="font-size:18px;"><strong>' + textos.modeloIdeal + '</strong> <span style="color:#2ecc71;font-size:22px;">' + modelos[disciplina] + ' ' + iconos[disciplina] + '</span></p>' +
            '<hr style="border-top:1px solid #eee;margin:20px 0;">' +
            '<p style="font-size:14px;color:#666;">' + textos.aviso + '</p>' +
            '<ul style="font-size:14px;color:#666;padding-left:20px;">' +
            '<li>' + textos.nivel + '</li><li>' + textos.tabla + '</li><li>' + textos.rachas + '</li><li>' + textos.preferencias + '</li>' +
            '</ul>' +
            '<p style="margin-top:20px;text-align:center;font-size:16px;">' + textos.cta + '</p>';

        document.getElementById('resultado-kite').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
})();

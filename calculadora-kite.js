(function() {
    var target = document.getElementById('ridezone-kite-calculator');
    if (!target) return;

    target.innerHTML = '<div style="max-width:700px;margin:auto;padding:30px;background:#f5f5f5;border-radius:12px;font-family:Arial,sans-serif;box-sizing:border-box;">' +
        '<h2 style="text-align:center;margin-bottom:20px;font-size:24px;">🧮 Calcula tu tamano de kite ideal</h2>' +
        '<label style="font-weight:bold;display:block;margin-bottom:5px;">Peso del rider (kg)</label>' +
        '<input type="number" id="peso-kite" placeholder="Ej: 75" style="width:100%;padding:12px;margin-bottom:20px;border-radius:8px;border:1px solid #ccc;box-sizing:border-box;font-size:16px;">' +
        '<label style="font-weight:bold;display:block;margin-bottom:5px;">Viento (nudos)</label>' +
        '<input type="number" id="viento-kite" placeholder="Ej: 22" style="width:100%;padding:12px;margin-bottom:20px;border-radius:8px;border:1px solid #ccc;box-sizing:border-box;font-size:16px;">' +
        '<label style="font-weight:bold;display:block;margin-bottom:5px;">Disciplina</label>' +
        '<select id="disciplina-kite" style="width:100%;padding:12px;margin-bottom:25px;border-radius:8px;border:1px solid #ccc;box-sizing:border-box;font-size:16px;background:#fff;">' +
        '<option value="freeride">🏄 Freeride</option>' +
        '<option value="bigair">🚀 Big Air</option>' +
        '<option value="wave">🌊 Olas / Strapless</option>' +
        '<option value="foil">🪽 Foil</option>' +
        '</select>' +
        '<button id="calcular-kite-btn" style="width:100%;padding:15px;background:#000;color:#fff;border:none;border-radius:8px;font-size:18px;cursor:pointer;font-weight:bold;">CALCULAR</button>' +
        '<div id="resultado-kite" style="margin-top:30px;padding:20px;background:#fff;border-radius:10px;display:none;box-shadow:0 2px 10px rgba(0,0,0,0.1);"></div>' +
        '</div>';

    document.getElementById('calcular-kite-btn').addEventListener('click', function() {
        var peso = parseInt(document.getElementById('peso-kite').value);
        var viento = parseInt(document.getElementById('viento-kite').value);
        var disciplina = document.getElementById('disciplina-kite').value;

        if (isNaN(peso) || isNaN(viento) || peso <= 0 || viento <= 0) {
            document.getElementById('resultado-kite').style.display = "block";
            document.getElementById('resultado-kite').innerHTML = '<p style="color:red;text-align:center;">⚠️ Introduce valores validos</p>';
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
            '<h3 style="margin-top:0;font-size:20px;">📊 Resultado</h3>' +
            '<p style="font-size:18px;"><strong>Tamano recomendado:</strong> <span style="color:#e74c3c;font-size:22px;">' + tamano + '</span></p>' +
            '<p style="font-size:18px;"><strong>Modelo ideal:</strong> <span style="color:#2ecc71;font-size:22px;">' + modelos[disciplina] + ' ' + iconos[disciplina] + '</span></p>' +
            '<hr style="border-top:1px solid #eee;margin:20px 0;">' +
            '<p style="font-size:14px;color:#666;">📝 Esta recomendacion es orientativa y puede variar segun:</p>' +
            '<ul style="font-size:14px;color:#666;padding-left:20px;">' +
            '<li>Nivel del rider</li><li>Tipo de tabla</li><li>Rachas y estado del mar</li><li>Preferencias personales</li>' +
            '</ul>' +
            '<p style="margin-top:20px;text-align:center;font-size:16px;">👉 En <strong>Ridezone</strong> podemos ayudarte a elegir el quiver <strong>North Kiteboarding</strong> perfecto.</p>';

        document.getElementById('resultado-kite').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
})();

(function() {
    var target = document.getElementById('ridezone-board-calculator');
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
        title: isEN ? '🏄 Ridezone Board Size Calculator' : '🏄 Calculadora de Tabla Ridezone',
        subtitle: isEN ? 'Find your ideal North Kiteboarding board size based on weight, level and riding style.' : 'Encuentra el tamaño ideal de tabla North Kiteboarding según tu peso, nivel y estilo de navegación.',
        pesoLabel: isEN ? '⚖️ Rider weight (kg)' : '⚖️ Peso del rider (kg)',
        pesoPH: isEN ? 'E.g. 75' : 'Ej: 75',
        nivelLabel: isEN ? '🎯 Level' : '🎯 Nivel',
        beginner: isEN ? '🧑 Beginner' : '🧑 Principiante',
        intermediate: isEN ? '👍 Intermediate' : '👍 Intermedio',
        advanced: isEN ? '💪 Advanced' : '💪 Avanzado',
        disciplinaLabel: isEN ? '🏄 Riding style' : '🏄 Estilo de navegación',
        freeride: '🏄 Freeride',
        bigair: '🚀 Big Air',
        freestyle: '🎯 Freestyle',
        lightwind: '💨 Lightwind',
        calcular: isEN ? 'CALCULATE BOARD' : 'CALCULAR TABLA',
        alert: isEN ? 'Enter your weight' : 'Introduce tu peso',
        lowWeightTitle: isEN ? '⚠️ Weight too low' : '⚠️ Peso demasiado bajo',
        lowWeightDesc: isEN ? 'Below 35 kg, conventional kitesurfing is not recommended.' : 'Por debajo de 35 kg normalmente no se recomienda practicar kitesurf convencional.',
        resultado: isEN ? '📊 Result' : '📊 Resultado',
        medidaRec: isEN ? '📏 Recommended size:' : '📏 Medida recomendada:',
        modeloRec: isEN ? '🛹 Recommended model:' : '🛹 Modelo recomendado:',
        msgFreeride: isEN ? 'The North Prime offers balance between comfort, planing and control.' : 'La North Prime busca equilibrio entre comodidad, planeo y control.',
        msgBigair: isEN ? 'The North Atmos works best with slightly smaller, stiffer boards to maximize control and edging.' : 'La North Atmos funciona mejor con tablas ligeramente más pequeñas y rígidas para maximizar el control y el edging.',
        msgFreestyle: isEN ? 'The North Trace is compact and reactive to improve pop and unhooked control.' : 'La North Trace es compacta y reactiva para mejorar el pop y el control unhooked.',
        msgLightwind: isEN ? 'In lightwind, surface area is key to improve planing and ride earlier.' : 'En lightwind la superficie es clave para mejorar el planeo y navegar antes.',
        beginnerTip: isEN ? ' As a beginner, we recommend slightly more surface area to help with planing and upwind.' : ' Como rider principiante recomendamos ligeramente más superficie para facilitar el planeo y la ceñida.',
        advancedTip: isEN ? ' Advanced riders often prefer slightly smaller sizes for more control and aggressiveness.' : ' Los riders avanzados suelen preferir medidas algo más pequeñas para ganar control y agresividad.',
        aviso: isEN ? '📝 These recommendations are approximate and may vary according to:' : '📝 Estas recomendaciones son orientativas y pueden variar según:',
        aviso1: isEN ? '🌊 Type of spot' : '🌊 Tipo de spot',
        aviso2: isEN ? '💧 Water conditions' : '💧 Estado del agua',
        aviso3: isEN ? '💨 Typical wind' : '💨 Viento habitual',
        aviso4: isEN ? '❤️ Personal preferences' : '❤️ Preferencias personales',
        aviso5: isEN ? '🏄 Riding type' : '🏄 Tipo de navegación',
        cta: isEN ? '👉 At Ridezone we can help you choose the perfect North Kiteboarding board.' : '👉 En Ridezone podemos ayudarte a elegir la tabla North Kiteboarding perfecta.'
    };

    target.innerHTML =
        '<div style="max-width:900px;margin:auto;padding:35px;background:#111827;border-radius:18px;font-family:Arial,sans-serif;color:white;border:2px solid #00D4FF;box-sizing:border-box;">' +
        '<div style="text-align:center;margin-bottom:30px;">' +
        '<img src="data:image/jpeg;base64,TU_CHURRO_AQUI" alt="Ridezone" style="max-width:180px;margin-bottom:15px;">' +
        '<h2 style="margin:0;font-size:32px;color:#00D4FF;">' + t.title + '</h2>' +
        '<p style="color:#cbd5e1;margin-top:12px;">' + t.subtitle + '</p>' +
        '</div>' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.pesoLabel + '</strong></label>' +
        '<input type="number" id="peso-board" placeholder="' + t.pesoPH + '" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.nivelLabel + '</strong></label>' +
        '<select id="nivel-board" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<option value="beginner">' + t.beginner + '</option>' +
        '<option value="intermediate">' + t.intermediate + '</option>' +
        '<option value="advanced">' + t.advanced + '</option>' +
        '</select>' +
        '<label style="display:block;margin-bottom:8px;"><strong>' + t.disciplinaLabel + '</strong></label>' +
        '<select id="disciplina-board" style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:30px;font-size:16px;background:#1f2937;color:white;box-sizing:border-box;">' +
        '<option value="freeride">' + t.freeride + '</option>' +
        '<option value="bigair">' + t.bigair + '</option>' +
        '<option value="freestyle">' + t.freestyle + '</option>' +
        '<option value="lightwind">' + t.lightwind + '</option>' +
        '</select>' +
        '<button id="calcular-board-btn" style="width:100%;padding:18px;background:#00D4FF;color:#000;font-size:18px;font-weight:bold;border:none;border-radius:12px;cursor:pointer;">' + t.calcular + '</button>' +
        '<div id="resultado-board" style="display:none;margin-top:35px;padding:30px;background:#1f2937;border-radius:16px;"></div>' +
        '</div>';

    document.getElementById('calcular-board-btn').addEventListener('click', function() {
        var peso = parseInt(document.getElementById('peso-board').value);
        var nivel = document.getElementById('nivel-board').value;
        var disciplina = document.getElementById('disciplina-board').value;

        if (!peso) { alert(t.alert); return; }

        var largo = "", ancho = "", modelo = "", comentario = "";

        if (peso < 35) {
            document.getElementById('resultado-board').style.display = "block";
            document.getElementById('resultado-board').innerHTML =
                '<div style="background:#3b1d1d;padding:20px;border-radius:12px;border-left:5px solid red;">' +
                '<h3 style="margin-top:0;color:#ff8080;">' + t.lowWeightTitle + '</h3>' +
                '<p style="line-height:1.7;">' + t.lowWeightDesc + '</p></div>';
            return;
        }

        if (disciplina == "bigair") {
            modelo = "North Atmos";
            comentario = t.msgBigair;
            if (peso <= 65) { largo = "132-135"; ancho = "39-40"; }
            else if (peso <= 80) { largo = "135-138"; ancho = "40-41"; }
            else if (peso <= 95) { largo = "138-141"; ancho = "41-42"; }
            else { largo = "141-144"; ancho = "42-43"; }
        }

        if (disciplina == "freeride") {
            modelo = "North Prime";
            comentario = t.msgFreeride;
            if (peso <= 50) { largo = "130-133"; ancho = "38-39"; }
            else if (peso <= 65) { largo = "133-136"; ancho = "39-40"; }
            else if (peso <= 80) { largo = "136-139"; ancho = "40-41"; }
            else if (peso <= 95) { largo = "139-142"; ancho = "41-42"; }
            else { largo = "142-145"; ancho = "42-43"; }
        }

        if (disciplina == "freestyle") {
            modelo = "North Trace";
            comentario = t.msgFreestyle;
            if (peso <= 65) { largo = "133-136"; ancho = "40-41"; }
            else if (peso <= 80) { largo = "136-139"; ancho = "41-42"; }
            else if (peso <= 95) { largo = "139-142"; ancho = "42-43"; }
            else { largo = "142-145"; ancho = "43-44"; }
        }

        if (disciplina == "lightwind") {
            modelo = "North Prime";
            comentario = t.msgLightwind;
            if (peso <= 50) { largo = "135-138"; ancho = "40-41"; }
            else if (peso <= 65) { largo = "138-141"; ancho = "41-42"; }
            else if (peso <= 80) { largo = "141-144"; ancho = "42-43"; }
            else if (peso <= 95) { largo = "144-148"; ancho = "43-44"; }
            else { largo = "148+"; ancho = "44+"; }
        }

        if (nivel == "beginner") comentario += t.beginnerTip;
        if (nivel == "advanced") comentario += t.advancedTip;

        document.getElementById('resultado-board').style.display = "block";
        document.getElementById('resultado-board').innerHTML =
            '<h2 style="margin-top:0;color:#00D4FF;">' + t.resultado + '</h2>' +
            '<p style="font-size:20px;line-height:1.8;"><strong>' + t.medidaRec + '</strong><br>' + largo + ' x ' + ancho + ' cm</p>' +
            '<p style="font-size:20px;line-height:1.8;"><strong>' + t.modeloRec + '</strong><br>' + modelo + '</p>' +
            '<p style="line-height:1.8;color:#d1d5db;margin-top:20px;">' + comentario + '</p>' +
            '<hr style="margin:30px 0;border-color:#374151;">' +
            '<p style="color:#9ca3af;line-height:1.8;font-size:14px;">' + t.aviso + '<br><br>' +
            '• ' + t.aviso1 + '<br>• ' + t.aviso2 + '<br>• ' + t.aviso3 + '<br>• ' + t.aviso4 + '<br>• ' + t.aviso5 + '</p>' +
            '<p style="margin-top:25px;font-weight:bold;color:#00D4FF;">' + t.cta + '</p>';

        document.getElementById('resultado-board').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
})();

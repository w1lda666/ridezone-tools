```html
<div id="ridezone-kite-calculator" style="max-width:900px;margin:auto;padding:35px;background:#111827;border-radius:18px;font-family:Arial,sans-serif;color:white;border:2px solid #00D4FF;">

<div style="text-align:center;margin-bottom:30px;">

<img src="TU-LOGO-AQUI.png" alt="Ridezone"
style="max-width:220px;margin-bottom:20px;">

<h2 style="margin:0;font-size:32px;color:#00D4FF;">
Ridezone Kite Size Calculator
</h2>

<p style="color:#cbd5e1;margin-top:12px;">
Recomendaciones realistas basadas en peso, viento y disciplina usando la gama North Kiteboarding.
</p>

</div>


<label style="display:block;margin-bottom:8px;">
<strong>Peso del rider (kg)</strong>
</label>

<input type="number" id="peso" placeholder="Ej: 75"

style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;">


<label style="display:block;margin-bottom:8px;">
<strong>Viento (nudos)</strong>
</label>

<input type="number" id="viento" placeholder="Ej: 28"

style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:25px;font-size:16px;background:#1f2937;color:white;">


<label style="display:block;margin-bottom:8px;">
<strong>Disciplina</strong>
</label>

<select id="disciplina"

style="width:100%;padding:14px;border-radius:10px;border:none;margin-bottom:30px;font-size:16px;background:#1f2937;color:white;">

<option value="freeride">Freeride</option>
<option value="bigair">Big Air</option>
<option value="wave">Wave / Strapless</option>
<option value="freestyle">Freestyle</option>
<option value="foil">Foil</option>

</select>


<button onclick="calcularKite()"

style="width:100%;padding:18px;background:#00D4FF;color:#000;font-size:18px;font-weight:bold;border:none;border-radius:12px;cursor:pointer;transition:0.3s;">

CALCULAR

</button>


<div id="resultado"

style="display:none;margin-top:35px;padding:30px;background:#1f2937;border-radius:16px;">

</div>

</div>

<script>

function calcularKite() {

let peso = parseInt(document.getElementById('peso').value);
let viento = parseInt(document.getElementById('viento').value);
let disciplina = document.getElementById('disciplina').value;

let resultado = "";
let advertencia = "";
let modelo = "";
let tamaño = "";
let comentario = "";


if (!peso || !viento) {

alert("Introduce peso y viento");
return;

}


// MODELOS

if (disciplina == "freeride") modelo = "North Reach";
if (disciplina == "bigair") modelo = "North Orbit";
if (disciplina == "wave") modelo = "North Carve";
if (disciplina == "freestyle") modelo = "North Pulse";
if (disciplina == "foil") modelo = "North Code Zero";


// INTERPRETACIÓN GLOBAL DEL VIENTO

if (viento <= 8 && disciplina != "foil") {

advertencia = `

<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff4d4d;">

<h3 style="margin-top:0;color:#ff8080;">
⚠️ Muy poco viento
</h3>

<p style="line-height:1.6;">

Con menos de 8 nudos normalmente no es viable navegar cómodamente en twin tip, incluso usando cometas muy grandes.

</p>

<p style="line-height:1.6;">

Para estas condiciones recomendamos:

</p>

<ul style="line-height:1.8;">
<li>Hydrofoil</li>
<li>Tabla lightwind</li>
<li>North Code Zero</li>
<li>Reach 17m o 19m</li>
</ul>

</div>

`;

}


else if (viento > 35 && viento <= 45) {

advertencia = `

<div style="background:#3b341d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ffd000;">

<h3 style="margin-top:0;color:#ffe066;">
⚠️ Viento muy fuerte
</h3>

<p style="line-height:1.6;">

Condiciones recomendadas únicamente para riders experimentados y material adecuado.

</p>

</div>

`;

}


else if (viento > 45 && viento <= 50) {

advertencia = `

<div style="background:#3b1d1d;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #ff7b7b;">

<h3 style="margin-top:0;color:#ff9e9e;">
⚠️ Condiciones extremas
</h3>

<p style="line-height:1.6;">

Solo riders avanzados deberían navegar con este viento.

</p>

</div>

`;

}


else if (viento > 50) {

advertencia = `

<div style="background:#2a0000;padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid red;">

<h3 style="margin-top:0;color:#ff6666;">
⚠️ Storm Riding / Muy peligroso
</h3>

<p style="line-height:1.6;">

Más de 50 nudos se considera viento extremadamente peligroso.

</p>

<p style="line-height:1.6;">

Navega únicamente bajo tu responsabilidad y con experiencia avanzada.

</p>

</div>

`;

}



// AJUSTE DISCIPLINA

let ajuste = 0;

if (disciplina == "bigair") ajuste = -1;
if (disciplina == "wave") ajuste = -1;
if (disciplina == "freestyle") ajuste = -0.5;
if (disciplina == "foil") ajuste = -3;


// BASE REALISTA POR PESO Y VIENTO

function calcularBase(peso,viento) {


// 40-50 KG

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


// 50-65 KG

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


// 65-80 KG

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


// 80-95 KG

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


// 95+ KG

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



let base = calcularBase(peso,viento);

let final = base + ajuste;


// LIMITES

if (final < 4) final = 4;
if (final > 19) final = 19;


// TEXTO TAMAÑO

if (final >= 17) tamaño = "17m - 19m";
else if (final >= 14) tamaño = "14m - 17m";
else if (final >= 12) tamaño = "12m - 14m";
else if (final >= 10) tamaño = "10m - 12m";
else if (final >= 8) tamaño = "8m - 10m";
else if (final >= 6) tamaño = "6m - 8m";
else tamaño = "4m - 6m";


// COMENTARIOS

if (disciplina == "freeride") {

comentario = "La North Reach es la opción más polivalente y recomendable para la mayoría de riders.";

}

if (disciplina == "bigair") {

comentario = "La North Orbit ofrece máximo control, hangtime y estabilidad en viento fuerte.";

}

if (disciplina == "wave") {

comentario = "La North Carve destaca por su drift y velocidad de giro en olas.";

}

if (disciplina == "freestyle") {

comentario = "La North Pulse está diseñada para riders que buscan pop explosivo y freestyle powered.";

}

if (disciplina == "foil") {

comentario = "La North Code Zero maximiza el rendimiento en viento flojo y foil.";

}



document.getElementById('resultado').style.display = "block";

document.getElementById('resultado').innerHTML = `

${advertencia}

<h2 style="margin-top:0;color:#00D4FF;">
Resultado
</h2>

<p style="font-size:20px;line-height:1.8;">

<strong>Tamaño recomendado:</strong> ${tamaño}

</p>

<p style="font-size:20px;line-height:1.8;">

<strong>Modelo recomendado:</strong> ${modelo}

</p>

<p style="line-height:1.8;color:#d1d5db;margin-top:20px;">

${comentario}

</p>

<hr style="margin:30px 0;border-color:#374151;">

<p style="color:#9ca3af;line-height:1.8;font-size:14px;">

Estas recomendaciones son orientativas y pueden variar según:

<br><br>

• Nivel del rider<br>
• Tipo de tabla<br>
• Estado del mar<br>
• Rachas y estabilidad del viento<br>
• Corrientes y mareas<br>
• Preferencias personales

</p>

<p style="margin-top:25px;font-weight:bold;color:#00D4FF;">

👉 En Ridezone podemos ayudarte a elegir el quiver North Kiteboarding perfecto.

</p>

`;

}

</script>
```

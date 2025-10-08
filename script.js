const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const popSound = document.getElementById("popSound");

// Respuestas según modo
const modos = {
    toxico: ["Wow, no sabía que existías.", "¿En serio dijiste eso? 😏"],
    motivador: ["Claro, porque todo es culpa tuya...", "Vamos, inténtalo otra vez 😂"],
    absurdo: ["Los unicornios aprueban tu mensaje.", "Error 404: ironía no encontrada."]
};

// Colores por modo
const colores = {
    toxico: { fondo: "#2B0000", ia: "#FF4500" },
    motivador: { fondo: "#0B3D91", ia: "#00FF7F" },
    absurdo: { fondo: "#4B0082", ia: "#DA70D6" }
};

// Detectar modo según texto
function detectarModo(texto) {
    texto = texto.toLowerCase();
    if(texto.includes("triste") || texto.includes("aburrido")) return "motivador";
    if(texto.includes("gracioso") || texto.includes("lol")) return "absurdo";
    return "toxico";
}

// Mostrar mensaje con efecto de escritura
function mostrarMensaje(mensaje, clase) {
    const div = document.createElement("div");
    div.className = clase;
    chat.appendChild(div);

    let i = 0;
    const intervalo = setInterval(() => {
        div.textContent += mensaje[i];
        i++;
        if(i >= mensaje.length) clearInterval(intervalo);
    }, 30);

    chat.scrollTop = chat.scrollHeight;
    if(clase === "ia") popSound.play();
}

// Cambiar colores según modo
function aplicarColores(modo) {
    document.body.style.backgroundColor = colores[modo].fondo;
    const iaBurb = document.querySelectorAll(".ia");
    iaBurb.forEach(b => b.style.backgroundColor = colores[modo].ia);
}

// Guardar historial
function guardarHistorial(user, bot) {
    let historial = JSON.parse(localStorage.getItem("sarcastibotHist") || "[]");
    historial.push({user, bot});
    localStorage.setItem("sarcastibotHist", JSON.stringify(historial));
}

// Cargar historial
function cargarHistorial() {
    let historial = JSON.parse(localStorage.getItem("sarcastibotHist") || "[]");
    historial.forEach(item => {
        mostrarMensaje(item.user, "usuario");
        mostrarMensaje(item.bot, "ia");
    });
}

// Enviar mensaje
function enviar() {
    const texto = input.value.trim();
    if(!texto) return;

    // Mostrar mensaje del usuario
    mostrarMensaje(texto, "usuario");

    // Detectar modo
    const modo = detectarModo(texto);

    // Elegir respuesta aleatoria
    const respuesta = modos[modo][Math.floor(Math.random() * modos[modo].length)];

    // Mostrar respuesta IA
    setTimeout(() => {
        mostrarMensaje(respuesta, "ia");
        aplicarColores(modo);
    }, 500);

    // Guardar historial
    guardarHistorial(texto, respuesta);

    input.value = "";
}

// Eventos
sendBtn.addEventListener("click", enviar);
input.addEventListener("keypress", e => { if(e.key === "Enter") enviar(); });

// Inicializar historial
cargarHistorial();

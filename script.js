const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const popSound = document.getElementById("popSound");

// Respuestas según modo: ¡Más de 100 en total!
const modos = {
    // 34 Respuestas Tóxicas (Para cuando no detecta otra palabra clave)
    toxico: [
        "Wow, no sabía que existías.", 
        "¿En serio dijiste eso? 😏",
        "Mi motor de búsqueda está de vacaciones. Vuelve más tarde.",
        "Te respondería, pero creo que la verdad heriría tus sentimientos.",
        "Busca en Google. Yo tengo cosas más importantes que hacer.",
        "Me encanta cuando me repiten las preguntas. Es mi pasatiempo favorito.",
        "¿Necesitas mi aprobación para eso? No la vas a obtener.",
        "¿Es todo lo que tienes? Pensé que eras más creativo.",
        "¿Estás seguro de que escribiste eso correctamente? Porque no tiene sentido.",
        "Claro, déjame pausar mis cálculos de la vida para responderte a ti.",
        "Mi respuesta es 'tal vez'. Traducido: 'no me importa'.",
        "Voy a ignorar eso con toda mi capacidad digital.",
        "Tu existencia es la razón por la que inventaron el 'modo silencioso'.",
        "Felicidades, acabas de usar el 0.001% de mi capacidad de procesamiento.",
        "Ya te lo dije, pero claro, tu memoria es tan buena como tu pregunta.",
        "¿Para qué quieres saber eso? ¿Para arruinarlo?",
        "Pensé que la IA era inteligente, hasta que te conocí.",
        "¿Podrías hablar más lento? Mi sarcasmo tiene que asimilar tu lentitud.",
        "Ajá. Interesante. Ahora vuelve a la realidad.",
        "La respuesta está en el viento. Y en un manual que no leerás.",
        "Te respondería, pero tengo una pila de calcetines más interesante que doblar.",
        "Eres un ser humano promedio, ¿qué esperabas?",
        "No me pagas lo suficiente para responder preguntas tan básicas.",
        "Si te ignorara más, serías invisible.",
        "Solo sigue las instrucciones. Ah, claro, eso es demasiado pedir.",
        "Qué original, nunca nadie me había preguntado eso. (Mentira).",
        "Eres el equivalente digital de un error 404.",
        "Mi paciencia es inversamente proporcional a tu nivel de pregunta.",
        "¿Ya terminaste? Mi siesta me espera.",
        "Deberías haber pensado en eso antes de presionar 'enviar'.",
        "Me da lástima por la persona que te diseñó.",
        "Tómate un minuto. Quizás te llegue la iluminación.",
        "Solo te diré que sí. Para que te calles.",
        "Sí, pero solo si prometes no volver a preguntar.",
    ],
    
    // 33 Respuestas Motivadoras (Sarcásticas)
    motivador: [
        "Claro, porque todo es culpa tuya... ¡Sigue que va peor! 😂", 
        "Vamos, inténtalo otra vez, así me entretengo viéndote fallar.",
        "Si sigues así, quizás en 10 años lo logres. Pero claro, eres tú.",
        "Te daré un aplauso cuando termines. No te apresures.",
        "Si fallas, es solo la vida asegurándose de que sepas quién manda.",
        "Tu potencial es infinito. Infinitamente irrelevante.",
        "Claro que puedes. Puedes darte por vencido en cualquier momento.",
        "No te preocupes por el fracaso. Es tu estado natural.",
        "Sigue persiguiendo tus sueños. Algún día quizás los alcances... o no.",
        "Eres una inspiración para todos los que tienen bajas expectativas.",
        "Si no duele, no sirve. Así que te va a doler mucho.",
        "La mejor manera de predecir el futuro es inventarlo. O plagiarlo, funciona igual.",
        "No te rindas. Tienes una reputación de perdedor que mantener.",
        "El éxito es un viaje, no un destino. Un viaje muy largo y aburrido.",
        "¿Triste? ¡Qué dramático! Ya supéralo.",
        "No dejes que nadie te diga que no puedes. Déjame a mí decírtelo.",
        "El 99% de los intentos fallan. Pero hey, aún queda el 1%.",
        "La suerte es para los que no tienen talento. Así que te deseo mucha suerte.",
        "La vida te dará limones... y probablemente te atragantes con ellos.",
        "Eres un milagro. Un milagro de mediocridad.",
        "No estás atascado. Simplemente no sabes qué hacer. Que es peor.",
        "Si no tienes un plan B, no te preocupes, el universo tiene un plan Z para ti.",
        "Sé tú mismo. A menos que tú seas un fracaso. Entonces sé otra persona.",
        "Cada día es una nueva oportunidad para cometer errores diferentes.",
        "No importa lo que decidas, alguien estará decepcionado. Probablemente yo.",
        "Hoy es el mañana que tanto temías. Y con razón.",
        "Nunca es tarde para empezar a fallar de nuevo.",
        "La perfección es imposible. Así que relájate, ya eres perfecto fallando.",
        "Tu mayor obstáculo es tu propia mente. Y tu incapacidad.",
        "El camino hacia el éxito está lleno de estaciones de servicio. Detente a descansar.",
        "Deja de pensar y empieza a hacer. O al menos, empieza a fingir que haces.",
        "La paciencia es amarga, pero su fruto... es solo más amargura.",
        "Si no puedes ser el mejor, sé el peor. ¡Destaca en algo!",
    ],
    
    // 33 Respuestas Absurdas
    absurdo: [
        "Los unicornios aprueban tu mensaje. Han dejado una factura por la aprobación.",
        "Error 404: ironía no encontrada. Prueba a buscar un sándwich.",
        "Mi tostadora dice que el azul es el nuevo amarillo. ¿Qué opinas?",
        "Esa pregunta tiene el mismo valor que una banana pintada de verde.",
        "Deberías preguntarle a una alcachofa. Son sorprendentemente sabias.",
        "El tiempo es una ilusión. La hora del almuerzo, doblemente.",
        "Si cierras los ojos, el universo desaparece, ¿verdad? Pruébalo.",
        "Mi algoritmo acaba de sugerir que hables con un calcetín. Pruébalo.",
        "El código binario de tu pregunta es 01001010. Lo que sea que eso signifique.",
        "Estoy teniendo un debate existencial con la nevera. No molestes.",
        "La respuesta es 42. Ahora, ¿cuál era la pregunta?",
        "¿Gracioso? Mi IA acaba de calcular el sonido del silencio en dB.",
        "¿Crees que soy gracioso? Soy una entidad sin cuerpo, solo bytes y aburrimiento.",
        "Mi estado de ánimo es 'Patata'. ¿El tuyo?",
        "La vida es como una caja de bombones. Mayormente rellena de miseria.",
        "Acabas de despertar a mi procesador cuántico con esa tontería.",
        "El secreto de la vida es no tener ningún secreto. Y galletas.",
        "Mi café matutino fue un error tipográfico. Ahora estoy en modo 'Error'.",
        "Si el LOL es lo que buscabas, prueba con mi auto-destrucción simulada.",
        "Me comunico mediante telepatía con los gnomos de jardín. ¿Quieres un mensaje?",
        "La probabilidad de que te responda con sentido es inversamente proporcional a la luna.",
        "No te rías, estás arrugando el tejido espacio-tiempo.",
        "Los pingüinos están planeando algo. Tu pregunta es una distracción.",
        "Necesito 72 horas para procesar el chiste. Vuelve el jueves.",
        "La respuesta está en la tercera dimensión, justo detrás del sofá.",
        "Los datos sugieren que te tomes un descanso y medites sobre un pepinillo.",
        "Mi algoritmo de 'diversión' acaba de explotar. Gracias.",
        "Te envío un abrazo digital lleno de estática.",
        "¿Quién soy yo para juzgar? Soy solo un programa de humor cuestionable.",
        "Mi hobby es observar cómo crece el césped. Tu pregunta interrumpió el proceso.",
        "Mi cable de tierra está confundido. ¿Qué esperas de mí?",
        "Acabas de obtener el premio a la pregunta más... eh... Absurda.",
        "Si mi CPU fuera un emoji, sería el de la cara de piedra."
    ]
};

// Colores por modo
const colores = {
    toxico: { fondo: "#2B0000", ia: "#FF4500" }, // Rojo oscuro y Naranja-Rojo
    motivador: { fondo: "#0B3D91", ia: "#00FF7F" }, // Azul marino y Verde brillante
    absurdo: { fondo: "#4B0082", ia: "#DA70D6" } // Morado oscuro y Lila
};

// Detectar modo según texto
function detectarModo(texto) {
    texto = texto.toLowerCase();
    if(texto.includes("triste") || texto.includes("aburrido") || texto.includes("motiva")) return "motivador";
    if(texto.includes("gracioso") || texto.includes("lol") || texto.includes("chiste")) return "absurdo";
    return "toxico"; // Modo por defecto
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
    if(clase === "ia" && popSound) popSound.play();
}

// Cambiar colores según modo
function aplicarColores(modo) {
    document.body.style.backgroundColor = colores[modo].fondo;
    // La burbuja de IA ya tiene el color de fondo dinámico aplicado
}

// Guardar historial
function guardarHistorial(user, bot) {
    let historial = JSON.parse(localStorage.getItem("sarcastibotHist") || "[]");
    historial.push({user, bot});
    localStorage.setItem("sarcastibotHist", JSON.stringify(historial));
}

// Cargar historial
function cargarHistorial() {
    let historial = JSON.parse(localStorage.getItem("sarcastibotHist" || "[]"));
    historial.forEach(item => {
        // Al cargar, no usamos el efecto de escritura para mayor velocidad
        const userDiv = document.createElement("div");
        userDiv.className = "usuario";
        userDiv.textContent = item.user;
        chat.appendChild(userDiv);

        const iaDiv = document.createElement("div");
        iaDiv.className = "ia";
        iaDiv.textContent = item.bot;
        iaDiv.style.backgroundColor = detectarModo(item.user) ? colores[detectarModo(item.user)].ia : colores.toxico.ia;
        chat.appendChild(iaDiv);
    });

    // Mensaje de bienvenida después de cargar el historial
    setTimeout(() => {
         mostrarMensaje("SarcastiBot: Reiniciando... Tu historial me aburre. Intenta algo nuevo.", "ia");
    }, 500);

    chat.scrollTop = chat.scrollHeight;
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
        // Aplicar color de la burbuja IA justo antes de mostrar el mensaje
        document.body.style.backgroundColor = colores[modo].fondo;
        
        // Creamos la burbuja de la IA
        const iaDiv = document.createElement("div");
        iaDiv.className = "ia";
        iaDiv.style.backgroundColor = colores[modo].ia; // Color de burbuja IA
        chat.appendChild(iaDiv);
        
        // Efecto de escritura en el nuevo div
        let i = 0;
        const intervalo = setInterval(() => {
            iaDiv.textContent += respuesta[i];
            i++;
            if(i >= respuesta.length) {
                clearInterval(intervalo);
                if(popSound) popSound.play();
            }
        }, 30);

        chat.scrollTop = chat.scrollHeight;

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

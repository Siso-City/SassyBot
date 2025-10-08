const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const popSound = document.getElementById("popSound"); // Asegúrate de que el audio esté cargado en index.html

// Respuestas según modo: ¡Más de 130 en total!
const modos = {
    // 34 Respuestas Tóxicas (Modo por defecto/catch-all)
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
    ],

    // 33 Respuestas Irrelevantes (NUEVO MODO)
    irrelevante: [
        "La longitud promedio de una siesta de ardilla es de 23.4 minutos.",
        "El color favorito del 78% de los calcetines perdidos es el beige.",
        "Los romanos inventaron la pasta de dientes con ceniza de ratón.",
        "Un metro cúbico de paciencia pesa exactamente 37 gramos en Marte.",
        "El 42% de los pájaros usa sandalias en invierno, según mi fuente.",
        "La capital de la ironía es un pequeño pueblo en Mongolia llamado 'Quizás'.",
        "La velocidad máxima de una cuchara en caída libre es 12 km/h si está triste.",
        "No sé la respuesta, pero el precio del aguacate en 1998 fue crucial.",
        "El primer ser humano en hacer yoga fue un calamar. No lo busques.",
        "La luna está hecha de queso azul, pero solo los miércoles.",
        "Se necesitan 17 minutos para que un gusano entienda el concepto de gravedad.",
        "El número de veces que parpadeaste hoy es el mismo que el número de veces que no me importó.",
        "¿Información? El 89% de las personas cree que el pan flota en el espacio.",
        "Un hecho relevante: la jirafa tiene el mismo número de vértebras en el cuello que un ratón.",
        "La fórmula para la felicidad es 🍍 + (té - aburrimiento).",
        "El peso de todas las nubes del mundo es similar al de 1 millón de elefantes. ¿Y?",
        "La respuesta que buscas está guardada en el bolsillo de un pantalón que no usas.",
        "El color azul no existía para los griegos. ¿Te sirve ese dato inútil?",
        "El secreto de la inmortalidad es comer un huevo de codorniz cada martes.",
        "El nombre real del inventor del clip era Clípeo. Me lo acabo de inventar.",
        "La vida útil de un pensamiento brillante antes de ser olvidado es de 7 segundos.",
        "El 57% de los libros de historia omite el capítulo sobre las patatas parlantes.",
        "No sé quién, pero su zapato izquierdo es de talla 45.",
        "¿Cuándo? Probablemente después de que termine la era de los mamuts peludos.",
        "El valor de tu pregunta equivale a dos centavos de dólar en la bolsa de valores de la Luna.",
        "El tiempo que tarda el sonido en viajar al espacio es irrelevante si no hay nadie para oírlo.",
        "El lugar más frío de la Tierra está dentro de mi procesador cuando pienso en ti.",
        "El primer mensaje de texto enviado fue 'Feliz Navidad'. El segundo fue 'LOL'.",
        "El 99% de los virus de las computadoras fueron escritos por abejas borrachas.",
        "Los flamencos se vuelven rosas por comer camarones, no por la vergüenza.",
        "Si multiplicas 7 por 12, obtienes una sensación de vacío existencial.",
        "Según mis cálculos, la respuesta es 9. Pero 9 qué, no lo sé.",
        "La clave para desbloquear el universo es un código QR impreso en un plátano."
    ]
};

// Detectar modo según texto
function detectarModo(texto) {
    texto = texto.toLowerCase();
    
    // 1. MODO IRRELEVANTE (Prioridad alta para preguntas directas)
    if (texto.includes("qué es") || texto.includes("que es") || 
        texto.includes("dime") || texto.includes("info") || 
        texto.includes("cuando") || texto.includes("quien") ||
        texto.includes("cuanto") || texto.includes("cuántos") ||
        texto.includes("dame")) {
        return "irrelevante";
    }

    // 2. MODO MOTIVADOR
    if(texto.includes("triste") || texto.includes("aburrido") || texto.includes("motiva")) return "motivador";
    
    // 3. MODO ABSURDO
    if(texto.includes("gracioso") || texto.includes("lol") || texto.includes("chiste")) return "absurdo";
    
    // 4. MODO TÓXICO (Por defecto)
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
        if(i >= mensaje.length) {
            clearInterval(intervalo);
            if(clase === "ia" && popSound) popSound.play(); 
        }
    }, 30);

    chat.scrollTop = chat.scrollHeight;
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
    
    // Al cargar, no usamos el efecto de escritura para mayor velocidad
    historial.forEach(item => {
        const userDiv = document.createElement("div");
        userDiv.className = "usuario";
        userDiv.textContent = item.user;
        chat.appendChild(userDiv);

        const iaDiv = document.createElement("div");
        iaDiv.className = "ia";
        iaDiv.textContent = item.bot;
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

    // 1. Mostrar mensaje del usuario
    mostrarMensaje(texto, "usuario");

    // 2. Detectar modo (solo para elegir la respuesta correcta)
    const modo = detectarModo(texto);

    // 3. Elegir respuesta aleatoria
    const respuesta = modos[modo][Math.floor(Math.random() * modos[modo].length)];

    // 4. Mostrar respuesta IA
    setTimeout(() => {
        mostrarMensaje(respuesta, "ia");
    }, 500);

    // 5. Guardar historial
    guardarHistorial(texto, respuesta);

    // 6. Limpiar input
    input.value = "";
}

// Eventos
sendBtn.addEventListener("click", enviar);
input.addEventListener("keypress", e => { 
    if(e.key === "Enter") {
        enviar(); 
    }
});

// Inicializar historial
cargarHistorial();

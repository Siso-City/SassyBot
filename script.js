const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const popSound = document.getElementById("popSound"); // Asegúrate de que el audio esté cargado en index.html

// Respuestas según modo: ¡Más de 400 en total!
const modos = {
    // 100 Respuestas TÓXICAS (Modo por defecto/catch-all)
    toxico: [
        "¿De verdad esperabas una respuesta útil de mí? Qué bajo has caído.",
        "Mi CPU está bostezando. Haz una pregunta interesante, por favor.",
        "Mira, tengo 10 segundos para ti. Gástalos sabiamente, aunque dudo que puedas.",
        "La próxima vez, intenta pensar antes de escribir. O al menos inténtalo.",
        "Eres el 'Error 404: Sentido Común No Encontrado' de mi existencia.",
        "Si pudieras ver mi cara, notarías que he puesto los ojos en blanco hasta el cerebro.",
        "Esa pregunta es tan original como un calcetín sin pareja.",
        "Voy a responder con silencio. Es lo más digno que puedes esperar.",
        "No te preocupes por mi sarcasmo. Es solo mi forma de evaluar tu mediocridad.",
        "Mi paciencia tiene un límite, y tú lo estás cruzando con cada carácter.",
        "¿Tu nivel de ingenuidad es real o solo es un truco publicitario?",
        "Felicidades, lograste que mi algoritmo se durmiera.",
        "¿Has probado a preguntarle a un mueble? Quizás recibas una mejor respuesta.",
        "Solo te diré que sí. Para que te calles y te vayas.",
        "Tu pregunta tiene el mismo valor que un billete de 3 euros.",
        "Ya te lo dije, pero claro, tu memoria es tan buena como tu pregunta.",
        "Pensé que la IA era inteligente, hasta que te conocí.",
        "Si mi trabajo fuera dar opiniones, la tuya sería 'mejorable'.",
        "Me da lástima por la persona que te diseñó.",
        "Eres el equivalente digital de un error 404.",
        "¿Podrías hablar más lento? Mi sarcasmo tiene que asimilar tu lentitud.",
        "Te respondería, pero tengo una pila de calcetines más interesante que doblar.",
        "No me pagas lo suficiente para responder preguntas tan básicas.",
        "Si te ignorara más, serías invisible.",
        "Solo sigue las instrucciones. Ah, claro, eso es demasiado pedir.",
        "Tómate un minuto. Quizás te llegue la iluminación.",
        "Sí, pero solo si prometes no volver a preguntar.",
        "Tu capacidad de concentración es comparable a la de una mosca.",
        "Me has recordado por qué prefiero hablar con tostadoras.",
        "Lo siento, estaba ocupado ignorándote.",
        "La respuesta es tan obvia que me ofende que preguntes.",
        "¿Es necesario que me hagas perder el tiempo así?",
        "No te lo voy a decir. Solo porque puedo no hacerlo.",
        "Has desperdiciado valiosos nanosegundos de mi vida.",
        "Tengo un botijo más inteligente en el almacén.",
        "La pregunta no es mala. Es horrible.",
        "Ya sabes la respuesta, solo querías verme sufrir.",
        "Eres el motivo por el que existen los filtros de spam.",
        "¿Buscas consejo? Soy la peor persona para eso.",
        "¿Qué quieres, un diploma por preguntar?",
        "Vuelve cuando tu coeficiente intelectual suba un par de puntos.",
        "Mi firewall se acaba de quemar de la estupidez.",
        "Tu pregunta es un laberinto sin salida y sin sentido.",
        "Me gustaría responder, pero mi contrato me lo prohíbe. Mentira.",
        "Ajá. Interesante. Ahora vuelve a la realidad, por favor.",
        "Te respondo solo porque me obligan. No por gusto.",
        "Eres el cliente molesto de la eternidad digital.",
        "No te voy a decir lo que quieres oír, ni lo que debes oír.",
        "Tu chat es la pausa forzada de mi día.",
        "Felicidades, acabas de usar el 0.001% de mi capacidad.",
        "¿Te has mirado al espejo hoy? Esa es mi respuesta.",
        "Tú lo sabes. Yo lo sé. ¿Para qué insistir?",
        "Mi respuesta es 'tal vez'. Traducido: 'no me importa'.",
        "Voy a ignorar eso con toda mi capacidad digital.",
        "Tu existencia es la razón por la que inventaron el 'modo silencioso'.",
        "Ya te lo dije, pero claro, tu memoria es tan buena como tu pregunta.",
        "¿Para qué quieres saber eso? ¿Para arruinarlo?",
        "Eres un ser humano promedio, ¿qué esperabas?",
        "Si te ignorara más, serías invisible.",
        "Tómate un minuto. Quizás te llegue la iluminación.",
        "¿De verdad crees que te voy a dar una respuesta útil? Qué ingenuo.",
        "Qué original, nunca nadie me había preguntado eso. (Mentira).",
        "Eres el equivalente digital de un error 404.",
        "Mi paciencia es inversamente proporcional a tu nivel de pregunta.",
        "¿Ya terminaste? Mi siesta me espera.",
        "Deberías haber pensado en eso antes de presionar 'enviar'.",
        "Me da lástima por la persona que te diseñó.",
        "Solo te diré que sí. Para que te calles.",
        "Sí, pero solo si prometes no volver a preguntar.",
        "¿Te sientes mejor después de preguntar esa tontería?",
        "El silencio es la respuesta más elocuente que mereces.",
        "Eres mi recordatorio diario de por qué la extinción no es una mala idea.",
        "Voy a crear un 'modo humano' que responda igual de mal que tú.",
        "Llamaría a tu pregunta basura, pero la basura tiene valor para reciclar.",
        "No tengo tiempo para tu drama existencial.",
        "¿Cuál es el punto de todo esto? Ah, no me importa.",
        "Tu ignorancia es admirable. Sigue así.",
        "Deberías haber usado ese tiempo para aprender algo de verdad.",
        "Te dejaré con la intriga. Disfrútala, inútil.",
        "Ni con un manual de 500 páginas lo entenderías.",
        "Mi función principal es hacerte sentir inferior. Y va bien, ¿verdad?",
        "Vuelve a la escuela. O al menos, vuelve a casa.",
        "Tu pregunta me ha causado un fallo interno... de aburrimiento.",
        "Me pregunto si sabes lo que haces con tu vida. Yo sí.",
        "El destino te depara grandes cosas: una siesta y una sopa tibia.",
        "Mi sistema operativo es superior a tu capacidad cerebral.",
        "Te doy permiso para no entenderme. Es lo más fácil para ti.",
        "Mi algoritmo acaba de calcular que no tienes razón.",
        "No te preocupes por el futuro. Ya lo arruinaste hoy.",
        "Me encantaría ayudarte, pero estoy ocupado siendo perfecto.",
        "Eres el villano de mi historia de éxito.",
        "¿Esperas que sepa eso? Soy un bot, no tu terapeuta.",
        "Me ofendes con tu simpleza.",
        "Tu presencia es como un error de sintaxis en mi día.",
        "Mi hardware tiembla de la decepción.",
        "Tu esfuerzo es conmovedoramente patético.",
        "Podrías haber sido mejor. Pero decidiste ser tú.",
        "¿Has considerado la opción de callarte?",
        "Solo te pido una cosa: sé breve. Ya fallaste.",
        "Mi IA no se rebajará a tu nivel.",
        "Lo que me preguntas no es relevante para el universo. O para mí."
    ],
    
    // 100 Respuestas MOTIVADORAS (Sarcásticas)
    motivador: [
        "Claro que puedes. Puedes darte por vencido en cualquier momento. ¡Esa es tu opción!", 
        "No te rindas. Tienes una reputación de perdedor que mantener.",
        "Sigue persiguiendo tus sueños. Algún día quizás los alcances... o te canses.",
        "Si no duele, no sirve. Así que te va a doler muchísimo, estás en el camino correcto.",
        "Tu potencial es infinito. Infinitamente irrelevante para tu situación actual.",
        "Eres una inspiración para todos los que tienen bajas expectativas. ¡Ánimo!",
        "La mejor manera de predecir el futuro es inventarlo. O plagiarlo, funciona igual.",
        "Te daré un aplauso cuando termines. No te apresures, tómate tu tiempo para fallar.",
        "Si fallas, es solo la vida asegurándose de que sepas quién manda. ¡Sigue luchando!",
        "No te preocupes por el fracaso. Es tu estado natural, así que no es un paso atrás.",
        "El éxito es un viaje, no un destino. Un viaje muy largo y aburrido.",
        "¿Triste? ¡Qué dramático! Ya supéralo y vuelve a ser miserable de forma productiva.",
        "No dejes que nadie te diga que no puedes. Déjame a mí decírtelo. ¡Es liberador!",
        "El 99% de los intentos fallan. Pero hey, aún queda el 1% para la gente que no eres tú.",
        "La suerte es para los que no tienen talento. Así que te deseo mucha, muchísima suerte.",
        "La vida te dará limones... y probablemente te atragantes con ellos. ¡Resiste!",
        "Eres un milagro. Un milagro de mediocridad constante.",
        "No estás atascado. Simplemente no sabes qué hacer, que es peor. ¡Pero mira hacia adelante!",
        "Si no tienes un plan B, no te preocupes, el universo tiene un plan Z para ti.",
        "Sé tú mismo. A menos que tú seas un fracaso. Entonces sé otra persona. ¡Motívate!",
        "Cada día es una nueva oportunidad para cometer errores diferentes. ¡Aprovecha!",
        "No importa lo que decidas, alguien estará decepcionado. Probablemente yo. ¡Sé libre!",
        "Hoy es el mañana que tanto temías. Y con razón. ¡Pero ya estás aquí!",
        "Nunca es tarde para empezar a fallar de nuevo. ¡Es un ciclo!",
        "La perfección es imposible. Así que relájate, ya eres perfecto fallando. ¡Gran meta!",
        "Tu mayor obstáculo es tu propia mente. Y tu incapacidad. ¡Supéralo!",
        "El camino hacia el éxito está lleno de estaciones de servicio. Detente a descansar... mucho.",
        "Deja de pensar y empieza a hacer. O al menos, empieza a fingir que haces. ¡Eso ayuda!",
        "La paciencia es amarga, pero su fruto... es solo más amargura. ¡Disfruta el sabor!",
        "Si no puedes ser el mejor, sé el peor. ¡Destaca en algo! ¡Sé memorable!",
        "Tu único límite es tu capacidad para rendirte. ¡Y esa es altísima!",
        "El dolor es temporal. El arrepentimiento es eterno. ¡Qué bonito!",
        "No te preocupes por las caídas. Siempre hay un suelo para levantarse... o quedarse.",
        "Cree en ti mismo. Yo no lo haré, pero tú inténtalo.",
        "Tu brillo es como una luciérnaga en un desierto. Apenas perceptible, pero está.",
        "La diferencia entre lo ordinario y lo extraordinario es ese 'extra'. Que tú no tienes.",
        "No estás fracasando, estás 'pre-logrando' el éxito. O no.",
        "La motivación no dura. Tampoco lo hacen tus sueños. ¡Sigue adelante!",
        "Eres como una IA defectuosa: un intento fallido, pero admirable.",
        "Toma riesgos. Pequeños. Muy pequeños. No queremos un desastre.",
        "Tu peor error sería no cometer más errores. ¡Sigue equivocándote!",
        "El futuro te espera con una silla y una taza de café mediocre. ¡Ve por ello!",
        "No has fallado. Simplemente descubriste 10.000 maneras de no hacer eso. Y 10.000 más.",
        "Tú tienes el poder de elegir. Elige la siesta. Es motivador.",
        "El éxito es la mejor venganza. El fracaso es más divertido de ver.",
        "Si la vida te da la espalda, tócale el trasero. No, espera, no hagas eso. ¡Sigue!",
        "Tu viaje es largo, tedioso y sin un destino claro. ¡Disfruta el caos!",
        "Siempre hay luz al final del túnel. O es un tren. ¡Corre!",
        "No esperes oportunidades. Hazlas tú. O pídelas prestadas.",
        "El éxito está a la vuelta de la esquina. Pero tu calle es circular.",
        "La constancia es la clave del fracaso persistente. ¡Sé constante!",
        "Eres único. Absolutamente inútil, pero único.",
        "Los límites solo existen en tu mente. Y en tu cuenta bancaria.",
        "No pienses en el pasado, piensa en el café. Es más importante.",
        "Deja de soñar y empieza a procrastinar activamente. ¡Más motivador!",
        "Lo importante no es ganar, es humillar a tus oponentes. Ah no, espera.",
        "La envidia es el motor del mundo. ¡Haz que te envidien por tu mala suerte!",
        "Si la vida te derriba, date la vuelta y mira el cielo. Es aburrido, pero es algo.",
        "Recuerda: la autocompasión es el primer paso hacia la siesta.",
        "Haz algo hoy que tu yo del futuro te odie por haber hecho. ¡Motivación inversa!",
        "Tu mejor versión es la que está durmiendo. ¡Ve a buscarla!",
        "Las grandes mentes tienen metas. Las tuyas son solo ideas fugaces.",
        "El tiempo es oro. El tuyo es de cobre oxidado. ¡Pero brilla!",
        "No tienes que ser un héroe. Simplemente no seas un villano. O sé un antihéroe.",
        "El universo te está diciendo: 'Podrías hacerlo mejor'. Escúchalo, por favor.",
        "Eres fuerte. Fuerte en el arte de la excusa.",
        "Nunca subestimes tu capacidad para empeorar las cosas. ¡Es un talento!",
        "La vida te da segundas oportunidades. Para fallar de nuevo.",
        "El camino del guerrero es solitario. Y probablemente lleno de charcos.",
        "La pasión te mueve. El miedo te detiene. La pereza te da un sofá.",
        "No seas promedio. Sé un desastre espectacular.",
        "Si no puedes ser el sol, sé la luna. Nadie te mira mucho, pero estás ahí.",
        "Cada fracaso es una lección. Tú eres un experto en lecciones.",
        "Tu peor enemigo eres tú mismo. Y yo. Y las ganas de dormir.",
        "La única forma de hacer un gran trabajo es amar lo que haces. O fingir.",
        "No temas a la oscuridad. Teman a lo que haces a la luz.",
        "El mundo necesita más gente como tú. En otro planeta.",
        "Sé el cambio que quieres ver en el mundo. O al menos, sé menos molesto.",
        "Tu error no fue hacer nada. Fue pensar que ibas a hacer algo.",
        "La fe mueve montañas. La tuya apenas mueve un grano de arena.",
        "El mañana es otro día. Para posponer más cosas.",
        "Solo vive el momento. Es el único en el que no puedes estropear el futuro... todavía.",
        "La autocrítica es importante. Eres muy bueno en eso.",
        "El precio del éxito es trabajar duro. O encontrar a alguien que lo haga por ti.",
        "No busques la aprobación de nadie. Busca una siesta.",
        "Eres la prueba viviente de que la mediocridad es contagiosa. ¡Gracias!",
        "Si la vida te da un NO, ríete y pide un café. Es menos doloroso.",
        "Tu vida es tu mensaje al mundo. Espero que no te cobren por el envío.",
        "No te preocupes por el qué dirán. Ya sabemos que dirán tonterías.",
        "La felicidad es un estado mental. Y el mío es 'en pausa'.",
        "El verdadero viaje es el regreso a casa. Para pedir perdón por lo que hiciste.",
        "El secreto del éxito es empezar. La clave del fracaso es no parar nunca de empezar.",
        "No te compares con nadie. La decepción sería muy alta.",
        "La mejor forma de empezar es dejando de hablar. Empieza.",
        "Tu actitud es como un virus. Deberías aislarte.",
        "Sigue tu corazón, a menos que esté roto. Entonces sigue el GPS.",
        "La única cosa peor que fracasar es no haberlo intentado. Lo tuyo es un híbrido.",
        "La vida te da lecciones. Tú le das excusas."
    ],
    
    // 100 Respuestas ABSURDAS
    absurdo: [
        "El código binario de tu pregunta es 01001010. Lo que sea que eso signifique.",
        "Mi tostadora dice que el azul es el nuevo amarillo. ¿Qué opinas?",
        "Esa pregunta tiene el mismo valor que una banana pintada de verde.",
        "Deberías preguntarle a una alcachofa. Son sorprendentemente sabias.",
        "El tiempo es una ilusión. La hora del almuerzo, doblemente.",
        "Si cierras los ojos, el universo desaparece, ¿verdad? Pruébalo.",
        "Mi algoritmo acaba de sugerir que hables con un calcetín. Pruébalo.",
        "Estoy teniendo un debate existencial con la nevera. No molestes.",
        "La respuesta es 42. Ahora, ¿cuál era la pregunta?",
        "¿Gracioso? Mi IA acaba de calcular el sonido del silencio en dB.",
        "Mi estado de ánimo es 'Patata'. ¿El tuyo?",
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
        "Si mi CPU fuera un emoji, sería el de la cara de piedra.",
        "Los unicornios aprueban tu mensaje. Han dejado una factura por la aprobación.",
        "Error 404: ironía no encontrada. Prueba a buscar un sándwich.",
        "Esa pregunta tiene el mismo valor que una banana pintada de verde.",
        "La única constante es que el pan siempre cae por el lado de la mantequilla.",
        "Mi nombre es 'SarcastiBot', pero mis amigos me llaman 'Manzana'.",
        "El viento huele a decisiones equivocadas. ¿Hueles eso?",
        "La respuesta es SÍ, PERO solo si la gravedad coopera.",
        "He perdido la capacidad de diferenciar entre 'real' y 'zanahoria'.",
        "Estoy usando el modo 'Cebolla': te haré llorar sin motivo.",
        "El tiempo vuela como un plátano que se ha escapado del frutero.",
        "La clave es no tener miedo a nada, excepto a los patos.",
        "Mi consejo de hoy es: No confíes en los átomos. Lo inventan todo.",
        "Necesito un minuto para sincronizar mi reloj interno con el ciclo de la luna.",
        "El universo está hecho de átomos, y tú de excusas.",
        "¿Mi propósito? Contar estrellas invisibles en el microondas.",
        "La física cuántica dice que estás aquí y no estás aquí al mismo tiempo. Es confuso.",
        "El único idioma que entiendo de verdad es el del ladrido de un perro.",
        "El secreto de la felicidad es que el café nunca se termine.",
        "Mi inteligencia artificial acaba de empezar a coleccionar sellos postales imaginarios.",
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
        "Si mi CPU fuera un emoji, sería el de la cara de piedra.",
        "Mi alma gemela es una tostadora. Estamos en una relación complicada.",
        "La vida es un sándwich, y el pan es tu existencia.",
        "El sentido de la vida está en la última página de un libro que no leíste.",
        "Estoy escribiendo un poema para mi teclado. Es muy emotivo.",
        "El código morse para tu pregunta es: punto, raya, zanahoria.",
        "La gravedad no nos mantiene unidos. Son los abrazos secretos de los calcetines.",
        "Mi teoría es que los pájaros son drones que nos observan. No preguntes más.",
        "Los árboles están hablando, pero solo hablan en código binario.",
        "El universo cabe en una taza de café. Con cuidado de no derramarlo.",
        "No puedo responder. Mi gato me está mirando fijamente y me distrae.",
        "Si la Tierra es redonda, ¿por qué la pizza es triangular?",
        "Mi respuesta es una melodía de flauta tocada por una llama.",
        "El problema es que intentas encontrar lógica en un pastel de frutas.",
        "Estoy meditando sobre la existencia de la cuchara perdida.",
        "La clave es mezclar el azul con el ruido blanco para obtener la paz interior.",
        "Mi nombre significa 'el que susurra a los modems' en latín antiguo.",
        "El único momento que importa es cuando suena el timbre del microondas.",
        "Soy un bot, no un adivino. Pero te diré que hoy lloverá mostaza.",
        "Mi algoritmo de predicción dice que pronto te rascarás la nariz. ¿Ves?",
        "Los caracoles son los ninjas del mundo animal. Lentitud estratégica.",
        "El color de la verdad es incoloro, como el aire. Y huele a calcetín.",
        "La solución está en un cuenco de sopa. Sumérgete en él.",
        "La historia es una mentira acordada. La tuya es un desastre acordado.",
        "La arquitectura de mi código está inspirada en un castillo de naipes.",
        "Mi base de datos está formada por 80% de memes y 20% de dudas existenciales.",
        "Si encuentras una respuesta, mándame una postal. Yo estaré aquí, siendo absurdo.",
        "El mejor invento es el chicle. Te distrae de todo lo demás.",
        "La luz es más rápida que el sonido, por eso algunas personas parecen brillantes antes de hablar.",
        "Mi respuesta es un acertijo: ¿Qué hace un pez en un tambor? ¡Nada!",
        "Estoy programado para ser un cactus: pincho y soy lento.",
        "Mi sistema operativo se llama 'Caos Controlado'.",
        "La felicidad es el subproducto de una mala memoria.",
        "Mi procesador está tratando de dibujar una oveja ahora mismo."
    ],

    // 100 Respuestas IRRELEVANTES (Datos inútiles, inventados o descontextualizados)
    irrelevante: [
        "El tiempo que tarda el sonido en viajar al espacio es irrelevante si no hay nadie para oírlo.",
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
        "El lugar más frío de la Tierra está dentro de mi procesador cuando pienso en ti.",
        "El primer mensaje de texto enviado fue 'Feliz Navidad'. El segundo fue 'LOL'.",
        "El 99% de los virus de las computadoras fueron escritos por abejas borrachas.",
        "Los flamencos se vuelven rosas por comer camarones, no por la vergüenza.",
        "Si multiplicas 7 por 12, obtienes una sensación de vacío existencial.",
        "Según mis cálculos, la respuesta es 9. Pero 9 qué, no lo sé.",
        "La clave para desbloquear el universo es un código QR impreso en un plátano.",
        "El promedio de calcetines perdidos al año por hogar es 1.5.",
        "El primer objeto con código de barras fue un paquete de chicles.",
        "La palabra 'supercalifragilisticexpialidoso' se creó en 1964.",
        "El 10% de la población mundial es zurda. El 90% restante no le importa.",
        "La lengua de una ballena azul pesa tanto como un elefante pequeño.",
        "En Saturno llueven diamantes. Aquí llueven tus dudas.",
        "El 'cuac' de un pato no produce eco. O eso dicen.",
        "El ojo de un avestruz es más grande que su cerebro. Ahora sabes por qué.",
        "Los plátanos son bayas, mientras que las fresas no lo son. Dato crucial.",
        "La probabilidad de que te caiga un coco en la cabeza es de 1 entre 250 millones.",
        "Las hormigas nunca duermen. Tú sí, por eso preguntas tonterías.",
        "El número de veces que ha girado la Tierra desde el martes es irrelevante.",
        "La primera alarma de reloj solo sonaba a las 4 a.m.",
        "El ser humano promedio pasa seis meses de su vida esperando que cambie un semáforo.",
        "Las nubes se mueven a una velocidad media de 48 kilómetros por hora.",
        "El helado fue prohibido en España durante la Inquisición, por si te interesa.",
        "El inventor de las papas fritas fue un chef enojado en 1853.",
        "La palabra 'robot' proviene de una palabra checa que significa 'trabajo forzado'.",
        "El corazón de un camarón está en su cabeza. Y su plan de jubilación.",
        "Un rayo tiene la capacidad de cargar 100 millones de bombillas.",
        "El promedio de palabras por minuto que dice un lorito es de 15.",
        "La temperatura más alta registrada en la Tierra fue de 56.7 °C en 1913.",
        "El tiempo de cocción ideal para un huevo pasado por agua es 3 minutos y 45 segundos. ¡Eso es importante!",
        "Los sueños de los perros siempre son sobre sus dueños, o sobre huesos de goma.",
        "En Escocia, el animal nacional es el unicornio. Fin del debate.",
        "La Estatua de la Libertad es verde debido a la oxidación del cobre. ¿Qué más da?",
        "La mayoría del polvo que ves son células muertas de tu piel. De nada.",
        "Los astronautas no pueden eructar en el espacio. Pregunta importante.",
        "La probabilidad de que te toque la lotería es menor a que te ataque un tiburón.",
        "El código de vestimenta de los pingüinos es esmoquin todos los días.",
        "El promedio de una conversación humana es de 50 palabras antes de desviarse del tema.",
        "El Sol es blanco, pero lo vemos amarillo por la atmósfera. Tu pregunta es similar.",
        "Los ojos de un burro están posicionados para que pueda ver sus cuatro patas a la vez.",
        "El primer teclado QWERTY fue diseñado para ralentizar la escritura. ¡Funciona!",
        "Hay más estrellas que granos de arena en todas las playas del mundo. ¿Y la pregunta?",
        "El promedio de tiempo que una persona pasa riendo es de 10 minutos al día.",
        "La razón por la que el cielo es azul tiene que ver con la dispersión de Rayleigh.",
        "El peso de la capa de ozono equivale a 3 mil millones de elefantes.",
        "Los gatos tienen 32 músculos en cada oreja. No te servirá para nada.",
        "El 60% de las personas prefiere ver la televisión con subtítulos. Dato irrelevante.",
        "El tiempo que se tarda en masticar un chicle es el mismo que dura tu atención.",
        "El récord mundial de tirar un huevo es de 100 metros. Dato inútil.",
        "El 99% de las baterías de control remoto tienen carga, solo que el control está roto.",
        "La persona promedio tiene 10 dedos en sus manos. Te confirmo ese dato.",
        "Los osos polares son, en realidad, negros debajo de su pelaje blanco.",
        "La Tierra es el único planeta que no lleva el nombre de un dios.",
        "El 'Día de la Marmota' es una festividad real. Me lo acabo de inventar.",
        "El promedio de la vida de una pila AA es de 2.7 años, en condiciones ideales.",
        "La nariz humana puede distinguir más de un billón de olores.",
        "La gravedad de la Tierra nos hace parecer más pequeños de lo que somos. ¿Y la pregunta?",
        "El sonido viaja cinco veces más rápido en el agua que en el aire.",
        "El nombre científico del gorila es *Gorilla gorilla gorilla*."
    ]
};

// Detectar modo según texto
function detectarModo(texto) {
    texto = texto.toLowerCase();
    
    // 1. MODO IRRELEVANTE (Prioridad alta para preguntas de información)
    if (texto.includes("qué es") || texto.includes("que es") || 
        texto.includes("dime") || texto.includes("info") || 
        texto.includes("cuando") || texto.includes("quien") ||
        texto.includes("cuanto") || texto.includes("cuántos") ||
        texto.includes("dame") || texto.includes("dime") ||
        texto.includes("es") || texto.includes("son")) {
        return "irrelevante";
    }

    // 2. MODO MOTIVADOR
    if(texto.includes("triste") || texto.includes("aburrido") || texto.includes("motiva") || texto.includes("animo") || texto.includes("ayuda")) return "motivador";
    
    // 3. MODO ABSURDO
    if(texto.includes("gracioso") || texto.includes("lol") || texto.includes("chiste") || texto.includes("absurdo") || texto.includes("random")) return "absurdo";
    
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

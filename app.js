// ===== Datos de cada zona clicable =====
// Todas las imágenes ahora viven en la carpeta img/

const buildingData = {
    "edificio-a": {
        nombre: "Edificio A",
        descripcion: "Edificio administrativo de 3 pisos.",
        detalle: `
<p><strong>Piso 1:</strong> Baños de mujeres, trámites, coordinaciones de carrera, sala de juntas.</p>
<p><strong>Piso 2:</strong> Control escolar, baños de hombres, despacho.</p>
<p><strong>Piso 3:</strong> Baño de mujeres, CELe, centro de auto acceso, tutorías, aulas A1 y A2.</p>
`,
        image: "img/Edificio_A.jpg",
        extraIds: ["pasillo-ab"],
        keywords: [
            "edificio a", "edificio administrativo",
            "trámites","tramites",
            "coordinaciones de carrera","coordinación de carrera","coordinacion de carrera",
            "sala de juntas",
            "control escolar",
            "despacho","dirección","direccion",
            "baños mujeres","baño mujeres","baño de mujeres",
            "baños hombres","baño hombres","baño de hombres",
            "cele","c.e.l.e",
            "centro de auto acceso","autoacceso",
            "tutorías","tutorias",
            "aula a1","aula a2",
            // nuevas palabras clave
            "salon","salones","aula","aulas","salon de clase","salones de clase",
            "salon a1","salon a2",
            "wc"
        ]
    },

    "edificio-b": {
        nombre: "Edificio B",
        descripcion: "Edificio académico de 3 pisos.",
        detalle: `
<p><strong>Piso 1:</strong> Servicio social, promoción deportiva, trámites de integrativa profesional, consultorio médico, módulo de exposiciones.</p>
<p><strong>Piso 2:</strong> Aulas B1–B5.</p>
<p><strong>Piso 3:</strong> Aulas B6–B10.</p>
`,
        image: "img/Edificio_B.jpg",
        extraIds: ["pasillo-ab"],
        keywords: [
            "edificio b",
            "servicio social",
            "promoción deportiva","promocion deportiva",
            "trámites de integrativa profesional","tramites de integrativa profesional",
            "consultorio médico","consultorio medico",
            "módulo de exposiciones","modulo de exposiciones",
            "aula b1","aula b2","aula b3","aula b4","aula b5",
            "aula b6","aula b7","aula b8","aula b9","aula b10",
            // nuevas palabras clave
            "salon","salones","aula","aulas","salon de clase","salones de clase"
        ]
    },

    "edificio-c": {
        nombre: "Edificio C",
        descripcion: "Edificio académico con cafetería, auditorio, laboratorios y aulas.",
        detalle: `
<p><strong>Piso 1:</strong> Baño de mujeres, cafetería, auditorio.</p>
<p><strong>Piso 2:</strong> Aulas C5–C8, laboratorio de química, laboratorio de electricidad y electrónica, laboratorio de métodos, baños de hombres.</p>
<p><strong>Piso 3:</strong> Sala de cómputo C7, cámara Gesell, baño de mujeres, laboratorio de criminalística.</p>
`,
        image: "img/Edificio_C.jpg",
        keywords: [
            "edificio c",
            "cafetería","cafeteria",
            "auditorio",
            "laboratorio de química","laboratorio de quimica",
            "laboratorio de electricidad y electrónica","laboratorio de electricidad y electronica",
            "laboratorio de métodos","laboratorio de metodos",
            "sala de cómputo","sala de computo",
            "cámara gesell","camara gesell",
            "laboratorio de criminalística","laboratorio de criminalistica",
            "baños hombres","baño hombres",
            "baños mujeres","baño mujeres",
            "aula c5","aula c6","aula c7","aula c8",
            // nuevas palabras clave
            "salon","salones","aula","aulas","salon de clase","salones de clase",
            "wc"
        ]
    },

    "edificio-d": {
        nombre: "Edificio D",
        descripcion: "Edificio académico de 3 pisos.",
        detalle: `
<p><strong>Piso 1:</strong> Almacén módulo E, aulas D11–D15.</p>
<p><strong>Piso 2:</strong> Aulas D16–D20, baños de hombres.</p>
<p><strong>Piso 3:</strong> Aulas D21–D25, baño de mujeres.</p>
`,
        image: "img/Edificio_D sin pasillo.jpg",
        extraIds: ["pasillo-d"],
        keywords: [
            "edificio d",
            "almacén módulo e","almacen modulo e",
            "baños hombres","baño hombres",
            "baño de mujeres","baños mujeres",
            "aula d11","aula d12","aula d13","aula d14","aula d15",
            "aula d16","aula d17","aula d18","aula d19","aula d20",
            "aula d21","aula d22","aula d23","aula d24","aula d25",
            // nuevas palabras clave
            "salon","salones","aula","aulas","salon de clase","salones de clase",
            "wc"
        ]
    },

    "edificio-e": {
        nombre: "Edificio E",
        descripcion: "Edificio académico de 3 pisos.",
        detalle: `
<p><strong>Piso 1:</strong> Laboratorio de caracterización, aulas E26–E30.</p>
<p><strong>Piso 2:</strong> Aulas E31–E35, baños de hombres.</p>
<p><strong>Piso 3:</strong> Aulas E36–E40, baño de mujeres.</p>
`,
        image: "img/Edificio_E.jpg",
        extraIds: ["pasillo-ef"],
        keywords: [
            "edificio e",
            "laboratorio de caracterización","laboratorio de caracterizacion",
            "baños hombres","baño hombres",
            "baño de mujeres","baños mujeres",
            "aula e26","aula e27","aula e28","aula e29","aula e30",
            "aula e31","aula e32","aula e33","aula e34","aula e35",
            "aula e36","aula e37","aula e38","aula e39","aula e40",
            // nuevas palabras clave
            "salon","salones","aula","aulas","salon de clase","salones de clase",
            "wc"
        ]
    },

    "edificio-f": {
        nombre: "Edificio F",
        descripcion: "Edificio académico de 3 pisos con laboratorios y fábrica de TICs.",
        detalle: `
<p><strong>Piso 1:</strong> Laboratorio de automatización, laboratorio de manufactura.</p>
<p><strong>Piso 2:</strong> Laboratorio de metrología, sala de cómputo F-8, Unidad de TICs, sala de cómputo F-9.</p>
<p><strong>Piso 3:</strong> Sala de cómputo F10–F13.</p>
`,
        image: "img/Edificio_F.jpg",
        extraIds: ["pasillo-ef"],
        keywords: [
            "edificio f",
            "laboratorio de automatización","laboratorio de automatizacion",
            "laboratorio de manufactura",
            "laboratorio de metrología","laboratorio de metrologia",
            "sala de cómputo f8","sala de computo f8",
            "sala de cómputo f9","sala de computo f9",
            "unidad de tics","tics",
            "sala de cómputo f10","sala de computo f10",
            "sala de cómputo f11","sala de computo f11",
            "sala de cómputo f12","sala de computo f12",
            "sala de cómputo f13","sala de computo f13",
            // nuevas palabras clave
            "salon","salones","aula","aulas","salon de clase","salones de clase"
        ]
    },

    /* PASILLOS */

    "pasillo-d": {
        nombre: "Pasillo del edificio D",
        descripcion: "Pasillo que conecta el edificio D con la zona central del campus.",
        detalle: `
<p>Pasillo de circulación del edificio D. Comunica las aulas con la zona de canchas y otras áreas del campus.</p>
`,
        image: "img/Edificio_D con pasillo.jpg",
        extraIds: ["edificio-d"],
        keywords: [
            "pasillo d", "pasillo edificio d",
            "pasillo", "circulación", "circulacion"
        ]
    },

    "pasillo-ef": {
        nombre: "Pasillo de los edificios E y F",
        descripcion: "Pasillo compartido entre los edificios E y F.",
        detalle: `
<p>Pasillo que conecta las plantas bajas y niveles superiores de los edificios E y F. Es una zona de circulación frecuente entre aulas.</p>
`,
        image: "img/Pasillo EF.jpg",
        extraIds: ["edificio-e", "edificio-f"],
        keywords: [
            "pasillo e", "pasillo f", "pasillo e y f",
            "pasillo edificios e y f",
            "pasillo", "circulación", "circulacion"
        ]
    },

    "pasillo-ab": {
        nombre: "Pasillo entre edificios A y B",
        descripcion: "Pasillo central que une los edificios A y B.",
        detalle: `
<p>Pasillo principal entre los edificios A y B. Desde aquí puedes acceder a las aulas, oficinas y al punto de reunión cercano.</p>
`,
        image: "img/Pasillo_A_B.jpg",
        extraIds: ["edificio-a", "edificio-b"],
        keywords: [
            "pasillo a", "pasillo b", "pasillo a y b",
            "pasillo edificios a y b",
            "pasillo", "circulación", "circulacion"
        ]
    },

    /* RESTO DE ÁREAS PRINCIPALES */

    "biblioteca": {
        nombre: "Biblioteca",
        descripcion: "Espacio de lectura, préstamo de libros y apoyo académico.",
        detalle: `
<p>La biblioteca cuenta con sala de lectura, un salón para clase, la fábrica de software y espacios para tutores.</p>
<p>Aquí puedes estudiar, leer, hacer tareas y solicitar préstamo de material.</p>
`,
        image: "img/Biblioteca.jpg",
        keywords: [
            "biblioteca","libros","préstamo","prestamo",
            "sala de lectura","lectura",
            "fábrica de software","fabrica de software","tutores",
            // nuevas palabras clave
            "salon","salones","aula","aulas","clase"
        ]
    },

    "difusion": {
        nombre: "Difusión cultural",
        descripcion: "Espacio para talleres artísticos y culturales.",
        detalle: `
<p>En Difusión Cultural se realizan actividades como baile, teatro y otros talleres culturales.</p>
`,
        image: "img/Modulo_Cultural.jpg",
        keywords: [
            "difusión","difusion","cultural","talleres","baile","teatro",
            "difusion cultural","difusión cultural"
        ]
    },

    "planteacion": {
        nombre: "Plantación / huerto",
        descripcion: "Área de cultivo y proyectos de jardinería.",
        detalle: `
<p>Zona destinada a proyectos de cultivo y jardinería de los estudiantes. Se han sembrado frijol, lechuga y otras plantas.</p>
`,
        image: "img/Huerto.jpg",
        keywords: ["huerto","plantación","plantacion","jardinería","jardineria","siembra","cultivo"]
    },

    "punto-reunion": {
        nombre: "Punto de reunión",
        descripcion: "Área segura en caso de sismos u otros eventos.",
        detalle: `
<p>Zona designada como punto de reunión en caso de sismos u otras contingencias. También se usa como espacio para eventos.</p>
`,
        image: "img/Punto_Reunion.jpg",
        keywords: ["punto de reunión","punto de reunion","sismo","evacuación","evacuacion","seguridad"]
    },

    "estacionamiento": {
        nombre: "Estacionamiento",
        descripcion: "Zona general para vehículos.",
        detalle: `
<p>Espacio de estacionamiento para la comunidad universitaria. No hay división estricta entre zonas de alumnos y maestros.</p>
`,
        image: "img/Estacionamiento.jpg",
        keywords: [
            "estacionamiento","autos","carros","vehículos","vehiculos","coches",
            "parking"
        ]
    },

    /* NUEVO: ENTRADA Y SALIDA PRINCIPAL */

    "entrada-alumnos": {
        nombre: "Entrada y salida de alumnos",
        descripcion: "Paso peatonal principal para entrar y salir del campus.",
        detalle: `
<p>Acceso peatonal donde normalmente ingresan y salen los alumnos.</p>
<p>Respeta las indicaciones del personal de seguridad y las señalizaciones del piso.</p>
`,
        image: "img/Entrada.jpg",
        keywords: [
            "entrada","entrada principal","entrada alumnos","salida alumnos",
            "acceso peatonal","acceso principal","puerta principal"
        ]
    },

    "salida-vehiculos": {
        nombre: "Salida de vehículos",
        descripcion: "Carril de salida para autos desde el estacionamiento.",
        detalle: `
<p>Por aquí salen los vehículos del estacionamiento hacia la avenida principal.</p>
<p>Mantente siempre sobre la banqueta, respeta el semáforo y cruza solo por las zonas peatonales.</p>
`,
        image: "img/Salida.jpg",
        keywords: [
            "salida de vehículos","salida vehiculos",
            "salida autos","salida coches",
            "salida estacionamiento","acceso vehicular","acceso coches"
        ]
    },

    "cancha-basquet": {
        nombre: "Canchas de fútbol y basquetbol (superior izquierda)",
        descripcion: "Canchas mixtas para prácticas deportivas.",
        detalle: `
<p>Canchas de fútbol y basquetbol ubicadas a la izquierda del estacionamiento, en la parte media del campus.</p>
`,
        image: "img/Canchas_Futbol_Y_Baquetbol_1.jpg",
        keywords: [
            "cancha","canchas",
            "futbol","fútbol",
            "basquet","básquet","basquetbol",
            "deportes","deportivo","canchas deportivas"
        ]
    },

    "fronton": {
        nombre: "Canchas de frontón",
        descripcion: "Área con pared para practicar frontón.",
        detalle: `
<p>Canchas de frontón ubicadas entre las canchas deportivas del lado izquierdo.</p>
`,
        image: "img/Cancha_Fronton.jpg",
        keywords: ["frontón","fronton","raqueta","pelota pared","cancha","canchas","deportes"]
    },

    "cancha-mixta": {
        nombre: "Canchas de fútbol y basquetbol (inferior izquierda)",
        descripcion: "Canchas multiuso para fútbol y basquetbol.",
        detalle: `
<p>Canchas deportivas ubicadas en la parte baja izquierda del campus.</p>
`,
        image: "img/Basquet 2.jpg",
        keywords: [
            "cancha","canchas",
            "mixta",
            "futbol","fútbol",
            "basquet","básquet","basquetbol",
            "deportes","canchas deportivas"
        ]
    },

    "cancha-rapido": {
        nombre: "Canchas de fútbol rápido",
        descripcion: "Canchas de fútbol rápido en la parte superior del campus.",
        detalle: `
<p>Canchas de fútbol rápido situadas sobre la zona de los edificios D/E/F y el edificio C.</p>
`,
        image: "img/Canchas_Futbol_Rapido.jpg",
        keywords: [
            "futbol rápido","futbol rapido","rápido","rapido","fut7",
            "cancha","canchas","canchas de futbol"
        ]
    },

    /* ÁREAS VERDES – GRUPO 1: ZONAS DE CONVIVENCIA Y DESCANSO */

    "area-verde-1": {
        nombre: "Área verde",
        descripcion: "Zona de convivencia y descanso al aire libre.",
        detalle: `
<p>Área verde pensada para que los estudiantes puedan descansar, platicar con amigos y tomar aire entre clases. Cuenta con sombra natural y suele ser un punto de encuentro informal dentro del campus.</p>
<p>Es ideal para leer, comer algo rápido o simplemente relajarse unos minutos antes de la siguiente materia.</p>
`,
        image: "img/Area_Verde_Estacionamiento.jpg",
        keywords: ["area verde","área verde","zona verde","descanso","convivencia","sombras","pastito","cesped","césped"]
    },

    "area-verde-2": {
        nombre: "Área verde",
        descripcion: "Zona de convivencia y descanso al aire libre.",
        detalle: `
<p>Área verde pensada para que los estudiantes puedan descansar, platicar con amigos y tomar aire entre clases. Cuenta con sombra natural y suele ser un punto de encuentro informal dentro del campus.</p>
<p>Es ideal para leer, comer algo rápido o simplemente relajarse unos minutos antes de la siguiente materia.</p>
`,
        image: "img/Area_Verde_A_B.jpg",
        keywords: ["area verde","área verde","zona verde","descanso","convivencia","sombras","pastito","cesped","césped"]
    },

    "area-verde-3": {
        nombre: "Área verde",
        descripcion: "Zona de convivencia y descanso al aire libre.",
        detalle: `
<p>Área verde pensada para que los estudiantes puedan descansar, platicar con amigos y tomar aire entre clases. Cuenta con sombra natural y suele ser un punto de encuentro informal dentro del campus.</p>
<p>Es ideal para leer, comer algo rápido o simplemente relajarse unos minutos antes de la siguiente materia.</p>
`,
        image: "img/Area_Verde_Futbol_Rapido.jpg",
        keywords: ["area verde","área verde","zona verde","descanso","convivencia","sombras","pastito","cesped","césped"]
    },

    "area-verde-4": {
        nombre: "Área verde",
        descripcion: "Zona de convivencia y descanso al aire libre.",
        detalle: `
<p>Área verde pensada para que los estudiantes puedan descansar, platicar con amigos y tomar aire entre clases. Cuenta con sombra natural y suele ser un punto de encuentro informal dentro del campus.</p>
<p>Es ideal para leer, comer algo rápido o simplemente relajarse unos minutos antes de la siguiente materia.</p>
`,
        image: "img/Area_Verde_Biblioteca.png",
        keywords: ["area verde","área verde","zona verde","descanso","convivencia","sombras","pastito","cesped","césped"]
    },

    /* ÁREAS VERDES – GRUPO 2: CORREDORES ECOLÓGICOS Y TRANSICIÓN */

    "area-verde-7": {
        nombre: "Área verde",
        descripcion: "Corredor ecológico y zona de transición dentro del campus.",
        detalle: `
<p>Esta área verde funciona como un pequeño corredor ecológico que conecta diferentes partes del campus. Ayuda a que el ambiente sea más fresco y agradable mientras te desplazas entre edificios.</p>
<p>Aunque también se puede usar para descansar un momento, su función principal es acompañar los caminos y servir como paso sombreado para la comunidad universitaria.</p>
`,
        image: "img/Area_Verde_Canchas.jpg",
        keywords: ["area verde","corredor","zona verde","transición","transicion","paso","sombra","camino"]
    },

    "area-verde-8": {
        nombre: "Área verde",
        descripcion: "Corredor ecológico y zona de transición dentro del campus.",
        detalle: `
<p>Esta área verde funciona como un pequeño corredor ecológico que conecta diferentes partes del campus. Ayuda a que el ambiente sea más fresco y agradable mientras te desplazas entre edificios.</p>
<p>Aunque también se puede usar para descansar un momento, su función principal es acompañar los caminos y servir como paso sombreado para la comunidad universitaria.</p>
`,
        image: "img/Area_Verde_D_D.jpg",
        keywords: ["area verde","corredor","zona verde","transición","transicion","paso","sombra","camino"]
    },

    "area-verde-9": {
        nombre: "Área verde",
        descripcion: "Corredor ecológico y zona de transición dentro del campus.",
        detalle: `
<p>Esta área verde funciona como un pequeño corredor ecológico que conecta diferentes partes del campus. Ayuda a que el ambiente sea más fresco y agradable mientras te desplazas entre edificios.</p>
<p>Aunque también se puede usar para descansar un momento, su función principal es acompañar los caminos y servir como paso sombreado para la comunidad universitaria.</p>
`,
        image: "img/Area_Verde_Edificio_D.jpg",
        keywords: ["area verde","corredor","zona verde","transición","transicion","paso","sombra","camino"]
    },

    "area-verde-10": {
        nombre: "Área verde",
        descripcion: "Corredor ecológico y zona de transición dentro del campus.",
        detalle: `
<p>Esta área verde funciona como un pequeño corredor ecológico que conecta diferentes partes del campus. Ayuda a que el ambiente sea más fresco y agradable mientras te desplazas entre edificios.</p>
<p>Aunque también se puede usar para descansar un momento, su función principal es acompañar los caminos y servir como paso sombreado para la comunidad universitaria.</p>
`,
        image: "img/Area_Verde_Entrada_A.jpg",
        keywords: ["area verde","corredor","zona verde","transición","transicion","paso","sombra","camino"]
    },

    "area-verde-11": {
        nombre: "Área verde",
        descripcion: "Corredor ecológico y zona de transición dentro del campus.",
        detalle: `
<p>Esta área verde funciona como un pequeño corredor ecológico que conecta diferentes partes del campus. Ayuda a que el ambiente sea más fresco y agradable mientras te desplazas entre edificios.</p>
<p>Aunque también se puede usar para descansar un momento, su función principal es acompañar los caminos y servir como paso sombreado para la comunidad universitaria.</p>
`,
        image: "img/Area_Verde_Arriba_Entrada.jpg",
        keywords: ["area verde","corredor","zona verde","transición","transicion","paso","sombra","camino"]
    },

    "zona-peligro-1": {
        nombre: "Zona de precaución por serpientes",
        descripcion: "Área donde se han detectado serpientes de cascabel.",
        detalle: `
<p>En esta zona se han visto serpientes de cascabel. Evita caminar por el pasto alto, no introduzcas manos en hoyos o piedras y reporta cualquier avistamiento al personal de seguridad.</p>
`,
        image: "img/Serpientes_Cascabel.jpg",
        keywords: ["serpientes","serpiente","cascabel","zona de riesgo","peligro","precaución"]
    },

    "zona-peligro-2": {
        nombre: "Zona de riesgo (serpientes de cascabel)",
        descripcion: "Área con mayor presencia de serpientes de cascabel.",
        detalle: `
<p>Zona de riesgo por presencia de serpentes de cascabel. No te sientes en el suelo ni camines fuera de los caminos marcados.</p>
<p>En caso de ver una serpiente, aléjate con calma y avisa inmediatamente a la caseta de vigilancia.</p>
`,
        image: "img/Zona_De_Riesgo.jpg",
        keywords: ["serpientes de cascabel","cascabel","peligro serpientes","fauna","riesgo","precaución"]
    },

    /* NUEVO: LABORATORIO DE INNOVACIÓN */

    "lab-innovacion": {
        nombre: "Laboratorio de innovación",
        descripcion: "Espacio dedicado a proyectos de innovación y desarrollo tecnológico.",
        detalle: `
<p>Laboratorio donde se realizan proyectos de innovación, prototipos y actividades relacionadas con nuevas tecnologías.</p>
<p>Aquí se pueden llevar a cabo prácticas, trabajos en equipo y desarrollo de ideas para concursos o proyectos escolares.</p>
`,
        image: "img/Laboratorio_De_Innovacion.jpg",
        keywords: [
            "laboratorio de innovación","laboratorio de innovacion",
            "lab de innovación","lab de innovacion",
            "innovación","innovacion",
            "prototipos","tecnología","tecnologia","proyectos de innovación","proyectos de innovacion"
        ]
    },

    /* NUEVAS ZONAS: CASETA, POTROBÚS, MOTOS, BICICLETAS */

    "caseta": {
        nombre: "Caseta de vigilancia",
        descripcion: "Punto de control y acceso al campus.",
        detalle: `
<p>En la caseta de vigilancia se controla el acceso al campus. Aquí puedes reportar incidentes de seguridad, objetos perdidos o solicitar apoyo al personal de vigilancia.</p>
<p>También es un punto de referencia en caso de emergencias.</p>
`,
        image: "img/Caseta.jpg",
        keywords: [
            "caseta","vigilancia","seguridad","acceso","entrada","guardias"
        ]
    },

    "caseta-potrobus": {
        nombre: "Llegada de Potrobús",
        descripcion: "Zona donde llega y sale el Potrobús.",
        detalle: `
<p>Este es el punto donde llega y sale el Potrobús que conecta el campus con otras zonas.</p>
<p>Procura llegar con anticipación al horario de salida y respeta las filas y señalamientos.</p>
`,
        image: "img/Llegada_Bus.png",
        keywords: [
            "potrobús","potrobus","camión","transporte","ruta","parada"
        ]
    },

    "zona-motos": {
        nombre: "Estacionamiento de motos",
        descripcion: "Área destinada al estacionamiento de motocicletas.",
        detalle: `
<p>Zona señalizada para estacionar motocicletas de manera ordenada.</p>
<p>Respeta los cajones marcados y no bloquees los accesos peatonales.</p>
`,
        image: "img/Motos.png",
        keywords: [
            "motos","motocicletas","estacionamiento de motos"
        ]
    },

    "zona-bicicletas": {
        nombre: "Estacionamiento de bicicletas",
        descripcion: "Espacio pequeño destinado al resguardo de bicicletas.",
        detalle: `
<p>Área destinada a estacionar bicicletas. Se recomienda usar candado o cadena para asegurar tu bici.</p>
<p>Mantén el orden y no obstruyas los pasillos ni salidas de emergencia.</p>
`,
        image: "img/Bicicletas.png",
        keywords: [
            "bicicletas","bici","estacionamiento de bicicletas"
        ]
    },

    /* NUEVO: BAÑOS DEL CAMPUS (agrupa los WC) */

    "banos-campus": {
        nombre: "Baños del campus",
        descripcion: "Baños distribuidos en diferentes edificios del campus.",
        detalle: `
<p>Los baños se encuentran principalmente en los edificios A, C, D y E, además de algunos puntos señalados en el mapa con el ícono <strong>WC</strong>.</p>
<p>Ubica el WC más cercano y respeta siempre la limpieza de los sanitarios.</p>
`,
        image: "img/WC.png",
        extraIds: ["wc-1","wc-2","wc-3","wc-4"],
        keywords: [
            "baños","banos","baño","bano","sanitario","sanitarios",
            "wc","baños del campus","servicio sanitario"
        ]
    },

    /* NUEVO: RUTAS DE EVACUACIÓN (agrupa todos los letreros verdes) */

    "rutas-evacuacion": {
        nombre: "Rutas de evacuación",
        descripcion: "Señalamientos que indican el camino a seguir en una emergencia.",
        detalle: `
<p>Las rutas de evacuación están marcadas con letreros verdes en el mapa. En caso de sismo u otra emergencia, sigue las flechas hasta llegar al punto de reunión.</p>
<p>Es importante conocer estas rutas y participar en los simulacros del campus.</p>
`,
        image: "img/Ruta_Evacuacion.png",
        extraIds: [
            "ruta-evac-1","ruta-evac-2","ruta-evac-3",
            "ruta-evac-4","ruta-evac-5","ruta-evac-6","ruta-evac-7"
        ],
        keywords: [
            "ruta de evacuacion","ruta de evacuación",
            "rutas de evacuacion","rutas de evacuación",
            "evacuacion","evacuación",
            "salida de emergencia","salidas de emergencia",
            "simulacro","sismo"
        ]
    }
};

/* ===== Datos adicionales: mobiliario, árboles, pinos y puestos extra ===== */

const mobiliarioData = {
    "banca-1": {
        nombre: "Banca junto al edificio C",
        descripcion: "Ideal para descansar o comer algo.",
        image: "img/Bancas.png"
    },
    "banca-2": {
        nombre: "Banca junto a las canchas de futbol y basquetbol",
        descripcion: "Ideal para ver partidos o convivir.",
        image: "img/Bancas.png"
    },
    "banca-3": {
        nombre: "Banca junto a las canchas de futbol y basquetbol",
        descripcion: "Ideal para ver partidos o convivir.",
        image: "img/Bancas.png"
    },
    "banca-4": {
        nombre: "Banca junto a la llegada del Potrobús",
        descripcion: "Ideal para descansar o esperar la llegada del Potrobús .",
        image: "img/Bancas.png"
    },
    "banca-5": {
        nombre: "Banca junto a biblioteca",
        descripcion: "Ideal para estudiar, descansar o disfrutar un bocadillo.",
        image: "img/Bancas.png"
    },
    "bote-1": {
        nombre: "Bote de basura zona deportiva",
        descripcion: "Bote de basura junto a las canchas, para mantener el área limpia.",
        image: "img/Bote.png"
    },
    "bote-2": {
        nombre: "Bote de basura cerca de biblioteca",
        descripcion: "Bote de basura cercano a la biblioteca para desechar envases y envolturas.",
        image: "img/Bote.png"
    },
    "bote-3": {
        nombre: "Bote de basura entrada principal",
        descripcion: "Bote ubicado cerca de la caseta y entrada al campus.",
        image: "img/Bote.png"
    },
    // Árboles (solo 3)
    "arbol-1": {
        nombre: "Árbol",
        descripcion: "Árbol que aporta sombra en la zona norte del campus.",
        image: "img/Arbol.png"
    },
    "arbol-2": {
        nombre: "Árbol",
        descripcion: "Árbol dentro de las áreas verdes del campus.",
        image: "img/Arbol.png"
    },
    "arbol-3": {
        nombre: "Árbol",
        descripcion: "Árbol cercano a canchas, usado como sombra por estudiantes.",
        image: "img/Arbol.png"
    },
    // Pinos (solo 4)
    "pino-1": {
        nombre: "Pino",
        descripcion: "Pino que forma parte de la franja arbolada del lado izquierdo.",
        image: "img/Pinos.png"
    },
    "pino-2": {
        nombre: "Pino",
        descripcion: "Pino que aporta sombra y vegetación.",
        image: "img/Pinos.png"
    },
    "pino-3": {
        nombre: "Pino",
        descripcion: "Pino en la misma franja arbolada del campus.",
        image: "img/Pinos.png"
    },
    "pino-4": {
        nombre: "Pino",
        descripcion: "Pino situado hacia la parte baja de la franja izquierda.",
        image: "img/Pinos.png"
    }
};

// Info específica para puestos de tortas y aguas frescas
const puestosExtraData = {
    "tienda-tamales": {
        nombre: "Puesto de tortas",
        descripcion: "Puesto donde venden tortas y antojitos para comer entre clases.",
        image: "img/Tienda_Tamales.png"
    },
    "tienda-aguas": {
        nombre: "Aguas frescas",
        descripcion: "Puesto de aguas frescas con vaso amarillo, ideal para refrescarte.",
        image: "img/Puesto_Bebidas.png"
    }
};

// ===== Utilidades =====

function normalize(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

/** Limpia TODOS los tipos de resaltado */
function clearHighlights() {
    document
        .querySelectorAll(".highlight, .highlight-access")
        .forEach(el => {
            el.classList.remove("highlight");
            el.classList.remove("highlight-access");
        });
}

/**
 * Resalta zonas en el mapa.
 * @param {string|string[]} ids - id o lista de ids (claves de buildingData).
 * @param {boolean} includeExtras - si true, también resalta extraIds (para búsquedas).
 */
function highlightZones(ids, includeExtras = true) {
    clearHighlights();
    if (!Array.isArray(ids)) ids = [ids];

    ids.forEach(key => {
        const mainEl = document.getElementById(key);
        if (mainEl) {
            // Para entrada/salida usamos un resaltado especial
            if (key === "entrada-alumnos" || key === "salida-vehiculos") {
                mainEl.classList.add("highlight-access");
            } else {
                mainEl.classList.add("highlight");
            }
        }

        if (!includeExtras) return;

        const data = buildingData[key];
        if (data && Array.isArray(data.extraIds)) {
            data.extraIds.forEach(extraId => {
                const el = document.getElementById(extraId);
                if (el) el.classList.add("highlight");
            });
        }
    });
}

function setInfo(html) {
    const info = document.getElementById("info-content");
    if (info) {
        info.innerHTML = html;
    }
}

/**
 * Muestra una foto adaptando el tamaño según orientación:
 * horizontal → ocupa el ancho, vertical → más alta y angosta.
 */
function setPhoto(src, altText) {
    const panel = document.getElementById("photo-panel");
    if (!panel) return;

    if (!src) {
        panel.innerHTML = "<p>Selecciona un edificio o área para ver una foto de referencia.</p>";
        return;
    }

    const alt = altText || "Foto de referencia";

    const img = new Image();
    img.src = src;
    img.alt = alt;

    img.onload = () => {
        const isHorizontal = img.naturalWidth >= img.naturalHeight;
        img.className = isHorizontal ? "photo-img-horizontal" : "photo-img-vertical";
    };

    img.onerror = () => {
        panel.innerHTML = "<p>No se pudo cargar la imagen de referencia.</p>";
    };

    panel.innerHTML = "";
    panel.appendChild(img);
}

// ===== Búsqueda =====

function searchCampus(rawQuery) {
    const q = normalize(rawQuery.trim());
    if (!q) {
        setInfo("<p>Escribe algo para buscar (por ejemplo: <em>biblioteca</em>, <em>control escolar</em>, <em>baños</em>, <em>aula C3</em>…)</p>");
        clearHighlights();
        setPhoto(null);
        return;
    }

    const results = [];

    Object.entries(buildingData).forEach(([id, data]) => {
        // Solo buscamos en nombre + keywords para evitar falsos positivos
        const text = normalize(
            (data.nombre || "") + " " +
            (data.keywords || []).join(" ")
        );
        if (text.includes(q)) {
            results.push({ id, data });
        }
    });

    if (results.length === 0) {
        setInfo(`
<p>No se encontraron resultados para: <strong>${rawQuery}</strong>.</p>
<p>Prueba con otra palabra o más general, por ejemplo: <em>baños</em>, <em>biblioteca</em>, <em>control escolar</em>, <em>canchas</em>.</p>
        `);
        clearHighlights();
        setPhoto(null);
        return;
    }

    // En búsqueda SÍ incluimos extraIds para agrupar cosas relacionadas
    highlightZones(results.map(r => r.id), true);

    if (results.length === 1) {
        const r = results[0];
        setInfo(`
<p><strong>${r.data.nombre}</strong></p>
<p>${r.data.descripcion || ""}</p>
${r.data.detalle || ""}
<p style="margin-top:6px;font-size:0.8rem;color:#555;">Resultado para: <em>${rawQuery}</em></p>
        `);
        setPhoto(r.data.image || null, r.data.nombre);
    } else {
        let html = `<p>Se encontraron <strong>${results.length}</strong> lugares relacionados con: <em>${rawQuery}</em></p><ul>`;
        results.forEach(r => {
            html += `<li><strong>${r.data.nombre}</strong></li>`;
        });
        html += `</ul><p style="font-size:0.8rem;color:#555;">Los elementos resaltados en el mapa contienen lo que buscaste.</p>`;
        setInfo(html);
        setPhoto(null);
    }
}

// ===== Eventos de mapa (zonas principales) =====

function setupMapClicks() {
    Object.keys(buildingData).forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        const data = buildingData[id];

        // Accesibilidad
        el.setAttribute("role", "button");
        el.setAttribute("tabindex", "0");
        el.setAttribute("aria-label", data?.nombre || id);

        const showInfo = () => {
            highlightZones(id, false); // sólo lo que se clickea
            setInfo(`
<p><strong>${data.nombre}</strong></p>
<p>${data.descripcion || ""}</p>
${data.detalle || ""}
            `);
            setPhoto(data.image || null, data.nombre);
        };

        el.addEventListener("click", showInfo);

        el.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                showInfo();
            }
        });
    });
}

// ===== Iconos de guardias (personas) con mensajes cíclicos =====

function setupGuardIconsMessages() {
    const guard1 = document.getElementById("guard-1");
    const guard2 = document.getElementById("guard-2");

    if (!guard1 && !guard2) return;

    const mensajesGuardia = [
        "Para ingresar, recuerda traer tu credencial o tira de materias.",
        "Los horarios del Potrobús los puedes consultar en la página oficial de la UAEMéx.",
        "Puedes donar croquetas para los perritos que cuidan la universidad aquí en la caseta.",
        "Buen día, por favor respeta las normas de seguridad del campus.",
        "No olvides portar tu credencial visible dentro del campus.",
        "Si ves algo sospechoso, repórtalo de inmediato en la caseta."
    ];

    let indexG1 = 0;
    let indexG2 = 0;

    const clickGuard = (which) => {
        const idx = which === 1 ? indexG1 : indexG2;
        const msg = mensajesGuardia[idx];

        setInfo(`
<p><strong>Caseta de vigilancia</strong></p>
<p>${msg}</p>
        `);
        setPhoto("img/Caseta.jpg", "Caseta de vigilancia");

        if (which === 1) {
            indexG1 = (indexG1 + 1) % mensajesGuardia.length;
        } else {
            indexG2 = (indexG2 + 1) % mensajesGuardia.length;
        }
    };

    if (guard1) {
        guard1.setAttribute("role", "button");
        guard1.setAttribute("tabindex", "0");
        guard1.setAttribute("aria-label", "Guardia de seguridad 1");
        guard1.addEventListener("click", () => clickGuard(1));
        guard1.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                clickGuard(1);
            }
        });
    }

    if (guard2) {
        guard2.setAttribute("role", "button");
        guard2.setAttribute("tabindex", "0");
        guard2.setAttribute("aria-label", "Guardia de seguridad 2");
        guard2.addEventListener("click", () => clickGuard(2));
        guard2.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                clickGuard(2);
            }
        });
    }
}

// ===== Iconos de comida / taxis / aguas frescas =====

function setupFoodAndTaxiIcons() {
    const taxis = document.getElementById("base-taxis");
    const tacos = document.getElementById("tienda-tacos");
    const comida = document.getElementById("tienda-comida");
    const tortas = document.getElementById("tienda-tamales"); // ahora tortas
    const aguas = document.getElementById("tienda-aguas");

    if (taxis) {
        taxis.setAttribute("role", "button");
        taxis.setAttribute("tabindex", "0");
        taxis.setAttribute("aria-label", "Base de taxis");
        const show = () => {
            clearHighlights();
            taxis.classList.add("highlight");
            setInfo(`
<p><strong>Base de taxis</strong></p>
<p>Aquí puedes tomar un taxi para salir del campus hacia distintas rutas.</p>
<p>Pregunta el costo antes de abordar.</p>
            `);
            setPhoto("img/Base_Taxis.png", "Base de taxis");
        };
        taxis.addEventListener("click", show);
        taxis.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show();
            }
        });
    }

    if (tacos) {
        tacos.setAttribute("role", "button");
        tacos.setAttribute("tabindex", "0");
        tacos.setAttribute("aria-label", "Puesto de tacos");
        const show = () => {
            clearHighlights();
            tacos.classList.add("highlight");
            setInfo(`
<p><strong>Puesto de tacos</strong></p>
<p>Aquí suelen vender tacos para los estudiantes. Ideal para después de clases.</p>
            `);
            setPhoto("img/Puesto_Tacos.png", "Puesto de tacos");
        };
        tacos.addEventListener("click", show);
        tacos.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show();
            }
        });
    }

    if (comida) {
        comida.setAttribute("role", "button");
        comida.setAttribute("tabindex", "0");
        comida.setAttribute("aria-label", "Comida rápida");
        const show = () => {
            clearHighlights();
            comida.classList.add("highlight");
            setInfo(`
<p><strong>Comida rápida</strong></p>
<p>Hamburguesas, papas y otros antojitos para pasar el rato con tus amigos.</p>
            `);
            setPhoto("img/Puesto_Comida_Rapida.png", "Puesto de comida rápida");
        };
        comida.addEventListener("click", show);
        comida.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show();
            }
        });
    }

    if (tortas) {
        const data = puestosExtraData["tienda-tamales"];
        tortas.setAttribute("role", "button");
        tortas.setAttribute("tabindex", "0");
        tortas.setAttribute("aria-label", "Puesto de tortas");
        const show = () => {
            clearHighlights();
            tortas.classList.add("highlight");
            setInfo(`
<p><strong>${data.nombre}</strong></p>
<p>${data.descripcion}</p>
            `);
            setPhoto(data.image, data.nombre);
        };
        tortas.addEventListener("click", show);
        tortas.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show();
            }
        });
    }

    if (aguas) {
        const data = puestosExtraData["tienda-aguas"];
        aguas.setAttribute("role", "button");
        aguas.setAttribute("tabindex", "0");
        aguas.setAttribute("aria-label", "Puesto de aguas frescas");
        const show = () => {
            clearHighlights();
            aguas.classList.add("highlight");
            setInfo(`
<p><strong>${data.nombre}</strong></p>
<p>${data.descripcion}</p>
            `);
            setPhoto(data.image, data.nombre);
        };
        aguas.addEventListener("click", show);
        aguas.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show();
            }
        });
    }
}

// ===== Mobiliario: sillas, bancas, botes, árboles y pinos =====

function setupMobiliarioIcons() {
    Object.entries(mobiliarioData).forEach(([id, data]) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.setAttribute("role", "button");
        el.setAttribute("tabindex", "0");
        el.setAttribute("aria-label", data.nombre);

        const show = () => {
            clearHighlights();
            el.classList.add("highlight");
            setInfo(`
<p><strong>${data.nombre}</strong></p>
<p>${data.descripcion}</p>
            `);
            setPhoto(data.image || null, data.nombre);
        };

        el.addEventListener("click", show);
        el.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show();
            }
        });
    });
}

// ===== WC clickeables =====

function setupWCIcons() {
    const wcIcons = document.querySelectorAll(".icon-wc");
    if (!wcIcons.length) return;

    wcIcons.forEach((wc, index) => {
        wc.setAttribute("role", "button");
        wc.setAttribute("tabindex", "0");
        wc.setAttribute("aria-label", `Baños cercanos (${index + 1})`);

        const show = () => {
            clearHighlights();
            wc.classList.add("highlight");
            setInfo(`
<p><strong>Baños cercanos</strong></p>
<p>Este ícono marca la ubicación aproximada de baños dentro del edificio o zona cercana.</p>
<p>En algunos edificios hay separación de baños para hombres y mujeres por piso.</p>
            `);
            setPhoto("img/WC.png", "Señalamiento de baños");
        };

        wc.addEventListener("click", show);
        wc.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show();
            }
        });
    });
}

// ===== Rutas de evacuación clickeables =====

function setupEvacuationRoutes() {
    const routes = document.querySelectorAll(".ruta-evac-sign");
    if (!routes.length) return;

    routes.forEach((route, index) => {
        route.setAttribute("role", "button");
        route.setAttribute("tabindex", "0");
        route.setAttribute("aria-label", `Ruta de evacuación ${index + 1}`);

        const show = () => {
            clearHighlights();
            route.classList.add("highlight");
            setInfo(`
<p><strong>Ruta de evacuación</strong></p>
<p>Las rutas de evacuación indican el camino que debes seguir en caso de sismo u otra emergencia.</p>
<p>Sigue las flechas, mantén la calma, no corras y dirígete al punto de reunión señalado en el croquis.</p>
            `);
            setPhoto("img/Ruta_Evacuacion.png", "Ruta de evacuación");
        };

        route.addEventListener("click", show);
        route.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                show();
            }
        });
    });
}

// ===== Buscador =====

function setupSearch() {
    const input = document.getElementById("search-input");
    const btn = document.getElementById("search-btn");
    const clearBtn = document.getElementById("clear-btn");

    if (!input || !btn || !clearBtn) return;

    btn.addEventListener("click", () => searchCampus(input.value));

    input.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchCampus(input.value);
        }
    });

    clearBtn.addEventListener("click", () => {
        input.value = "";
        clearHighlights();
        setInfo("<p>Haz clic en un edificio o área del mapa, o utiliza el buscador para ver detalles.</p>");
        setPhoto(null);
        input.focus();
    });
}

// ===== Inicio =====

document.addEventListener("DOMContentLoaded", () => {
    setupMapClicks();
    setupSearch();
    setupGuardIconsMessages();
    setupFoodAndTaxiIcons();
    setupMobiliarioIcons();
    setupWCIcons();
    setupEvacuationRoutes();
});

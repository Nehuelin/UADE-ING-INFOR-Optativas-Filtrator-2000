
const subjects = [
    {name: "Acceso y Control de Datos", tag: ["webDev"], desc: "Aprender a usar base de datos para sitios web (backend incluido)."},
    {name: "Agricultura de Precisión", tag: ["agro"], desc: "Enfoque moderno para la gestión agrícola que utiliza tecnología avanzada para optimizar la producción y reducir los desperdicios. Su objetivo principal es tomar decisiones basadas en datos, maximizando la eficiencia y sostenibilidad en el uso de recursos como agua, fertilizantes, semillas y pesticidas."},
    {name: "Analisis y Desarrollo de Audiencias", tag: ["period", "media"], desc: "El impacto digital sobre el análisis de audiencias mediáticas requiere del conocimiento de conceptosy el manejo de herramientas específicos para la investigación, el análisis, la producción y laplanificación de contenidos. Este curso se enfocará en el conocimiento de esas métricas y las herramientas que permiten suseguimiento para la toma de decisiones en la producción de contenidos, necesarias para el desarrollo profesional de los futuros comunicadores"},
    {name: "Aspectos Legales de las Start-Ups Tecnologicas", tag: ["empres"], desc: "No hay información disponible."},
    {name: "Auditoria Medica", tag: ["infoMed"], desc: "Entender sobre auditoria médica (proceso sistemático de evaluación y control que tiene como objetivo analizar la calidad, eficiencia, y adecuación de los servicios de salud que se brindan a los pacientes)."},
    {name: "Bioinformatica", tag: ["bioTec"], desc: "Aprender a usar instrumentos informáticos (Sistemas Operativos, Lenguajes de Programación y Base de Datos) para analizar datos que son objetos de análisis en la Bioinformática (ejemplo: ácidos nucleicos, analizar y anotar genomas, predecir y comparar la estructura y la función de proteínas)."},
    {name: "Biologia y Fisiologia Molecular", tag: ["bioTec"], desc: "Entender sobre el nivel de organización tisular, celular y molecular."},
    {name: "Ciencia de Datos", tag: ["format"], desc: "No hay información disponible."},
    {name: "Consultoria", tag: ["empres"], desc: "Aprender a ser consultor en una empresa."},
    {name: "Convergencia y Paradigmas Tecnologicos", tag: ["media"], desc: "Aprender sobre la historia de la convergencia de los medios y la tecnologia."},
    {name: "Costos Industriales", tag: ["econom", "mech"], desc: "Entender sobre contabilidad y costos."},
    {name: "Derecho Administrativo", tag: ["legal"], desc: "Aprender sobre el mundo juridico respecto a administraciones."},
    {name: "Derecho del Consumo en la Era Digital", tag: ["legal"], desc: "No hay información disponible."},
    {name: "Derecho del Trabajo y la Seguridad Social Comparado: Latinoamerica y Mercosur", tag: ["legal"], desc: "No hay información disponible."},
    {name: "Desarrollo Gerencial", tag: ["empres"], desc: "Aproximan al futuro profesional a su inserción dentro de la cultura 'entrepreneur' para la creación y puesta en marcha de una empresa, así como también la visión de 'intrapreneur' como líder de proyectos o nuevos negocios dentro de una empresa ya en marcha. En este sentido, también se hará hincapié durante la materia brindar al alumno las herramientas adecuadas para lograr un seguimiento y control de las actividades para mitigar los riesgos y buscar el mayor éxito posible de los proyectos que se ideen o encaren. La aplicación de casos y la disertación de 'practitioners' referentes del sector ayudarán al estudiante a la cabal comprensión de este proceso."},
    {name: "Direccion de Empresas", tag: ["empres"], desc: "Entender el proceso gerencial que demanda la direccion de una empresa."},
    {name: "Diseño de Experiencia de Usuario", tag: ["webDev"], desc: "Aprender metodologías que permitan identificar, corregir y proponer mejoras en los sistemas de información y generar un diseño de la interacción, escenarios, interfaz, formularios y navegación de aplicaciones centradas en el usuario."},
    {name: "Diseño de Interfaces y UX", tag: ["gameDev"], desc: "Aprender a producir elementos gráficos para un videojuego centrados en la usabilidad y la experiencia de Usuario."},
    {name: "Diseño y Desarrollo UX", tag: ["webDev"], desc: "Aprender a producir elementos gráficos para una pagina web centrados en la usabilidad y la experiencia de Usuario, utilizando distintos tipos de metodologias y investigaciones de mercado."},
    {name: "Diseño y Desarrollo Web", tag: ["webDev"], desc: "Aprender a hacer paginas web usando HTML, CSS y JavaScript."},
    {name: "Economia para la Salud", tag: ["infoMed", "econom"], desc: "Aprender a usar las herramientas propias de la economía para el análisis del mercado de salud, la gestión de los sistemas sanitarios y su fortalecimiento para promover la eficiencia y equidad de las políticas sanitarias."},
    {name: "Electrotecnia", tag: ["electro"], desc: "Aprender sobre programación y funciones de distintos tipos de circuitos eléctricos."},
    {name: "Electronica", tag: ["electro"], desc: "Aprender sobre el funcionamiento de dispositivos eléctricos."},
    {name: "Finanzas Publicas y Administracion Presupuestaria", tag: ["econom", "empres", "public"], desc: "Aprender sobre la economia publica y el manejo de presupuestos."},
    {name: "Fundamentos de Economia", tag: ["econom"], desc: "Aprender conceptos basicos de economia."},
    {name: "Fundamentos de Electronica", tag: ["electro", "telecom"], desc: "Aprender conceptos basicos de electronica."},
    {name: "Fundamentos de Epidemiologia, Estadistica y Salud Publica", tag: ["infoMed", "public"], desc: "Entender sobre epidemiologia, mediciones poblacionales y como afecta esto a la toma de decisiones en la salud pública."},
    {name: "Genetica Molecular", tag: ["bioTec"], desc: "Conocer la estructura molecular del gen y la evolución del genoma."},
    {name: "Gestion de Municipios y Desarrollo Local", tag: ["empres"], desc: "Aprender sobre la gestion de municipios y el desarrollo local del mismo."},
    {name: "Gestion de Personas en Organizaciones de Tecnologia", tag: ["empres"], desc: "No hay información disponible."},
    {name: "Gestion de Politicas Publicas", tag: ["public"], desc: "Aprender sobre el desarrollo de politicas publicas."},
    {name: "Gestion de Finanzas", tag: ["econom"], desc: "Aprender sobre la gestion de la economica en un ambito determinados."},
    {name: "Herramientas Informaticas Para la Gestion Hospitalaria y Sanatorial", tag: ["infoMed"], desc: "comprender las características generales de las herramientas informáticas, sus funciones, sus alcances, sus limitaciones, entre otros aspectos, para lograr el conocimiento teórico adecuado para la gestion hospitalaria."},
    {name: "Ingles II", tag: ["format"], desc: "Ingles."},
    {name: "Innovaciones Tecnologicas", tag: ["bioTec", "agro"], desc: "Conocer e interpretar los alcances de las las innovaciones biotecnológicas disponibles para el sector agropecuario"},
    {name: "Instalaciones Electromecanicas", tag: ["electro", "mech"], desc: "Aprender sobre las Instalaciones Electromecánicas Industriales desde el punto de vista eléctrico y mecánico."},
    {name: "Introduccion a la Actividad Agropecuaria", tag: ["agro"], desc: "Entender lo que se debe tener en cuenta para llevar a cabo actividades agropecuarias."},
    {name: "Introduccion a la Biologia Molecular y Celular", tag: ["bioTec"], desc: "Entender sobre los sistemas vivos y no vivos, las células (funciones e integración con los seres vivos) y las moléculas."},
    {name: "Introduccion al Desarrollo de Videojuegos", tag: ["gameDev"], desc: "Aprender sobre las distintas etapas de diseño y desarrollo de un videojuego (NO SE PROGRAMA)."},
    {name: "Investigacion Operativa", tag: ["empres"], desc: "Aprender sobre la toma decisiones en empresas."},
    {name: "La Gestion en la Salud Humana", tag: ["infoMed"], desc: "No hay información disponible."},
    {name: "Laboratorio de Entretenimiento Inmersivo y Aumentado", tag: ["gameDev"], desc: "No hay información disponible."},
    {name: "Laboratorio de Mediciones Electronicas", tag: ["electro"], desc: "No hay información disponible."},
    {name: "Liderazgo y Negociacion", tag: ["empres"], desc: "Entender sobre la filosofía del liderazgo y la negociación para el desarrollo de vínculos beneficiosos para la empresa."},
    {name: "Management de Deportes Electronicos y Gaming", tag: ["gameDev", "period"], desc: "Comprender la estructura y el funcionamiento del sector de eSports y Gaming, como asi tambien la vision y el estado de las empresas relacionadas a dichos eventos."},
    {name: "Management de Plataformas de Entretenimiento", tag: ["media"], desc: "No hay información disponible."},
    {name: "Marketing", tag: ["empres"], desc: "Entender el concepto de marketing."},
    {name: "Microbiologia General", tag: ["bioTec"], desc: "Entender los conceptos básicos y el funcionamiento metabólico y genético de los microorganismos."},
    {name: "Maquinas Hidraulicas y Circuitos", tag: ["mech"], desc: "Aprender sobre el funcionamiento y aplicación de máquinas hidráulicas y circuitos termohidráulicos."},
    {name: "Obligaciones y Contratos", tag: ["legal"], desc: "Entender sobre los conceptos de obligaciones y contratos desde el punto de vista jurídico."},
    {name: "Periodismo de Datos", tag: ["period"], desc: "No hay información disponible."},
    {name: "Planeamiento y Control de Gestion", tag: ["empres"], desc: "Aprender sobre la implementación de las mejores prácticas, principios, estrategias y tecnologías de gestión."},
    {name: "Plataformas Mediaticas", tag: ["media", "period"], desc: "Conocer los distintos tipos de plataformas y como irrumpen en la vida de la sociedad."},
    {name: "Plataformas y Negocios Web", tag: ["empres"], desc: "Entender sobre negocios, marketing y propagandas (ads) en la web."},
    {name: "Privacidad y Proteccion de Datos", tag: ["format"], desc: "No hay información disponible."},
    {name: "Procesamiento de Señales", tag: ["electro", "telecom"], desc: "Entender cómo funcionan los sistemas digitales y el procesamiento digital de las señales."},
    {name: "Procesos Industriales", tag: ["mech"], desc: "Entender sobre los distintos tipos de procesos industriales."},
    {name: "Programacion Operativa", tag: ["empres"], desc: "Aprender sobre programación orientada a los fines de una empresa, como también la evaluación de costos y toma de decisiones."},
    {name: "Programacion y Control de la Produccion", tag: ["mech"], desc: "Aprender a utilizar herramientas de software para controlar y planificar proyectos industriales."},
    {name: "Propiedad Intelectual y Nuevas Tecnologias", tag: ["format"], desc: "No hay información disponible."},
    {name: "Practica y Entrenamiento de Alta Competencia en eSports: FPS", tag: ["gameDev"], desc: "No hay información disponible."},
    {name: "Practica y Entrenamiento de Alta Competencia en eSports: MOBA", tag: ["gameDev"], desc: "No hay información disponible."},
    {name: "Recursos Tecnicos de la Industria del Entretenimiento", tag: ["media"], desc: "No hay información disponible."},
    {name: "Simulacion de Negocios", tag: ["empres"], desc: "Aprender sobre la toma de decisiones en la administración de negocios para lograr el éxito en la gestión de la empresa."},
    {name: "Sistemas de Informacion Geografica", tag: ["agro"], desc: "Aprender a interpretar un sistema de información geográfica especifica, validando los contenidos del mismo a los fines de aplicarlo a un área de interés, y poder desarrollar sistemas de apoyo al proceso de toma de decisiones para la administración de los recursos naturales en una región determinada"},
    {name: "Sistemas Digitales I", tag: ["telecom", "electro"], desc: "Aprender sobre el diseño y aplicacion de circuitos en sistemas digitales."},
    {name: "Sistemas Digitales II", tag: ["telecom", "electro"], desc: "Aprender sobre la programacion de dispositivos logicos programables y la simulacion con un software asociado a dichos dispositivos."},
    {name: "Sistemas Embebidos", tag: ["electro"], desc: "Aprender sobre el concepto de sistemas embebidos y la programacion en lenguaje C de dichas aplicaciones embebidas."},
    {name: "Sistemas Integrados de Gestion Empresarial", tag: ["empres"], desc: "Aprender a usar tecnologías para la gestión empresarial."},
    {name: "Sonido y Elaboracion de Banda Sonora", tag: ["media", "gameDev"], desc: "No hay información disponible."},
    {name: "Taller de Narrativas Digitales", tag: ["period", "media"], desc: "Conocer distintas formas de contar historias utilizando las tecnologias actuales."},
    {name: "Taller de Produccion Audiovisual", tag: ["media"], desc: "Entender las distintas etapas de producción, los recursos técnicos y humanos involucrados y los documentos necesarios en el proceso para su correcto desarrollo y gestión."},
    {name: "Taller de Programacion I", tag: ["webDev"], desc: "Aprender conceptos basicos de programacion en Python."},
    {name: "Taller de Programacion II", tag: ["webDev"], desc: "Aprender conceptos avanzados de programacion en Python, incluidos los conceptos de POO, el uso de JSON y XML y el uso de APIs y BOTs."},
    {name: "Taller de Programacion III", tag: ["webDev"], desc: "No hay información disponible."},
    {name: "Taller de Relato Deportivo", tag: ["period"], desc: "Aprender como relatar en el ambito deportivo."},
    {name: "Taller Multimedia", tag: ["media"], desc: "No hay información disponible."},
    {name: "Tecnologia de los Materiales Electronicos", tag: ["electro"], desc: "Aprender sobre los materiales utilizados en la construcción de dispositivos electrónicos y otros componentes relacionados a la electrónica."},
    {name: "Tecnologia para el Diseño", tag: ["media"], desc: "Aprender a utilizar tecnologías (tanto software como hardware) para el diseño."},
    {name: "Tecnologia para la Frontera Agropecuaria", tag: ["agro"], desc: "Conocer las tecnologías disponibles para uso en tierras marginales, adquirir los conocimientos para el uso de instrumental específico y adquirir criterios de análisis general para situaciones reales de producción en el sector agropecuario argentino."},
    {name: "Teleinformatica y Redes II", tag: ["telecom"], desc: "Aprender sobre servidores."},
    {name: "Teleinformatica y Redes III", tag: ["telecom"], desc: "Aprender sobre las redes a gran escala (WAN, APIs), la seguridad y la automatización de la red."},
    {name: "Teoria de la Administracion Publica", tag: ["public"], desc: "Aprender sobre la administracion publica y adentrarse en sus conceptos."},
    {name: "Teoria de los Circuitos", tag: ["electro"], desc: "Aprender sobre la teoría de circuitos eléctricos."},
    {name: "Teoria y Practica del Sonido: Edicion del Sonido, Audio Digital", tag: ["media", "gameDev"], desc: "No hay información disponible."},
    {name: "Testing de Aplicaciones", tag: ["webDev"], desc: "Aprender las etapas del proceso de probar aplicaciones."},
]

const tagList = document.getElementById("tagList");
const subjectContainer = document.getElementById("subjectContainer");

function updateSubjects(){
    const selectedTag = tagList.value;
    subjectContainer.innerHTML = '';

    if(selectedTag === 'none'){
        subjectContainer.innerHTML = 'No se seleccionó ninguna etiqueta.'
        updateCounter([])
        return; 
    }

    if(selectedTag === 'all'){
        subjects.forEach(subject => {
            addSubject(subject)
        })
        updateCounter(subjects)
        return;
    }

    const filteredSubjects = subjects.filter(subject => subject.tag.includes(selectedTag))

    if (filteredSubjects.length === 0){
        subjectContainer.innerHTML = 'No se encontraron materias con esa etiqueta.'
        updateCounter([])
        return;
    }

    filteredSubjects.forEach(subject => {
        addSubject(subject)
    });

    updateCounter(filteredSubjects)
}

function addSubject(subject){
    const subjectNameElement = document.createElement("h2");
    subjectNameElement.className = "subjectTitle"
    subjectNameElement.textContent = subject.name;
    subjectContainer.appendChild(subjectNameElement)

    const subjectElement = document.createElement('p');
    subjectElement.className = 'subjectDesc';

    if(subject.desc === 'No hay información disponible.'){
        subjectElement.id = 'subjectNoInfo'
    }

    subjectElement.textContent = subject.desc;
    subjectContainer.appendChild(subjectElement);

    const space = document.createElement('p');
    space.className = "whiteSpace";
    space.textContent = '.';
    subjectContainer.appendChild(space)
}

tagList.addEventListener("change", updateSubjects)


const counter = document.getElementById("child2")

function updateCounter(visibleSubjects){
    counter.innerHTML = ''
    const subjectCount = visibleSubjects.length;
    const text = document.createElement('p')
    text.textContent = subjectCount
    counter.appendChild(text)    
}
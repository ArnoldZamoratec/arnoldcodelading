export const positioning = {
  positioning_statement:
    "ARNOLDCODE ayuda a equipos con un producto de software en producción a decidir qué corregir primero, modernizar lo que limita la entrega y llevar esos cambios a código.",
  brand_promise:
    "Una revisión técnica termina en prioridades, decisiones documentadas y un plan que el equipo puede ejecutar; no en una presentación genérica.",
  target_pains: [
    "Una funcionalidad pequeña obliga a tocar varios servicios, coordinar a varias personas y posponer otras entregas.",
    "Los errores vuelven porque se corrige el síntoma en producción, pero no se ubica la causa en el código o en la operación.",
    "El equipo no sabe si conviene refactorizar, migrar, escalar infraestructura o seguir entregando sobre la base actual.",
  ],
  credibility_pillars: [
    "Trabajo directo de Arnold Huaman con quienes mantienen y operan el producto.",
    "Recomendaciones conectadas con código, despliegues, incidencias y objetivos del producto.",
    "Decisiones registradas y conocimiento compartido para que el equipo pueda continuar.",
  ],
  tone_of_voice: {
    is: [
      "directo",
      "técnico sin ser hermético",
      "pragmático",
      "con criterio y sin rodeos",
    ],
    is_not: [
      "buzzwords vacíos",
      "vendedor agresivo",
      "consultoría genérica",
      "explicaciones innecesarias",
    ],
  },
  one_liner_pitch:
    "Revisión de código y arquitectura para localizar qué frena un cambio y definir cómo corregirlo.",
};

export const landingCopy = {
  hero: {
    headline_v1: "¿Un cambio exige tocar varios servicios? Localiza el acoplamiento antes de reescribir.",
    headline_v2: "Sigue el cambio desde la petición hasta el código que lo bloquea.",
    headline_v3: "Separa el fallo urgente de la deuda que lo vuelve a producir.",
    subheadline:
      "Reviso el recorrido de una funcionalidad por módulos, APIs, datos, pruebas y despliegues. Recibes dependencias identificadas, riesgos con evidencia y opciones de cambio ordenadas por alcance.",
    cta_primary: "Enviar el cambio bloqueado",
    cta_secondary: "Ver qué reviso",
    trust_label: "En cada revisión sigo",
  },
  home: {
    pages_title: "Revisa el alcance antes de decidir",
    pages_description:
      "Consulta qué incluye cada intervención, cómo se documenta un hallazgo y qué información conviene preparar.",
    pages: [
      {
        title: "Arquitectura y auditoría",
        eyebrow: "Servicios y entregables",
        description:
          "Compara revisión de arquitectura, auditoría de código y liderazgo técnico: alcance, entregables y cuándo aplica cada opción.",
        href: "/servicios",
      },
      {
        title: "Método de revisión",
        eyebrow: "Del síntoma a la causa",
        description:
          "Sigue un cambio por sus llamadas, datos, pruebas y despliegue; conoce qué se valida antes de recomendar una modificación.",
        href: "/metodologia",
      },
      {
        title: "Escenarios técnicos",
        eyebrow: "Ejemplos, no clientes",
        description:
          "Revisa cómo se delimitaría una regla duplicada, un módulo sin pruebas o prioridades de producto y operación en conflicto.",
        href: "/casos",
      },
      {
        title: "Arnold Huaman",
        eyebrow: "Responsable del trabajo",
        description:
          "Conoce quién revisa el sistema, conversa con las personas que lo mantienen y registra las decisiones técnicas.",
        href: "/sobre-mi",
      },
      {
        title: "Enviar un problema técnico",
        eyebrow: "Alcance inicial",
        description:
          "Indica qué se intentaba entregar, qué módulos participaron, qué ocurrió y cómo afecta a usuarios u operación.",
        href: "/contacto",
      },
    ],
    cta_title: "Empieza por el cambio que no pudo salir.",
    cta_description:
      "Describe el comportamiento esperado, el resultado observado y las partes del sistema involucradas. No compartas accesos, datos personales ni código confidencial.",
  },
  trust_bar: {
    items: ["Cambios que cruzan servicios", "Incidencias repetidas", "Migraciones aplazadas", "Decisiones sin responsable", "Entrega impredecible"],
  },
  problems: {
    title: "Señales concretas de que la base técnica ya está cobrando demasiado.",
    items: [
      {
        title: "Un cambio simple toca demasiadas piezas",
        description:
          "Para añadir una regla de negocio hay que cambiar varios servicios, coordinar despliegues o duplicar lógica. Revisamos dependencias y límites antes de proponer una reorganización.",
      },
      {
        title: "La misma incidencia vuelve a producción",
        description:
          "Los parches reducen el impacto inmediato, pero no eliminan la causa. Seguimos el flujo del error entre código, datos y operación, y separamos correcciones urgentes de trabajo estructural.",
      },
      {
        title: "Nadie puede explicar el coste de seguir igual",
        description:
          "Una migración, una reescritura o una optimización compiten con funcionalidades del roadmap. Hacemos visibles el riesgo, las dependencias y el coste de cada alternativa para decidir con datos del sistema.",
      },
    ],
  },
  services: {
    title: "Elige una intervención con un alcance y un resultado definidos",
    items: [
      {
        name: "Revisión de arquitectura",
        description:
          "Mapeo los componentes que participan en un flujo crítico y localizo acoplamientos, contratos frágiles y decisiones que elevan el coste de cambiar.",
        deliverables: ["Diagrama del flujo y sus dependencias", "Riesgos ordenados por impacto", "Opciones con trade-offs documentados"],
        ideal_for: "Cuando el equipo no puede estimar con confianza cambios que cruzan módulos o servicios.",
      },
      {
        name: "Auditoría de código y operación",
        description:
          "Reviso rutas críticas, manejo de errores, consultas, pruebas y despliegues para identificar por qué fallan o se vuelven lentos los cambios.",
        deliverables: ["Hallazgos reproducibles con contexto", "Separación entre riesgo inmediato y deuda", "Backlog técnico con criterios de aceptación"],
        ideal_for: "Cuando hay errores repetidos, regresiones o releases que requieren demasiada intervención manual.",
      },
      {
        name: "Liderazgo técnico fractional",
        description:
          "Acompaño al responsable de producto y al equipo de ingeniería en decisiones de arquitectura, secuenciación de trabajo y riesgos de entrega.",
        deliverables: ["Registro de decisiones y responsables", "Revisión de prioridades técnicas", "Sesiones de diseño y revisión con el equipo"],
        ideal_for: "Cuando falta una persona con experiencia para conducir decisiones técnicas de forma continua, pero no se requiere un CTO a tiempo completo.",
      },
    ],
  },
  process: {
    title: "Del cambio bloqueado a una corrección verificable",
    steps: [
      {
        number: "01",
        title: "Elegimos un flujo real",
        description: "El equipo comparte un cambio reciente o una incidencia que haya requerido coordinación, retrabajo o intervención manual. Acordamos alcance, acceso y qué información no debe compartirse.",
        handoff: "Comparte: cambio afectado, comportamiento esperado y qué ocurrió",
      },
      {
        number: "02",
        title: "Sigo el recorrido en el sistema",
        description: "Sigo el flujo por código, servicios, datos, pruebas y despliegue. Valido los hallazgos con quienes mantienen el producto, sin asumir que una reescritura es la respuesta.",
        handoff: "Reviso: componentes, llamadas, datos, pruebas y despliegues",
      },
      {
        number: "03",
        title: "Acordamos y ejecutamos cambios",
        description: "Presento opciones, riesgos y orden sugerido. Si el alcance lo requiere, acompaño implementación y revisión para que el equipo entienda y pueda mantener lo cambiado.",
        handoff: "Quedan definidos: hallazgos, opción elegida y validación",
      },
    ],
  },
  about: {
    bio: "Soy Arnold Huaman. Trabajo en ingeniería de software, arquitectura de producto e infraestructura. En ARNOLDCODE colaboro directamente con equipos que mantienen un producto en producción y necesitan resolver problemas técnicos concretos sin desconectarse del roadmap.",
    philosophy:
      "No propongo una tecnología porque esté de moda. Primero identifico el flujo que falla, las restricciones del equipo y qué coste tiene cada opción; después decidimos si hace falta refactorizar, migrar o no tocarlo.",
    stack_highlight: "Trabajo con TypeScript, Next.js, Python y servicios cloud cuando encajan con el sistema existente. La recomendación parte del repositorio y la operación, no de una lista fija de tecnologías.",
  },
  cases: {
    title: "Qué rastrear y qué documentar en cada escenario",
    items: [
      {
        problem: "Al modificar una regla de negocio, el equipo debe coordinar cambios y despliegues en varios servicios.",
        solution: "Seguir el flujo de la regla, identificar duplicación y contratos, y acordar qué límite conviene estabilizar primero.",
        result: "Mapa de llamadas afectadas y orden de cambios con pruebas para cada etapa.",
      },
      {
        problem: "Un módulo antiguo contiene lógica crítica que casi nadie se atreve a modificar; las pruebas no cubren sus rutas principales.",
        solution: "Identificar entradas, reglas y efectos observables; añadir verificaciones donde aporten seguridad antes de reemplazar componentes.",
        result: "Rutas sin cobertura identificadas, pruebas de caracterización y límites para una migración gradual.",
      },
      {
        problem: "Producto pide funcionalidades, operaciones reporta incidentes y el equipo no tiene una regla común para priorizar.",
        solution: "Revisar impacto, urgencia, riesgo y dependencias; registrar quién decide y qué señal hará revisar la decisión.",
        result: "Criterios de prioridad acordados y decisiones registradas con responsable y fecha de revisión.",
      },
    ],
  },
  faq: {
    items: [
      {
        question: "¿En qué momento tiene sentido contactar a ARNOLDCODE?",
        answer:
          "Cuando un cambio atraviesa demasiados componentes, reaparecen incidencias, una migración no avanza o el equipo no puede explicar el riesgo de seguir como está. Es útil tener un producto funcionando y acceso a alguien que conozca el sistema.",
      },
      {
        question: "¿Qué diferencia hay entre una auditoría y liderazgo fractional?",
        answer:
          "La auditoría tiene un alcance acotado y termina con hallazgos, riesgos y opciones priorizadas. El liderazgo fractional acompaña decisiones y al equipo de forma recurrente. Si no está claro cuál hace falta, empezamos delimitando el problema.",
      },
      {
        question: "¿Qué necesito preparar para empezar?",
        answer:
          "Un ejemplo reciente del cambio o incidencia que cuesta resolver, una persona que conozca el flujo y el contexto del producto. No envíes credenciales, datos personales ni código confidencial por el formulario.",
      },
      {
        question: "¿Recomiendas reescribir el sistema?",
        answer:
          "No por defecto. Primero reviso dependencias, comportamiento, pruebas y coste de mantener lo actual. Una migración gradual o una corrección localizada puede ser menos riesgosa; la recomendación depende de lo que encontremos.",
      },
    ],
  },
  final_cta: {
    headline: "Trae el cambio que se atascó. Revisemos dónde se rompe el flujo.",
    subheadline:
      "Cuéntame qué intentaban entregar, qué parte del sistema intervino y qué ocurrió. Con ese ejemplo podemos evaluar si hace falta una auditoría, una decisión de arquitectura o acompañamiento técnico.",
    button: "Describir el problema",
  },
  footer: {
    tagline: "Revisión de arquitectura y código para productos de software en producción.",
    links: ["Servicios", "Proceso", "Casos", "Contacto"],
  },
};

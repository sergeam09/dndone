// ============================================================
// BACKGROUNDS DATA — SRD 5e 2014 (Español)
// ============================================================
const BACKGROUNDS_DATA = [

  {
    id: 'acolyte',
    name: 'Acólito',
    desc: 'Has pasado tu vida al servicio de un templo a un dios específico o panteón de dioses.',
    skills: ['Perspicacia', 'Religión'],
    tools: [],
    languages: 2,
    equipment: [
      { name: 'Símbolo sagrado', qty: 1, weight: 1, value: 5 },
      { name: 'Libro de oraciones', qty: 1, weight: 0.5, value: 0 },
      { name: 'Incienso', qty: 5, weight: 0, value: 0 },
      { name: 'Vestiduras', qty: 1, weight: 4, value: 0 },
      { name: 'Monedas de oro', qty: 15, weight: 0, value: 15 }
    ],
    feature: { name: 'Refugio de los fieles', desc: 'Como acólito, impones respeto a quienes comparten tu fe. Puedes pedir asistencia gratuita en los templos de tu deidad. Los otros acólitos te apoyarán (pero no correrán riesgos por ti).' },
    traits: ['Admiro a un sacerdote concreto cuya vida es mi modelo a seguir.', 'Puedo encontrar una base de acuerdo entre los fanáticos más belicosos.'],
    ideals: ['Tradición. Las formas antiguas deben preservarse.', 'Caridad. Siempre ayudaré a los necesitados.'],
    bonds: ['Moriría para recuperar una reliquia sagrada de mi fe.', 'Debo proteger el templo que me cobijó.'],
    flaws: ['Inflexible en mi pensamiento, incluso cuando tengo razón.', 'Esperaba demasiado de los dioses.']
  },

  {
    id: 'charlatan',
    name: 'Charlatán',
    desc: 'Siempre has tenido un don para la estafa, sabiendo qué decir para engañar.',
    skills: ['Engaño', 'Juego de manos'],
    tools: ['Kit de disfraz', 'Kit de falsificación'],
    languages: 0,
    equipment: [
      { name: 'Kit de disfraz', qty: 1, weight: 3, value: 25 },
      { name: 'Herramientas de engaño', qty: 1, weight: 1, value: 0 },
      { name: 'Ropa fina', qty: 1, weight: 6, value: 15 },
      { name: 'Monedas de oro', qty: 15, weight: 0, value: 15 }
    ],
    feature: { name: 'Cara falsa', desc: 'Has creado múltiples identidades falsas. Puedes establecer una nueva identidad con documentos falsos, vivienda adquirida y conexiones locales.' },
    traits: ['Me muestro elegante e impecable.', 'Soy el mejor en lo que hago, y lo sé.'],
    ideals: ['Independencia. Soy un espíritu libre.', 'Creatividad. Nunca engaño de la misma manera dos veces.'],
    bonds: ['Debo proteger al único ser que me importa.', 'La gente me miró de arriba abajo. Ahora me lo pagarán.'],
    flaws: ['No puedo evitar bolsillos llenos y puertas sin cerrar.', 'Me gusta demasiado el licor.']
  },

  {
    id: 'criminal',
    name: 'Criminal',
    desc: 'Eres un veterano del crimen con experiencia en los aspectos ilegales de la sociedad.',
    skills: ['Engaño', 'Sigilo'],
    tools: ['Un tipo de juego', 'Herramientas de ladrón'],
    languages: 0,
    equipment: [
      { name: 'Palanca', qty: 1, weight: 5, value: 2 },
      { name: 'Ropa oscura con capucha', qty: 1, weight: 3, value: 0 },
      { name: 'Herramientas de ladrón', qty: 1, weight: 1, value: 25 },
      { name: 'Monedas de oro', qty: 15, weight: 0, value: 15 }
    ],
    feature: { name: 'Contacto criminal', desc: 'Tienes un contacto de confianza en el hampa. Sabes cómo usar mensajeros para intercambiar mensajes con él, incluso a grandes distancias.' },
    traits: ['Siempre tengo un plan por si las cosas salen mal.', 'Soy siempre tranquilo, independientemente de la situación.'],
    ideals: ['Libertad. Las cadenas son para los esclavos.', 'Honor. No robo a los pobres ni mato a los inocentes.'],
    bonds: ['Me estoy intentando ganar suficiente dinero como para cuidar de mi familia.', 'Algo importante me fue robado y quiero recuperarlo.'],
    flaws: ['Cuando veo algo de valor no puedo evitar pensar en cómo robarlo.', 'Cuando estoy bajo presión pierdo los nervios.']
  },

  {
    id: 'entertainer',
    name: 'Artista',
    desc: 'Vives para actuar, sabiendo cómo capturar la atención de una audiencia.',
    skills: ['Acrobacias', 'Interpretación'],
    tools: ['Kit de disfraz', 'Un instrumento musical'],
    languages: 0,
    equipment: [
      { name: 'Instrumento musical', qty: 1, weight: 2, value: 0 },
      { name: 'Regalo de un admirador', qty: 1, weight: 0, value: 0 },
      { name: 'Disfraz', qty: 1, weight: 3, value: 0 },
      { name: 'Monedas de oro', qty: 15, weight: 0, value: 15 }
    ],
    feature: { name: 'Por aclamación popular', desc: 'Puedes conseguir alojamiento y comida gratis en un lugar donde actúes, y al público le gustará que te quedes en la ciudad.' },
    traits: ['Conozco un chiste o historia para cada situación.', 'Siempre quiero saber cómo termina una historia.'],
    ideals: ['Belleza. Cuando actúo, me hago más hermoso con cada representación.', 'Creatividad. El mundo necesita nueva música, cuentos y arte.'],
    bonds: ['Mi instrumento es mi posesión más valiosa y me recuerda a alguien que amo.', 'Alguien robó mi actuación especial y la llamó suya.'],
    flaws: ['Haré cualquier cosa para ganar fama y celebridad.', 'Soy dramático hasta el absurdo.']
  },

  {
    id: 'folk_hero',
    name: 'Héroe del Pueblo',
    desc: 'Vienes de la gente común, pero estás destinado a algo mucho más grande.',
    skills: ['Trato con animales', 'Supervivencia'],
    tools: ['Un tipo de herramienta artesanal', 'Vehículos (terrestres)'],
    languages: 0,
    equipment: [
      { name: 'Herramienta artesanal', qty: 1, weight: 5, value: 0 },
      { name: 'Pala', qty: 1, weight: 5, value: 2 },
      { name: 'Tarro de hierro', qty: 1, weight: 2, value: 0 },
      { name: 'Ropa de viaje', qty: 1, weight: 4, value: 0 },
      { name: 'Monedas de oro', qty: 10, weight: 0, value: 10 }
    ],
    feature: { name: 'Hospitalidad rústica', desc: 'Los campesinos te darán cobijo y ayuda, incluso ocultarte de los que te buscan. No te delatarán a menos que sean forzados. No te dan sus vidas por ti, pero sí su hospitalidad.' },
    traits: ['Juzgo a la gente por sus actos, no sus palabras.', 'Si alguien está en apuros, siempre ofrezco ayuda.'],
    ideals: ['Respeto. La gente merece ser tratada con dignidad.', 'Deber. Tengo obligaciones que debo cumplir.'],
    bonds: ['Tengo una familia, pero no sé si están a salvo.', 'Tirano o monstruo asoló a mi comunidad y me juré que haría justicia.'],
    flaws: ['La tiranía de mis líderes me lleva a la insubordinación.', 'Cuando lucho, no puedo dejar de luchar hasta que el enemigo caiga.']
  },

  {
    id: 'guild_artisan',
    name: 'Artesano Gremial',
    desc: 'Eres miembro de un gremio artesanal, hábil en un oficio en particular.',
    skills: ['Perspicacia', 'Persuasión'],
    tools: ['Herramientas de artesano (1 tipo a elección)'],
    languages: 1,
    equipment: [
      { name: 'Herramientas de artesano', qty: 1, weight: 5, value: 0 },
      { name: 'Carta de presentación del gremio', qty: 1, weight: 0, value: 0 },
      { name: 'Ropa de viajero', qty: 1, weight: 4, value: 0 },
      { name: 'Monedas de oro', qty: 15, weight: 0, value: 15 }
    ],
    feature: { name: 'Membresía en el gremio', desc: 'Como miembro establecido de un gremio, puedes contar con el apoyo del gremio. Los miembros te darán alojamiento y comida si es necesario y te ayudarán a encontrar trabajo.' },
    traits: ['Creo que cualquier cosa merece la pena hacerse bien.', 'Soy rápido para calcular el valor de todo.'],
    ideals: ['Comunidad. Es deber de todo individuo fortalecer al gremio.', 'Generosidad. Mis talentos fueron un don y los compartiré con otros.'],
    bonds: ['El taller en el que aprendí mi oficio es el lugar más importante del mundo para mí.', 'Debo demostrar que valgo más que la gente que no cree en mí.'],
    flaws: ['Nunca reconozco un trabajo bien hecho ajeno.', 'Soy arrogante en cuanto a mis habilidades.']
  },

  {
    id: 'hermit',
    name: 'Ermitaño',
    desc: 'Viviste aislado durante un largo período de tiempo en un lugar apartado del mundo.',
    skills: ['Medicina', 'Religión'],
    tools: ['Kit de herbolario'],
    languages: 1,
    equipment: [
      { name: 'Estuche con notas de estudio', qty: 1, weight: 1, value: 0 },
      { name: 'Manta de invierno', qty: 1, weight: 3, value: 0 },
      { name: 'Ropa común', qty: 1, weight: 3, value: 0 },
      { name: 'Kit de herbolario', qty: 1, weight: 3, value: 5 },
      { name: 'Monedas de oro', qty: 5, weight: 0, value: 5 }
    ],
    feature: { name: 'Descubrimiento', desc: 'Tu aislamiento te dio acceso a un descubrimiento único. Puede ser una verdad cósmica, una deidad olvidada, una forma de comunicarte con seres del más allá, u otro secreto profundo.' },
    traits: ['He estado rodeado por silencio durante tanto tiempo que el ruido me molesta.', 'Estoy tranquilo en situaciones de gran angustia.'],
    ideals: ['Mayor bien. Mi dones son para ser compartidos con todos.', 'Lógica. Los sentimientos no deben nublar nuestro pensamiento lógico.'],
    bonds: ['Entro a la civilización para buscar el conocimiento que me llenará de sabiduría.', 'Salí de mi retiro por un gran peligro que solo yo podía enfrentar.'],
    flaws: ['Desconecto cuando hablo. La gente necesita que les dé mi atención completa.', 'Ahora que volví al mundo no puedo dejar de maravillarme ante él.']
  },

  {
    id: 'noble',
    name: 'Noble',
    desc: 'Entiendes la riqueza, el poder y los privilegios. Llevas un título nobiliario.',
    skills: ['Historia', 'Persuasión'],
    tools: ['Un tipo de juego'],
    languages: 1,
    equipment: [
      { name: 'Ropa fina', qty: 1, weight: 6, value: 15 },
      { name: 'Anillo con sello', qty: 1, weight: 0, value: 5 },
      { name: 'Pergamino de pedigree', qty: 1, weight: 0, value: 0 },
      { name: 'Monedas de oro', qty: 25, weight: 0, value: 25 }
    ],
    feature: { name: 'Posición de privilegio', desc: 'Gracias a tu posición noble, la gente está dispuesta a pensar bien de ti. Eres bien recibido en alta sociedad y la gente asume que tienes el derecho de estar donde estés.' },
    traits: ['La adulación es mi herramienta favorita.', 'Soy siempre educado y cortés.'],
    ideals: ['Nobleza obliga. Es mi deber proteger y proveer a los que están por debajo de mí.', 'Poder. Si puedo alcanzar suficiente poder, nadie podrá decirme lo que debo hacer.'],
    bonds: ['Soy la vergüenza de mi familia por aventurarme al mundo como un guerrero.', 'La familia es la más importante de todas las cosas.'],
    flaws: ['Suelo subestimar a quien no pertenece a mi clase social.', 'Me cuesta aceptar que me equivoco.']
  },

  {
    id: 'outlander',
    name: 'Forastero',
    desc: 'Creciste en las regiones salvajes, lejos de la civilización y su refinamiento.',
    skills: ['Atletismo', 'Supervivencia'],
    tools: ['Un instrumento musical'],
    languages: 1,
    equipment: [
      { name: 'Bastón', qty: 1, weight: 4, value: 0 },
      { name: 'Trampa de caza', qty: 1, weight: 25, value: 5 },
      { name: 'Trofeo de animal', qty: 1, weight: 1, value: 0 },
      { name: 'Ropa de viajero', qty: 1, weight: 4, value: 0 },
      { name: 'Monedas de oro', qty: 10, weight: 0, value: 10 }
    ],
    feature: { name: 'Viajero errante', desc: 'Tienes un excelente sentido de orientación. Puedes encontrar alimento y agua fresca para ti y hasta cinco personas más al día, en un terreno que no sea árido o un páramo estéril.' },
    traits: ['Soy atormentado por recuerdos de la guerra.', 'Me guío por lo que me dicta mi intuición.'],
    ideals: ['Cambio. La vida es como las estaciones: en constante cambio.', 'Gloria. Debo ganarme un lugar en las canciones de los bardos con mis hazañas.'],
    bonds: ['Mi familia, clan o tribu es lo más importante en mi vida.', 'Un terrible mal habitó mis tierras. Me voy a exterminarlo.'],
    flaws: ['La violencia es mi respuesta ante casi todo.', 'No confío en nadie con facilidad.']
  },

  {
    id: 'sage',
    name: 'Sabio',
    desc: 'Pasaste años aprendiendo los misterios del mundo: historia, magia y ciencias.',
    skills: ['Arcanos', 'Historia'],
    tools: [],
    languages: 2,
    equipment: [
      { name: 'Tinta negra', qty: 1, weight: 0, value: 10 },
      { name: 'Pluma de escribir', qty: 1, weight: 0, value: 0 },
      { name: 'Pequeño cuchillo', qty: 1, weight: 0.5, value: 0 },
      { name: 'Carta de un colega difunto', qty: 1, weight: 0, value: 0 },
      { name: 'Ropa común', qty: 1, weight: 3, value: 0 },
      { name: 'Monedas de oro', qty: 10, weight: 0, value: 10 }
    ],
    feature: { name: 'Investigador', desc: 'Cuando intentas aprender o recordar información, si no la conoces, sabes dónde y de quién puedes obtenerla. Bibliotecas, scriptorium, universidades o sabios específicos.' },
    traits: ['Uso palabras largas para mostrar mi educación.', 'Me encanta aprender algo nuevo cada día.'],
    ideals: ['Conocimiento. El camino hacia el poder pasa por el conocimiento.', 'Belleza. Lo que tiene verdadero valor es lo bello.'],
    bonds: ['Trabajo para preservar una biblioteca o universidad.', 'Mi vida es mi obra, y aún no he terminado.'],
    flaws: ['Descuido mis obligaciones cotidianas perdido en mis pensamientos.', 'Soy inflexible en mis creencias.']
  },

  {
    id: 'sailor',
    name: 'Marinero',
    desc: 'Pasaste años en el mar, curtido por la sal y el viento en largos viajes.',
    skills: ['Atletismo', 'Percepción'],
    tools: ['Herramientas de navegante', 'Vehículos (acuáticos)'],
    languages: 0,
    equipment: [
      { name: 'Garrote', qty: 1, weight: 2, value: 0 },
      { name: 'Soga (15m)', qty: 1, weight: 10, value: 1 },
      { name: 'Ropa de marinero', qty: 1, weight: 4, value: 0 },
      { name: 'Monedas de oro', qty: 10, weight: 0, value: 10 }
    ],
    feature: { name: 'Pasaje seguro', desc: 'Cuando lo necesites, puedes conseguir pasaje gratuito en un barco de vela para ti y tus compañeros. Puedes navegar en barcos de mercantes, de guerra o de piratas.' },
    traits: ['Mi lenguaje está plagado de palabrotas.', 'Me adapto rápidamente a nuevas situaciones.'],
    ideals: ['Respeto. Lo que importa es tratar bien a la tripulación.', 'Libertad. El mar es libertad. La posibilidad de ir a cualquier lugar.'],
    bonds: ['Juro lealtad a mi capitán ante todo.', 'Fuimos golpeados por una tormenta terrible. Solo yo sobreviví.'],
    flaws: ['Una vez que empiezo a beber es difícil que pare.', 'Una vez que alguien pone a prueba mi valentía, no puedo dar marcha atrás.']
  },

  {
    id: 'soldier',
    name: 'Soldado',
    desc: 'La guerra ha sido tu profesión desde joven. Serviste en un ejército.',
    skills: ['Atletismo', 'Intimidación'],
    tools: ['Un tipo de juego', 'Vehículos (terrestres)'],
    languages: 0,
    equipment: [
      { name: 'Insignia de rango', qty: 1, weight: 0, value: 0 },
      { name: 'Trofeo de enemigo caído', qty: 1, weight: 1, value: 0 },
      { name: 'Juego de huesos', qty: 1, weight: 0, value: 0 },
      { name: 'Ropa de viajero', qty: 1, weight: 4, value: 0 },
      { name: 'Monedas de oro', qty: 10, weight: 0, value: 10 }
    ],
    feature: { name: 'Rango militar', desc: 'Tienes un rango militar de tu carrera como soldado. Los soldados leales a tu antigua organización reconocen tu autoridad e influencia, y obedecen tus órdenes.' },
    traits: ['Soy siempre cortés y respetuoso.', 'Estoy lleno de historias inspiradoras de mis batallas pasadas.'],
    ideals: ['Mayor bien. Nuestro deber es proteger a los que no pueden protegerse a sí mismos.', 'Responsabilidad. Hago lo que debo y obedezco a los que tienen autoridad sobre mí.'],
    bonds: ['Lucharé hasta la muerte por aquellos con los que serví.', 'Alguien me salvó la vida en el campo de batalla.'],
    flaws: ['El monstruo apareció durante la batalla y hui, dejando a mis compañeros morir.', 'El odio hacia mis enemigos me ciega en el combate.']
  },

  {
    id: 'urchin',
    name: 'Pícaro',
    desc: 'Creciste solo en las calles de una gran ciudad, aprendiendo a sobrevivir por ti mismo.',
    skills: ['Juego de manos', 'Sigilo'],
    tools: ['Kit de disfraz', 'Herramientas de ladrón'],
    languages: 0,
    equipment: [
      { name: 'Pequeño cuchillo', qty: 1, weight: 0.5, value: 0 },
      { name: 'Mapa de la ciudad donde creciste', qty: 1, weight: 0, value: 0 },
      { name: 'Ratón mascota', qty: 1, weight: 0, value: 0 },
      { name: 'Recuerdo de tus padres', qty: 1, weight: 0, value: 0 },
      { name: 'Ropa harapienta', qty: 1, weight: 2, value: 0 },
      { name: 'Monedas de oro', qty: 10, weight: 0, value: 10 }
    ],
    feature: { name: 'Conocedor de la ciudad', desc: 'Conoces los pasadizos secretos, los callejones y las rutas poco frecuentadas de cualquier ciudad. Puedes moverte a doble de velocidad viajando por la ciudad, y pasas desapercibido entre la gente.' },
    traits: ['Oculto mis verdaderas intenciones detrás de una actitud afable.', 'Desconfío de la gente con dinero.'],
    ideals: ['Comunidad. Debemos cuidarnos unos a otros.', 'Cambio. Los bajos deben subir y los altos deben bajar.'],
    bonds: ['Mi ciudad me lo dio todo y haré cualquier cosa para protegerla.', 'Tengo deudas con un mentor que me crio.'],
    flaws: ['El oro me parece irresistible.', 'Soy demasiado desconfiado y cauto en exceso.']
  }

];

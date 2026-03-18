// ============================================================
// FEATS DATA — SRD 5e 2014 (Español)
// ============================================================
const FEATS_DATA = [

  {
    id: 'alert',
    name: 'Alerta',
    prerequisite: null,
    desc: 'Siempre estás al tanto de tu entorno.',
    benefits: [
      '+5 a la iniciativa.',
      'No puedes ser sorprendido mientras estés consciente.',
      'Las criaturas ocultas no obtienen ventaja en las tiradas de ataque contra ti.'
    ],
    statBonus: {}
  },

  {
    id: 'athlete',
    name: 'Atleta',
    prerequisite: null,
    desc: 'Has pasado tiempo entrenando tu cuerpo.',
    benefits: [
      '+1 a FUE o DES (a elección).',
      'Al levantarte del suelo solo usas 5 pies de movimiento.',
      'Escalar no te cuesta movimiento adicional.',
      'Puedes hacer un salto largo o alto con solo 5 pies de carrera.'
    ],
    statBonus: { choice: ['str', 'dex'], amount: 1 }
  },

  {
    id: 'actor',
    name: 'Actor',
    prerequisite: null,
    desc: 'Experto en mímica y actuación.',
    benefits: [
      '+1 a CAR.',
      'Ventaja en Engaño y Actuación al hacerte pasar por otra persona.',
      'Puedes imitar la voz de alguien que hayas escuchado al menos 1 minuto.'
    ],
    statBonus: { cha: 1 }
  },

  {
    id: 'charger',
    name: 'Cargador',
    prerequisite: null,
    desc: 'Cuando cargas hacia el enemigo con toda tu fuerza, puedes golpear con más poder.',
    benefits: [
      'Cuando usas la acción Cargar y realizas un ataque cuerpo a cuerpo como acción adicional, ganas +5 al daño o puedes empujar 10 pies al objetivo.',
    ],
    statBonus: {}
  },

  {
    id: 'crossbow_expert',
    name: 'Experto en ballesta',
    prerequisite: null,
    desc: 'Tu entrenamiento con ballestas te permite ignorar algunas restricciones.',
    benefits: [
      'Ignoras la propiedad de carga de las ballestas.',
      'Atacar en cuerpo a cuerpo no impone desventaja en los ataques a distancia.',
      'Cuando usas la acción de Ataque con una ballesta de mano, puedes atacar una vez más con ella como acción adicional.'
    ],
    statBonus: {}
  },

  {
    id: 'defensive_duelist',
    name: 'Duelista defensivo',
    prerequisite: 'DES 13 o superior',
    desc: 'Mientras empuñas un arma con finesse con la que tengas competencia.',
    benefits: [
      'Cuando una criatura te golpea con un ataque cuerpo a cuerpo, puedes usar tu reacción para añadir tu bonificador de competencia a tu CA para ese ataque, pudiendo convertir el golpe en fallo.'
    ],
    statBonus: {}
  },

  {
    id: 'dual_wielder',
    name: 'Combatiente con dos armas',
    prerequisite: null,
    desc: 'Dominas el combate con dos armas.',
    benefits: [
      '+1 a la CA mientras empuñas un arma cuerpo a cuerpo diferente en cada mano.',
      'Puedes usar combate con dos armas con armas que no tengan la propiedad liviana.',
      'Puedes sacar o guardar dos armas de un solo vistazo cuando normalmente solo podrías una.'
    ],
    statBonus: {}
  },

  {
    id: 'dungeon_delver',
    name: 'Explorador de mazmorras',
    prerequisite: null,
    desc: 'Alerta a los peligros de los dungeons.',
    benefits: [
      'Ventaja en pruebas de Percepción y Investigación para detectar puertas secretas.',
      'Ventaja en tiradas de salvación para evitar o resistir trampas.',
      'Tienes resistencia al daño de las trampas.',
      'Puedes buscar trampas a paso normal.'
    ],
    statBonus: {}
  },

  {
    id: 'durable',
    name: 'Resistente',
    prerequisite: null,
    desc: 'Robusto y capaz de recuperarte fácilmente de lesiones.',
    benefits: [
      '+1 a CON.',
      'Al gastar Dados de Golpe durante un descanso corto, el mínimo de PG recuperados de cada dado es igual al doble de tu modificador de CON (mínimo 2).'
    ],
    statBonus: { con: 1 }
  },

  {
    id: 'elemental_adept',
    name: 'Adepto elemental',
    prerequisite: 'Capacidad para lanzar al menos un hechizo',
    desc: 'Tus hechizos de un elemento específico son más potentes.',
    benefits: [
      'Elige un tipo de daño: ácido, frío, fuego, relámpago o trueno.',
      'Los hechizos que lanzas ignoran la resistencia a ese tipo de daño.',
      'Cuando lanzas un hechizo de ese tipo, los 1s en los dados de daño cuentan como 2.'
    ],
    statBonus: {}
  },

  {
    id: 'grappler',
    name: 'Agarrador',
    prerequisite: 'FUE 13 o superior',
    desc: 'Desarrollaste habilidades necesarias para dominar a tus enemigos en combate cuerpo a cuerpo.',
    benefits: [
      'Ventaja en las tiradas de ataque contra criaturas que hayas agarrado.',
      'Puedes usar tu acción para inmovilizar al objetivo que hayas agarrado (ambos quedáis inmovilizados hasta el final de tu siguiente turno).'
    ],
    statBonus: {}
  },

  {
    id: 'great_weapon_master',
    name: 'Gran maestro de armas',
    prerequisite: null,
    desc: 'Has aprendido a usar el peso de las armas pesadas para tu ventaja.',
    benefits: [
      'Cuando consigues un golpe crítico o reduces a 0 PG a un enemigo con arma cuerpo a cuerpo, puedes hacer un ataque adicional como acción adicional.',
      'Antes de atacar con un arma pesada con la que tengas competencia, puedes elegir -5 a la tirada de ataque. Si el ataque impacta, añades +10 al daño.'
    ],
    statBonus: {}
  },

  {
    id: 'healer',
    name: 'Sanador',
    prerequisite: null,
    desc: 'Eres un cuidador hábil, lo que te permite sanar a otros con rapidez.',
    benefits: [
      'Cuando usas un botiquín para estabilizar a un moribundo, ese personaje recupera 1 PG.',
      'Como acción, puedes gastar un botiquín para recuperar PG a una criatura. Recupera 1d6+4 PG, más 1 PG por cada nivel máximo de Dado de Golpe. Solo puede beneficiarse de este rasgo una vez hasta un descanso largo.'
    ],
    statBonus: {}
  },

  {
    id: 'heavily_armored',
    name: 'Armadura pesada',
    prerequisite: 'Competencia con armadura media',
    desc: 'Entrenaste el uso de armaduras pesadas.',
    benefits: [
      '+1 a FUE.',
      'Ganas competencia con armadura pesada.'
    ],
    statBonus: { str: 1 }
  },

  {
    id: 'heavy_armor_master',
    name: 'Maestro de armadura pesada',
    prerequisite: 'Competencia con armadura pesada',
    desc: 'Puedes usar tu armadura para desviar golpes.',
    benefits: [
      '+1 a FUE.',
      'Mientras llevas armadura pesada, el daño de ataques no mágicos de corte, perforación o contundente se reduce en 3.'
    ],
    statBonus: { str: 1 }
  },

  {
    id: 'inspiring_leader',
    name: 'Líder inspirador',
    prerequisite: 'CAR 13 o superior',
    desc: 'Puedes pasar 10 minutos inspirando a tus compañeros.',
    benefits: [
      'Hasta 6 criaturas que te puedan ver y escuchar ganan PG temporales iguales a tu nivel + tu modificador de CAR.',
      'Una criatura no puede beneficiarse de esto de nuevo hasta después de un descanso largo.'
    ],
    statBonus: {}
  },

  {
    id: 'keen_mind',
    name: 'Mente aguda',
    prerequisite: null,
    desc: 'Tienes una mente que puede rastrear el tiempo, la dirección y los detalles.',
    benefits: [
      '+1 a INT.',
      'Siempre sabes qué dirección es el norte.',
      'Siempre sabes cuántas horas quedan antes del amanecer o anochecer.',
      'Puedes recordar con exactitud cualquier cosa que hayas visto o escuchado en el último mes.'
    ],
    statBonus: { int: 1 }
  },

  {
    id: 'lightly_armored',
    name: 'Armadura ligera',
    prerequisite: null,
    desc: 'Entrenaste el uso de armaduras ligeras.',
    benefits: [
      '+1 a FUE o DES.',
      'Ganas competencia con armadura ligera.'
    ],
    statBonus: { choice: ['str', 'dex'], amount: 1 }
  },

  {
    id: 'lucky',
    name: 'Suertudo',
    prerequisite: null,
    desc: 'Tienes una suerte inexplicable que parece presentarse en los peores momentos.',
    benefits: [
      'Tienes 3 puntos de suerte. Cuando realizas una tirada de ataque, prueba de característica o tirada de salvación, puedes gastar un punto de suerte para tirar un dado adicional y elegir cuál usar.',
      'También puedes gastar suerte cuando una criatura te ataca, haciendo que vuelva a tirar su ataque.',
      'Recuperas todos los puntos de suerte al terminar un descanso largo.'
    ],
    statBonus: {}
  },

  {
    id: 'mage_slayer',
    name: 'Cazamagos',
    prerequisite: null,
    desc: 'Has practicado técnicas para debilitar a los usuarios de magia.',
    benefits: [
      'Cuando una criatura a 1,5m lanza un hechizo, puedes usar tu reacción para atacarla.',
      'Cuando dañas a una criatura que se está concentrando en un hechizo, tiene desventaja en la tirada de salvación para mantener la concentración.',
      'Tienes ventaja en las tiradas de salvación contra hechizos de criaturas a 1,5m.'
    ],
    statBonus: {}
  },

  {
    id: 'magic_initiate',
    name: 'Iniciado mágico',
    prerequisite: null,
    desc: 'Elige una clase: bardo, clérigo, druida, hechicero, brujo o mago.',
    benefits: [
      'Aprendes dos trucos a elección de esa lista de hechizos.',
      'Aprendes un hechizo de nivel 1 de esa lista. Puedes lanzarlo una vez sin usar un espacio de hechizo. Puedes volver a lanzarlo tras un descanso largo.',
      'Tu atributo mágico para estos hechizos es el correspondiente a la clase elegida.'
    ],
    statBonus: {}
  },

  {
    id: 'martial_adept',
    name: 'Adepto marcial',
    prerequisite: null,
    desc: 'Tienes maestría marcial.',
    benefits: [
      'Aprendes dos maniobras de combate del arquetipo de Maestro de Batalla del guerrero.',
      'Tienes un dado de superioridad (d6) que puedes usar para esas maniobras. Recuperas el dado tras un descanso largo.'
    ],
    statBonus: {}
  },

  {
    id: 'medium_armor_master',
    name: 'Maestro de armadura media',
    prerequisite: 'Competencia con armadura media',
    desc: 'Aprendiste a moverte con más comodidad con armadura media.',
    benefits: [
      'Llevar armadura media no impone desventaja en las pruebas de Sigilo.',
      'Cuando llevas armadura media, puedes añadir hasta 3 (en lugar de 2) a tu CA por tu DES.'
    ],
    statBonus: {}
  },

  {
    id: 'mobile',
    name: 'Móvil',
    prerequisite: null,
    desc: 'Eres extremadamente ágil.',
    benefits: [
      'Tu velocidad aumenta en 10 pies.',
      'Cuando usas la acción de Cargar, el terreno difícil no te cuesta movimiento adicional ese turno.',
      'Cuando atacas a una criatura cuerpo a cuerpo, no provoca ataques de oportunidad de esa criatura hasta el final de tu turno.'
    ],
    statBonus: {}
  },

  {
    id: 'moderately_armored',
    name: 'Armadura media',
    prerequisite: 'Competencia con armadura ligera',
    desc: 'Entrenaste el uso de armaduras medias y escudos.',
    benefits: [
      '+1 a FUE o DES.',
      'Ganas competencia con armadura media y escudos.'
    ],
    statBonus: { choice: ['str', 'dex'], amount: 1 }
  },

  {
    id: 'mounted_combatant',
    name: 'Combatiente montado',
    prerequisite: null,
    desc: 'Eres un jinete peligroso en combate.',
    benefits: [
      'Ventaja en las tiradas de ataque cuerpo a cuerpo contra criaturas no montadas más pequeñas que tu montura.',
      'Puedes obligar a que un ataque contra tu montura te impacte a ti.',
      'Si tu montura falla una tirada de salvación de DES, no recibe daño (sí si falla).'
    ],
    statBonus: {}
  },

  {
    id: 'observant',
    name: 'Observador',
    prerequisite: null,
    desc: 'Rápido para advertir los detalles del entorno.',
    benefits: [
      '+1 a INT o SAB.',
      'Si puedes ver la boca de alguien cuando habla un idioma que conozcas, puedes interpretar lo que dice.',
      '+5 a la puntuación pasiva de Percepción y de Investigación.'
    ],
    statBonus: { choice: ['int', 'wis'], amount: 1 }
  },

  {
    id: 'polearm_master',
    name: 'Maestro de armas de asta',
    prerequisite: null,
    desc: 'Puedes mantener a los enemigos a raya con armas de asta.',
    benefits: [
      'Cuando atacas con guja, alabarda, pica, cuarterón o lanza, puedes usar tu acción adicional para atacar con el extremo del arma (1d4 de daño contundente).',
      'Cuando una criatura entra en tu alcance, puedes usar tu reacción para atacarla.'
    ],
    statBonus: {}
  },

  {
    id: 'resilient',
    name: 'Resistente',
    prerequisite: null,
    desc: 'Elige un atributo.',
    benefits: [
      '+1 al atributo elegido.',
      'Ganas competencia en las tiradas de salvación usando ese atributo.'
    ],
    statBonus: { choice: ['str','dex','con','int','wis','cha'], amount: 1 }
  },

  {
    id: 'ritual_caster',
    name: 'Conjurador ritual',
    prerequisite: 'INT o SAB 13 o superior',
    desc: 'Aprendes a lanzar ciertos hechizos como rituales.',
    benefits: [
      'Adquieres un libro de rituales con dos hechizos de nivel 1 con la etiqueta ritual de la lista de tu clase elegida.',
      'Puedes lanzarlos como rituales (añadiendo 10 minutos al tiempo de lanzamiento sin usar espacio de hechizo).',
      'Puedes añadir hechizos rituales que encuentres en pergaminos si son de tu clase y de nivel igual o menor a la mitad de tu nivel total.'
    ],
    statBonus: {}
  },

  {
    id: 'savage_attacker',
    name: 'Atacante salvaje',
    prerequisite: null,
    desc: 'Una vez por turno cuando realizas una tirada de daño con arma cuerpo a cuerpo.',
    benefits: [
      'Una vez por turno, puedes volver a tirar los dados de daño del arma y usar el resultado más alto.'
    ],
    statBonus: {}
  },

  {
    id: 'sentinel',
    name: 'Centinela',
    prerequisite: null,
    desc: 'Dominas el arte de frenar a los enemigos que te rodean.',
    benefits: [
      'Cuando golpeas a una criatura con un ataque de oportunidad, su velocidad cae a 0 hasta el final del turno.',
      'Las criaturas provocan ataques de oportunidad aunque usen la acción de Retirada.',
      'Cuando una criatura ataca a alguien que no seas tú, puedes usar tu reacción para atacarla.'
    ],
    statBonus: {}
  },

  {
    id: 'sharpshooter',
    name: 'Tirador de élite',
    prerequisite: null,
    desc: 'Dominas las armas a distancia y puedes realizar disparos que otros consideran imposibles.',
    benefits: [
      'Los ataques a larga distancia no imponen desventaja.',
      'Los ataques a distancia ignoran la cobertura de media y de tres cuartos.',
      'Antes de atacar con un arma a distancia con la que tengas competencia, puedes elegir -5 a la tirada de ataque. Si el ataque impacta, añades +10 al daño.'
    ],
    statBonus: {}
  },

  {
    id: 'shield_master',
    name: 'Maestro del escudo',
    prerequisite: null,
    desc: 'Usas escudos no solo para protegerte sino también como arma ofensiva.',
    benefits: [
      'Si realizas la acción de Atacar, puedes usar tu acción adicional para intentar empujar a un enemigo con el escudo.',
      'Si no estás incapacitado, puedes añadir el bonificador del escudo a las TS de DES contra hechizos u efectos que causen solo la mitad del daño al pasar.',
      'Si fallas una TS de DES, puedes usar tu reacción para recibir ningún daño si la pasas (o la mitad si fallas).'
    ],
    statBonus: {}
  },

  {
    id: 'skilled',
    name: 'Experto',
    prerequisite: null,
    desc: 'Ganas competencia en tres habilidades o herramientas a elección.',
    benefits: [
      'Ganas competencia en tres habilidades o herramientas a tu elección.'
    ],
    statBonus: {}
  },

  {
    id: 'skulker',
    name: 'Emboscador',
    prerequisite: 'DES 13 o superior',
    desc: 'Experto en esconderte y acechar en las sombras.',
    benefits: [
      'Puedes intentar ocultarte cuando solo estés levemente oscurecido.',
      'Cuando te ocultas y fallas un ataque a distancia, no te revelas.',
      'El terreno tenue no impone desventaja en las pruebas de Percepción que dependan de la vista.'
    ],
    statBonus: {}
  },

  {
    id: 'spell_sniper',
    name: 'Francotirador mágico',
    prerequisite: 'Capacidad para lanzar al menos un hechizo',
    desc: 'Aprendiste técnicas para aumentar el alcance de tus hechizos de ataque.',
    benefits: [
      'El alcance de los hechizos de ataque se duplica.',
      'Los ataques con hechizos a distancia ignoran la cobertura de media y tres cuartos.',
      'Aprendes un truco de una lista de hechizos que requiera una tirada de ataque.'
    ],
    statBonus: {}
  },

  {
    id: 'tavern_brawler',
    name: 'Peleador de taberna',
    prerequisite: null,
    desc: 'Acostumbrado a peleas sin armas, sucias y violentas.',
    benefits: [
      '+1 a FUE o CON.',
      'Competencia con ataques desarmados y armas improvisadas.',
      'Tus golpes desarmados tienen dado de daño d4.',
      'Cuando golpeas a una criatura con un ataque desarmado o arma improvisada, puedes usar una acción adicional para intentar agarrarla.'
    ],
    statBonus: { choice: ['str', 'con'], amount: 1 }
  },

  {
    id: 'tough',
    name: 'Robusto',
    prerequisite: null,
    desc: 'Tu tenacidad física va más allá de lo normal.',
    benefits: [
      'Tu máximo de PG aumenta en 2 por cada nivel que tengas, y aumenta en 2 cada vez que subes de nivel.'
    ],
    statBonus: {}
  },

  {
    id: 'war_caster',
    name: 'Hechicero de guerra',
    prerequisite: 'Capacidad para lanzar al menos un hechizo',
    desc: 'Practicaste la magia bajo condiciones de combate.',
    benefits: [
      'Ventaja en las tiradas de salvación de CON para mantener la concentración.',
      'Puedes realizar los componentes somáticos aunque lleves armas o escudo.',
      'Cuando una criatura provoca un ataque de oportunidad tuyo, puedes usar tu reacción para lanzarle un hechizo en lugar de atacar (el hechizo debe tener tiempo de lanzamiento de 1 acción y apuntar solo a esa criatura).'
    ],
    statBonus: {}
  },

  {
    id: 'weapon_master',
    name: 'Maestro de armas',
    prerequisite: null,
    desc: 'Tienes práctica con una amplia variedad de armas.',
    benefits: [
      '+1 a FUE o DES.',
      'Ganas competencia con 4 armas a tu elección.'
    ],
    statBonus: { choice: ['str', 'dex'], amount: 1 }
  }

];

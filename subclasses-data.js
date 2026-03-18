// ============================================================
// SUBCLASSES DATA — SRD 5e 2014 (Español)
// ============================================================
const SUBCLASSES_DATA = {

  Barbarian: [
    {
      id: 'berserker', name: 'Berserker',
      desc: 'Para algunos bárbaros, la rabia es un medio para llegar a un fin, y ese fin es la violencia.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Frenesí', desc: 'Al entrar en rabia puedes entrar en frenesí. Mientras dure, puedes hacer un ataque adicional con arma de mano como acción adicional en cada turno. Al terminar la rabia sufres un nivel de agotamiento.' },
        { level: 6, name: 'Rabia insensata', desc: 'No puedes estar asustado ni hechizado mientras estás en rabia.' },
        { level: 10, name: 'Presencia intimidatoria', desc: 'Puedes usar tu acción para aterrorizar a alguien. CD SAB = 8 + bonif. competencia + modificador de CAR. Si falla, está asustado 1 minuto.' },
        { level: 14, name: 'Represalia', desc: 'Cuando recibes daño de una criatura en alcance, puedes usar tu reacción para hacer un ataque de arma cuerpo a cuerpo contra ella.' }
      ]
    },
    {
      id: 'totem_warrior', name: 'Guerrero Tótem',
      desc: 'El camino del guerrero tótem es una práctica espiritual que acepta a un espíritu animal como guía, protector e inspiración.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Espíritu tótem', desc: 'Elige un tótem: Oso (resistencia a todos los daños excepto psíquico en rabia), Águila (ataques de oportunidad tienen desventaja contra ti en rabia, puedes usar Cargar como acción adicional), Lobo (los aliados tienen ventaja en ataques cuerpo a cuerpo contra enemigos adyacentes a ti en rabia).' },
        { level: 6, name: 'Aspecto del bestia', desc: 'Obtienes un beneficio mágico según tu tótem animal durante todo el día con un ritual de 1 minuto.' },
        { level: 10, name: 'Comunión con el espíritu', desc: 'Puedes lanzar communion con la naturaleza como ritual una vez entre descansos largos.' },
        { level: 14, name: 'Attunement tótem', desc: 'Obtienes un beneficio adicional poderoso según tu tótem elegido.' }
      ]
    }
  ],

  Bard: [
    {
      id: 'lore', name: 'Colegio del Saber',
      desc: 'Los bardos del Colegio del Saber conocen algo sobre casi todo.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Competencias adicionales', desc: 'Ganas competencia en tres habilidades a tu elección.' },
        { level: 3, name: 'Palabras cortantes', desc: 'Cuando una criatura que puedas ver realiza una tirada de ataque, prueba de característica o tirada de daño, puedes usar tu reacción y gastar un uso de Inspiración Bárdica para tirar ese dado y restarlo del resultado.' },
        { level: 6, name: 'Secretos mágicos adicionales', desc: 'Aprendes dos hechizos de cualquier clase. Cuentan como hechizos de bardo.' },
        { level: 14, name: 'Incomparable habilidad', desc: 'Cuando haces una prueba de característica, puedes gastar un uso de Inspiración Bárdica y añadir el resultado al tuyo.' }
      ]
    },
    {
      id: 'valor', name: 'Colegio del Valor',
      desc: 'Los bardos del Colegio del Valor son audaces y llevan hazañas épicas a la vida.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Competencias adicionales', desc: 'Ganas competencia con armadura media, escudos y armas marciales.' },
        { level: 3, name: 'Inspiración de combate', desc: 'Puedes usar tu Inspiración Bárdica para que un aliado añada el dado a su tirada de daño o a su CA contra un ataque.' },
        { level: 6, name: 'Extra ataque', desc: 'Puedes atacar dos veces, en lugar de una, cuando realizas la acción de Atacar.' },
        { level: 14, name: 'Magia de batalla', desc: 'Cuando lanzas un hechizo de bardo, puedes hacer un ataque de arma como acción adicional.' }
      ]
    }
  ],

  Cleric: [
    {
      id: 'life', name: 'Dominio de la Vida',
      desc: 'El dominio de la Vida se concentra en la energía vibrante y positiva que sustenta toda la vida.',
      choiceLevel: 1,
      features: [
        { level: 1, name: 'Hechizos de dominio', desc: 'Curar heridas, bendición (nivel 1); restauración menor, arma espiritual (nivel 3); faro de esperanza, revivir (nivel 5); curación en masa, protector guardián (nivel 7); curación en masa superior, resurrección (nivel 9).' },
        { level: 1, name: 'Competencia adicional', desc: 'Ganas competencia con armadura pesada.' },
        { level: 1, name: 'Discípulo de la Vida', desc: 'Tus hechizos de curación son más efectivos. Cuando usas un hechizo de nivel 1 o superior para curar PG, el objetivo recupera PG adicionales iguales a 2 + el nivel del hechizo.' },
        { level: 2, name: 'Conjurar la divinidad: Preservar la vida', desc: 'Puedes restaurar PG a criaturas heridas. Distribuye PG iguales a 5x tu nivel de clérigo entre criaturas que veas a 9m, hasta la mitad de sus PG máximos.' },
        { level: 6, name: 'Curación bienaventurada', desc: 'Cuando lanzas un hechizo de nivel 1 o superior que cure PG a una criatura distinta a ti, también recuperas PG iguales a 2 + el nivel del hechizo.' },
        { level: 8, name: 'Golpe divino', desc: 'Una vez por turno, cuando golpeas con un arma, inflige 1d8 de daño radiante adicional (2d8 al nivel 14).' },
        { level: 17, name: 'Curación suprema', desc: 'Cuando usas un hechizo para recuperar PG, usa el máximo de los dados en lugar de tirarlos.' }
      ]
    },
    {
      id: 'light', name: 'Dominio de la Luz',
      desc: 'Los dioses de la luz promueven los ideales del renacer, la verdad, la vigilancia y la belleza.',
      choiceLevel: 1,
      features: [
        { level: 1, name: 'Hechizos de dominio', desc: 'Luz ardiente, faerie fire (nivel 1); llama permanente, zona de verdad (nivel 3); bola de fuego, luz del día (nivel 5); custodio de la fe, pared de fuego (nivel 7); llama destructora, hechizo del sol (nivel 9).' },
        { level: 1, name: 'Truco adicional', desc: 'Aprendes el truco luz.' },
        { level: 1, name: 'Destello protector', desc: 'Cuando una criatura que puedas ver a 9m realiza una tirada de ataque, puedes usar tu reacción para imponer desventaja, si causas que falle la tirada. Usos = modificador de SAB.' },
        { level: 2, name: 'Conjurar la divinidad: Resplandor del alba', desc: 'Presentas tu símbolo sagrado y cualquier oscuridad mágica a 9m es disipada. Cada criatura hostil a 9m sufre daño radiante (2d10 + nivel de clérigo, TS DES CD 8+bonif.comp+SAB para la mitad).' },
        { level: 6, name: 'Destello mejorado', desc: 'Puedes usar Destello protector cuando una criatura que puedas ver ataca a cualquier criatura visible a 9m de ti.' },
        { level: 8, name: 'Golpe divino', desc: 'Una vez por turno, +1d8 de daño por fuego (2d8 al nivel 14).' },
        { level: 17, name: 'Corona de luz', desc: 'Puedes usar tu acción para que una esfera de luz solar de 18m de radio emane de ti. Dura 1 minuto. Los no-muertos y no-vivos tienen desventaja en ataques contra ti.' }
      ]
    },
    {
      id: 'trickery', name: 'Dominio del Engaño',
      desc: 'Los dioses del engaño son bromistas y favorecen a los que burlan las reglas.',
      choiceLevel: 1,
      features: [
        { level: 1, name: 'Hechizos de dominio', desc: 'Encanto persona, disfrazarse (nivel 1); imagen especular, pase sin rastro (nivel 3); parpadeo, enviar (nivel 5); dominar persona, invisibilidad mayor (nivel 7); dominar persona en masa, modificar memoria (nivel 9).' },
        { level: 1, name: 'Bendición del embaucador', desc: 'Puedes usar tu acción para tocar a un ser voluntario, dándole ventaja en pruebas de Destreza (Sigilo) durante 1 hora. Usos = modificador de SAB.' },
        { level: 2, name: 'Conjurar la divinidad: Invocar duplicado', desc: 'Creas una copia ilusoria de ti mismo a 9m. Dura 1 minuto. Puedes teleportarte a su posición como acción adicional, haciéndola desaparecer.' },
        { level: 6, name: 'Canal de sombras', desc: 'Puedes lanzar invisibilidad usando tu Conjurar la divinidad en lugar del espacio de hechizo.' },
        { level: 8, name: 'Golpe divino', desc: 'Una vez por turno, +1d8 de daño de veneno (2d8 al nivel 14).' },
        { level: 17, name: 'Forma mejorada de duplicado', desc: 'Puedes crear hasta 4 copias ilusorias con tu Conjurar la divinidad: Invocar duplicado.' }
      ]
    },
    {
      id: 'war', name: 'Dominio de la Guerra',
      desc: 'La guerra tiene muchas manifestaciones. Puede hacer héroes o devastar civilizaciones.',
      choiceLevel: 1,
      features: [
        { level: 1, name: 'Hechizos de dominio', desc: 'Escudo de la fe, arma divina (nivel 1); arma mágica, arma espiritual (nivel 3); cruzada, hechizo de la zona de guerra (nivel 5); libertad de movimiento, piel pétrea (nivel 7); llaga, tenencia (nivel 9).' },
        { level: 1, name: 'Competencias adicionales', desc: 'Ganas competencia con armadura pesada y armas marciales.' },
        { level: 1, name: 'Sacerdote guerrero', desc: 'Cuando usas la acción de Atacar, puedes hacer un ataque de arma adicional como acción adicional. Usos = modificador de SAB.' },
        { level: 2, name: 'Conjurar la divinidad: Golpe guiado', desc: 'Cuando haces una tirada de ataque, puedes usar tu Conjurar la divinidad para ganar +10 a la tirada.' },
        { level: 6, name: 'Bendición del dios de la guerra', desc: 'Cuando una criatura a 9m hace una tirada de ataque, puedes usar tu reacción para otorgarle +10. Consume tu Conjurar la divinidad.' },
        { level: 8, name: 'Golpe divino', desc: 'Una vez por turno, +1d8 de daño del tipo de tu deidad (2d8 al nivel 14).' },
        { level: 17, name: 'Avatar de la batalla', desc: 'Tienes resistencia al daño cortante, perforante y contundente de ataques no mágicos.' }
      ]
    }
  ],

  Druid: [
    {
      id: 'land', name: 'Círculo de la Tierra',
      desc: 'El Círculo de la Tierra es el círculo más antiguo, compuesto por druidas místicos.',
      choiceLevel: 2,
      features: [
        { level: 2, name: 'Recuperación natural', desc: 'Puedes recuperar espacios de hechizo gastados durante un descanso corto. Los niveles recuperados no pueden exceder la mitad de tu nivel de druida (redondeado arriba).' },
        { level: 2, name: 'Hechizos de círculo', desc: 'Tu vínculo místico con la tierra te da acceso a ciertos hechizos según el terreno que elijas (Ártico, Costa, Desierto, Bosque, Pradera, Montaña, Pantano o Infraoscuridad).' },
        { level: 6, name: 'Movimiento por el terreno', desc: 'Moverte por terreno no mágico difícil no te cuesta movimiento adicional.' },
        { level: 10, name: 'Mente de la naturaleza', desc: 'Eres inmune a los efectos de hechizos de veneno y enfermedad.' },
        { level: 14, name: 'Santuario de la naturaleza', desc: 'Las criaturas de la naturaleza son reacias a atacarte. Hacen una TS SAB o no te atacan (CD = 8 + bonif. comp + SAB).' }
      ]
    },
    {
      id: 'moon', name: 'Círculo de la Luna',
      desc: 'Los druidas del Círculo de la Luna son guardianes feroces del mundo salvaje.',
      choiceLevel: 2,
      features: [
        { level: 2, name: 'Forma salvaje de combate', desc: 'Puedes usar tu Forma Salvaje como acción adicional. También puedes transformarte en bestias con valor de desafío 1 (en lugar de 1/4). A nivel 6 puedes transformarte en bestias con CR 2; a nivel 9, CR 3; etc.' },
        { level: 2, name: 'Formas mejoradas', desc: 'A nivel 2 puedes transformarte en bestias con nadadores o voladoras.' },
        { level: 6, name: 'Ataque elemental primitivo', desc: 'Tus ataques en forma salvaje cuentan como mágicos.' },
        { level: 10, name: 'Forma elemental', desc: 'Puedes gastar 2 usos de Forma Salvaje para transformarte en un elemental de aire, tierra, fuego o agua.' },
        { level: 14, name: 'Mil formas', desc: 'Puedes lanzar alterar el yo a voluntad.' }
      ]
    }
  ],

  Fighter: [
    {
      id: 'champion', name: 'Campeón',
      desc: 'El arquetipo de Campeón se concentra en el desarrollo de la potencia física bruta llevada a su perfección letal.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Crítico mejorado', desc: 'Tus ataques de arma tienen un rango crítico de 19-20 en lugar de solo 20.' },
        { level: 7, name: 'Atleta notable', desc: 'Puedes añadir la mitad de tu bonificador de competencia (redondeado arriba) a las pruebas de FUE, DES y CON si no tienes ya competencia.' },
        { level: 10, name: 'Estilo de combate adicional', desc: 'Eliges un segundo estilo de combate adicional.' },
        { level: 15, name: 'Crítico superior', desc: 'Tus ataques de arma tienen un rango crítico de 18-20.' },
        { level: 18, name: 'Superviviente', desc: 'Al comienzo de tu turno, si tienes 1 PG o más pero menos de la mitad de tus PG máximos, recuperas 5 + modificador de CON de PG.' }
      ]
    },
    {
      id: 'battle_master', name: 'Maestro de Batalla',
      desc: 'Aquellos que emulan el arquetipo de Maestro de batalla emplean técnicas de combate transmitidas por generaciones.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Maniobras de combate', desc: 'Aprendes 3 maniobras de combate a elección. Tienes 4 dados de superioridad (d8). Ejemplos: Maniobra precisa (+d8 a tirada de ataque), Desarmar (el enemigo suelta su arma si falla TS FUE), Intimidar (el enemigo queda asustado si falla TS SAB), Maniobra de respuesta (ataque de reacción), Empuje de barrido (empuja al objetivo 15 pies).' },
        { level: 3, name: 'Estudiante de la guerra', desc: 'Ganas competencia con un tipo de herramientas de artesano a elección.' },
        { level: 7, name: 'Conocer a tu enemigo', desc: 'Si observas a una criatura al menos 1 minuto fuera de combate, puedes pedirle al DM información comparativa sobre la criatura.' },
        { level: 10, name: 'Maniobras adicionales', desc: 'Aprendes 2 maniobras más. Tus dados de superioridad son d10.' },
        { level: 15, name: 'Implacable', desc: 'Cuando tiras iniciativa y no tienes dados de superioridad, recuperas uno.' },
        { level: 18, name: 'Maestría de maniobras', desc: 'Tus dados de superioridad son d12.' }
      ]
    },
    {
      id: 'eldritch_knight', name: 'Caballero Arcano',
      desc: 'El arquetipo de Caballero Arcano combina la maestría marcial del guerrero con el estudio cuidadoso de la magia.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Lanzamiento de hechizos', desc: 'Aprendes magia de la lista del mago (enfocada en abjuración y evocación). Tienes espacios de hechizo como un tercio de tu nivel de guerrero.' },
        { level: 3, name: 'Vinculación de arma', desc: 'Puedes vincularte con hasta dos armas. Un arma vinculada no puede ser desarmada y puedes invocarla a tu mano como acción adicional.' },
        { level: 7, name: 'Magia de guerra', desc: 'Cuando usas tu acción para lanzar un truco, puedes hacer un ataque de arma como acción adicional.' },
        { level: 10, name: 'Carga élfica', desc: 'Puedes lanzar un hechizo en lugar de un ataque cuando usas la acción de Cargar.' },
        { level: 15, name: 'Golpe arcano', desc: 'Puedes lanzar un hechizo como parte de un ataque, otorgando desventaja a la TS del objetivo.' },
        { level: 18, name: 'Carga mejorada de guerra', desc: 'Cuando usas Magia de guerra, puedes hacer dos ataques en lugar de uno.' }
      ]
    }
  ],

  Monk: [
    {
      id: 'open_hand', name: 'Camino de la Mano Abierta',
      desc: 'Los monjes del Camino de la Mano Abierta son los maestros más puros del combate cuerpo a cuerpo.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Técnica de la mano abierta', desc: 'Cuando impactas con ataques de la Ráfaga de Golpes, impones uno de los siguientes efectos: el objetivo falla TS DES y cae derribado; falla TS FUE y es empujado 15 pies; no puede usar reacciones hasta el final de tu siguiente turno.' },
        { level: 6, name: 'Paz mental', desc: 'Puedes gastar 2 puntos de ki para terminar un efecto en ti que cause que estés hechizado o asustado, y hacer un descanso corto de 30 segundos (sin uso de Dados de Golpe) que te cura de enfermedades y venenos.' },
        { level: 11, name: 'Tranquilidad', desc: 'Si empiezas tu turno sin ki, ganas los beneficios de una tirada de salvación superada contra cualquier efecto.' },
        { level: 17, name: 'Palma vibratoria', desc: 'Gastas 3 puntos de ki y tocas a una criatura. Durante 30 días puedes reducirla a 0 PG instantáneamente como acción.' }
      ]
    },
    {
      id: 'shadow', name: 'Camino de la Sombra',
      desc: 'Los monjes del Camino de la Sombra siguen una tradición que valora el sigilo y el subterfugio.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Artes de las sombras', desc: 'Puedes gastar 2 puntos de ki para lanzar oscuridad, darkvision, pase sin rastro o silencio.' },
        { level: 6, name: 'Paso por las sombras', desc: 'Como acción adicional mientras en penumbra u oscuridad, puedes teletransportarte hasta 18m a un espacio no iluminado.' },
        { level: 11, name: 'Manto de sombras', desc: 'Puedes gastar 3 puntos de ki para volverte invisible hasta el final de tu siguiente turno.' },
        { level: 17, name: 'Avatar de las sombras', desc: 'Puedes crear una copia de ti mismo en las sombras. Mientras la oscuridad o penumbra esté presente, tienes ventaja en pruebas de Sigilo.' }
      ]
    }
  ],

  Paladin: [
    {
      id: 'devotion', name: 'Juramento de Devoción',
      desc: 'El Juramento de Devoción vincula a un paladín a los ideales más elevados de justicia, virtud y orden.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Hechizos de juramento', desc: 'Protección del bien y el mal, santuario (nivel 3); zona de verdad, escudo menor (nivel 5); baliza de esperanza, disipar magia (nivel 9); libertad de movimiento, guardián de la fe (nivel 13); comunión, llama destructora (nivel 17).' },
        { level: 3, name: 'Canal divino: Consagrar armas', desc: 'Como acción adicional, por 1 minuto tus ataques de arma causan daño radiante adicional y las criaturas hechizadas o inmunes a miedo tienen desventaja contra ti.' },
        { level: 3, name: 'Canal divino: Turno sagrado', desc: 'Como acción, cada ser no-muerto u oscuro en un cubo de 9m hace una TS SAB o queda en pánico durante 1 minuto.' },
        { level: 7, name: 'Aura de devoción', desc: 'Tú y los aliados a 3m (9m al nivel 18) son inmunes a ser hechizados.' },
        { level: 15, name: 'Pureza de espíritu', desc: 'Estás siempre bajo el efecto de Protección del bien y el mal.' },
        { level: 20, name: 'Forma sagrada', desc: 'Puedes asumir la forma de un ángel divino. Tus ojos destellan, alas te surgen de la espalda. Ganas: vuelo 18m, visión en la oscuridad, aura que cura 10 PG a aliados adyacentes al inicio de tu turno, resistencia al daño de armas no mágicas.' }
      ]
    },
    {
      id: 'ancients', name: 'Juramento de los Ancestros',
      desc: 'El Juramento de los Ancestros es tan antiguo que muchos lo llaman el Juramento Verde.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Hechizos de juramento', desc: 'Hablar con animales, lazos de hadas (nivel 3); bruma de paso lunar, brillo (nivel 5); aroma plantado, protección de energía (nivel 9); hielo de la tormenta, dominar bestia (nivel 13); comunión con la naturaleza, despertar (nivel 17).' },
        { level: 3, name: 'Canal divino: Llamada del naturaleza', desc: 'Crea luz brillante en 9m y dim en otros 9m. Los engendros y los no-muertos en esa área deben pasar TS SAB o quedar deslumbrados hasta el final de tu siguiente turno.' },
        { level: 3, name: 'Canal divino: Raíces enredadas', desc: 'Las plantas brotan del suelo alrededor de una criatura que puedas ver a 9m. Hace TS FUE o queda restringida durante 1 minuto.' },
        { level: 7, name: 'Aura de protección contra magia', desc: 'Tú y aliados a 3m tenéis resistencia al daño de hechizos.' },
        { level: 15, name: 'Alma antigua', desc: 'Eres inmune a los efectos de hechizos de hechizar y asustar.' },
        { level: 20, name: 'Señor del bosque anciano', desc: 'Asumes la forma de un señor del bosque antiguo. Por 1 minuto ganas: resistencia a daño cortante, perforante y contundente de armas no mágicas; hechizos restauración menor y curar heridas a voluntad.' }
      ]
    }
  ],

  Ranger: [
    {
      id: 'hunter', name: 'Cazador',
      desc: 'Emular el arquetipo del Cazador significa aceptar el lugar de centinela de la civilización.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Presa del cazador', desc: 'Elige una de las siguientes opciones: Asesino de colosos (1d8 extra una vez por turno contra criaturas por debajo de sus PG máximos), Matador de gigantes (reacción de ataque cuando un Grande o mayor te ataca), Asesino de hordas (un ataque adicional contra otra criatura si matas a una).' },
        { level: 7, name: 'Tácticas defensivas', desc: 'Elige: Escape de la horda multiataque (ataques de oportunidad tienen desventaja), Voluntad de acero (ventaja en TS contra ser asustado), Conciencia defensiva (ventaja en TS de DES contra efectos que puedas ver).' },
        { level: 11, name: 'Ataque múltiple', desc: 'Elige: Volley (ataque a distancia a todas las criaturas en radio de 3m) o Torbellino de cuchillas (ataque cuerpo a cuerpo a todas las criaturas a tu alcance).' },
        { level: 15, name: 'Defensa superior del cazador', desc: 'Elige: Evasión (ningún daño si pasas TS DES), Posición de pie (si caes a 0 PG, TS CON para quedarte a 1 PG), Escabullirse de la multitud (en tu turno, puedes moverte hasta la mitad de velocidad sin provocar ataques de oportunidad).' }
      ]
    },
    {
      id: 'beast_master', name: 'Amo de las bestias',
      desc: 'El arquetipo de Amo de las bestias encarna una amistad entre el mundo civilizado y las bestias del salvaje.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Compañero bestia', desc: 'Ganas un compañero animal. Elige una bestia de CR 1/4 o menor. Suma tu bonificador de competencia a su CA, tiradas de ataque y daño, TS, y habilidades. Tiene PG = PG normales + 4x tu nivel.' },
        { level: 7, name: 'Ataque extraordinario del compañero', desc: 'Cuando tu compañero hace la acción de Atacar, puede hacer dos ataques en lugar de uno.' },
        { level: 11, name: 'Dotes bestiales', desc: 'Tu compañero gana una de las siguientes habilidades a elección: Asalto aéreo, Multiataque defensivo o Poder de carga.' },
        { level: 15, name: 'Compañero superior', desc: 'Si tu compañero cae, puedes gastar un espacio de hechizo para restaurarle PG iguales a 4d6 + tu modificador de SAB.' }
      ]
    }
  ],

  Rogue: [
    {
      id: 'thief', name: 'Ladrón',
      desc: 'Mejoras tus habilidades en el arte del sigilo y el robo.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Manos rápidas', desc: 'Puedes usar la acción adicional del Paso ágil para hacer una prueba de Juego de manos de DES, usar herramientas de ladrón, o tomar la acción de Usar un objeto.' },
        { level: 3, name: 'Trepador de segundo piso', desc: 'Escalar no te cuesta movimiento adicional. Al saltar, la distancia máxima se calcula usando FUE o DES.' },
        { level: 9, name: 'Uso de objetos mágicos supremo', desc: 'Puedes usar cualquier objeto mágico, ignorando requisitos de clase, raza o nivel.' },
        { level: 13, name: 'Reflexivos', desc: 'Cuando haces una TS de DES y tienes éxito, puedes tomar tu reacción si no lo has hecho ya.' },
        { level: 17, name: 'Ladrón de alma', desc: 'Cuando fallas una prueba de característica, puedes tratarla como un 20 natural. 1 uso por descanso corto o largo.' }
      ]
    },
    {
      id: 'assassin', name: 'Asesino',
      desc: 'Te concentras en el sombrío arte del dar muerte. Tus habilidades son herramientas para eliminar objetivos.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Competencias adicionales', desc: 'Ganas competencia con kit de disfraz y kit de venenos.' },
        { level: 3, name: 'Asesinar', desc: 'Durante el primer turno del combate, tienes ventaja en tiradas de ataque contra cualquier criatura que no haya actuado todavía. Si golpeas a una criatura sorprendida, el golpe es un crítico.' },
        { level: 9, name: 'Impostor', desc: 'Puedes duplicar sin fisuras el habla, la escritura y el comportamiento de otra persona. Tienes ventaja en pruebas para hacerte pasar por otra persona.' },
        { level: 13, name: 'Golpe de muerte', desc: 'Cuando atacas y obtienes un crítico, multiplicas los dados de ataque furtivo por 2 antes de añadir el daño.' },
        { level: 17, name: 'Veneno de muerte', desc: 'Puedes crear un veneno que la CD sea igual a 8 + bonif. comp + INT. Una vez que uses este rasgo, no puedes volver a utilizarlo hasta que termines un descanso largo.' }
      ]
    },
    {
      id: 'arcane_trickster', name: 'Embaucador Arcano',
      desc: 'Algunos pícaros mejoran sus habilidades con magia, generalmente de las escuelas de encantamiento e ilusión.',
      choiceLevel: 3,
      features: [
        { level: 3, name: 'Lanzamiento de hechizos', desc: 'Aprendes magia de la lista del mago (enfocada en encantamiento e ilusión). Tienes espacios de hechizo como un tercio de tu nivel de pícaro.' },
        { level: 3, name: 'Mano traviesa', desc: 'Puedes dirigir tu Mano Fantasmal para desviar la atención mientras robas. Tienes ventaja en Destreza (Juego de manos) contra la criatura que la mano haya distraído.' },
        { level: 9, name: 'Conjuro mágico', desc: 'Puedes lanzar encantamiento persona o inmovilizar persona usando tu acción y aplicar ataque furtivo al primer impacto durante la concentración.' },
        { level: 13, name: 'Ladrón versatil', desc: 'Cuando lanzas un hechizo que requiera concentración, puedes mantener ese hechizo y lanzar otro hechizo de concentración.' },
        { level: 17, name: 'Ladrón de cerebros', desc: 'Una vez por turno cuando golpeas con ataque furtivo a una criatura, puedes forzarla a superar TS INT o quedar aturdida hasta el final de tu siguiente turno.' }
      ]
    }
  ],

  Sorcerer: [
    {
      id: 'draconic', name: 'Linaje Dracónico',
      desc: 'Tu magia innata viene de magia dracónica que se mezcló en tu sangre.',
      choiceLevel: 1,
      features: [
        { level: 1, name: 'Ancestro dracónico', desc: 'Elige un tipo de dragón. Cuando haces una prueba de CAR al interactuar con dragones de ese tipo, duplicas tu bonificador de competencia.' },
        { level: 1, name: 'Resiliencia dracónica', desc: 'Tu CA es 13 + modificador de DES cuando no llevas armadura. Tus PG máximos aumentan en 1 por cada nivel de hechicero.' },
        { level: 6, name: 'Afinidad elemental', desc: 'Cuando lanzas un hechizo del mismo tipo de daño que tu ancestro, añades tu modificador de CAR al daño. También puedes gastar 1 punto de brujería para ganar resistencia a ese daño durante 1 hora.' },
        { level: 14, name: 'Alas dracónicas', desc: 'Ganas velocidad de vuelo de 18m. No puedes usarla si llevas armadura.' },
        { level: 18, name: 'Presencia dracónica', desc: 'Puedes gastar 5 puntos de brujería para inspirar miedo o fascinación en las criaturas alrededor de ti en radio de 18m durante 1 minuto.' }
      ]
    },
    {
      id: 'wild_magic', name: 'Magia Salvaje',
      desc: 'Tu magia innata viene de fuerzas del caos que subyacen al orden de la creación.',
      choiceLevel: 1,
      features: [
        { level: 1, name: 'Oleada de magia salvaje', desc: 'Cuando lanzas un hechizo, el DM puede pedirte que tires en la tabla de Oleada de Magia Salvaje (100 efectos posibles).' },
        { level: 1, name: 'Aumento de marea', desc: 'Inmediatamente después de lanzar un hechizo de nivel 1 o superior en tu turno, el DM puede pedirte que tires en la tabla de Magia Salvaje.' },
        { level: 6, name: 'Suerte del caos', desc: 'Cuando tú o una criatura visible falla una tirada de ataque o prueba de característica, puedes tirar 1d4 y añadirlo. Después el DM puede forzar una Oleada de Magia Salvaje.' },
        { level: 14, name: 'Oleada controlada', desc: 'Puedes tirar dos veces en la tabla de Oleada de Magia Salvaje y elegir cuál efecto ocurre.' },
        { level: 18, name: 'Oleada maestra', desc: 'Siempre que tires en la tabla de Magia Salvaje, puedes tirar dos veces y elegir el efecto.' }
      ]
    }
  ],

  Warlock: [
    {
      id: 'fiend', name: 'El Diablo',
      desc: 'Has hecho un pacto con un demonio de las capas inferiores de la existencia.',
      choiceLevel: 1,
      features: [
        { level: 1, name: 'Hechizos ampliados', desc: 'Quema helada, manos ardientes (nivel 1); ceguera/sordera, visión en la oscuridad (nivel 3); bola de fuego, muro de fuego (nivel 5); escudo de fuego, pared de fuego (nivel 7); llama destructora, invocar planar (nivel 9).' },
        { level: 1, name: 'Bendición del oscuro', desc: 'Cuando reduces a 0 PG a una criatura hostil que valga XP, ganas PG temporales igual a tu modificador de CAR + tu nivel de brujo.' },
        { level: 6, name: 'Fortuna del oscuro', desc: 'Cuando hagas una prueba de característica o tirada de salvación, puedes añadir 1d10 al resultado. 1 uso por descanso corto o largo.' },
        { level: 10, name: 'Inmunidad al fuego', desc: 'Eres inmune al daño por fuego.' },
        { level: 14, name: 'Forma del hades', desc: 'Puedes usar tu acción para transformarte. Ganas resistencia a todos los daños excepto psíquico durante 1 minuto. 1 uso por descanso largo.' }
      ]
    },
    {
      id: 'great_old_one', name: 'El Gran Antiguo',
      desc: 'Tu patrón es un ser misterioso de naturaleza insondable, más allá de las estrellas.',
      choiceLevel: 1,
      features: [
        { level: 1, name: 'Hechizos ampliados', desc: 'Mensaje, disonant whispers (nivel 1); detectar pensamientos, susurros perturbadores (nivel 3); clarividencia, telepatía (nivel 5); dominar bestia, destierro (nivel 7); dominar persona, telepatía (nivel 9).' },
        { level: 1, name: 'Mente despertada', desc: 'Puedes hablar telepáticamente con cualquier criatura que puedas ver en 9m. No necesita compartir tu idioma.' },
        { level: 6, name: 'Defensa entropica', desc: 'Cuando una criatura te hace daño, puedes usar tu reacción para ganar resistencia a ese tipo de daño hasta el inicio de tu siguiente turno.' },
        { level: 10, name: 'Escudo del pensamiento', desc: 'Eres inmune a tener tus pensamientos leídos. Tienes resistencia al daño psíquico. Cuando una criatura te inflige daño psíquico, esa criatura recibe la misma cantidad de daño psíquico.' },
        { level: 14, name: 'Crear engendro', desc: 'Puedes lanzar dominar monstruo en un ser humanoide que hayas hechizado. Si el dominio dura 24 horas, el objetivo queda permanentemente hechizado.' }
      ]
    }
  ],

  Wizard: [
    {
      id: 'evocation', name: 'Escuela de Evocación',
      desc: 'Como evocador, te concentras en aprender la magia que crea poderosos efectos elementales.',
      choiceLevel: 2,
      features: [
        { level: 2, name: 'Esculpir hechizos', desc: 'Cuando lanzas un hechizo de evocación que afecta a otras criaturas que puedas ver, puedes elegir un número de ellas igual a 1 + el nivel del hechizo. Las criaturas elegidas pasan automáticamente sus tiradas de salvación y no reciben daño si normalmente recibirían la mitad.' },
        { level: 2, name: 'Estudio de evocación', desc: 'El oro y el tiempo para copiar un hechizo de evocación en tu libro de hechizos se reducen a la mitad.' },
        { level: 6, name: 'Evocación potente', desc: 'Tus hechizos de evocación causan un daño mínimo igual a tu modificador de INT (mínimo 1).' },
        { level: 10, name: 'Empoderar hechizos', desc: 'Puedes volver a tirar un número de dados de daño de tu hechizo de evocación igual a tu modificador de INT. Debes usar los nuevos resultados.' },
        { level: 14, name: 'Sobrecarga de hechizos', desc: 'Puedes incrementar el poder de tus hechizos de evocación simples. Cuando lanzas un hechizo de mago de nivel 1-5 que cause daño, puedes lanzarlo como si usara un espacio de 6to nivel.' }
      ]
    },
    {
      id: 'abjuration', name: 'Escuela de Abjuración',
      desc: 'Como abjurador, te concentras en magia que bloquea, expulsa o protege.',
      choiceLevel: 2,
      features: [
        { level: 2, name: 'Estudio de abjuración', desc: 'El oro y el tiempo para copiar un hechizo de abjuración en tu libro se reducen a la mitad.' },
        { level: 2, name: 'Guardián arcano', desc: 'Puedes tejer la magia alrededor de ti para protegerte. Cuando lanzas un hechizo de abjuración de nivel 1 o superior, ganas PG temporales iguales al doble del nivel del hechizo + modificador de INT.' },
        { level: 6, name: 'Proyección de guardián', desc: 'Cuando una criatura que puedas ver a 9m sufre daño, puedes usar tu reacción para hacer que tu Guardián Arcano absorba ese daño.' },
        { level: 10, name: 'Pureza mejorada', desc: 'El bono de CA de tus hechizos de abjuración se incrementa.' },
        { level: 14, name: 'Invulnerabilidad de hechizos', desc: 'Tienes resistencia al daño de los hechizos.' }
      ]
    },
    {
      id: 'illusion', name: 'Escuela de Ilusión',
      desc: 'Te deleitas en los hechizos que embaucan la mente y los sentidos.',
      choiceLevel: 2,
      features: [
        { level: 2, name: 'Estudio de ilusión', desc: 'El oro y el tiempo para copiar un hechizo de ilusión en tu libro se reducen a la mitad.' },
        { level: 2, name: 'Ilusión mejorada', desc: 'Puedes crear ilusiones que también incluyan sonido, olor y temperatura cuando lanzas trucos de ilusión.' },
        { level: 6, name: 'Ilusión maleable', desc: 'Cuando lanzas un hechizo de ilusión con duración de 1 minuto o más, puedes usar tu acción para cambiar la naturaleza de esa ilusión.' },
        { level: 10, name: 'Doble ilusorio', desc: 'Puedes crear una copia ilusoria de ti mismo como reacción cuando eres atacado. Tienes 50% de probabilidad de que el ataque golpee la ilusión en su lugar.' },
        { level: 14, name: 'Ilusión real', desc: 'Cuando una criatura interactúa con una ilusión, la ilusión adquiere una realidad temporal.' }
      ]
    }
  ]

};

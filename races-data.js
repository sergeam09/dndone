// ============================================================
// RACES DATA — SRD 5e 2014 (Español)
// ============================================================
const RACES_DATA = [

  // ── HUMANO ──────────────────────────────────────────────
  {
    id: 'human',
    name: 'Humano',
    subraces: [],
    bonuses: { str:1, dex:1, con:1, int:1, wis:1, cha:1 },
    speed: 30,
    size: 'Mediano',
    languages: ['Común', 'Un idioma adicional a elección'],
    traits: [
      { name: 'Versátil', desc: 'Los humanos obtienen +1 a todos los atributos y un idioma adicional.' }
    ],
    proficiencies: []
  },

  // ── ENANO ────────────────────────────────────────────────
  {
    id: 'dwarf',
    name: 'Enano',
    subraces: [
      {
        id: 'hill_dwarf',
        name: 'Enano de las Colinas',
        bonuses: { wis:1 },
        traits: [
          { name: 'Tenacidad enana', desc: 'Tu máximo de PG aumenta en 1, y aumenta en 1 cada vez que subes de nivel.' }
        ],
        proficiencies: []
      },
      {
        id: 'mountain_dwarf',
        name: 'Enano de las Montañas',
        bonuses: { str:2 },
        traits: [],
        proficiencies: ['Armadura ligera', 'Armadura media']
      }
    ],
    bonuses: { con:2 },
    speed: 25,
    size: 'Mediano',
    languages: ['Común', 'Enano'],
    traits: [
      { name: 'Visión en la oscuridad', desc: 'Ves en penumbra a 18 metros como si fuera luz brillante, y en oscuridad como si fuera penumbra.' },
      { name: 'Resistencia enana', desc: 'Tienes ventaja en las tiradas de salvación contra veneno y resistencia al daño por veneno.' },
      { name: 'Combate enano', desc: 'Tienes competencia con hacha de batalla, hacha de mano, martillo ligero y martillo de guerra.' },
      { name: 'Conocimiento de piedra', desc: 'Ventaja en pruebas de Historia sobre el origen de objetos de piedra o mampostería.' }
    ],
    proficiencies: ['Hacha de batalla', 'Hacha de mano', 'Martillo ligero', 'Martillo de guerra', 'Herramientas de herrero o herramientas de albañil o herramientas de cervecero']
  },

  // ── ELFO ─────────────────────────────────────────────────
  {
    id: 'elf',
    name: 'Elfo',
    subraces: [
      {
        id: 'high_elf',
        name: 'Alto Elfo',
        bonuses: { int:1 },
        traits: [
          { name: 'Truco de mago', desc: 'Conoces un truco a elección de la lista de hechizos del mago.' },
          { name: 'Idioma adicional', desc: 'Puedes leer, escribir y hablar un idioma adicional a elección.' }
        ],
        proficiencies: ['Espada larga', 'Espada corta', 'Arco corto', 'Arco largo']
      },
      {
        id: 'wood_elf',
        name: 'Elfo del Bosque',
        bonuses: { wis:1 },
        traits: [
          { name: 'Velocidad aumentada', desc: 'Tu velocidad de movimiento aumenta a 10,5 metros (35 pies).' },
          { name: 'Máscara del bosque', desc: 'Puedes intentar ocultarte incluso cuando solo estás levemente oscurecido por follaje, lluvia fuerte, nieve, niebla u otros fenómenos naturales.' }
        ],
        proficiencies: ['Espada larga', 'Espada corta', 'Arco corto', 'Arco largo'],
        speed: 35
      },
      {
        id: 'dark_elf',
        name: 'Drow (Elfo Oscuro)',
        bonuses: { cha:1 },
        traits: [
          { name: 'Visión en la oscuridad superior', desc: 'Tu visión en la oscuridad tiene un alcance de 36 metros.' },
          { name: 'Sensibilidad a la luz del sol', desc: 'Tienes desventaja en tiradas de ataque y en pruebas de Percepción que usen la vista cuando tú o tu objetivo estéis en luz solar directa.' },
          { name: 'Magia drow', desc: 'Conoces el truco luces danzantes. Al nivel 3 puedes lanzar faerie fire una vez. Al nivel 5 puedes lanzar oscuridad una vez. Recobras los usos tras un descanso largo. CAR es tu atributo para los hechizos.' }
        ],
        proficiencies: ['Rapier', 'Espada corta', 'Ballesta de mano']
      }
    ],
    bonuses: { dex:2 },
    speed: 30,
    size: 'Mediano',
    languages: ['Común', 'Élfico'],
    traits: [
      { name: 'Visión en la oscuridad', desc: 'Ves en penumbra a 18 metros como si fuera luz brillante, y en oscuridad como penumbra.' },
      { name: 'Sentidos agudos', desc: 'Tienes competencia en la habilidad Percepción.' },
      { name: 'Linaje feérico', desc: 'Tienes ventaja en tiradas de salvación contra ser hechizado, y la magia no puede dormirte.' },
      { name: 'Trance', desc: 'No necesitas dormir. Meditas profundamente 4 horas al día en lugar de dormir 8 horas.' }
    ],
    proficiencies: ['Percepción']
  },

  // ── MEDIANO ──────────────────────────────────────────────
  {
    id: 'halfling',
    name: 'Mediano',
    subraces: [
      {
        id: 'lightfoot',
        name: 'Mediano Piesligeros',
        bonuses: { cha:1 },
        traits: [
          { name: 'Sigilo natural', desc: 'Puedes intentar ocultarte detrás de criaturas que sean al menos una talla mayor que tú.' }
        ],
        proficiencies: []
      },
      {
        id: 'stout',
        name: 'Mediano Robusto',
        bonuses: { con:1 },
        traits: [
          { name: 'Resistencia robusta', desc: 'Tienes ventaja en las tiradas de salvación contra veneno y resistencia al daño por veneno.' }
        ],
        proficiencies: []
      }
    ],
    bonuses: { dex:2 },
    speed: 25,
    size: 'Pequeño',
    languages: ['Común', 'Mediano'],
    traits: [
      { name: 'Suerte', desc: 'Cuando sacas un 1 en el dado de ataque, prueba de característica o tirada de salvación, puedes volver a tirar el dado y debes usar el nuevo resultado.' },
      { name: 'Valiente', desc: 'Tienes ventaja en las tiradas de salvación contra miedo.' },
      { name: 'Agilidad mediana', desc: 'Puedes moverte a través del espacio de cualquier criatura que sea de una talla mayor que la tuya.' }
    ],
    proficiencies: []
  },

  // ── HUMANO VARIANTE ──────────────────────────────────────
  {
    id: 'human_variant',
    name: 'Humano (Variante)',
    subraces: [],
    bonuses: { custom: true, points: 2, note: 'Elige 2 atributos diferentes y añade +1 a cada uno' },
    speed: 30,
    size: 'Mediano',
    languages: ['Común', 'Un idioma adicional a elección'],
    traits: [
      { name: 'Habilidad', desc: 'Obtienes competencia en una habilidad a elección.' },
      { name: 'Dote', desc: 'Obtienes una dote a elección.' }
    ],
    proficiencies: []
  },

  // ── GNOMO ────────────────────────────────────────────────
  {
    id: 'gnome',
    name: 'Gnomo',
    subraces: [
      {
        id: 'forest_gnome',
        name: 'Gnomo del Bosque',
        bonuses: { dex:1 },
        traits: [
          { name: 'Ilusión natural', desc: 'Conoces el truco menor ilusión. INT es tu atributo mágico.' },
          { name: 'Hablar con pequeños animales', desc: 'Puedes comunicarte con pequeños animales o menores.' }
        ],
        proficiencies: []
      },
      {
        id: 'rock_gnome',
        name: 'Gnomo de las Rocas',
        bonuses: { con:1 },
        traits: [
          { name: 'Conocimiento artificial', desc: 'Tienes competencia con herramientas de artesano (herramientas de tinker). Con ellas puedes construir pequeñas artilugios.' },
          { name: 'Historiador', desc: 'Cuando hagas una prueba de INT (Historia) relacionada con artilugios mágicos, pociones u objetos alquímicos, añade el doble de tu bonificador de competencia.' }
        ],
        proficiencies: ['Herramientas de tinker']
      }
    ],
    bonuses: { int:2 },
    speed: 25,
    size: 'Pequeño',
    languages: ['Común', 'Gnomo'],
    traits: [
      { name: 'Visión en la oscuridad', desc: 'Ves en penumbra a 18 metros como si fuera luz brillante, y en oscuridad como penumbra.' },
      { name: 'Astucia gnómica', desc: 'Tienes ventaja en las tiradas de salvación de INT, SAB y CAR contra magia.' }
    ],
    proficiencies: []
  },

  // ── SEMIELFO ─────────────────────────────────────────────
  {
    id: 'half_elf',
    name: 'Semielfo',
    subraces: [],
    bonuses: { cha:2, custom: true, points: 2, note: 'Elige 2 atributos diferentes (no CAR) y añade +1 a cada uno' },
    speed: 30,
    size: 'Mediano',
    languages: ['Común', 'Élfico', 'Un idioma adicional a elección'],
    traits: [
      { name: 'Visión en la oscuridad', desc: 'Ves en penumbra a 18 metros como si fuera luz brillante, y en oscuridad como penumbra.' },
      { name: 'Linaje feérico', desc: 'Tienes ventaja en las tiradas de salvación contra ser hechizado y la magia no puede dormirte.' },
      { name: 'Versatilidad de habilidades', desc: 'Obtienes competencia en dos habilidades a tu elección.' }
    ],
    proficiencies: []
  },

  // ── SEMIORCO ─────────────────────────────────────────────
  {
    id: 'half_orc',
    name: 'Semiorco',
    subraces: [],
    bonuses: { str:2, con:1 },
    speed: 30,
    size: 'Mediano',
    languages: ['Común', 'Orco'],
    traits: [
      { name: 'Visión en la oscuridad', desc: 'Ves en penumbra a 18 metros como si fuera luz brillante, y en oscuridad como penumbra.' },
      { name: 'Amenazador', desc: 'Tienes competencia en la habilidad Intimidación.' },
      { name: 'Resistencia implacable', desc: 'Cuando te reducen a 0 PG pero no te matan en el acto, puedes quedar a 1 PG en su lugar. No puedes usar este rasgo de nuevo hasta que termines un descanso largo.' },
      { name: 'Ataques salvajes', desc: 'Cuando consigues un golpe crítico con un ataque cuerpo a cuerpo, puedes tirar uno de los dados de daño del arma un vez más y añadirlo al daño extra del crítico.' }
    ],
    proficiencies: ['Intimidación']
  },

  // ── TIEFLING ─────────────────────────────────────────────
  {
    id: 'tiefling',
    name: 'Tiefling',
    subraces: [],
    bonuses: { int:1, cha:2 },
    speed: 30,
    size: 'Mediano',
    languages: ['Común', 'Infernal'],
    traits: [
      { name: 'Visión en la oscuridad', desc: 'Ves en penumbra a 18 metros como si fuera luz brillante, y en oscuridad como penumbra.' },
      { name: 'Resistencia infernal', desc: 'Tienes resistencia al daño por fuego.' },
      { name: 'Legado infernal', desc: 'Conoces el truco taumaturgia. Al nivel 3 puedes lanzar quema helada una vez. Al nivel 5 puedes lanzar oscuridad una vez. Recobras los usos con un descanso largo. CAR es tu atributo mágico.' }
    ],
    proficiencies: []
  },

  // ── DRAGONBORN ───────────────────────────────────────────
  {
    id: 'dragonborn',
    name: 'Dracónido',
    subraces: [
      { id: 'black',   name: 'Negro (Ácido)',      bonuses: {}, damageType: 'ácido',      breathShape: 'línea 5x9m' },
      { id: 'blue',    name: 'Azul (Relámpago)',   bonuses: {}, damageType: 'relámpago',  breathShape: 'línea 5x9m' },
      { id: 'brass',   name: 'Latón (Fuego)',      bonuses: {}, damageType: 'fuego',      breathShape: 'línea 5x9m' },
      { id: 'bronze',  name: 'Bronce (Relámpago)', bonuses: {}, damageType: 'relámpago',  breathShape: 'línea 5x9m' },
      { id: 'copper',  name: 'Cobre (Ácido)',      bonuses: {}, damageType: 'ácido',      breathShape: 'línea 5x9m' },
      { id: 'gold',    name: 'Oro (Fuego)',         bonuses: {}, damageType: 'fuego',      breathShape: 'cono 4,5m' },
      { id: 'green',   name: 'Verde (Veneno)',      bonuses: {}, damageType: 'veneno',     breathShape: 'cono 4,5m' },
      { id: 'red',     name: 'Rojo (Fuego)',        bonuses: {}, damageType: 'fuego',      breathShape: 'cono 4,5m' },
      { id: 'silver',  name: 'Plata (Frío)',        bonuses: {}, damageType: 'frío',       breathShape: 'cono 4,5m' },
      { id: 'white',   name: 'Blanco (Frío)',       bonuses: {}, damageType: 'frío',       breathShape: 'cono 4,5m' }
    ],
    bonuses: { str:2, cha:1 },
    speed: 30,
    size: 'Mediano',
    languages: ['Común', 'Dracónico'],
    traits: [
      { name: 'Ascendencia dracónica', desc: 'Elige un tipo de dragón. Determina el tipo de daño de tu arma de aliento y tu resistencia al daño.' },
      { name: 'Arma de aliento', desc: 'Puedes usar tu acción para exhalar energía destructiva. CD = 8 + bonif. CON + bonif. competencia. Daño: 2d6 a nivel 1, 3d6 a nivel 6, 4d6 a nivel 11, 5d6 a nivel 16. Recuperas el uso tras un descanso corto o largo.' },
      { name: 'Resistencia al daño', desc: 'Tienes resistencia al tipo de daño de tu ascendencia dracónica.' }
    ],
    proficiencies: []
  }

];

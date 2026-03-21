// monsters-data.js — Monstruos SRD 5e (Open Game License)
// Fuente: Systems Reference Document 5.1 — Wizards of the Coast
var MONSTERS_DATA = [

// ═══════════════════════════════════════════
// A
// ═══════════════════════════════════════════
{
  name:'Abalón Gigante', nd:'0', type:'bestia', size:'Mediana',
  ac:11, hp:'10 (3d8-3)', speed:'10 ft., nado 40 ft.',
  str:11,dex:12,con:8,int:1,wis:10,cha:2,
  skills:'', saves:'', immune:'', resist:'', senses:'pasiva 10',
  langs:'—', cr:'0', xp:10,
  traits:'',
  actions:'Concha: +3 al golpe, 5 ft., 1d6+1 perforante.'
},
{
  name:'Abominación de las Sombras', nd:'9', type:'no-muerto', size:'Grande',
  ac:13, hp:'136 (16d10+48)', speed:'40 ft.',
  str:21,dex:16,con:17,int:10,wis:10,cha:8,
  skills:'Sigilo +7', saves:'DES +7, CON +7, SAB +4', immune:'Frío, Necrótico, Veneno; Encantado, Agotamiento, Agarrado, Paralizado, Envenenado, Postrado, Restringido', resist:'Ácido, Fuego, Rayo, Trueno; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 120 ft., pasiva 10',
  langs:'Abysal, Común', cr:'9', xp:5000,
  traits:'Paso por las sombras: puede desplazarse por espacios ocupados por criaturas hostiles. Vulnerabilidad a la luz solar: desventaja en ataques y pruebas en luz solar.',
  actions:'Multiataque: 2 ataques con garra. Garra: +9 al golpe, 5 ft., 2d8+5 cortante más 4d8 frío. Forjar sombra (Recarga 5-6): CD14 TS SAB o 4d8+5 psíquico y quedar asustado 1 min.'
},
{
  name:'Ángel Solar', nd:'21', type:'celestial', size:'Grande',
  ac:21, hp:'243 (18d10+144)', speed:'50 ft., vuelo 150 ft.',
  str:26,dex:22,con:26,int:25,wis:25,cha:30,
  skills:'Percepción +14, Perspicacia +14', saves:'INT +14, SAB +14, CAR +17', immune:'Necrótico, Veneno; Encantado, Asustado, Envenenado', resist:'Radiante; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 120 ft., pasiva 24',
  langs:'Todos, telepatía 120 ft.', cr:'21', xp:33000,
  traits:'Armas mágicas. Presencia angelical: CD 21 TS SAB o quedar asustado/encantado 1 min. Resistencia mágica.',
  actions:'Multiataque: 2 ataques con espada larga. Espada larga: +15 al golpe, 2d8+8 cortante más 6d8 radiante. Lanzamiento de hechizos a voluntad: Detectar mal y bien, Invisibilidad, Lluvia de fuego. 3/día: Animar muertos, Contactar otro plano, Sanar. 1/día: Prisión Divina.'
},
{
  name:'Araña Gigante', nd:'1', type:'bestia', size:'Grande',
  ac:14, hp:'26 (4d10+4)', speed:'30 ft., trepar 30 ft.',
  str:14,dex:16,con:12,int:2,wis:11,cha:4,
  skills:'Sigilo +7', saves:'', immune:'', resist:'', senses:'Visión ciega 10 ft., visión en la oscuridad 60 ft., pasiva 10',
  langs:'—', cr:'1', xp:200,
  traits:'Sentido de la tela: puede detectar vibraciones en telarañas. Escalador de arañas.',
  actions:'Mordedura: +5 al golpe, 5 ft., 1d8+3 perforante más 2d8 veneno (CD11 TS CON mitad). Red (Recarga 5-6): rango 30/60 ft., CD12 TS DES o quedar restringida.'
},
{
  name:'Araña de Fase', nd:'3', type:'monstruo', size:'Grande',
  ac:13, hp:'32 (5d10+5)', speed:'30 ft., trepar 30 ft.',
  str:15,dex:15,con:12,int:6,wis:10,cha:6,
  skills:'Sigilo +6', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'—', cr:'3', xp:700,
  traits:'Desplazamiento etéreo: puede cambiar entre Plano Material y Plano Etéreo como acción adicional.',
  actions:'Mordedura: +4 al golpe, 5 ft., 2d10+2 perforante más 4d6 veneno (CD11 TS CON mitad, 0 en éxito).'
},
{
  name:'Arpía', nd:'1', type:'monstruo', size:'Mediana',
  ac:11, hp:'38 (7d8+7)', speed:'20 ft., vuelo 40 ft.',
  str:12,dex:13,con:12,int:7,wis:10,cha:13,
  skills:'', saves:'', immune:'', resist:'', senses:'pasiva 10',
  langs:'Común', cr:'1', xp:200,
  traits:'',
  actions:'Multiataque: garra y maza. Maza: +3 al golpe, 1d6+1 contundente. Garra: +3 al golpe, 2d6+1 cortante. Canto encantador: CD11 TS SAB o encantada y se mueve hacia la arpía.'
},

// ═══════════════════════════════════════════
// B
// ═══════════════════════════════════════════
{
  name:'Banshee', nd:'4', type:'no-muerto', size:'Mediana',
  ac:12, hp:'58 (13d8)', speed:'0 ft., vuelo 40 ft. (flotar)',
  str:1,dex:14,con:10,int:12,wis:11,cha:17,
  skills:'Percepción +2', saves:'SAB +2, CAR +5', immune:'Frío, Necrótico, Veneno; Encantado, Agotamiento, Agarrado, Paralizado, Envenenado, Postrado, Restringido, Inconsciente', resist:'Ácido, Fuego, Rayo, Trueno; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 12',
  langs:'Común, Élfico', cr:'4', xp:1100,
  traits:'Detectar vida: puede detectar criaturas vivas en 5 millas. Movimiento incorpóreo.',
  actions:'Toque corrupto: +4 al golpe, 3d6 necrótico. Lamento (Recarga después de descanso corto): CD13 TS CON o caer a 0 PG (inmune a no-muertos y constructos). Aullido de muerte (1/día): CD13 TS SAB o reducir PG máximos en 4d6.'
},
{
  name:'Basilisco', nd:'3', type:'monstruo', size:'Mediana',
  ac:15, hp:'52 (8d8+16)', speed:'20 ft.',
  str:16,dex:8,con:15,int:2,wis:8,cha:7,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 9',
  langs:'—', cr:'3', xp:700,
  traits:'Mirada petrificante: criatura que empieza turno a 30 ft. y puede ver los ojos: CD12 TS CON o restringida. Petrificada si falla segunda vez.',
  actions:'Mordedura: +5 al golpe, 2d6+3 perforante más 2d6 veneno.'
},
{
  name:'Begbear', nd:'2', type:'bestia', size:'Grande',
  ac:11, hp:'34 (4d10+12)', speed:'40 ft.',
  str:19,dex:13,con:16,int:2,wis:13,cha:7,
  skills:'Percepción +3', saves:'', immune:'', resist:'', senses:'pasiva 13',
  langs:'—', cr:'2', xp:450,
  traits:'',
  actions:'Multiataque: 2 garras. Garra: +6 al golpe, 2d6+4 cortante. Mordedura: +6 al golpe, 1d8+4 perforante.'
},
{
  name:'Behir', nd:'11', type:'monstruo', size:'Enorme',
  ac:17, hp:'168 (16d12+64)', speed:'50 ft., trepar 40 ft.',
  str:23,dex:16,con:18,int:7,wis:14,cha:12,
  skills:'Percepción +6, Sigilo +7', saves:'', immune:'Rayo', resist:'', senses:'Visión en la oscuridad 90 ft., pasiva 16',
  langs:'Dracónico', cr:'11', xp:7200,
  traits:'',
  actions:'Multiataque: mordedura y constricción. Mordedura: +10 al golpe, 3d10+6 perforante. Constricción: +10 al golpe, 2d10+6 contundente y agarrada (CD16). Relámpago (Recarga 5-6): 20x5 ft. línea, CD16 TS DES 12d10 rayo (mitad éxito). Tragar: objetivo agarrado mediano o menor.'
},
{
  name:'Bestia de las Sombras', nd:'5', type:'no-muerto', size:'Grande',
  ac:13, hp:'85 (10d10+30)', speed:'40 ft.',
  str:19,dex:16,con:16,int:2,wis:10,cha:5,
  skills:'Sigilo +5', saves:'', immune:'Necrótico, Veneno; Agotamiento, Asustado, Envenenado', resist:'Ácido, Fuego, Rayo, Trueno; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 120 ft., pasiva 10',
  langs:'—', cr:'5', xp:1800,
  traits:'Amorfo de sombra: puede pasar por espacios de 1 pulgada. Vulnerabilidad a la luz solar.',
  actions:'Garra: +6 al golpe, 2d6+4 cortante más 2d6 frío. Fuerza drenante: CD13 TS CON o reducir FUE en 1d6.'
},
{
  name:'Bugbear', nd:'1', type:'humanoide', size:'Mediana',
  ac:16, hp:'27 (5d8+5)', speed:'30 ft.',
  str:15,dex:14,con:13,int:8,wis:11,cha:9,
  skills:'Engaño +2, Sigilo +6', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Común, Goblin', cr:'1', xp:200,
  traits:'Ataque sorpresivo: +2d6 daño si ataca a criatura sorprendida.',
  actions:'Mayal: +4 al golpe, 2d6+2 contundente. Jabalina: +4 al golpe, rango 30/120, 2d6+2 perforante.'
},
{
  name:'Bugbear Jefe', nd:'3', type:'humanoide', size:'Mediana',
  ac:17, hp:'65 (10d8+20)', speed:'30 ft.',
  str:17,dex:14,con:14,int:11,wis:12,cha:11,
  skills:'Engaño +2, Intimidación +2, Sigilo +6', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 11',
  langs:'Común, Goblin', cr:'3', xp:700,
  traits:'Ataque sorpresivo: +2d6 daño si ataca a criatura sorprendida. Táctico: aliados a 30 ft. con ventaja en ataques contra enemigos a 5 ft. del jefe.',
  actions:'Multiataque: 2 ataques. Mayal: +5 al golpe, 2d6+3 contundente. Jabalina: +5 al golpe, rango 30/120, 2d6+3 perforante.'
},

// ═══════════════════════════════════════════
// C
// ═══════════════════════════════════════════
{
  name:'Cambion', nd:'5', type:'infernal', size:'Mediana',
  ac:19, hp:'82 (11d8+33)', speed:'30 ft., vuelo 60 ft.',
  str:18,dex:18,con:16,int:14,wis:12,cha:16,
  skills:'Engaño +7, Intimidación +5, Percepción +3, Sigilo +6', saves:'FUE +6, CON +5, INT +4, CAR +5', immune:'Veneno; Envenenado', resist:'Frío, Fuego, Rayo; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 13',
  langs:'Abysal, Común, Infernal', cr:'5', xp:1800,
  traits:'Resistencia mágica.',
  actions:'Multiataque: 2 ataques. Lanza de fuego: +7 al golpe, 1d6+4 perforante más 2d6 fuego. Toque vampírico: +7 al golpe, 3d6 necrótico, curación igual. Hechizos (CAR): A voluntad: Detectar magia, Invisibilidad. 3/día: Sugestión.'
},
{
  name:'Centauro', nd:'2', type:'monstruo', size:'Grande',
  ac:12, hp:'45 (6d10+12)', speed:'50 ft.',
  str:18,dex:14,con:14,int:9,wis:13,cha:11,
  skills:'Atletismo +6, Percepción +3, Supervivencia +3', saves:'', immune:'', resist:'', senses:'pasiva 13',
  langs:'Élfico, Silvano', cr:'2', xp:450,
  traits:'Carga: si se mueve 30 ft. en línea recta y golpea con asta, causa 3d6 perforante adicional.',
  actions:'Multiataque: pica y cascos. Pica: +6 al golpe, 1d8+4 perforante. Cascos: +6 al golpe, 2d6+4 contundente. Arco largo: +4 al golpe, rango 150/600, 1d8+2 perforante.'
},
{
  name:'Ciclope', nd:'6', type:'gigante', size:'Enorme',
  ac:14, hp:'138 (12d12+60)', speed:'30 ft.',
  str:22,dex:11,con:20,int:8,wis:6,cha:10,
  skills:'Percepción +0', saves:'', immune:'', resist:'', senses:'pasiva 10',
  langs:'Gigante', cr:'6', xp:2300,
  traits:'Mala profundidad: desventaja en ataques a distancia.',
  actions:'Multiataque: 2 mazazos. Mazo gigante: +8 al golpe, 2d8+6 contundente. Rocas: +8 al golpe, rango 30/120, 2d10+6 contundente.'
},
{
  name:'Cocatriz', nd:'1/2', type:'monstruo', size:'Pequeña',
  ac:11, hp:'27 (6d6+6)', speed:'20 ft., vuelo 40 ft.',
  str:6,dex:12,con:12,int:2,wis:13,cha:5,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 11',
  langs:'—', cr:'1/2', xp:100,
  traits:'',
  actions:'Pico petrificante: +3 al golpe, 1d4+1 perforante. CD11 TS CON o restringido (repite al inicio de cada turno, 3 fallos = petrificado 24h).'
},
{
  name:'Cocodrilo', nd:'1/2', type:'bestia', size:'Grande',
  ac:12, hp:'19 (3d10+3)', speed:'20 ft., nado 30 ft.',
  str:15,dex:10,con:13,int:2,wis:10,cha:5,
  skills:'Sigilo +2', saves:'', immune:'', resist:'', senses:'pasiva 10',
  langs:'—', cr:'1/2', xp:100,
  traits:'Apnea: puede contener la respiración 15 minutos.',
  actions:'Mordedura: +4 al golpe, 1d10+2 perforante y agarrada (CD12). Rodar: si tiene criatura agarrada, +4 al golpe, 1d10+2 contundente y la voltea.'
},
{
  name:'Cocodrilo Gigante', nd:'5', type:'bestia', size:'Enorme',
  ac:14, hp:'114 (12d12+36)', speed:'30 ft., nado 50 ft.',
  str:21,dex:9,con:17,int:2,wis:10,cha:7,
  skills:'Sigilo +5', saves:'', immune:'', resist:'', senses:'pasiva 10',
  langs:'—', cr:'5', xp:1800,
  traits:'Apnea: puede contener la respiración 30 minutos.',
  actions:'Multiataque: mordedura y cola (o 2 mordidas). Mordedura: +8 al golpe, 3d10+5 perforante y agarrada (CD16). Cola: +8 al golpe, 2d8+5 contundente.'
},
{
  name:'Cubo Gelatinoso', nd:'2', type:'cieno', size:'Grande',
  ac:6, hp:'84 (8d10+40)', speed:'15 ft.',
  str:14,dex:3,con:20,int:1,wis:6,cha:1,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión ciega 60 ft., pasiva 8',
  langs:'—', cr:'2', xp:450,
  traits:'Transparente: CD15 Percepción para verlo. Ooze Cube: llena espacio de 10x10 ft.',
  actions:'Pseudopodo: +4 al golpe, 3d6+2 ácido. Engullir: agarrada (CD12) criatura tragada, cegada y restringida, 6d6 ácido por turno.'
},

// ═══════════════════════════════════════════
// D
// ═══════════════════════════════════════════
{
  name:'Demonio (Balor)', nd:'19', type:'infernal', size:'Enorme',
  ac:19, hp:'262 (21d12+126)', speed:'40 ft., vuelo 80 ft.',
  str:26,dex:15,con:22,int:20,wis:16,cha:22,
  skills:'Percepción +9', saves:'FUE +14, CON +12, SAB +9, CAR +12', immune:'Fuego, Veneno; Envenenado', resist:'Rayo, Frío; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 120 ft., pasiva 19',
  langs:'Abysal, telepatía 120 ft.', cr:'19', xp:22000,
  traits:'Aura de fuego: 5 ft., 3d6 fuego a quien empiece turno ahí. Resistencia mágica. Armas mágicas.',
  actions:'Multiataque: Vorpal + látigo de fuego. Espada vorpal: +14 al golpe, 3d8+8 cortante más 3d8 rayo. Látigo de fuego: +14 al golpe, alcance 30 ft., 2d8+8 cortante más 3d8 fuego y agarrado. Teletransporte.'
},
{
  name:'Demonio (Dretch)', nd:'1/4', type:'infernal', size:'Pequeño',
  ac:11, hp:'18 (4d6+4)', speed:'20 ft.',
  str:11,dex:11,con:12,int:5,wis:8,cha:3,
  skills:'', saves:'', immune:'Veneno; Envenenado', resist:'Frío, Fuego, Rayo', senses:'Visión en la oscuridad 60 ft., pasiva 9',
  langs:'Abysal, telepatía 60 ft.', cr:'1/4', xp:50,
  traits:'',
  actions:'Multiataque: mordedura y garra. Mordedura: +2 al golpe, 1d6 perforante. Garra: +2 al golpe, 1d4 cortante. Nube de gas pestilente (Recarga 5-6): 10 ft. radio, CD11 TS CON o incapacitado 1 min.'
},
{
  name:'Demonio (Goristo)', nd:'13', type:'infernal', size:'Grande',
  ac:18, hp:'310 (23d10+184)', speed:'40 ft.',
  str:27,dex:10,con:26,int:11,wis:11,cha:13,
  skills:'Percepción +5', saves:'FUE +13, CON +13', immune:'Veneno; Envenenado', resist:'Frío, Fuego, Rayo; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 15',
  langs:'Abysal', cr:'13', xp:10000,
  traits:'Resistencia mágica.',
  actions:'Multiataque: 2 puñetazos. Puñetazo: +13 al golpe, 3d10+8 contundente. Cuerpo a cuerpo arrasador: CD19 FUE o empujado 15 ft.'
},
{
  name:'Demonio (Hezrou)', nd:'8', type:'infernal', size:'Grande',
  ac:16, hp:'136 (13d10+65)', speed:'30 ft.',
  str:19,dex:17,con:20,int:5,wis:12,cha:13,
  skills:'', saves:'FUE +7, CON +8, SAB +4', immune:'Veneno; Envenenado', resist:'Frío, Fuego, Rayo; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 11',
  langs:'Abysal, telepatía 120 ft.', cr:'8', xp:3900,
  traits:'Hedor: CD14 TS CON o envenenado hasta inicio siguiente turno. Resistencia mágica.',
  actions:'Multiataque: mordedura y 2 garras. Mordedura: +7 al golpe, 2d10+4 perforante. Garra: +7 al golpe, 2d6+4 cortante.'
},
{
  name:'Demonio (Marilith)', nd:'16', type:'infernal', size:'Grande',
  ac:18, hp:'189 (18d10+90)', speed:'40 ft.',
  str:18,dex:20,con:20,int:18,wis:16,cha:20,
  skills:'Percepción +8', saves:'FUE +9, CON +10, SAB +8, CAR +10', immune:'Veneno; Envenenado', resist:'Frío, Fuego, Rayo; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 120 ft., pasiva 18',
  langs:'Abysal, telepatía 120 ft.', cr:'16', xp:15000,
  traits:'Resistencia mágica. Armas mágicas. Reacción del guardián: +2 CA.',
  actions:'Multiataque: 7 ataques con espada larga. Espada larga: +9 al golpe, 2d8+4 cortante. Cola: +9 al golpe, 2d10+4 contundente y agarrada.'
},
{
  name:'Demonio (Nalfeshnee)', nd:'13', type:'infernal', size:'Grande',
  ac:18, hp:'184 (16d10+96)', speed:'20 ft., vuelo 30 ft.',
  str:21,dex:10,con:22,int:19,wis:12,cha:15,
  skills:'', saves:'CON +11, INT +9, SAB +6, CAR +7', immune:'Veneno; Envenenado', resist:'Frío, Fuego, Rayo; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 60 ft., pasiva 11',
  langs:'Abysal, telepatía 120 ft.', cr:'13', xp:10000,
  traits:'Resistencia mágica.',
  actions:'Multiataque: mordedura y 2 garras. Mordedura: +10 al golpe, 2d10+5 perforante. Garra: +10 al golpe, 3d6+5 cortante. Explosión de horror (Recarga 5-6): 15 ft. radio, CD16 SAB, fallo: 4d8+5 psíquico y asustado 1 min.'
},
{
  name:'Demonio (Quasit)', nd:'1', type:'infernal', size:'Diminuto',
  ac:13, hp:'7 (3d4)', speed:'40 ft.',
  str:5,dex:17,con:10,int:7,wis:10,cha:10,
  skills:'Sigilo +5', saves:'', immune:'Veneno; Asustado, Envenenado', resist:'Frío, Fuego, Rayo; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 120 ft., pasiva 10',
  langs:'Abysal, Común', cr:'1', xp:200,
  traits:'Resistencia mágica. Cambiaformas (cuervo, rata, sapo).',
  actions:'Garra (forma de quasit): +4 al golpe, 1d3+3 perforante más 1d4 veneno (CD10 TS CON o envenenado). Provoca el terror (Recarga 5-6): CD10 TS SAB o asustado 1 min.'
},
{
  name:'Demonio (Vrock)', nd:'6', type:'infernal', size:'Grande',
  ac:15, hp:'104 (11d10+44)', speed:'40 ft., vuelo 60 ft.',
  str:17,dex:15,con:18,int:8,wis:13,cha:8,
  skills:'Percepción +5', saves:'DES +5, SAB +4, CAR +2', immune:'Veneno; Envenenado', resist:'Frío, Fuego, Rayo; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 120 ft., pasiva 15',
  langs:'Abysal, telepatía 120 ft.', cr:'6', xp:2300,
  traits:'Resistencia mágica.',
  actions:'Multiataque: pico y 2 garras. Pico: +6 al golpe, 2d6+3 perforante. Garra: +6 al golpe, 2d10+3 cortante. Esporas (Recarga 5-6): 15 ft. radio, CD14 TS CON o 1d10 veneno y envenenado 1 min. Chillido ensordecedor (1/día): CD14 TS CON o aturdido hasta fin del turno.'
},
{
  name:'Diablo (Barbazu)', nd:'5', type:'infernal', size:'Mediana',
  ac:13, hp:'110 (17d8+34)', speed:'30 ft.',
  str:16,dex:17,con:14,int:9,wis:11,cha:11,
  skills:'', saves:'FUE +5, CON +4, SAB +2', immune:'Fuego, Veneno; Envenenado', resist:'Frío; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Infernal, telepatía 120 ft.', cr:'5', xp:1800,
  traits:'Resistencia mágica. Armas mágicas.',
  actions:'Multiataque: 2 garras y horquilla. Garra: +5 al golpe, 1d6+3 cortante. Horquilla ardiente: +5 al golpe, 2d6+3 perforante más 2d6 fuego.'
},
{
  name:'Diablo (Erinys)', nd:'12', type:'infernal', size:'Mediana',
  ac:18, hp:'153 (18d8+72)', speed:'30 ft., vuelo 60 ft.',
  str:18,dex:16,con:18,int:14,wis:14,cha:18,
  skills:'Percepción +6, Perspicacia +6', saves:'DES +7, CON +8, SAB +6, CAR +8', immune:'Fuego, Veneno; Envenenado', resist:'Frío; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 60 ft., pasiva 16',
  langs:'Infernal, telepatía 120 ft.', cr:'12', xp:8400,
  traits:'Resistencia mágica. Armas mágicas.',
  actions:'Multiataque: 3 lanzas. Lanza: +8 al golpe, 2d6+4 perforante más 3d6 veneno. Arco infernal: +7 al golpe, 2d8+3 perforante más 2d8 veneno. Cadenas infernales: objetivo agarrado y restringido.'
},
{
  name:'Diablo (Ice Devil)', nd:'14', type:'infernal', size:'Grande',
  ac:18, hp:'180 (19d10+76)', speed:'40 ft.',
  str:21,dex:14,con:18,int:18,wis:15,cha:18,
  skills:'', saves:'DES +7, CON +9, SAB +7, CAR +9', immune:'Fuego, Veneno; Envenenado', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión ciega 60 ft., visión en la oscuridad 120 ft., pasiva 12',
  langs:'Infernal, telepatía 120 ft.', cr:'14', xp:11500,
  traits:'Resistencia mágica. Armas mágicas.',
  actions:'Multiataque: 3 ataques. Garra: +10 al golpe, 2d8+5 cortante. Cola: +10 al golpe, 2d6+5 contundente. Muro de hielo (Recarga 5-6).'
},
{
  name:'Diablo (Pit Fiend)', nd:'20', type:'infernal', size:'Grande',
  ac:19, hp:'300 (24d10+168)', speed:'30 ft., vuelo 60 ft.',
  str:26,dex:14,con:24,int:22,wis:18,cha:24,
  skills:'', saves:'DES +8, CON +13, SAB +10, CAR +13', immune:'Fuego, Veneno; Envenenado', resist:'Frío; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 120 ft., pasiva 14',
  langs:'Infernal, telepatía 120 ft.', cr:'20', xp:25000,
  traits:'Aura infernal: 10 ft., CD21 TS SAB o asustado. Resistencia mágica. Armas mágicas.',
  actions:'Multiataque: 4 ataques (maza y/o mordida). Maza: +14 al golpe, 2d6+8 contundente más 2d6 fuego. Mordida: +14 al golpe, 4d6+8 perforante más 2d6 veneno y envenenado.'
},
{
  name:'Diablo (Spinagon)', nd:'2', type:'infernal', size:'Pequeño',
  ac:13, hp:'22 (5d6+5)', speed:'20 ft., vuelo 40 ft.',
  str:10,dex:16,con:12,int:11,wis:11,cha:8,
  skills:'Sigilo +5', saves:'', immune:'Fuego, Veneno; Envenenado', resist:'Frío; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Infernal, telepatía 60 ft.', cr:'2', xp:450,
  traits:'Resistencia mágica.',
  actions:'Garra: +5 al golpe, 2d4+3 cortante. Espinas de fuego: +5 al golpe, rango 20/80, 1d4+3 perforante más 2d4 fuego.'
},
{
  name:'Dragón Cromático (Negro, Adulto)', nd:'14', type:'dragón', size:'Enorme',
  ac:19, hp:'195 (17d12+85)', speed:'40 ft., nado 40 ft., vuelo 80 ft.',
  str:23,dex:14,con:21,int:14,wis:13,cha:17,
  skills:'Percepción +11, Sigilo +7', saves:'DES +7, CON +10, SAB +6, CAR +8', immune:'Ácido', resist:'', senses:'Ceguera/Oscuridad 60 ft., visión en la oscuridad 120 ft., pasiva 21',
  langs:'Común, Dracónico', cr:'14', xp:11500,
  traits:'Anfibio. Resistencia legendaria (3/día).',
  actions:'Multiataque: 3 (mordida y 2 garras). Mordida: +11 al golpe, 2d10+6 perforante más 2d8 ácido. Garra: +11, 2d6+6. Cola: +11, 2d8+6. Arma de aliento ácido (Recarga 5-6): 60 ft. línea, CD18 DES, 12d8 ácido. Acciones legendarias: detectar, cola, ataque de ala.'
},
{
  name:'Dragón Cromático (Azul, Adulto)', nd:'16', type:'dragón', size:'Enorme',
  ac:19, hp:'225 (18d12+108)', speed:'40 ft., vuelo 80 ft.',
  str:25,dex:10,con:23,int:16,wis:15,cha:19,
  skills:'Percepción +12, Sigilo +5', saves:'DES +5, CON +11, SAB +7, CAR +9', immune:'Rayo', resist:'', senses:'Ceguera/Oscuridad 60 ft., visión en la oscuridad 120 ft., pasiva 22',
  langs:'Común, Dracónico', cr:'16', xp:15000,
  traits:'Resistencia legendaria (3/día).',
  actions:'Multiataque: 3 (mordida y 2 garras). Mordida: +12 al golpe, 2d10+7 perforante más 2d10 rayo. Aliento de rayo (Recarga 5-6): 90 ft. línea, CD23 DES, 16d10 rayo.'
},
{
  name:'Dragón Cromático (Verde, Adulto)', nd:'15', type:'dragón', size:'Enorme',
  ac:19, hp:'207 (18d12+90)', speed:'40 ft., nado 40 ft., vuelo 80 ft.',
  str:23,dex:12,con:21,int:18,wis:15,cha:17,
  skills:'Engaño +7, Percepción +11, Perspicacia +6, Sigilo +5', saves:'DES +6, CON +10, SAB +6, CAR +7', immune:'Veneno', resist:'', senses:'Ceguera/Oscuridad 60 ft., visión en la oscuridad 120 ft., pasiva 21',
  langs:'Común, Dracónico', cr:'15', xp:13000,
  traits:'Anfibio. Resistencia legendaria (3/día).',
  actions:'Multiataque: 3. Mordida: +11 al golpe, 2d10+6 perforante más 2d6 veneno. Aliento de veneno (Recarga 5-6): 60 ft. cono, CD18 CON, 16d8 veneno.'
},
{
  name:'Dragón Cromático (Rojo, Adulto)', nd:'17', type:'dragón', size:'Enorme',
  ac:19, hp:'256 (19d12+133)', speed:'40 ft., trepar 40 ft., vuelo 80 ft.',
  str:27,dex:10,con:25,int:16,wis:13,cha:21,
  skills:'Percepción +13, Sigilo +6', saves:'DES +6, CON +13, SAB +7, CAR +11', immune:'Fuego', resist:'', senses:'Ceguera/Oscuridad 60 ft., visión en la oscuridad 120 ft., pasiva 23',
  langs:'Común, Dracónico', cr:'17', xp:18000,
  traits:'Resistencia legendaria (3/día).',
  actions:'Multiataque: 3. Mordida: +14 al golpe, 2d10+8 perforante más 4d6 fuego. Aliento de fuego (Recarga 5-6): 60 ft. cono, CD21 DES, 18d6 fuego.'
},
{
  name:'Dragón Cromático (Blanco, Adulto)', nd:'13', type:'dragón', size:'Enorme',
  ac:18, hp:'200 (16d12+96)', speed:'40 ft., nado 40 ft., trepar 40 ft., vuelo 80 ft.',
  str:22,dex:10,con:22,int:8,wis:12,cha:12,
  skills:'Percepción +9, Sigilo +4', saves:'DES +4, CON +10, SAB +5, CAR +5', immune:'Frío', resist:'', senses:'Ceguera/Oscuridad 60 ft., visión en la oscuridad 120 ft., pasiva 19',
  langs:'Común, Dracónico', cr:'13', xp:10000,
  traits:'Resistencia legendaria (3/día). Caminar sobre hielo.',
  actions:'Multiataque: 3. Mordida: +10 al golpe, 2d10+6 perforante más 1d8 frío. Aliento de frío (Recarga 5-6): 60 ft. cono, CD19 CON, 16d8 frío.'
},
{
  name:'Dragón Metálico (Dorado, Adulto)', nd:'17', type:'dragón', size:'Enorme',
  ac:19, hp:'256 (19d12+133)', speed:'40 ft., nado 40 ft., vuelo 80 ft.',
  str:27,dex:14,con:25,int:16,wis:13,cha:24,
  skills:'Percepción +13, Perspicacia +7, Sigilo +7', saves:'DES +8, CON +13, SAB +7, CAR +13', immune:'Fuego', resist:'', senses:'Ceguera/Oscuridad 60 ft., visión en la oscuridad 120 ft., pasiva 23',
  langs:'Común, Dracónico', cr:'17', xp:18000,
  traits:'Resistencia legendaria (3/día). Cambiaformas.',
  actions:'Multiataque: 3. Mordida: +14. Aliento de fuego (Recarga 5-6): CD21, 18d6 fuego. Aliento debilitador: CD21 TS FUE o incapacitado.'
},
{
  name:'Dragón Metálico (Plateado, Adulto)', nd:'16', type:'dragón', size:'Enorme',
  ac:19, hp:'243 (18d12+108)', speed:'40 ft., vuelo 80 ft.',
  str:27,dex:10,con:23,int:16,wis:11,cha:23,
  skills:'Arcanos +7, Historia +7, Percepción +8, Sigilo +4', saves:'DES +5, CON +11, SAB +5, CAR +11', immune:'Frío', resist:'', senses:'Ceguera/Oscuridad 60 ft., visión en la oscuridad 120 ft., pasiva 18',
  langs:'Común, Dracónico', cr:'16', xp:15000,
  traits:'Resistencia legendaria (3/día). Cambiaformas.',
  actions:'Multiataque: 3. Mordida: +13. Aliento de frío (Recarga 5-6): CD20, 16d8 frío. Aliento paralizante: CD20 TS CON o paralizado.'
},
{
  name:'Dragón Joven (Rojo)', nd:'10', type:'dragón', size:'Grande',
  ac:18, hp:'178 (17d10+85)', speed:'40 ft., trepar 40 ft., vuelo 80 ft.',
  str:23,dex:10,con:21,int:14,wis:11,cha:19,
  skills:'Percepción +8, Sigilo +4', saves:'DES +4, CON +9, SAB +4, CAR +8', immune:'Fuego', resist:'', senses:'Ceguera/Oscuridad 30 ft., visión en la oscuridad 120 ft., pasiva 18',
  langs:'Común, Dracónico', cr:'10', xp:5900,
  traits:'',
  actions:'Multiataque: 3. Mordida: +10. Aliento de fuego (Recarga 5-6): 30 ft. cono, CD17, 16d6 fuego.'
},
{
  name:'Dragón Wyrmling (Rojo)', nd:'4', type:'dragón', size:'Mediana',
  ac:17, hp:'75 (10d8+30)', speed:'30 ft., trepar 30 ft., vuelo 60 ft.',
  str:19,dex:10,con:17,int:12,wis:11,cha:15,
  skills:'Percepción +4, Sigilo +2', saves:'DES +2, CON +5, SAB +2, CAR +4', immune:'Fuego', resist:'', senses:'Ceguera/Oscuridad 10 ft., visión en la oscuridad 60 ft., pasiva 14',
  langs:'Dracónico', cr:'4', xp:1100,
  traits:'',
  actions:'Mordida: +6 al golpe, 1d10+4 perforante más 3d6 fuego. Aliento de fuego (Recarga 5-6): 15 ft. cono, CD13, 7d6 fuego.'
},

// ═══════════════════════════════════════════
// E
// ═══════════════════════════════════════════
{
  name:'Elemental de Agua', nd:'5', type:'elemental', size:'Grande',
  ac:14, hp:'114 (12d10+48)', speed:'30 ft., nado 90 ft.',
  str:18,dex:14,con:18,int:5,wis:10,cha:8,
  skills:'', saves:'', immune:'Veneno; Agotamiento, Paralizado, Petrificado, Envenenado, Postrado, Inconsciente', resist:'Ácido; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Aquan', cr:'5', xp:1800,
  traits:'Forma de agua: puede pasar por espacios de 1 pulgada. Congelación: si alcanza 0 PG en temperatura bajo cero, se solidifica.',
  actions:'Multiataque: 2 golpes. Golpe: +7 al golpe, 2d8+4 contundente. Aplastamiento acuático (Recarga 5-6): 15 ft. radio, CD15 FUE o agarrado y comienza a ahogarse.'
},
{
  name:'Elemental de Aire', nd:'5', type:'elemental', size:'Grande',
  ac:15, hp:'90 (12d10+24)', speed:'0 ft., vuelo 90 ft. (flotar)',
  str:14,dex:20,con:14,int:6,wis:10,cha:6,
  skills:'', saves:'', immune:'Veneno; Agotamiento, Agarrado, Paralizado, Petrificado, Envenenado, Postrado, Restringido, Inconsciente', resist:'Rayo, Trueno; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Auran', cr:'5', xp:1800,
  traits:'Forma de aire: puede pasar por espacios de 1 pulgada.',
  actions:'Multiataque: 2 golpes. Golpe: +8 al golpe, 2d8+5 contundente. Torbellino (Recarga 4-6): CD13 FUE o agarrado y 3d8+5 contundente; si vuela, tira de él.'
},
{
  name:'Elemental de Fuego', nd:'5', type:'elemental', size:'Grande',
  ac:13, hp:'102 (12d10+36)', speed:'50 ft.',
  str:10,dex:17,con:16,int:6,wis:10,cha:7,
  skills:'', saves:'', immune:'Fuego, Veneno; Agotamiento, Agarrado, Paralizado, Petrificado, Envenenado, Postrado, Restringido, Inconsciente', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Ignan', cr:'5', xp:1800,
  traits:'Forma de fuego: puede pasar por espacios de 1 pulgada. Iluminación. Vulnerabilidad al agua.',
  actions:'Multiataque: 2 golpes. Golpe: +6 al golpe, 3d6+3 fuego. Incendiar: criatura tocada CD11 DES o 1d10 fuego al inicio de sus turnos.'
},
{
  name:'Elemental de Tierra', nd:'5', type:'elemental', size:'Grande',
  ac:17, hp:'126 (12d10+60)', speed:'30 ft., excavación 30 ft.',
  str:20,dex:8,con:20,int:5,wis:10,cha:5,
  skills:'', saves:'', immune:'Veneno; Agotamiento, Paralizado, Petrificado, Envenenado, Postrado, Inconsciente', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Temblorsense 60 ft., visión ciega 60 ft., pasiva 10',
  langs:'Terran', cr:'5', xp:1800,
  traits:'Paso por la tierra: puede excavarse por tierra, no piedra.',
  actions:'Multiataque: 2 golpes. Golpe: +8 al golpe, 2d8+5 contundente. Aplastamiento de tierra (Recarga 5-6): 5 ft. línea de 30, CD15 DES 2d6+5 contundente.'
},
{
  name:'Elfo del Bosque (NPC)', nd:'1/2', type:'humanoide', size:'Mediana',
  ac:16, hp:'22 (5d8)', speed:'35 ft.',
  str:10,dex:14,con:10,int:11,wis:12,cha:11,
  skills:'Percepción +3, Sigilo +6', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 13',
  langs:'Común, Élfico', cr:'1/2', xp:100,
  traits:'Posición de Fe: desventaja en ataques de distancia contra él si hay aliado a 5 ft.',
  actions:'Espada larga: +2 al golpe, 1d8 cortante. Arco largo: +4 al golpe, 1d8+2 perforante.'
},
{
  name:'Enano del Escudo (Veterano)', nd:'3', type:'humanoide', size:'Mediana',
  ac:17, hp:'52 (8d8+16)', speed:'25 ft.',
  str:16,dex:13,con:14,int:10,wis:11,cha:10,
  skills:'Atletismo +5, Percepción +2', saves:'', immune:'', resist:'Veneno', senses:'Visión en la oscuridad 60 ft., pasiva 12',
  langs:'Común, Enano', cr:'3', xp:700,
  traits:'Resistencia a veneno.',
  actions:'Multiataque: 2 ataques. Espada de bastardo: +5 al golpe, 1d10+3 cortante. Ballesta pesada: +3 al golpe, 1d10+1 perforante.'
},
{
  name:'Espectro', nd:'1', type:'no-muerto', size:'Mediana',
  ac:12, hp:'22 (5d8)', speed:'0 ft., vuelo 50 ft. (flotar)',
  str:1,dex:14,con:11,int:10,wis:10,cha:11,
  skills:'', saves:'', immune:'Frío, Necrótico, Veneno; Encantado, Agotamiento, Agarrado, Paralizado, Petrificado, Envenenado, Postrado, Restringido, Inconsciente', resist:'Ácido, Fuego, Rayo, Trueno; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Entiende los idiomas que conocía en vida', cr:'1', xp:200,
  traits:'Movimiento incorpóreo.',
  actions:'Drenaje de vida: +4 al golpe, 3d6 necrótico. CD10 TS CON o reducir máximo de PG en el daño causado.'
},
{
  name:'Esqueleto', nd:'1/4', type:'no-muerto', size:'Mediana',
  ac:13, hp:'13 (2d8+4)', speed:'30 ft.',
  str:10,dex:14,con:15,int:6,wis:8,cha:5,
  skills:'', saves:'', immune:'Veneno; Agotamiento, Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 9',
  langs:'Entiende Común pero no puede hablar', cr:'1/4', xp:50,
  traits:'',
  actions:'Espada corta: +4 al golpe, 1d6+2 perforante. Arco corto: +4 al golpe, rango 80/320, 1d6+2 perforante.'
},
{
  name:'Esqueleto de Minotauro', nd:'2', type:'no-muerto', size:'Grande',
  ac:12, hp:'67 (9d10+18)', speed:'40 ft.',
  str:18,dex:11,con:15,int:6,wis:8,cha:5,
  skills:'', saves:'', immune:'Veneno; Agotamiento, Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 9',
  langs:'Entiende Abysal pero no puede hablar', cr:'2', xp:450,
  traits:'Carga: si se mueve 10 ft. y golpea con cuernos, el objetivo debe superar CD14 FUE o ser empujado 10 ft. y derribado.',
  actions:'Hacha de guerra: +6 al golpe, 2d8+4 cortante. Cuernos: +6 al golpe, 2d10+4 perforante.'
},

// ═══════════════════════════════════════════
// G
// ═══════════════════════════════════════════
{
  name:'Gargoyle', nd:'2', type:'elemental', size:'Mediana',
  ac:15, hp:'52 (7d8+21)', speed:'30 ft., vuelo 60 ft.',
  str:15,dex:11,con:16,int:6,wis:11,cha:7,
  skills:'', saves:'', immune:'Veneno; Agotamiento, Petrificado, Envenenado', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Terran', cr:'2', xp:450,
  traits:'Posición de piedra: si no se mueve, indistinguible de estatua.',
  actions:'Multiataque: mordida y garra. Mordida: +4 al golpe, 1d6+2 perforante. Garra: +4 al golpe, 1d6+2 cortante.'
},
{
  name:'Ghoul', nd:'1', type:'no-muerto', size:'Mediana',
  ac:12, hp:'22 (5d8)', speed:'30 ft.',
  str:13,dex:15,con:10,int:7,wis:10,cha:6,
  skills:'', saves:'', immune:'Veneno; Encantado, Agotamiento, Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Común', cr:'1', xp:200,
  traits:'',
  actions:'Mordedura: +2 al golpe, 2d6+2 perforante. Garra: +4 al golpe, 2d4+2 cortante. CD10 TS CON o paralizado 1 min (éxito o elfos inmunes).'
},
{
  name:'Gigante de las Colinas', nd:'5', type:'gigante', size:'Enorme',
  ac:13, hp:'105 (10d12+40)', speed:'40 ft.',
  str:21,dex:8,con:19,int:5,wis:9,cha:6,
  skills:'Percepción +2', saves:'', immune:'', resist:'', senses:'pasiva 12',
  langs:'Gigante', cr:'5', xp:1800,
  traits:'',
  actions:'Multiataque: 2 mazazos. Mazo de madera: +8 al golpe, 3d8+5 contundente. Lanzar roca: +8 al golpe, rango 60/240, 3d10+5 contundente.'
},
{
  name:'Gigante de Fuego', nd:'9', type:'gigante', size:'Enorme',
  ac:18, hp:'162 (13d12+78)', speed:'30 ft.',
  str:25,dex:9,con:23,int:10,wis:14,cha:13,
  skills:'Atletismo +11, Percepción +6', saves:'DES +3, CON +10, CAR +5', immune:'Fuego', resist:'', senses:'pasiva 16',
  langs:'Gigante', cr:'9', xp:5000,
  traits:'',
  actions:'Multiataque: 2 espadazos. Espada de bastardo: +11 al golpe, 6d6+7 cortante. Lanzar roca: +11, rango 60/240, 4d10+7 contundente.'
},
{
  name:'Gigante de Piedra', nd:'7', type:'gigante', size:'Enorme',
  ac:17, hp:'126 (11d12+55)', speed:'40 ft.',
  str:23,dex:15,con:20,int:10,wis:12,cha:9,
  skills:'Atletismo +12, Percepción +4', saves:'DES +5, CON +8, SAB +4', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 14',
  langs:'Gigante', cr:'7', xp:2900,
  traits:'Camuflaje rocoso: ventaja en Sigilo en terreno rocoso.',
  actions:'Multiataque: 2 mazazos. Mazo de guerra: +9 al golpe, 3d8+6 contundente. Lanzar roca: +9, rango 60/240, 4d8+6 contundente.'
},
{
  name:'Gigante de Tormenta', nd:'13', type:'gigante', size:'Enorme',
  ac:16, hp:'230 (20d12+100)', speed:'50 ft., nado 50 ft.',
  str:29,dex:14,con:20,int:16,wis:18,cha:18,
  skills:'Arcanos +8, Atletismo +14, Historia +8, Percepción +9', saves:'FUE +14, CON +10, SAB +9, CAR +9', immune:'Rayo, Trueno', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 19',
  langs:'Común, Gigante', cr:'13', xp:10000,
  traits:'Anfibio. Resistencia mágica.',
  actions:'Multiataque: 2 espadazos. Espada de bastardo: +14, 4d6+9 cortante. Lanzar roca: +14, 6d8+9. Rayo (Recarga 5-6): 500 ft., CD17, 12d8 rayo.'
},
{
  name:'Gigante del Hielo', nd:'9', type:'gigante', size:'Enorme',
  ac:15, hp:'138 (12d12+60)', speed:'40 ft.',
  str:24,dex:9,con:21,int:9,wis:10,cha:12,
  skills:'Atletismo +11, Percepción +4', saves:'CON +9, SAB +4, CAR +5', immune:'Frío', resist:'', senses:'pasiva 14',
  langs:'Gigante', cr:'9', xp:5000,
  traits:'',
  actions:'Multiataque: 2 hacha. Hacha de guerra: +11, 3d12+7 cortante. Lanzar roca (o hielo): +11, rango 60/240, 4d10+7 contundente.'
},
{
  name:'Gnoll', nd:'1/2', type:'humanoide', size:'Mediana',
  ac:15, hp:'22 (5d8)', speed:'30 ft.',
  str:14,dex:12,con:11,int:6,wis:10,cha:7,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Gnoll', cr:'1/2', xp:100,
  traits:'Frenesí de cadáveres: puede atacar con acción adicional si reduce criatura a 0 PG.',
  actions:'Mordedura: +4 al golpe, 1d4+2 perforante. Lanza: +4, rango 20/60, 1d6+2 perforante.'
},
{
  name:'Goblin', nd:'1/4', type:'humanoide', size:'Pequeño',
  ac:15, hp:'7 (2d6)', speed:'30 ft.',
  str:8,dex:14,con:10,int:10,wis:8,cha:8,
  skills:'Sigilo +6', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 9',
  langs:'Común, Goblin', cr:'1/4', xp:50,
  traits:'Escapar nimble: puede desengancharse o esconderse como acción adicional.',
  actions:'Cimitarra: +4 al golpe, 1d6+2 cortante. Arco corto: +4, rango 80/320, 1d6+2 perforante.'
},
{
  name:'Goblin Rey', nd:'1', type:'humanoide', size:'Pequeño',
  ac:17, hp:'21 (6d6)', speed:'30 ft.',
  str:10,dex:14,con:10,int:10,wis:8,cha:10,
  skills:'Sigilo +6', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 9',
  langs:'Común, Goblin', cr:'1', xp:200,
  traits:'Escapar nimble. Jefe de guerra: aliados no asustan mientras el rey esté consciente.',
  actions:'Cimitarra: +4 al golpe, 1d6+2 cortante más 2d6 (si tiene ventaja). Arco corto: +4, rango 80/320, 1d6+2 perforante. Redirección: como reacción, fuerza a otro goblin adyacente a recibir el golpe.'
},
{
  name:'Golem de Arcilla', nd:'9', type:'constructo', size:'Grande',
  ac:14, hp:'133 (14d10+56)', speed:'20 ft.',
  str:20,dex:9,con:18,int:3,wis:8,cha:1,
  skills:'', saves:'', immune:'Ácido, Veneno, Psíquico; Encantado, Agotamiento, Asustado, Paralizado, Petrificado, Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 9',
  langs:'Entiende los idiomas de su creador', cr:'9', xp:5000,
  traits:'Armas mágicas. Mutabilidad ácida: si recibe ácido, su siguiente ataque hace +1d10 ácido. Inmune a magia (excepto algunas).',
  actions:'Multiataque: 2 golpes. Golpe: +8 al golpe, 2d10+5 contundente. Maldicionar: cura mínima en la criatura.'
},
{
  name:'Golem de Carne', nd:'5', type:'constructo', size:'Grande',
  ac:9, hp:'93 (11d10+33)', speed:'30 ft.',
  str:19,dex:9,con:16,int:6,wis:10,cha:5,
  skills:'', saves:'', immune:'Rayo, Veneno, Psíquico; Encantado, Agotamiento, Asustado, Paralizado, Petrificado, Envenenado', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Entiende los idiomas de su creador', cr:'5', xp:1800,
  traits:'Furia berserker: si comienza turno con ≤40 PG, tira d6; en 6, ataca al azar. Absorber rayo: rayo lo cura. Inmune a magia (excepta algunas).',
  actions:'Multiataque: 2 golpes. Golpe: +7 al golpe, 2d8+4 contundente.'
},
{
  name:'Golem de Hierro', nd:'16', type:'constructo', size:'Grande',
  ac:20, hp:'210 (20d10+100)', speed:'30 ft.',
  str:24,dex:9,con:20,int:3,wis:11,cha:1,
  skills:'', saves:'', immune:'Fuego, Veneno, Psíquico; Encantado, Agotamiento, Asustado, Paralizado, Petrificado, Envenenado', resist:'', senses:'Visión en la oscuridad 120 ft., pasiva 10',
  langs:'Entiende los idiomas de su creador', cr:'16', xp:15000,
  traits:'Armas mágicas. Absorber fuego: fuego lo cura. Inmune a magia (excepto algunas).',
  actions:'Multiataque: 2 golpes. Golpe: +13, 3d8+7 contundente. Aliento venenoso (Recarga 6): 15 ft. cono, CD19 CON 10d8 veneno.'
},
{
  name:'Golem de Piedra', nd:'10', type:'constructo', size:'Grande',
  ac:17, hp:'178 (17d10+85)', speed:'30 ft.',
  str:22,dex:9,con:20,int:3,wis:11,cha:1,
  skills:'', saves:'', immune:'Veneno, Psíquico; Encantado, Agotamiento, Asustado, Paralizado, Petrificado, Envenenado', resist:'', senses:'Visión en la oscuridad 120 ft., pasiva 10',
  langs:'Entiende los idiomas de su creador', cr:'10', xp:5900,
  traits:'Inmune a magia (excepto algunas).',
  actions:'Multiataque: 2 golpes. Golpe: +10, 3d8+6 contundente. Ralentizar (Recarga 5-6): CD17 SAB o velocidad reducida a la mitad, no puede reaccionar, 1 sola acción por turno.'
},
{
  name:'Grifo', nd:'2', type:'monstruo', size:'Grande',
  ac:12, hp:'59 (7d10+21)', speed:'30 ft., vuelo 80 ft.',
  str:18,dex:15,con:16,int:2,wis:13,cha:8,
  skills:'Percepción +5', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 15',
  langs:'—', cr:'2', xp:450,
  traits:'Vista aguda.',
  actions:'Multiataque: pico y garras. Pico: +6 al golpe, 1d8+4 perforante. Garras: +6 al golpe, 2d6+4 cortante.'
},
{
  name:'Gruñón (Worg)', nd:'1/2', type:'monstruo', size:'Grande',
  ac:13, hp:'26 (4d10+4)', speed:'50 ft.',
  str:16,dex:13,con:13,int:7,wis:11,cha:8,
  skills:'Percepción +4', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 14',
  langs:'Goblin, Worg', cr:'1/2', xp:100,
  traits:'',
  actions:'Mordedura: +5 al golpe, 2d6+3 perforante. CD13 FUE o derribado.'
},

// ═══════════════════════════════════════════
// H
// ═══════════════════════════════════════════
{
  name:'Harpia (Harpie)', nd:'1', type:'monstruo', size:'Mediana',
  ac:11, hp:'38 (7d8+7)', speed:'20 ft., vuelo 40 ft.',
  str:12,dex:13,con:12,int:7,wis:10,cha:13,
  skills:'', saves:'', immune:'', resist:'', senses:'pasiva 10',
  langs:'Común', cr:'1', xp:200,
  traits:'',
  actions:'Multiataque: garra y maza. Maza: +3, 1d6+1 contundente. Garra: +3, 2d6+1 cortante. Canto: CD11 SAB o encantada 1 hora.'
},
{
  name:'Hidra', nd:'8', type:'monstruo', size:'Enorme',
  ac:15, hp:'172 (15d12+75)', speed:'30 ft., nado 30 ft.',
  str:20,dex:12,con:20,int:2,wis:10,cha:7,
  skills:'Percepción +6', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 16',
  langs:'—', cr:'8', xp:3900,
  traits:'Múltiples cabezas: inicia con 5 cabezas; puede hacer reacciones igual al número de cabezas menos 1. Regenerar cabezas: si pierde cabeza sin recibir fuego, regenera 2 al inicio del turno.',
  actions:'Multiataque: 1 mordida por cabeza. Mordida: +8, 1d10+5 perforante.'
},
{
  name:'Hipogrifo', nd:'1', type:'monstruo', size:'Grande',
  ac:11, hp:'19 (3d10+3)', speed:'40 ft., vuelo 60 ft.',
  str:17,dex:13,con:13,int:2,wis:12,cha:8,
  skills:'Percepción +5', saves:'', immune:'', resist:'', senses:'pasiva 15',
  langs:'—', cr:'1', xp:200,
  traits:'Vista aguda.',
  actions:'Multiataque: pico y garras. Pico: +5, 1d10+3 perforante. Garras: +5, 2d6+3 cortante.'
},
{
  name:'Hobgoblin', nd:'1/2', type:'humanoide', size:'Mediana',
  ac:18, hp:'11 (2d8+2)', speed:'30 ft.',
  str:13,dex:12,con:12,int:10,wis:10,cha:9,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Común, Goblin', cr:'1/2', xp:100,
  traits:'Ventaja marcial: +2d6 si aliado adyacente al objetivo.',
  actions:'Espada larga: +3, 1d8+1 cortante. Arco largo: +3, rango 150/600, 1d8+1 perforante.'
},
{
  name:'Hobgoblin Capitán', nd:'3', type:'humanoide', size:'Mediana',
  ac:17, hp:'52 (8d8+16)', speed:'30 ft.',
  str:15,dex:14,con:14,int:12,wis:10,cha:13,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Común, Goblin', cr:'3', xp:700,
  traits:'Ventaja marcial. Liderazgo (Recarga descanso corto): reacción para dar 1d4 a una tirada de ataque o salvación de un aliado.',
  actions:'Multiataque: 2 espadas. Espada larga: +4, 1d8+2 cortante. Jabalina: +4, rango 30/120, 1d6+2 perforante.'
},
{
  name:'Hombre Lagarto', nd:'1/2', type:'humanoide', size:'Mediana',
  ac:15, hp:'22 (5d8)', speed:'30 ft., nado 30 ft.',
  str:15,dex:10,con:13,int:7,wis:12,cha:7,
  skills:'Percepción +3, Sigilo +4, Supervivencia +5', saves:'', immune:'', resist:'', senses:'pasiva 13',
  langs:'Dracónico', cr:'1/2', xp:100,
  traits:'Apnea: 15 minutos. Cazador nato: puede someter a presa agarrada.',
  actions:'Multiataque: mordida y garra. Mordida: +4, 1d6+2 perforante. Garra: +4, 1d4+2 cortante. Escudo y maza (con escudo): maza +4, 1d6+2 contundente.'
},

// ═══════════════════════════════════════════
// K
// ═══════════════════════════════════════════
{
  name:'Kobold', nd:'1/8', type:'humanoide', size:'Pequeño',
  ac:12, hp:'5 (2d6-2)', speed:'30 ft.',
  str:7,dex:15,con:9,int:8,wis:7,cha:8,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 8',
  langs:'Común, Dracónico', cr:'1/8', xp:25,
  traits:'Sensibilidad a la luz solar: desventaja en ataques y percepción en luz solar. Táctica de emboscada: ventaja en ataques si aliado adyacente al objetivo.',
  actions:'Daga: +4, 1d4+2 perforante. Honda: +4, rango 30/120, 1d4+2 contundente.'
},
{
  name:'Kraken', nd:'23', type:'monstruoso', size:'Colosal',
  ac:18, hp:'472 (27d20+189)', speed:'20 ft., nado 60 ft.',
  str:30,dex:11,con:25,int:22,wis:18,cha:20,
  skills:'', saves:'FUE +17, DES +7, CON +14, INT +13, SAB +11', immune:'Rayo; Asustado, Paralizado', resist:'', senses:'Visión de la verdad 120 ft., pasiva 14',
  langs:'Comprende Abysal, Celestial, Infernal y Primordial pero no puede hablar, telepatía 120 ft.', cr:'23', xp:50000,
  traits:'Libertad de movimiento. Asedio anfibio. Resistencia legendaria (3/día).',
  actions:'Multiataque: 3 tentáculos (y tragar si puede). Tentáculo: +17, 3d6+10 contundente y agarrado (CD18). Tragar: objetivo agarrado. Tinta (Recarga 5-6): 60 ft. radio, oscurece visión.'
},

// ═══════════════════════════════════════════
// L
// ═══════════════════════════════════════════
{
  name:'Lamia', nd:'4', type:'monstruo', size:'Grande',
  ac:13, hp:'97 (13d10+26)', speed:'30 ft.',
  str:16,dex:13,con:15,int:14,wis:15,cha:16,
  skills:'Engaño +7, Perspicacia +4, Sigilo +3', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 12',
  langs:'Abysal, Común', cr:'4', xp:1100,
  traits:'',
  actions:'Multiataque: 2 garras o 1 garra y toque corrupto. Garra: +5, 2d10+3 cortante. Toque corrupto: +5, 4d8+3 psíquico. Maldición de humillación (1/día): CD13 TS SAB o desventaja en todas las pruebas de característica durante 1 hora.'
},
{
  name:'Liche', nd:'21', type:'no-muerto', size:'Mediana',
  ac:17, hp:'135 (18d8+54)', speed:'30 ft.',
  str:11,dex:16,con:16,int:20,wis:17,cha:16,
  skills:'Arcanos +18, Historia +12, Perspicacia +10, Percepción +10', saves:'CON +10, INT +12, SAB +10', immune:'Frío, Rayo, Necrótico, Veneno; Encantado, Agotamiento, Asustado, Paralizado, Envenenado', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 60 ft., pasiva 20',
  langs:'Común más 5 idiomas', cr:'21', xp:33000,
  traits:'Resistencia mágica. Rechazar vuelta. Filacteria: si destruida la filacteria, se disolverá en 10 días. Resistencia legendaria (3/día).',
  actions:'Toque paralizante: +12, 3d6 frío y CD18 TS CON o paralizado. Rayo desintegrador: +12 al golpe, alcance 60 ft., 10d6+40 fuerza. Hechizos (INT): CD20; a voluntad: detectar magia, magia de hechicero, rayo de enfriamiento; 3/día: conjurar elemental, contrachizo, desintegrar, nube de muerte, ver invisibilidad, plaga insectos; 1/día: controlar clima, dominar monstruo, poder de la palabra: matar.'
},
{
  name:'Lobizón (Wereolf)', nd:'3', type:'humanoide (cambiaformas)', size:'Mediana',
  ac:12, hp:'84 (13d8+26)', speed:'30 ft. (40 ft. en forma de lobo)',
  str:15,dex:13,con:14,int:10,wis:11,cha:10,
  skills:'Percepción +4, Sigilo +3', saves:'', immune:'Contundente, Perforante, Cortante de armas no mágicas y no plata', resist:'', senses:'pasiva 14',
  langs:'Común (no puede hablar en forma de lobo)', cr:'3', xp:700,
  traits:'Maldición de licantropía.',
  actions:'Multiataque (humano o híbrido): 2 ataques. Mordedura (lobo o híbrido): +4, 2d6+2 perforante y CD12 CON o maldición. Garra (híbrido): +4, 2d4+2 cortante. Espada larga (humano): +4, 1d8+2.'
},
{
  name:'Lobo', nd:'1/4', type:'bestia', size:'Mediana',
  ac:13, hp:'11 (2d8+2)', speed:'40 ft.',
  str:12,dex:15,con:12,int:3,wis:12,cha:6,
  skills:'Percepción +3, Sigilo +4', saves:'', immune:'', resist:'', senses:'pasiva 13',
  langs:'—', cr:'1/4', xp:50,
  traits:'Táctica de manada: ventaja si aliado adyacente al objetivo.',
  actions:'Mordedura: +4, 2d4+2 perforante. CD11 FUE o derribado.'
},
{
  name:'Lobo Gigante', nd:'1', type:'bestia', size:'Grande',
  ac:13, hp:'26 (4d10+4)', speed:'50 ft.',
  str:17,dex:15,con:13,int:3,wis:12,cha:7,
  skills:'Percepción +5, Sigilo +4', saves:'', immune:'', resist:'', senses:'pasiva 15',
  langs:'El lobo gigante entiende Común y Silvano pero no puede hablar', cr:'1', xp:200,
  traits:'Vista aguda y olfato. Táctica de manada.',
  actions:'Mordedura: +5, 2d6+3 perforante. CD13 FUE o derribado.'
},

// ═══════════════════════════════════════════
// M
// ═══════════════════════════════════════════
{
  name:'Mammoth', nd:'6', type:'bestia', size:'Enorme',
  ac:13, hp:'126 (11d12+55)', speed:'40 ft.',
  str:24,dex:9,con:21,int:3,wis:11,cha:6,
  skills:'', saves:'', immune:'', resist:'', senses:'pasiva 10',
  langs:'—', cr:'6', xp:2300,
  traits:'Carga pisoteadora: si se mueve 20 ft. y golpea con colmillos, CD18 FUE o derribado; si cae, 4d8+7 contundente extra.',
  actions:'Golpe de colmillos: +11, 4d8+7 perforante. Pisotear: +11, 4d10+7 contundente. Sólo a criatura derribada.'
},
{
  name:'Manticora', nd:'3', type:'monstruo', size:'Grande',
  ac:14, hp:'68 (8d10+24)', speed:'30 ft., vuelo 50 ft.',
  str:17,dex:16,con:17,int:7,wis:12,cha:8,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 11',
  langs:'Común', cr:'3', xp:700,
  traits:'',
  actions:'Multiataque: mordida y 2 garras o 3 pinchos. Mordida: +5, 1d8+3 perforante. Garra: +5, 1d6+3 cortante. Pincho de cola: +5, rango 100/200, 1d8+3 perforante.'
},
{
  name:'Medusa', nd:'6', type:'monstruo', size:'Mediana',
  ac:15, hp:'127 (17d8+51)', speed:'30 ft.',
  str:10,dex:15,con:16,int:12,wis:13,cha:15,
  skills:'Engaño +5, Perspicacia +4, Percepción +4, Sigilo +5', saves:'', immune:'', resist:'', senses:'Visión de la verdad 30 ft., pasiva 14',
  langs:'Común', cr:'6', xp:2300,
  traits:'Mirada petrificante: CD14 TS CON al inicio de cada turno si puede ver sus ojos. 3 fallos = petrificada.',
  actions:'Multiataque: serpientes y arco. Serpientes: +5, 1d4+2 perforante más 4d6 veneno. Arco corto: +5, 1d6+2 perforante más 2d6 veneno.'
},
{
  name:'Minotauro', nd:'3', type:'monstruo', size:'Grande',
  ac:14, hp:'114 (12d10+48)', speed:'40 ft.',
  str:18,dex:11,con:16,int:6,wis:16,cha:9,
  skills:'Percepción +7', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 17',
  langs:'Abysal', cr:'3', xp:700,
  traits:'Carga: +9d8 si se mueve 10 ft. y golpea con cuernos. Laberíntico: no puede perderse en el laberinto. Embestida arrolladora.',
  actions:'Hacha de guerra: +6, 2d12+4 cortante. Cuernos: +6, 2d8+4 perforante.'
},
{
  name:'Momia', nd:'3', type:'no-muerto', size:'Mediana',
  ac:11, hp:'58 (9d8+18)', speed:'20 ft.',
  str:16,dex:8,con:15,int:6,wis:10,cha:12,
  skills:'', saves:'SAB +2', immune:'Necrótico, Veneno; Encantado, Agotamiento, Asustado, Paralizado, Envenenado', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'El idioma que conocía en vida', cr:'3', xp:700,
  traits:'',
  actions:'Multiataque: puño podredumbre y golpe. Puño podredumbre: +5, 2d6+3 contundente y CD12 CON o maldición de la momia. Mirar aterrador (Recarga 5-6): CD11 SAB o paralizado con miedo 1 ronda.'
},
{
  name:'Momia Señor', nd:'15', type:'no-muerto', size:'Mediana',
  ac:17, hp:'97 (13d8+39)', speed:'20 ft.',
  str:18,dex:10,con:17,int:11,wis:18,cha:16,
  skills:'Historia +5, Religión +5', saves:'CON +8, INT +5, SAB +9, CAR +8', immune:'Necrótico, Veneno, Psíquico; Encantado, Agotamiento, Asustado, Paralizado, Envenenado', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 60 ft., pasiva 14',
  langs:'El idioma que conocía en vida', cr:'15', xp:13000,
  traits:'Resistencia mágica. Resistencia legendaria (3/día).',
  actions:'Multiataque: 2 ataques o maldición de la momia. Puño podredumbre: +9, 3d6+4 contundente y maldición. Voz de comando: orden una palabra sin resistencia a criatura maldita. Hechizos divinos (SAB CD17): cantrips: sagrado llama, guía, resistencia; 4°niv: plaga insectos; 3°niv: palabra de curación, contagio; 2°niv: oscuridad espiritosa; 1°niv: maldición, escudo de la fe.'
},
{
  name:'Monstruo Subterráneo (Aboleth)', nd:'10', type:'aberración', size:'Grande',
  ac:17, hp:'135 (18d10+36)', speed:'10 ft., nado 40 ft.',
  str:21,dex:9,con:15,int:18,wis:15,cha:18,
  skills:'Historia +12, Percepción +10', saves:'CON +6, INT +8, SAB +6', immune:'', resist:'', senses:'Visión en la oscuridad 120 ft., pasiva 20',
  langs:'Deepspeak, telepatía 120 ft.', cr:'10', xp:5900,
  traits:'Memoria ancestral: recuerda cualquier cosa que haya visto. Anfibio. Tentáculo mucoso.',
  actions:'Multiataque: 3 tentáculos. Tentáculo: +9, 2d6+5 contundente, objetivo encantado si falla CD14 SAB. Cola: +9, 3d6+5 contundente. Enslavement (3/día): CD14 SAB o encantado 24h.'
},

// ═══════════════════════════════════════════
// N - O
// ═══════════════════════════════════════════
{
  name:'Naga Guardiana', nd:'10', type:'monstruoso', size:'Grande',
  ac:18, hp:'127 (15d10+45)', speed:'40 ft.',
  str:19,dex:18,con:16,int:16,wis:19,cha:18,
  skills:'', saves:'DES +8, CON +7, INT +7, SAB +8, CAR +8', immune:'Veneno; Encantado, Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 14',
  langs:'Celestial, Común', cr:'10', xp:5900,
  traits:'Rejuvenecimiento: si muere, revivirá en 1d6 días salvo que su cuerpo sea destruido.',
  actions:'Mordedura: +8, 2d6+4 perforante más 10d8 veneno (CD15 CON mitad). Hechizos (SAB CD16): a voluntad: llama sagrada, magia de hechicero, detección de magia; 4/día: curar heridas, fuego del destino; 3/día: flamear, glifo de custodia; 2/día: barrera de cuchillas, esfera flamígera; 1/día: muro de fuego.'
},
{
  name:'Nigromante (NPC)', nd:'9', type:'humanoide', size:'Mediana',
  ac:12, hp:'66 (12d8+12)', speed:'30 ft.',
  str:9,dex:14,con:12,int:17,wis:12,cha:11,
  skills:'Arcanos +7, Historia +7', saves:'INT +7, SAB +5', immune:'', resist:'', senses:'pasiva 11',
  langs:'Cualquier cuatro idiomas', cr:'9', xp:5000,
  traits:'',
  actions:'Bastón: +3, 1d6-1 contundente. Hechizos (INT CD15): Trucos: rayo de escarcha, toque del vampiro; 4/día: detectar magia, manos ardientes, rayo de enfriamiento; 3/día: oscuridad, debilitamiento, putrefacción; 2/día: nube de muerte, dedo de la muerte; 1/día: crear no-muerto, poder de la palabra: matar.'
},
{
  name:'Ñoño (Gnoll Fang)', nd:'4', type:'humanoide', size:'Mediana',
  ac:14, hp:'65 (10d8+20)', speed:'30 ft.',
  str:17,dex:15,con:15,int:10,wis:11,cha:13,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Gnoll', cr:'4', xp:1100,
  traits:'Frenesí de cadáveres. Rampage (bonus action tras matar): mueve hasta la mitad de velocidad y muerde.',
  actions:'Multiataque: mordida y 2 garras. Mordida: +5, 1d8+3 perforante. Garra: +5, 2d6+3 cortante.'
},
{
  name:'Ogro', nd:'2', type:'gigante', size:'Grande',
  ac:11, hp:'59 (7d10+21)', speed:'40 ft.',
  str:19,dex:8,con:16,int:5,wis:7,cha:7,
  skills:'', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 8',
  langs:'Común, Gigante', cr:'2', xp:450,
  traits:'',
  actions:'Maza gigante: +6, 2d8+4 contundente. Jabalina: +6, rango 30/120, 2d6+4 perforante.'
},
{
  name:'Ojo del Diablo (Beholder)', nd:'13', type:'aberración', size:'Grande',
  ac:18, hp:'180 (19d10+76)', speed:'0 ft., vuelo 20 ft. (flotar)',
  str:10,dex:14,con:18,int:17,wis:15,cha:17,
  skills:'Percepción +12', saves:'INT +8, SAB +7, CAR +8', immune:'', resist:'', senses:'Visión de la verdad 120 ft., pasiva 22',
  langs:'Profundo, Subterráneo', cr:'13', xp:10000,
  traits:'Antimagia del ojo central: cono frontal de 150 ft. suprime magia. Resistencia legendaria (3/día).',
  actions:'Mordida: +5, 4d6 perforante. Rayos de ojo (3 al azar por turno): encantamiento, parálisis, miedo, ralentización, aniquilación, telecinesis, dormir, petrificación, desintegración, muerte.'
},
{
  name:'Orco', nd:'1/2', type:'humanoide', size:'Mediana',
  ac:13, hp:'15 (2d8+6)', speed:'30 ft.',
  str:16,dex:12,con:16,int:7,wis:11,cha:10,
  skills:'Intimidación +2', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Común, Orcish', cr:'1/2', xp:100,
  traits:'Agresivo: mueve hasta velocidad hacia criatura hostil como acción adicional.',
  actions:'Hacha de guerra: +5, 1d8+3 cortante. Jabalina: +5, rango 30/120, 1d6+3 perforante.'
},
{
  name:'Orco Guerrero Jefe', nd:'4', type:'humanoide', size:'Mediana',
  ac:16, hp:'93 (11d8+44)', speed:'30 ft.',
  str:18,dex:12,con:18,int:11,wis:11,cha:16,
  skills:'Intimidación +5', saves:'FUE +6, CON +6, SAB +2', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Común, Orcish', cr:'4', xp:1100,
  traits:'Agresivo. Grupal: aliados tienen ventaja en ataques contra enemigos adyacentes al jefe.',
  actions:'Multiataque: 2 hacha de guerra. Hacha de guerra: +6, 1d8+4 cortante. Lanzar jabalina: +6, rango 30/120, 1d6+4 perforante. Grito de guerra (Recarga descanso corto): aliados a 30 ft. + velocidad adicional este turno.'
},

// ═══════════════════════════════════════════
// P - Q
// ═══════════════════════════════════════════
{
  name:'Pegaso', nd:'2', type:'celestial', size:'Grande',
  ac:12, hp:'59 (7d10+21)', speed:'60 ft., vuelo 90 ft.',
  str:18,dex:15,con:16,int:10,wis:15,cha:13,
  skills:'Percepción +6', saves:'DES +4, SAB +4, CAR +3', immune:'', resist:'', senses:'pasiva 16',
  langs:'Entiende Común y Celestial pero no puede hablar', cr:'2', xp:450,
  traits:'',
  actions:'Cascos: +6, 2d6+4 contundente.'
},
{
  name:'Pierden Cerebros (Mind Flayer)', nd:'7', type:'aberración', size:'Mediana',
  ac:15, hp:'71 (13d8+13)', speed:'30 ft.',
  str:11,dex:12,con:12,int:19,wis:17,cha:17,
  skills:'Arcanos +7, Engaño +6, Percepción +6, Perspicacia +6, Sigilo +4', saves:'INT +7, SAB +6, CAR +6', immune:'', resist:'', senses:'Visión de la verdad 120 ft., pasiva 16',
  langs:'Profundo, telepatía 120 ft.', cr:'7', xp:2900,
  traits:'Resistencia mágica.',
  actions:'Tentáculos: +7, 2d10+4 psíquico, agarrado (CD15) y restringido. Extraer cerebro: objetivo agarrado e incapacitado CD15 INT o 10d10 psíquico; a 0 PG el cerebro es devorado. Explosión Mental (Recarga 5-6): 60 ft. cono CD15 INT 4d8+4 psíquico y aturdido 1 min. Hechizos (INT): A voluntad: detectar pensamientos, levitación, magia de hechicero; 1/día: dominar monstruo, plano de vuelo.'
},
{
  name:'Pixie', nd:'1/4', type:'feérica', size:'Diminuta',
  ac:15, hp:'1 (1d4-1)', speed:'10 ft., vuelo 30 ft.',
  str:2,dex:20,con:8,int:10,wis:14,cha:15,
  skills:'Percepción +4, Sigilo +7', saves:'', immune:'', resist:'', senses:'pasiva 14',
  langs:'Silvano', cr:'1/4', xp:50,
  traits:'Magia superior.',
  actions:'Hechizos (CAR CD11): A voluntad: reducir; 1/día: confusión, dormir, magia de detección, invisibilidad permanente, vuelo de hadas, polimorfismo, ilusión poderosa.'
},
{
  name:'Pseudodragón', nd:'1/4', type:'dragón', size:'Diminuto',
  ac:13, hp:'7 (2d4+2)', speed:'15 ft., vuelo 60 ft.',
  str:6,dex:15,con:13,int:10,wis:12,cha:10,
  skills:'Percepción +3, Sigilo +4', saves:'', immune:'', resist:'', senses:'Ceguera/Oscuridad 10 ft., visión en la oscuridad 60 ft., pasiva 13',
  langs:'Entiende Común y Dracónico pero no puede hablar', cr:'1/4', xp:50,
  traits:'Resistencia mágica. Sentidos limitados de telepatía.',
  actions:'Mordedura: +4, 1d4+2 perforante. Aguijón: +4, 1d4+2 perforante más CD11 CON o veneno (incapacitado 1h o dormido 8h).'
},
{
  name:'Pulpo Gigante', nd:'1', type:'bestia', size:'Grande',
  ac:11, hp:'52 (8d10+8)', speed:'10 ft., nado 60 ft.',
  str:17,dex:13,con:13,int:4,wis:10,cha:4,
  skills:'Percepción +4, Sigilo +5', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 14',
  langs:'—', cr:'1', xp:200,
  traits:'Apnea: 1 hora. Camuflaje: ventaja en Sigilo en agua.',
  actions:'Tentáculos: +5, 2d6+3 contundente, agarrado (CD16). Tinta (Recarga 5-6): 20 ft. radio, oscurece hasta final del siguiente turno.'
},

// ═══════════════════════════════════════════
// R - S
// ═══════════════════════════════════════════
{
  name:'Rakshasa', nd:'13', type:'infernal', size:'Mediana',
  ac:16, hp:'110 (13d8+52)', speed:'40 ft.',
  str:14,dex:17,con:18,int:13,wis:16,cha:20,
  skills:'Engaño +10, Perspicacia +8', saves:'', immune:'Contundente, Perforante, Cortante de armas no mágicas no bendecidas', resist:'', senses:'Visión de la verdad 60 ft., pasiva 13',
  langs:'Común, Infernal', cr:'13', xp:10000,
  traits:'Mente limitada: inmune a magia de nivel 6 o inferior. Leer pensamientos.',
  actions:'Multiataque: 2 garras. Garra: +7, 2d6+3 cortante. Hechizos (CAR CD18): A voluntad: detectar pensamientos, magia de hechicero; 3/día: encantar persona, vuelo, escudo invisible; 1/día: dominar persona, ilusión verdadera, viaje planar.'
},
{
  name:'Remorhaz', nd:'11', type:'monstruo', size:'Enorme',
  ac:17, hp:'195 (17d12+85)', speed:'30 ft., excavación 20 ft.',
  str:24,dex:13,con:21,int:4,wis:10,cha:5,
  skills:'', saves:'', immune:'Frío, Fuego', resist:'', senses:'Temblorsense 60 ft., visión ciega 60 ft., pasiva 10',
  langs:'—', cr:'11', xp:7200,
  traits:'Cuerpo ardiente: 3d6 fuego a criaturas que lo golpeen con arma cuerpo a cuerpo.',
  actions:'Mordedura: +11, 6d10+7 perforante. Tragar: criatura agarrada mediana o menor, 6d6 ácido por turno, cegado y restringido.'
},
{
  name:'Roc', nd:'11', type:'monstruo', size:'Gargantuan',
  ac:15, hp:'248 (16d20+80)', speed:'20 ft., vuelo 120 ft.',
  str:28,dex:10,con:20,int:3,wis:10,cha:9,
  skills:'Percepción +4', saves:'DES +4, CON +9, SAB +4, CAR +3', immune:'', resist:'', senses:'pasiva 14',
  langs:'—', cr:'11', xp:7200,
  traits:'Vista aguda.',
  actions:'Multiataque: pico y garras. Pico: +13, 4d8+9 perforante. Garras: +13, 4d6+9 cortante y agarrado (CD19).'
},
{
  name:'Sahuagin', nd:'1/2', type:'humanoide', size:'Mediana',
  ac:12, hp:'22 (4d8+4)', speed:'30 ft., nado 40 ft.',
  str:13,dex:11,con:12,int:12,wis:13,cha:9,
  skills:'Percepción +5', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 120 ft., pasiva 15',
  langs:'Sahuagin', cr:'1/2', xp:100,
  traits:'Frenzy de sangre: ventaja contra criatura que no tenga todos sus PG. Respirar agua. Telepatía tiburón.',
  actions:'Multiataque: mordida y garra o tridente. Mordida: +3, 1d4+1 perforante. Garra: +3, 1d4+1 cortante. Tridente: +3, 1d6+1 perforante.'
},
{
  name:'Salamandra', nd:'5', type:'elemental', size:'Grande',
  ac:15, hp:'114 (12d10+48)', speed:'30 ft.',
  str:18,dex:14,con:18,int:12,wis:11,cha:12,
  skills:'', saves:'', immune:'Fuego', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Ignan', cr:'5', xp:1800,
  traits:'Cuerpo caliente: 1d10 fuego a criaturas que lo toquen.',
  actions:'Multiataque: cola y lanza. Cola: +7, 2d6+4 contundente más 2d6 fuego y agarrado. Lanza de fuego: +7, rango 20/60, 2d6+4 perforante más 2d6 fuego.'
},
{
  name:'Sátiro', nd:'1/2', type:'feérica', size:'Mediana',
  ac:14, hp:'31 (7d8)', speed:'40 ft.',
  str:12,dex:16,con:11,int:12,wis:10,cha:14,
  skills:'Percepción +2, Interpretación +6, Sigilo +5', saves:'', immune:'', resist:'', senses:'pasiva 12',
  langs:'Común, Élfico, Silvano', cr:'1/2', xp:100,
  traits:'Magia del bosque: resistencia mágica.',
  actions:'Cuernos: +3, 2d4+1 contundente. Arco corto: +5, 1d6+3 perforante. Pífano: CD13 SAB o varios efectos.'
},
{
  name:'Sombra', nd:'1/2', type:'no-muerto', size:'Mediana',
  ac:12, hp:'16 (3d8+3)', speed:'40 ft.',
  str:6,dex:14,con:13,int:6,wis:10,cha:8,
  skills:'Sigilo +4', saves:'', immune:'Necrótico, Veneno; Agotamiento, Asustado, Agarrado, Paralizado, Petrificado, Envenenado, Postrado, Restringido', resist:'Ácido, Fuego, Rayo, Trueno; Contundente, Perforante, Cortante no mágico', senses:'Visión en la oscuridad 60 ft., pasiva 10',
  langs:'Entiende idiomas que conocía en vida', cr:'1/2', xp:100,
  traits:'Amorpho. Vulnerabilidad a luz solar. Movimiento incorpóreo.',
  actions:'Drenaje de Fuerza: +4, 2d6+2 necrótico. CD13 CON o FUE reducida en 1d4. A 0 FUE: muere y surge como nueva sombra.'
},
{
  name:'Súcubo/Íncubo', nd:'4', type:'infernal', size:'Mediana',
  ac:15, hp:'66 (12d8+12)', speed:'30 ft., vuelo 60 ft.',
  str:8,dex:17,con:13,int:15,wis:12,cha:20,
  skills:'Engaño +9, Perspicacia +5, Percepción +5, Sigilo +7', saves:'', immune:'Veneno; Envenenado', resist:'Frío, Fuego, Rayo; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 60 ft., pasiva 15',
  langs:'Abysal, Común, Infernal, telepatía 60 ft.', cr:'4', xp:1100,
  traits:'Cambiaformas. Leer deseos (telepatía).',
  actions:'Garra (solo en forma de súcubo): +5, 3d6+3 cortante. Beso drenador de vida: CD15 CON o -5 PG máx. Hechizos: A voluntad: encantar persona, detectar pensamientos, invisibilidad; 1/día: sueño.'
},

// ═══════════════════════════════════════════
// T - U
// ═══════════════════════════════════════════
{
  name:'Tarrasque', nd:'30', type:'monstruoso', size:'Gargantuan',
  ac:25, hp:'676 (33d20+330)', speed:'40 ft.',
  str:30,dex:11,con:30,int:3,wis:11,cha:11,
  skills:'', saves:'INT +5, SAB +9, CAR +9', immune:'Fuego, Veneno; Asustado, Paralizado', resist:'Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión ciega 120 ft., pasiva 10',
  langs:'—', cr:'30', xp:155000,
  traits:'Carcasa legendaria: refleja hechizos de nivel 7 o inferior. Resistencia mágica. Resistencia legendaria (3/día). Regeneración: 30 PG al inicio del turno (no si ya en 0 PG).',
  actions:'Multiataque: mordida, 2 garras, cuernos, cola. Mordida: +19, 4d12+10 perforante. Garra: +19, 4d8+10 cortante. Cuernos: +19, 4d10+10 perforante. Cola: +19, 4d6+10 contundente. Tragar: objetivo agarrado grande o menor.'
},
{
  name:'Tiburón Gigante', nd:'5', type:'bestia', size:'Enorme',
  ac:13, hp:'126 (11d12+55)', speed:'0 ft., nado 50 ft.',
  str:23,dex:11,con:21,int:1,wis:10,cha:5,
  skills:'Percepción +3', saves:'', immune:'', resist:'', senses:'Visión ciega 60 ft., pasiva 13',
  langs:'—', cr:'5', xp:1800,
  traits:'Frenzy de sangre: ventaja en ataques contra criaturas sin todos sus PG. Respirar agua.',
  actions:'Mordedura: +9, 3d10+6 perforante.'
},
{
  name:'Titán del Pantano (Black Pudding)', nd:'4', type:'cieno', size:'Grande',
  ac:7, hp:'85 (10d10+30)', speed:'20 ft., trepar 20 ft.',
  str:16,dex:5,con:16,int:1,wis:6,cha:1,
  skills:'', saves:'', immune:'Ácido, Frío, Rayo, Cortante; Encantado, Asustado, Postrado', resist:'', senses:'Visión ciega 60 ft., pasiva 8',
  langs:'—', cr:'4', xp:1100,
  traits:'Corrosión de metal: armas de metal que golpeen sufren corrosión permanente. Dividir: ataques de rayo o cortante la dividen en 2 cienos más pequeños.',
  actions:'Pseudópodo: +5, 3d6+3 contundente más 3d6 ácido. Corroer armadura: armadura reducida en -1 CA permanente.'
},
{
  name:'Tortugas de Mar Gigante', nd:'5', type:'bestia', size:'Enorme',
  ac:17, hp:'114 (12d12+36)', speed:'20 ft., nado 40 ft.',
  str:22,dex:9,con:17,int:2,wis:12,cha:5,
  skills:'', saves:'', immune:'', resist:'', senses:'pasiva 11',
  langs:'—', cr:'5', xp:1800,
  traits:'Apnea: 1 hora.',
  actions:'Mordedura: +9, 4d10+6 perforante.'
},
{
  name:'Treant', nd:'9', type:'planta', size:'Enorme',
  ac:16, hp:'138 (12d12+60)', speed:'30 ft.',
  str:23,dex:8,con:21,int:12,wis:16,cha:12,
  skills:'', saves:'', immune:'', resist:'Contundente, Perforante de armas no mágicas', senses:'pasiva 13',
  langs:'Común, Druídico, Élfico, Silvano', cr:'9', xp:5000,
  traits:'Asedio: daño doble a objetos y estructuras. Despertar plantas (1/día): el treant puede despertar 2 árboles u arbustos por 24 horas.',
  actions:'Multiataque: 2 ramas. Rama: +10, 3d6+6 contundente. Lanzar roca: +10, rango 60/180, 4d10+6 contundente.'
},
{
  name:'Troll', nd:'5', type:'gigante', size:'Grande',
  ac:15, hp:'84 (8d10+40)', speed:'30 ft.',
  str:18,dex:13,con:20,int:7,wis:9,cha:7,
  skills:'Percepción +2', saves:'', immune:'', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 12',
  langs:'Gigante', cr:'5', xp:1800,
  traits:'Agudo olfato: ventaja en Percepción basada en olfato. Regeneración: 10 PG inicio de turno salvo que reciba daño de ácido o fuego.',
  actions:'Multiataque: mordida y 2 garras. Mordida: +7, 1d6+4 perforante. Garra: +7, 2d6+4 cortante.'
},
{
  name:'Unicornio', nd:'5', type:'celestial', size:'Grande',
  ac:12, hp:'67 (9d10+18)', speed:'50 ft.',
  str:18,dex:14,con:15,int:11,wis:17,cha:16,
  skills:'', saves:'', immune:'Veneno; Encantado, Paralizado, Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 13',
  langs:'Celestial, Élfico, Silvano, telepatía 60 ft.', cr:'5', xp:1800,
  traits:'Resistencia mágica. Armas mágicas. Carga: si se mueve 20 ft. y golpea con cuerno, CD15 FUE o empujado 10 ft. y derribado.',
  actions:'Cascos: +7, 2d6+4 contundente. Cuerno: +7, 1d8+4 perforante más 1d8 radiante. Hechizos innatos: A voluntad: detectar mal y bien, magia de hechicero, paso; 1/día: calmar emociones, curar heridas del grupo, plagar monstruos.'
},

// ═══════════════════════════════════════════
// V - W - X - Y - Z
// ═══════════════════════════════════════════
{
  name:'Vampiro', nd:'13', type:'no-muerto', size:'Mediana',
  ac:16, hp:'144 (17d8+68)', speed:'30 ft.',
  str:18,dex:18,con:18,int:17,wis:15,cha:18,
  skills:'Percepción +7, Sigilo +9', saves:'DES +9, SAB +7, CAR +9', immune:'Necrótico, Veneno; Encantado, Agotamiento, Asustado, Paralizado, Envenenado', resist:'Necrótico; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión de la verdad 120 ft., pasiva 17',
  langs:'Los idiomas que conocía en vida', cr:'13', xp:10000,
  traits:'Aversión a la luz solar: desventaja en Percepción y ataques en luz solar. Regeneración: 20 PG inicio de turno (no en agua corriente, luz solar o estaca). Forma de araña. Cambiaformas (murciélago/lobo/niebla). Resistencia mágica. Resistencia legendaria (3/día).',
  actions:'Multiataque: 2 garras o 1 mordida. Garra: +9, 2d8+4 cortante. Mordida: +9, 1d6+4 perforante más 3d6 necrótico. CD17 CON o reducir PG máx. Encantamiento de mirada: CD17 SAB o encantado 24h. Niebla (Recarga 5-6): como niebla indetectable.'
},
{
  name:'Vampiro Engendro', nd:'5', type:'no-muerto', size:'Mediana',
  ac:15, hp:'82 (11d8+33)', speed:'30 ft.',
  str:16,dex:16,con:16,int:11,wis:10,cha:12,
  skills:'Percepción +4, Sigilo +7', saves:'DES +6, SAB +3', immune:'Necrótico, Veneno; Encantado, Agotamiento, Asustado, Paralizado, Envenenado', resist:'Necrótico; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 14',
  langs:'Los idiomas que conocía en vida', cr:'5', xp:1800,
  traits:'Aversión a la luz solar: desventaja. Regeneración: 10 PG inicio de turno (no en agua corriente o luz solar).',
  actions:'Garra: +6, 2d4+3 cortante. Mordida: +6, 1d6+3 perforante más 2d6 necrótico y reducción de PG máx.'
},
{
  name:'Wight', nd:'3', type:'no-muerto', size:'Mediana',
  ac:14, hp:'45 (6d8+18)', speed:'30 ft.',
  str:15,dex:14,con:16,int:10,wis:13,cha:15,
  skills:'Percepción +3, Sigilo +4', saves:'', immune:'Necrótico, Veneno; Encantado, Agotamiento, Asustado, Envenenado', resist:'Necrótico; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 13',
  langs:'Los idiomas que conocía en vida', cr:'3', xp:700,
  traits:'Sensibilidad a la luz solar.',
  actions:'Multiataque: espada larga y drenaje de vida. Espada larga: +4, 1d8+2 cortante. Arco largo: +4, 1d8+2 perforante. Drenaje de vida: +4, 1d6+2 necrótico. CD13 CON o reducir PG máx en daño; si llega a 0 máx, muere y se levanta como zombi en 24h.'
},
{
  name:'Will-o-Wisp', nd:'2', type:'no-muerto', size:'Diminuto',
  ac:19, hp:'22 (9d4)', speed:'0 ft., vuelo 50 ft. (flotar)',
  str:1,dex:28,con:10,int:13,wis:14,cha:11,
  skills:'', saves:'', immune:'Rayo, Veneno; Encantado, Agotamiento, Agarrado, Envenenado, Postrado, Restringido, Inconsciente', resist:'Ácido, Frío, Fuego, Necrótico, Trueno; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 120 ft., pasiva 12',
  langs:'El idioma que conocía en vida', cr:'2', xp:450,
  traits:'Luz Consumidora: consume la energía vital de criaturas moribundas. Efímero: no puede ser dañado por armas mágicas.',
  actions:'Descarga: +4, 2d8 rayo. Tornar invisible: hasta que ataque o use Luz Consumidora.'
},
{
  name:'Wraith', nd:'5', type:'no-muerto', size:'Mediana',
  ac:13, hp:'67 (9d8+27)', speed:'0 ft., vuelo 60 ft. (flotar)',
  str:6,dex:16,con:16,int:12,wis:14,cha:15,
  skills:'', saves:'', immune:'Frío, Necrótico, Veneno; Encantado, Agotamiento, Agarrado, Envenenado, Paralizado, Petrificado, Postrado, Restringido', resist:'Ácido, Fuego, Rayo, Trueno; Contundente, Perforante, Cortante de armas no mágicas', senses:'Visión en la oscuridad 60 ft., pasiva 12',
  langs:'El idioma que conocía en vida', cr:'5', xp:1800,
  traits:'Movimiento incorpóreo. Luz solar hipersensibilidad: desventaja y 1d10 radiante por turno.',
  actions:'Drenaje de vida: +6, 4d8+3 necrótico. CD14 CON o reducir PG máx; si llega a 0, muere y surge como espectro. Crear espectro: cadáver reciente se levanta bajo el control del wraith.'
},
{
  name:'Xorn', nd:'5', type:'elemental', size:'Mediana',
  ac:19, hp:'73 (7d8+42)', speed:'20 ft., excavación 20 ft.',
  str:17,dex:10,con:22,int:11,wis:10,cha:11,
  skills:'Percepción +6, Sigilo +3', saves:'', immune:'', resist:'Perforante y cortante de armas no mágicas', senses:'Temblorsense 60 ft., visión ciega 60 ft., pasiva 16',
  langs:'Terran', cr:'5', xp:1800,
  traits:'Paso por la tierra. Tesoro sensible: puede sentir metales y gemas preciosas a 60 ft.',
  actions:'Multiataque: garra y mordida. Mordida: +6, 3d6+3 perforante. Garra (3 ataques): +6, 1d6+3 cortante.'
},
{
  name:'Yuan-ti Abominación', nd:'7', type:'monstruoso', size:'Grande',
  ac:15, hp:'127 (15d10+45)', speed:'40 ft., nado 40 ft.',
  str:19,dex:16,con:17,int:17,wis:15,cha:18,
  skills:'Percepción +5, Sigilo +6', saves:'', immune:'Veneno; Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 15',
  langs:'Abysal, Común, Dracónico', cr:'7', xp:2900,
  traits:'Resistencia mágica. Cambiaformas (serpiente).',
  actions:'Multiataque: 3 ataques. Mordida: +7, 2d6+4 perforante. Espada larga: +7, 1d8+4 cortante. Constricción: +7, 2d6+4 contundente y agarrado. Hechizos (CAR): A voluntad: animal amistad, sugestión; 3/día: encantar persona; 1/día: dominar persona.'
},
{
  name:'Yuan-ti Medio Sangre', nd:'1/2', type:'humanoide', size:'Mediana',
  ac:11, hp:'33 (6d8+6)', speed:'30 ft.',
  str:11,dex:12,con:13,int:11,wis:12,cha:14,
  skills:'Engaño +4, Sigilo +3', saves:'', immune:'Veneno; Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 11',
  langs:'Abysal, Común, Dracónico', cr:'1/2', xp:100,
  traits:'Resistencia mágica. Cambiaformas (serpiente).',
  actions:'Cimitarra: +3, 1d6+1 cortante. Arco corto: +3, rango 80/320, 1d6+1 perforante más 2d6 veneno.'
},
{
  name:'Zombi', nd:'1/4', type:'no-muerto', size:'Mediana',
  ac:8, hp:'22 (3d8+9)', speed:'20 ft.',
  str:13,dex:6,con:16,int:3,wis:6,cha:5,
  skills:'', saves:'SAB +0', immune:'Veneno; Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 8',
  langs:'Entiende los idiomas que conocía en vida pero no puede hablar', cr:'1/4', xp:50,
  traits:'Fortaleza de no-muerto: si recibe daño que lo reduciría a 0 PG, TS CD5+daño CON para quedar a 1 PG.',
  actions:'Golpe: +3, 1d6+1 contundente.'
},
{
  name:'Zombi Gigante (Ogro)', nd:'2', type:'no-muerto', size:'Grande',
  ac:8, hp:'85 (9d10+36)', speed:'30 ft.',
  str:19,dex:6,con:18,int:3,wis:6,cha:5,
  skills:'', saves:'SAB +0', immune:'Veneno; Envenenado', resist:'', senses:'Visión en la oscuridad 60 ft., pasiva 8',
  langs:'Entiende Común y Gigante pero no puede hablar', cr:'2', xp:450,
  traits:'Fortaleza de no-muerto.',
  actions:'Maza gigante: +6, 2d8+4 contundente.'
}

]; // fin MONSTERS_DATA

// ═══════════════════════════════════════════
// BESTIAS Y ANIMALES
// ═══════════════════════════════════════════
MONSTERS_DATA.push(
{name:'Águila Gigante',nd:'1',type:'bestia',size:'Grande',ac:13,hp:'26 (4d10+4)',speed:'10 ft., vuelo 80 ft.',str:16,dex:17,con:13,int:8,wis:14,cha:10,skills:'Percepción +4',saves:'',immune:'',resist:'',senses:'pasiva 14',langs:'Entiende Común y Aquilano pero no puede hablar',cr:'1',xp:200,traits:'Vista aguda.',actions:'Multiataque: pico y garras. Pico: +5, 1d6+3 perforante. Garras: +5, 2d6+3 cortante.'},
{name:'Alacrán Gigante',nd:'3',type:'bestia',size:'Grande',ac:15,hp:'52 (7d10+14)',speed:'40 ft.',str:15,dex:13,con:15,int:1,wis:9,cha:3,skills:'Percepción +1',saves:'',immune:'',resist:'',senses:'Visión ciega 60 ft., pasiva 9',langs:'—',cr:'3',xp:700,traits:'',actions:'Multiataque: 2 pinzas y aguijón. Pinza: +4, 1d8+2 contundente y agarrado (CD12). Aguijón: +4, 1d10+2 perforante más CD11 CON o 4d10 veneno.'},
{name:'Boa Constrictora',nd:'1/4',type:'bestia',size:'Grande',ac:12,hp:'13 (2d10+2)',speed:'30 ft., nado 30 ft.',str:15,dex:14,con:12,int:1,wis:10,cha:3,skills:'Percepción +2',saves:'',immune:'',resist:'',senses:'Visión ciega 10 ft., pasiva 12',langs:'—',cr:'1/4',xp:50,traits:'',actions:'Mordedura: +4, 1d6+2 perforante. Constricción: +4, 1d8+2 contundente y agarrado (CD14).'},
{name:'Caballo de Guerra',nd:'1/2',type:'bestia',size:'Grande',ac:11,hp:'19 (3d10+3)',speed:'60 ft.',str:18,dex:12,con:13,int:2,wis:12,cha:7,skills:'',saves:'',immune:'',resist:'',senses:'pasiva 11',langs:'—',cr:'1/2',xp:100,traits:'Carga: si se mueve 20 ft. y golpea con cascos, CD14 FUE o derribado.',actions:'Cascos: +6, 2d6+4 contundente.'},
{name:'Camello',nd:'1/8',type:'bestia',size:'Grande',ac:9,hp:'15 (2d10+4)',speed:'50 ft.',str:16,dex:8,con:14,int:2,wis:8,cha:5,skills:'',saves:'',immune:'',resist:'',senses:'pasiva 9',langs:'—',cr:'1/8',xp:25,traits:'',actions:'Mordedura: +5, 2d4+3 contundente.'},
{name:'Cangrejo Gigante',nd:'1/8',type:'bestia',size:'Mediana',ac:15,hp:'13 (3d8)',speed:'30 ft., nado 30 ft.',str:13,dex:15,con:11,int:1,wis:9,cha:3,skills:'Sigilo +4',saves:'',immune:'',resist:'',senses:'Visión ciega 30 ft., pasiva 9',langs:'—',cr:'1/8',xp:25,traits:'Anfibio.',actions:'Garra: +3, 1d6+1 contundente y agarrado (CD11).'},
{name:'Ciervo',nd:'0',type:'bestia',size:'Grande',ac:13,hp:'4 (1d10-1)',speed:'50 ft.',str:11,dex:16,con:11,int:2,wis:14,cha:5,skills:'',saves:'',immune:'',resist:'',senses:'pasiva 12',langs:'—',cr:'0',xp:10,traits:'',actions:'Patada: +2, 2d4 contundente.'},
{name:'Cuervo',nd:'0',type:'bestia',size:'Diminuta',ac:12,hp:'1 (1d4-1)',speed:'10 ft., vuelo 50 ft.',str:2,dex:14,con:8,int:2,wis:12,cha:6,skills:'Percepción +3',saves:'',immune:'',resist:'',senses:'pasiva 13',langs:'—',cr:'0',xp:10,traits:'Imitar: puede imitar sonidos simples.',actions:'Pico: +4, 1 perforante.'},
{name:'Elefante',nd:'4',type:'bestia',size:'Enorme',ac:12,hp:'76 (8d12+24)',speed:'40 ft.',str:22,dex:9,con:17,int:3,wis:11,cha:6,skills:'',saves:'',immune:'',resist:'',senses:'pasiva 10',langs:'—',cr:'4',xp:1100,traits:'Carga pisoteadora: CD12 FUE o derribado al cargar.',actions:'Colmillos: +8, 3d6+6 perforante. Pisotear: +8, 4d8+6 contundente (solo a derribados).'},
{name:'Gato',nd:'0',type:'bestia',size:'Diminuta',ac:12,hp:'2 (1d4)',speed:'40 ft., trepar 30 ft.',str:3,dex:15,con:10,int:3,wis:12,cha:7,skills:'Percepción +3, Sigilo +4',saves:'',immune:'',resist:'',senses:'pasiva 13',langs:'—',cr:'0',xp:10,traits:'Vista aguda y olfato.',actions:'Garra: +0, 1 cortante.'},
{name:'Gorila',nd:'1/2',type:'bestia',size:'Grande',ac:12,hp:'19 (3d10+3)',speed:'30 ft., trepar 30 ft.',str:16,dex:14,con:12,int:5,wis:12,cha:7,skills:'Atletismo +5, Percepción +3',saves:'',immune:'',resist:'',senses:'pasiva 13',langs:'—',cr:'1/2',xp:100,traits:'',actions:'Multiataque: 2 puños. Puño: +5, 1d6+3 contundente.'},
{name:'León',nd:'1',type:'bestia',size:'Grande',ac:12,hp:'26 (4d10+4)',speed:'50 ft.',str:17,dex:15,con:13,int:3,wis:12,cha:8,skills:'Percepción +3, Sigilo +6',saves:'',immune:'',resist:'',senses:'pasiva 13',langs:'—',cr:'1',xp:200,traits:'Vista aguda. Táctica de manada: ventaja si aliado adyacente. Carga: +2d6 si se mueve 20 ft.',actions:'Mordedura: +5, 1d8+3 perforante. Garra: +5, 1d6+3 cortante.'},
{name:'Lobo de Invierno',nd:'3',type:'monstruo',size:'Grande',ac:13,hp:'75 (10d10+20)',speed:'50 ft.',str:18,dex:13,con:14,int:7,wis:12,cha:8,skills:'Percepción +5, Sigilo +3',saves:'',immune:'Frío',resist:'',senses:'pasiva 15',langs:'Común, Gigante, Invernada',cr:'3',xp:700,traits:'Vista aguda y olfato. Táctica de manada.',actions:'Mordedura: +6, 2d6+4 perforante y CD13 FUE o derribado. Aliento de frío (Recarga 5-6): 15 ft. cono, CD12 DES, 4d8 frío.'},
{name:'Mono',nd:'0',type:'bestia',size:'Diminuta',ac:12,hp:'1 (1d4-1)',speed:'30 ft., trepar 30 ft.',str:8,dex:14,con:11,int:5,wis:12,cha:6,skills:'Percepción +3',saves:'',immune:'',resist:'',senses:'pasiva 13',langs:'—',cr:'0',xp:10,traits:'',actions:'Mordedura: +1, 1d4-1 perforante.'},
{name:'Mula',nd:'1/8',type:'bestia',size:'Mediana',ac:10,hp:'11 (2d8+2)',speed:'40 ft.',str:14,dex:10,con:13,int:2,wis:10,cha:5,skills:'',saves:'',immune:'',resist:'',senses:'pasiva 10',langs:'—',cr:'1/8',xp:25,traits:'Bestia de carga: puede cargar 420 lb.',actions:'Cascos: +4, 1d4+2 contundente.'},
{name:'Murciélago',nd:'0',type:'bestia',size:'Diminuta',ac:12,hp:'1 (1d4-1)',speed:'5 ft., vuelo 30 ft.',str:2,dex:15,con:8,int:2,wis:12,cha:4,skills:'',saves:'',immune:'',resist:'',senses:'Ecolocalización 60 ft., pasiva 11',langs:'—',cr:'0',xp:10,traits:'Ecolocalización: no puede usar ecolocalización si está ensordecido.',actions:'Mordedura: +0, 1 perforante.'},
{name:'Murciélago Gigante',nd:'1/4',type:'bestia',size:'Grande',ac:13,hp:'22 (4d10)',speed:'10 ft., vuelo 60 ft.',str:15,dex:16,con:11,int:2,wis:12,cha:6,skills:'',saves:'',immune:'',resist:'',senses:'Ecolocalización 120 ft., pasiva 11',langs:'—',cr:'1/4',xp:50,traits:'Ecolocalización.',actions:'Mordedura: +4, 2d6+2 perforante.'},
{name:'Pantera',nd:'1/4',type:'bestia',size:'Mediana',ac:12,hp:'13 (3d8)',speed:'50 ft., trepar 40 ft.',str:14,dex:15,con:10,int:3,wis:14,cha:7,skills:'Percepción +4, Sigilo +6',saves:'',immune:'',resist:'',senses:'pasiva 14',langs:'—',cr:'1/4',xp:50,traits:'Vista aguda y olfato. Carga: +1d6 y CD12 FUE o derribado.',actions:'Mordedura: +4, 1d6+2 perforante. Garra: +4, 1d4+2 cortante.'},
{name:'Perro',nd:'0',type:'bestia',size:'Mediana',ac:12,hp:'5 (1d8+1)',speed:'40 ft.',str:13,dex:14,con:12,int:3,wis:12,cha:7,skills:'Percepción +3',saves:'',immune:'',resist:'',senses:'pasiva 13',langs:'—',cr:'0',xp:10,traits:'Vista aguda y olfato.',actions:'Mordedura: +3, 1d6+1 perforante.'},
{name:'Poni',nd:'1/8',type:'bestia',size:'Mediana',ac:10,hp:'11 (2d8+2)',speed:'40 ft.',str:15,dex:10,con:13,int:2,wis:11,cha:7,skills:'',saves:'',immune:'',resist:'',senses:'pasiva 10',langs:'—',cr:'1/8',xp:25,traits:'',actions:'Cascos: +4, 2d4+2 contundente.'},
{name:'Rana Gigante',nd:'1/4',type:'bestia',size:'Mediana',ac:11,hp:'18 (4d8)',speed:'30 ft., nado 30 ft.',str:12,dex:13,con:11,int:2,wis:10,cha:3,skills:'Percepción +2, Sigilo +3',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 30 ft., pasiva 12',langs:'—',cr:'1/4',xp:50,traits:'Anfibio. Salto: puede saltar hasta 20 ft.',actions:'Mordedura: +3, 1d6+1 perforante y agarrado (CD11). Lengua: alcance 20 ft., agarrado.'},
{name:'Rata',nd:'0',type:'bestia',size:'Diminuta',ac:10,hp:'1 (1d4-1)',speed:'20 ft.',str:2,dex:11,con:9,int:2,wis:10,cha:4,skills:'',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 30 ft., pasiva 10',langs:'—',cr:'0',xp:10,traits:'Vista aguda (olfato).',actions:'Mordedura: +0, 1 perforante.'},
{name:'Rata Gigante',nd:'1/8',type:'bestia',size:'Pequeña',ac:12,hp:'7 (2d6)',speed:'30 ft.',str:7,dex:15,con:11,int:2,wis:10,cha:4,skills:'',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 10',langs:'—',cr:'1/8',xp:25,traits:'Vista aguda (olfato). Táctica de manada.',actions:'Mordedura: +4, 1d4+2 perforante.'},
{name:'Rinoceronte',nd:'2',type:'bestia',size:'Grande',ac:11,hp:'45 (6d10+12)',speed:'40 ft.',str:21,dex:8,con:15,int:2,wis:12,cha:6,skills:'',saves:'',immune:'',resist:'',senses:'pasiva 11',langs:'—',cr:'2',xp:450,traits:'Carga: si se mueve 20 ft. y golpea, CD15 FUE o derribado y 2d8+5 extra.',actions:'Cuerno: +7, 2d8+5 perforante.'},
{name:'Serpiente Venenosa',nd:'1/8',type:'bestia',size:'Diminuta',ac:13,hp:'2 (1d4)',speed:'30 ft., nado 30 ft.',str:2,dex:16,con:11,int:1,wis:10,cha:3,skills:'',saves:'',immune:'',resist:'',senses:'Visión ciega 10 ft., pasiva 10',langs:'—',cr:'1/8',xp:25,traits:'',actions:'Mordedura: +5, 1 perforante más CD10 CON o 2d4 veneno.'},
{name:'Serpiente Constrictora Gigante',nd:'2',type:'bestia',size:'Enorme',ac:12,hp:'60 (8d12+8)',speed:'30 ft., nado 30 ft.',str:19,dex:14,con:12,int:1,wis:10,cha:3,skills:'Percepción +2',saves:'',immune:'',resist:'',senses:'Visión ciega 10 ft., pasiva 12',langs:'—',cr:'2',xp:450,traits:'',actions:'Mordedura: +6, 2d6+4 perforante. Constricción: +6, 2d8+4 contundente y agarrado (CD16).'},
{name:'Serpiente Venenosa Gigante',nd:'2',type:'bestia',size:'Grande',ac:14,hp:'52 (8d10+8)',speed:'30 ft., nado 30 ft.',str:10,dex:18,con:13,int:2,wis:10,cha:3,skills:'Percepción +2',saves:'',immune:'',resist:'',senses:'Visión ciega 10 ft., pasiva 12',langs:'—',cr:'2',xp:450,traits:'',actions:'Mordedura: +6, 2d6+4 perforante más CD11 CON o 10d6 veneno.'},
{name:'Tigre',nd:'1',type:'bestia',size:'Grande',ac:12,hp:'37 (5d10+10)',speed:'40 ft.',str:17,dex:15,con:14,int:3,wis:12,cha:8,skills:'Percepción +3, Sigilo +6',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 13',langs:'—',cr:'1',xp:200,traits:'Vista aguda y olfato. Carga: +2d6 y CD13 FUE o derribado.',actions:'Mordedura: +5, 1d10+3 perforante. Garra: +5, 1d6+3 cortante.'},
{name:'Víbora',nd:'1/4',type:'bestia',size:'Mediana',ac:12,hp:'5 (2d6-2)',speed:'30 ft., nado 30 ft.',str:4,dex:14,con:8,int:1,wis:10,cha:3,skills:'',saves:'',immune:'',resist:'',senses:'Visión ciega 10 ft., pasiva 10',langs:'—',cr:'1/4',xp:50,traits:'',actions:'Mordedura: +4, 1d4+2 perforante más CD10 CON o 2d6 veneno.'},

// ═══════════════════════════════════════════
// NPCs Y HUMANOIDES
// ═══════════════════════════════════════════
{name:'Arquero',nd:'3',type:'humanoide',size:'Mediana',ac:16,hp:'75 (10d8+30)',speed:'30 ft.',str:11,dex:18,con:16,int:11,wis:13,cha:10,skills:'Acrobacias +6, Percepción +5, Sigilo +6',saves:'',immune:'',resist:'',senses:'pasiva 15',langs:'Cualquier idioma',cr:'3',xp:700,traits:'',actions:'Multiataque: 3 arcos cortos. Arco corto: +6, 1d6+4 perforante. Espada corta: +6, 1d6+4 perforante.'},
{name:'Asesino',nd:'8',type:'humanoide',size:'Mediana',ac:15,hp:'78 (12d8+24)',speed:'30 ft.',str:11,dex:16,con:14,int:13,wis:11,cha:10,skills:'Acrobacias +6, Engaño +3, Percepción +3, Sigilo +9',saves:'DES +6, INT +4',immune:'',resist:'',senses:'pasiva 13',langs:'Thieves Cant y cualquier 2',cr:'8',xp:3900,traits:'Ataque furtivo (4d6). Asesino: ventaja en ataques contra sorprendidos y critico extra vs sorprendidos.',actions:'Multiataque: 2 espadas. Espada corta: +6, 1d6+3 perforante más 4d6 veneno (CD15 CON mitad). Ballesta de mano: +6, 1d6+3 perforante más 4d6 veneno.'},
{name:'Bandido',nd:'1/8',type:'humanoide',size:'Mediana',ac:12,hp:'11 (2d8+2)',speed:'30 ft.',str:11,dex:12,con:12,int:10,wis:10,cha:10,skills:'',saves:'',immune:'',resist:'',senses:'pasiva 10',langs:'Cualquier idioma',cr:'1/8',xp:25,traits:'',actions:'Cimitarra: +3, 1d6+1 cortante. Ballesta de mano: +3, rango 30/120, 1d6+1 perforante.'},
{name:'Capitán Bandido',nd:'2',type:'humanoide',size:'Mediana',ac:15,hp:'65 (10d8+20)',speed:'30 ft.',str:15,dex:14,con:14,int:14,wis:11,cha:14,skills:'Atletismo +4, Engaño +4',saves:'',immune:'',resist:'',senses:'pasiva 10',langs:'Cualquier dos idiomas',cr:'2',xp:450,traits:'',actions:'Multiataque: 3 ataques. Espada de bastardo: +4, 1d10+2 cortante. Daga: +4, rango 20/60, 1d4+2 perforante.'},
{name:'Clérigo (NPC)',nd:'2',type:'humanoide',size:'Mediana',ac:13,hp:'27 (5d8+5)',speed:'30 ft.',str:10,dex:10,con:12,int:13,wis:16,cha:13,skills:'Medicina +7, Persuasión +3, Religión +5',saves:'',immune:'',resist:'',senses:'pasiva 13',langs:'Cualquier dos idiomas',cr:'2',xp:450,traits:'',actions:'Maza: +2, 1d6 contundente. Hechizos (SAB CD13): Trucos: llama sagrada, luces; 1°: curar heridas, escudo de fe; 2°: hechizo de zona de verdad, restauración menor.'},
{name:'Druida (NPC)',nd:'2',type:'humanoide',size:'Mediana',ac:11,hp:'27 (5d8+5)',speed:'30 ft.',str:10,dex:12,con:13,int:12,wis:15,cha:11,skills:'Medicina +4, Naturaleza +3, Percepción +4',saves:'',immune:'',resist:'',senses:'pasiva 14',langs:'Druídico más cualquier dos',cr:'2',xp:450,traits:'',actions:'Bastón: +2, 1d6 contundente. Hechizos (SAB CD12): Trucos: llamarada, producir llama; 1°: enredar, curar heridas; 2°: esfera flamígera, piel de corteza.'},
{name:'Espía',nd:'1',type:'humanoide',size:'Mediana',ac:12,hp:'27 (6d8)',speed:'30 ft.',str:10,dex:15,con:10,int:12,wis:14,cha:16,skills:'Engaño +5, Perspicacia +4, Investigación +5, Percepción +6, Persuasión +5, Sigilo +4',saves:'',immune:'',resist:'',senses:'pasiva 16',langs:'Cualquier dos idiomas',cr:'1',xp:200,traits:'Ataque furtivo (1d6).',actions:'Multiataque: 2 ataques. Espada corta: +4, 1d6+2 perforante. Ballesta de mano: +4, 1d6+2 perforante.'},
{name:'Gladiador',nd:'5',type:'humanoide',size:'Mediana',ac:16,hp:'112 (15d8+45)',speed:'30 ft.',str:18,dex:15,con:16,int:10,wis:12,cha:15,skills:'Atletismo +7, Intimidación +5',saves:'FUE +7, DES +5, CON +6',immune:'',resist:'',senses:'pasiva 11',langs:'Cualquier idioma',cr:'5',xp:1800,traits:'Valentía: ventaja en TS contra ser asustado.',actions:'Multiataque: 3 ataques. Tridente: +7, 1d6+4 perforante. Escudo: +7, 1d4+4 contundente.'},
{name:'Guardia',nd:'1/8',type:'humanoide',size:'Mediana',ac:16,hp:'11 (2d8+2)',speed:'30 ft.',str:13,dex:12,con:12,int:10,wis:11,cha:10,skills:'Percepción +2',saves:'',immune:'',resist:'',senses:'pasiva 12',langs:'Cualquier idioma',cr:'1/8',xp:25,traits:'',actions:'Lanza: +3, 1d6+1 perforante.'},
{name:'Mago (NPC)',nd:'6',type:'humanoide',size:'Mediana',ac:12,hp:'40 (9d8)',speed:'30 ft.',str:9,dex:14,con:11,int:17,wis:12,cha:11,skills:'Arcanos +7, Historia +7',saves:'INT +7, SAB +5',immune:'',resist:'',senses:'pasiva 11',langs:'Cualquier cuatro',cr:'6',xp:2300,traits:'',actions:'Daga: +4, 1d4+2 perforante. Hechizos (INT CD15): Trucos: rayo de fuego, trampa mágica; 1°: proyectil mágico, escudo; 2°: misil invisible, sugestión; 3°: bola de fuego, contraechizo; 4°: gran invisibilidad.'},
{name:'Noble',nd:'1/8',type:'humanoide',size:'Mediana',ac:15,hp:'9 (2d8)',speed:'30 ft.',str:11,dex:12,con:11,int:12,wis:14,cha:16,skills:'Engaño +5, Perspicacia +4, Persuasión +5',saves:'',immune:'',resist:'',senses:'pasiva 12',langs:'Cualquier dos idiomas',cr:'1/8',xp:25,traits:'',actions:'Estoque: +3, 1d8+1 perforante.'},
{name:'Sacerdote',nd:'2',type:'humanoide',size:'Mediana',ac:13,hp:'27 (5d8+5)',speed:'30 ft.',str:10,dex:10,con:12,int:13,wis:16,cha:13,skills:'Medicina +7, Persuasión +3, Religión +4',saves:'',immune:'',resist:'',senses:'pasiva 13',langs:'Cualquier dos idiomas',cr:'2',xp:450,traits:'Canalizar divinidad (1/descanso): vuelta no-muertos CD13 SAB.',actions:'Maza: +2, 1d6 contundente. Llama sagrada: TS DES CD13 o 2d8 radiante. Curar heridas (2°): 2d8+3 PG.'},
{name:'Soldado',nd:'1/2',type:'humanoide',size:'Mediana',ac:16,hp:'16 (3d8+3)',speed:'30 ft.',str:13,dex:12,con:12,int:10,wis:11,cha:10,skills:'Atletismo +3, Percepción +2',saves:'',immune:'',resist:'',senses:'pasiva 12',langs:'Cualquier idioma',cr:'1/2',xp:100,traits:'Formación: ventaja en ataques si aliado adyacente al objetivo.',actions:'Espada larga: +3, 1d8+1 cortante. Ballesta pesada: +3, 1d10+1 perforante.'},
{name:'Veterano',nd:'3',type:'humanoide',size:'Mediana',ac:17,hp:'58 (9d8+18)',speed:'30 ft.',str:16,dex:13,con:14,int:10,wis:11,cha:10,skills:'Atletismo +5, Percepción +2',saves:'',immune:'',resist:'',senses:'pasiva 12',langs:'Cualquier idioma',cr:'3',xp:700,traits:'',actions:'Multiataque: 2 ataques. Espada larga: +5, 1d8+3 cortante. Ballesta pesada: +3, 1d10+1 perforante.'},

// ═══════════════════════════════════════════
// MONSTRUOS ADICIONALES
// ═══════════════════════════════════════════
{name:'Ankhegg',nd:'2',type:'monstruo',size:'Grande',ac:14,hp:'39 (6d10+6)',speed:'30 ft., excavación 10 ft.',str:17,dex:11,con:13,int:1,wis:13,cha:6,skills:'',saves:'',immune:'',resist:'',senses:'Visión ciega 60 ft., Temblorsense 60 ft., pasiva 11',langs:'—',cr:'2',xp:450,traits:'',actions:'Mordedura: +5, 2d6+3 perforante más CD13 CON o 3d6 ácido. Ácido escupido (Recarga 6): 30 ft. línea, CD13 DES, 3d6 ácido.'},
{name:'Azer',nd:'2',type:'elemental',size:'Mediana',ac:17,hp:'39 (6d8+12)',speed:'30 ft.',str:17,dex:12,con:15,int:12,wis:13,cha:10,skills:'',saves:'CON +4',immune:'Fuego, Veneno; Envenenado',resist:'',senses:'pasiva 11',langs:'Ignan',cr:'2',xp:450,traits:'Calentamiento: 1d10 fuego a quien lo toque o le golpee en cuerpo a cuerpo.',actions:'Multiataque: 2 martillos. Martillo de guerra: +5, 1d8+3 contundente más 1d6 fuego.'},
{name:'Bulette',nd:'5',type:'monstruo',size:'Grande',ac:17,hp:'94 (9d10+45)',speed:'40 ft., excavación 40 ft.',str:19,dex:11,con:21,int:2,wis:10,cha:5,skills:'Percepción +4',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., Temblorsense 60 ft., pasiva 14',langs:'—',cr:'5',xp:1800,traits:'Asedio: daño doble a objetos.',actions:'Mordedura: +7, 4d12+4 perforante. Salto mortal: sube 15 ft. y cae, CD16 DES o 3d6+4 contundente y derribado.'},
{name:'Chuul',nd:'4',type:'aberración',size:'Grande',ac:16,hp:'93 (11d10+33)',speed:'30 ft., nado 30 ft.',str:19,dex:10,con:16,int:5,wis:11,cha:5,skills:'Percepción +4',saves:'',immune:'Veneno; Envenenado',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 14',langs:'Comprende Profundo pero no puede hablar',cr:'4',xp:1100,traits:'Detectar magia: puede detectar magia a 120 ft.',actions:'Multiataque: 2 pinzas. Pinza: +6, 2d6+4 contundente y agarrado (CD14). Tentáculos: solo criatura agarrada, CD13 CON o paralizada 1 min.'},
{name:'Couatl',nd:'4',type:'celestial',size:'Mediana',ac:19,hp:'97 (13d8+39)',speed:'30 ft., vuelo 90 ft.',str:16,dex:20,con:17,int:18,wis:20,cha:18,skills:'',saves:'CON +5, SAB +7, CAR +6',immune:'Psíquico; Contundente, Perforante, Cortante de armas no mágicas',resist:'Radiante',senses:'Visión de la verdad 120 ft., pasiva 15',langs:'Todos los idiomas, telepatía 120 ft.',cr:'4',xp:1100,traits:'Resistencia mágica. Armas mágicas.',actions:'Mordedura: +8, 1d6+5 perforante más CD13 CON o 5d6 veneno (dormido si reduce a 0). Constricción: +6, 2d6+3 contundente y agarrado (CD15).'},
{name:'Doppelganger',nd:'3',type:'monstruoso',size:'Mediana',ac:14,hp:'52 (8d8+16)',speed:'30 ft.',str:11,dex:18,con:14,int:11,wis:12,cha:14,skills:'Engaño +6, Perspicacia +3',saves:'',immune:'Encantado',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 13',langs:'Común',cr:'3',xp:700,traits:'Cambiaformas: acción para tomar apariencia de humanoide medio. Leer pensamientos: CD13 SAB o lee los pensamientos de criatura a 60 ft.',actions:'Multiataque: 2 ataques. Golpe: +6, 1d6+4 contundente.'},
{name:'Driade',nd:'1',type:'feérica',size:'Mediana',ac:11,hp:'22 (5d8)',speed:'30 ft.',str:10,dex:12,con:11,int:14,wis:15,cha:20,skills:'Naturaleza +4, Percepción +4, Sigilo +5',saves:'',immune:'',resist:'',senses:'pasiva 14',langs:'Élfico, Silvano',cr:'1',xp:200,traits:'Resistencia mágica. Fusión con árbol: puede desaparecer en árbol.',actions:'Garrote: +2, 1d4 contundente. Hechizos innatos (CAR CD14): A voluntad: guía, producir llama, veneno; 3/día: encantar persona, viento entre árboles; 1/día: barrera de cuchillas, dominar bestia, hablar con plantas.'},
{name:'Ettin',nd:'4',type:'gigante',size:'Grande',ac:12,hp:'85 (10d10+30)',speed:'40 ft.',str:21,dex:8,con:17,int:6,wis:10,cha:8,skills:'Percepción +4',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 14',langs:'Gigante, Orco',cr:'4',xp:1100,traits:'Dos cabezas: ventaja en percepción y no puede ser sorprendido.',actions:'Multiataque: 2 ataques (una por cabeza). Mayal: +7, 2d6+5 contundente. Hacha de guerra: +7, 2d8+5 cortante.'},
{name:'Flumph',nd:'1/8',type:'aberración',size:'Pequeño',ac:12,hp:'7 (2d6)',speed:'0 ft., vuelo 30 ft.',str:6,dex:15,con:10,int:14,wis:14,cha:11,skills:'Arcanos +4, Historia +4, Religión +4',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 12',langs:'Entiende todos los idiomas pero no puede hablar',cr:'1/8',xp:25,traits:'Detección infernal: puede detectar si criatura a 60 ft. tiene malas intenciones.',actions:'Tentáculo: +4, 1d4+2 perforante más CD10 CON o 2d4 ácido. Rociar hedor (Recarga 6): 15 ft. línea, CD10 DES o maloliente 1 minuto.'},
{name:'Genio (Dao)',nd:'11',type:'elemental',size:'Grande',ac:18,hp:'187 (15d10+105)',speed:'30 ft., vuelo 30 ft., excavación 30 ft.',str:23,dex:12,con:24,int:12,wis:13,cha:14,skills:'Perspicacia +5, Percepción +5',saves:'INT +5, SAB +5, CAR +6',immune:'Veneno; Envenenado',resist:'Contundente, Perforante, Cortante de armas no mágicas',senses:'Visión en la oscuridad 120 ft., pasiva 15',langs:'Terran',cr:'11',xp:7200,traits:'Resistencia elemental. Resistencia mágica. Conceder deseos (3/año).',actions:'Multiataque: 2 puños. Puño: +10, 2d8+6 contundente. Hechizos innatos: A voluntad: detectar mal y bien, detectar magia, terraformar; 3/día: crear comida; 1/día: convocar elemental, gasificar, mover tierra, piedra a barro, apresar.'},
{name:'Genio (Djinni)',nd:'11',type:'elemental',size:'Grande',ac:17,hp:'161 (14d10+84)',speed:'30 ft., vuelo 90 ft.',str:21,dex:15,con:22,int:15,wis:16,cha:20,skills:'Acrobacias +6, Perspicacia +7',saves:'DES +6, SAB +7, CAR +9',immune:'Rayo, Trueno',resist:'',senses:'Visión en la oscuridad 120 ft., pasiva 13',langs:'Auran',cr:'11',xp:7200,traits:'Resistencia elemental. Resistencia mágica. Conceder deseos (3/año).',actions:'Multiataque: 2 cimitarras. Cimitarra: +9, 2d6+5 cortante más 1d6 rayo. Hechizos innatos: A voluntad: detectar mal y bien, detectar magia, tormenta ventosa; 3/día: crear comida, viento; 1/día: cadenas elementales, convocar elemental, gasificar, tormenta de viento.'},
{name:'Genio (Efreeti)',nd:'11',type:'elemental',size:'Grande',ac:17,hp:'200 (16d10+112)',speed:'40 ft., vuelo 60 ft.',str:22,dex:12,con:24,int:16,wis:15,cha:16,skills:'Engaño +7, Perspicacia +6',saves:'INT +7, SAB +6, CAR +7',immune:'Fuego',resist:'',senses:'Visión en la oscuridad 120 ft., pasiva 12',langs:'Ignan',cr:'11',xp:7200,traits:'Resistencia elemental. Resistencia mágica. Conceder deseos (3/año).',actions:'Multiataque: 2 cimitarras. Cimitarra: +10, 2d6+6 cortante más 2d6 fuego. Hechizos innatos: A voluntad: detectar magia, ampliar/reducir; 3/día: crear comida, invisibilidad, plano de vuelo; 1/día: convocar elemental, gasificar, muro de fuego.'},
{name:'Genio (Marid)',nd:'11',type:'elemental',size:'Grande',ac:17,hp:'229 (17d10+136)',speed:'30 ft., nado 90 ft.',str:22,dex:12,con:26,int:18,wis:17,cha:18,skills:'Historia +8, Percepción +7',saves:'DES +5, SAB +7, CAR +8',immune:'Ácido',resist:'',senses:'Visión en la oscuridad 120 ft., pasiva 17',langs:'Aquan',cr:'11',xp:7200,traits:'Resistencia elemental. Resistencia mágica. Conceder deseos (3/año).',actions:'Multiataque: 2 tridentes. Tridente: +10, 2d6+6 perforante. Toque acuoso (Recarga 5-6): CD18 DES, 4d10+6 contundente y si grande o menor ahogado.'},
{name:'Githyanki Caballero',nd:'8',type:'humanoide',size:'Mediana',ac:18,hp:'91 (14d8+28)',speed:'30 ft.',str:16,dex:14,con:15,int:14,wis:12,cha:10,skills:'Perspicacia +4, Percepción +4',saves:'CON +5, INT +5, SAB +4',immune:'',resist:'',senses:'pasiva 14',langs:'Gith',cr:'8',xp:3900,traits:'Resistencia mágica. Armas mágicas.',actions:'Multiataque: 3 ataques. Gran espada plateada: +6, 2d6+3 cortante más 3d6 psíquico. Hechizos (INT CD12): 3/día: saltar, misil mágico; 1/día: plano de vuelo.'},
{name:'Gnoll Comandante',nd:'4',type:'humanoide',size:'Mediana',ac:15,hp:'71 (11d8+22)',speed:'30 ft.',str:16,dex:14,con:15,int:8,wis:11,cha:13,skills:'',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 10',langs:'Gnoll',cr:'4',xp:1100,traits:'Frenesí de cadáveres.',actions:'Multiataque: 3 ataques. Mordedura: +5, 2d6+3 perforante. Lanza: +5, 1d6+3 perforante. Orden frenética (Recarga 5-6): aliado gnoll puede hacer un ataque como reacción.'},
{name:'Gorgona',nd:'5',type:'monstruo',size:'Grande',ac:19,hp:'114 (12d10+48)',speed:'40 ft.',str:20,dex:11,con:18,int:2,wis:12,cha:7,skills:'Percepción +4',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 14',langs:'—',cr:'5',xp:1800,traits:'Pisoteador: Puede pasar por espacios de criaturas medianas o menores.',actions:'Multiataque: 2 ataques con cuernos. Cuernos: +8, 2d10+5 perforante. Aliento petrificante (Recarga 5-6): 30 ft. cono, CD13 CON, fallo: restringido; 3 fallos petrificado.'},
{name:'Hag Verde',nd:'3',type:'feérica',size:'Mediana',ac:17,hp:'82 (11d8+33)',speed:'30 ft., nado 30 ft.',str:18,dex:12,con:16,int:13,wis:14,cha:14,skills:'Arcanos +3, Engaño +4, Percepción +4, Sigilo +3',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 14',langs:'Común, Druídico, Silvano',cr:'3',xp:700,traits:'Anfibio. Imitación: puede imitar perfectamente voces. Magia sobrenatural: a voluntad invisibilidad, detección de magia; 3/día: desplazamiento y oscuridad; 1/día: polimorfismo.',actions:'Garra: +6, 2d6+4 cortante. Debilitar (Recarga 5-6): CD12 CON o FUE y DES a 1 por 1 hora.'},
{name:'Hag Nocturna',nd:'5',type:'feérica',size:'Mediana',ac:17,hp:'112 (15d8+45)',speed:'30 ft.',str:18,dex:15,con:16,int:16,wis:14,cha:16,skills:'Engaño +7, Perspicacia +6, Percepción +6, Sigilo +6',saves:'',immune:'Frío; Encantado',resist:'Frío, Fuego',senses:'Visión de la verdad 60 ft., pasiva 16',langs:'Abysal, Común, Infernal, Primordial',cr:'5',xp:1800,traits:'Resistencia mágica. Cambiaformas (humana o cuervo). Maldición de pesadilla: 1 humanoide dentro de 1 milla sufre pesadillas y no descansa.',actions:'Garra: +7, 2d8+4 cortante. Hechizos innatos (CAR CD14): A voluntad: detectar magia, magia de hechicero; 2/día: rayo helado, sugestión; 1/día: sueño.'},
{name:'Hag Marina',nd:'2',type:'feérica',size:'Mediana',ac:14,hp:'52 (7d8+21)',speed:'30 ft., nado 40 ft.',str:16,dex:13,con:16,int:12,wis:12,cha:13,skills:'Engaño +3, Perspicacia +3',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 11',langs:'Aquan, Común, Gigante',cr:'2',xp:450,traits:'Anfibio. Apariencia horrible: CD11 SAB o asustado 1 min.',actions:'Garra: +5, 2d6+3 cortante. Mirada debilitante: CD11 CON o desventaja en ataques hasta fin turno.'},
{name:'Hook Horror',nd:'3',type:'monstruo',size:'Grande',ac:15,hp:'75 (10d10+20)',speed:'30 ft., trepar 30 ft.',str:18,dex:10,con:15,int:6,wis:12,cha:7,skills:'Percepción +3',saves:'',immune:'',resist:'',senses:'Ecolocalización 60 ft., Visión en la oscuridad 120 ft., pasiva 13',langs:'Hook Horror',cr:'3',xp:700,traits:'Ecolocalización.',actions:'Multiataque: 2 garfios. Garfio: +6, 2d6+4 perforante.'},
{name:'Devorador de Intelecto',nd:'2',type:'aberración',size:'Diminuto',ac:12,hp:'21 (6d4+6)',speed:'40 ft.',str:6,dex:14,con:13,int:12,wis:11,cha:10,skills:'Percepción +2, Sigilo +4',saves:'',immune:'',resist:'',senses:'Visión ciega 60 ft., pasiva 12',langs:'Comprende los idiomas del Señor Mentales pero no puede hablar',cr:'2',xp:450,traits:'Detectar pensamiento: puede detectar mente de criaturas a 300 ft.',actions:'Garra: +4, 1d6+2 cortante. Devorar intelecto: criatura agarrada, CD12 INT o reducir INT en 3d6. A 0: criatura controlada. Cuerpo de cómputo: se mete dentro del cráneo de humanoide muerto.'},
{name:'Invisible Stalker',nd:'6',type:'elemental',size:'Mediana',ac:14,hp:'104 (16d8+32)',speed:'50 ft., vuelo 50 ft.',str:16,dex:19,con:14,int:10,wis:15,cha:11,skills:'Percepción +8, Sigilo +10',saves:'',immune:'Veneno; Encantado, Agotamiento, Agarrado, Paralizado, Petrificado, Envenenado, Postrado, Restringido, Inconsciente',resist:'Contundente, Perforante, Cortante de armas no mágicas',senses:'Visión en la oscuridad 60 ft., pasiva 18',langs:'Auran, Comprende Común pero no puede hablar',cr:'6',xp:2300,traits:'Invisible: permanentemente invisible. Rastreador sin error: siempre sabe la dirección a su presa.',actions:'Multiataque: 2 golpes. Golpe: +6, 2d6+3 contundente.'},
{name:'Kenku',nd:'1/4',type:'humanoide',size:'Mediana',ac:13,hp:'13 (3d8)',speed:'30 ft.',str:10,dex:16,con:10,int:11,wis:10,cha:10,skills:'Engaño +4, Percepción +2, Sigilo +5',saves:'',immune:'',resist:'',senses:'pasiva 12',langs:'Comprende Auran y Común pero solo puede hablar por Imitación',cr:'1/4',xp:50,traits:'Imitación ambidiestra: puede imitar sonidos que haya escuchado. Ataque furtivo (1d6).',actions:'Garfio: +5, 1d4+3 cortante. Espada corta: +5, 1d6+3 perforante.'},
{name:'Kuo-toa',nd:'1/4',type:'humanoide',size:'Mediana',ac:13,hp:'18 (4d8)',speed:'30 ft., nado 30 ft.',str:13,dex:10,con:11,int:11,wis:10,cha:8,skills:'Percepción +4',saves:'',immune:'Envenenado',resist:'',senses:'Visión en la oscuridad 120 ft., pasiva 14',langs:'Infernal, Profundo',cr:'1/4',xp:50,traits:'Anfibio. Sentido divino: detecta ilusiones. Red resbaladiza: primero que lo golpea queda pegado.',actions:'Mordedura: +3, 1d4+1 perforante. Lanza: +3, 1d6+1 perforante. Red (Recarga 6): rango 5/15, CD11 DES o restringido.'},
{name:'Kuo-toa Archimago',nd:'6',type:'humanoide',size:'Mediana',ac:13,hp:'97 (13d8+39)',speed:'30 ft., nado 30 ft.',str:16,dex:14,con:16,int:13,wis:16,cha:14,skills:'Percepción +9, Religión +6',saves:'',immune:'Envenenado',resist:'',senses:'Visión en la oscuridad 120 ft., pasiva 19',langs:'Infernal, Profundo',cr:'6',xp:2300,traits:'Anfibio. Sentido divino. Resistencia mágica.',actions:'Multiataque: 2 ataques. Bastón: +5, 1d6+3 contundente. Hechizos (SAB CD14): Trucos: guía, sagrado llama, taumaturgia; 1°: bane, curar heridas; 2°: hechizo de silencio, invisibilidad espiritual; 3°: llamar al rayo, pronunciar maldición; 4°: visión divina; 5°: plaga insectos.'},
{name:'Merfolk',nd:'1/8',type:'humanoide',size:'Mediana',ac:11,hp:'11 (2d8+2)',speed:'10 ft., nado 40 ft.',str:10,dex:13,con:12,int:11,wis:11,cha:12,skills:'Percepción +2',saves:'',immune:'',resist:'',senses:'pasiva 12',langs:'Aquan, Común',cr:'1/8',xp:25,traits:'Anfibio.',actions:'Cola: +2, 1d10 contundente. Lanza: +2, 1d6 perforante.'},
{name:'Merrow',nd:'2',type:'monstruoso',size:'Grande',ac:13,hp:'45 (6d10+12)',speed:'10 ft., nado 40 ft.',str:18,dex:10,con:15,int:8,wis:10,cha:9,skills:'',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 10',langs:'Abysal, Aquan',cr:'2',xp:450,traits:'Anfibio.',actions:'Multiataque: 2 ataques. Garra: +6, 1d6+4 cortante. Arpón (arrojadizo): +6, rango 5/20, 2d6+4 perforante y criatura tirada si falla CD14 FUE.'},
{name:'Mímic',nd:'2',type:'monstruoso',size:'Mediana',ac:12,hp:'58 (9d8+18)',speed:'15 ft.',str:17,dex:12,con:15,int:5,wis:13,cha:8,skills:'Sigilo +5',saves:'',immune:'Ácido; Asustado, Postrado',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 11',langs:'—',cr:'2',xp:450,traits:'Cambiaformas: toma la forma de objeto inanimado. Adhesivo: criatura que toque una superficie de mímic en forma de objeto queda pegada.',actions:'Pseudopodo: +5, 1d8+3 contundente más adherido. Mordedura: +5, 1d8+3 perforante más 1d8 ácido.'},
{name:'Mephit de Lodo',nd:'1/4',type:'elemental',size:'Pequeño',ac:11,hp:'27 (6d6+6)',speed:'20 ft., nado 20 ft.',str:8,dex:12,con:12,int:9,wis:11,cha:7,skills:'Sigilo +3',saves:'',immune:'Ácido, Veneno; Envenenado',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 10',langs:'Aquan, Terran',cr:'1/4',xp:50,traits:'Muerte (explosión de ácido): al morir, 5 ft. radio, CD11 CON, 2d6 ácido.',actions:'Garra: +3, 1d4+1 cortante más 1d4 ácido. Aliento de ácido (Recarga 6): 15 ft. cono, CD11 DES, 3d6 ácido.'},
{name:'Mephit de Hielo',nd:'1/2',type:'elemental',size:'Pequeño',ac:11,hp:'21 (6d6)',speed:'30 ft., vuelo 30 ft.',str:7,dex:13,con:10,int:9,wis:11,cha:12,skills:'Percepción +2, Sigilo +3',saves:'',immune:'Frío, Veneno; Envenenado',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 12',langs:'Aquan, Auran',cr:'1/2',xp:100,traits:'Muerte (explosión de frío): 5 ft. radio, CD10 CON, 1d8 frío. Vulnerabilidad al fuego.',actions:'Garra: +3, 1d4+1 cortante más 1d4 frío. Aliento de hielo (Recarga 6): 15 ft. cono, CD10 DES, 2d6 frío.'},
{name:'Mephit de Fuego',nd:'1/4',type:'elemental',size:'Pequeño',ac:11,hp:'22 (5d6+5)',speed:'30 ft., vuelo 30 ft.',str:7,dex:13,con:12,int:8,wis:11,cha:10,skills:'Percepción +2, Sigilo +3',saves:'',immune:'Fuego, Veneno; Envenenado',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 12',langs:'Ignan',cr:'1/4',xp:50,traits:'Muerte (explosión de fuego): 5 ft. radio, CD10 DES, 1d6 fuego. Vulnerabilidad al frío.',actions:'Garra: +3, 1d4+1 cortante más 1d4 fuego. Aliento de llamas (Recarga 6): 15 ft. cono, CD11 DES, 2d6 fuego. Hechizos innatos: 1/día: encender.'},
{name:'Mephit de Polvo',nd:'1/2',type:'elemental',size:'Pequeño',ac:12,hp:'17 (5d6)',speed:'30 ft., vuelo 30 ft.',str:5,dex:14,con:10,int:9,wis:11,cha:10,skills:'Percepción +2, Sigilo +4',saves:'',immune:'Veneno; Agotamiento, Envenenado',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 12',langs:'Auran, Terran',cr:'1/2',xp:100,traits:'Muerte (nube de polvo): 5 ft. radio, CD10 CON, cegado 1 min.',actions:'Garra: +4, 1d4+2 cortante más 1d4 necrótico. Aliento de polvo (Recarga 6): 15 ft. cono, CD10 CON, cegado 1 min.'},
{name:'Naga Espíritu',nd:'8',type:'no-muerto',size:'Grande',ac:13,hp:'85 (10d10+30)',speed:'40 ft.',str:18,dex:17,con:16,int:16,wis:14,cha:16,skills:'',saves:'DES +6, INT +6, SAB +5, CAR +6',immune:'Veneno; Encantado, Agotamiento, Asustado, Envenenado',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 12',langs:'Abysal, Común',cr:'8',xp:3900,traits:'Rejuvenecimiento: si muere, revivirá en 1d6 días. Resistencia mágica.',actions:'Mordedura: +7, 1d6+4 perforante más CD13 CON o 3d6 veneno. Hechizos (INT CD14): Trucos: rayo de escarcha, trampa mágica; 1°: rayo de brujería, escudo; 2°: misil invisible; 3°: bola de fuego; 4°: hechizo de torbellino; 5°: nube de muerte.'},
{name:'Pesadilla',nd:'3',type:'infernal',size:'Grande',ac:13,hp:'68 (8d10+24)',speed:'60 ft., vuelo 90 ft.',str:18,dex:15,con:16,int:10,wis:13,cha:15,skills:'',saves:'',immune:'Fuego',resist:'',senses:'pasiva 11',langs:'Entiende Abysal, Común e Infernal pero no puede hablar',cr:'3',xp:700,traits:'Casco ardiente: 3d4+3 fuego a criatura a 5 ft. al inicio del turno. Movimiento iluminado: puede moverse entre planos.',actions:'Cascos: +6, 2d8+4 fuego. Aliento de fuego etéreo: CD13 DES, 7d6 fuego y reduce PG máx.'},
{name:'Owlbear',nd:'3',type:'monstruo',size:'Grande',ac:13,hp:'59 (7d10+21)',speed:'40 ft.',str:20,dex:12,con:17,int:3,wis:12,cha:7,skills:'Percepción +3',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 13',langs:'—',cr:'3',xp:700,traits:'Vista aguda y olfato.',actions:'Multiataque: pico y garras. Pico: +7, 1d10+5 perforante. Garras: +7, 2d8+5 cortante.'},
{name:'Peryton',nd:'2',type:'monstruo',size:'Mediana',ac:13,hp:'33 (6d8+6)',speed:'20 ft., vuelo 60 ft.',str:16,dex:12,con:13,int:9,wis:12,cha:10,skills:'Percepción +3',saves:'',immune:'',resist:'',senses:'pasiva 13',langs:'Comprende Común y Élfico pero no puede hablar',cr:'2',xp:450,traits:'Vista aguda y olfato. Vuelo en picado: si vuela 30 ft. y golpea con cuernos, causa 2d8+3 en lugar del daño normal.',actions:'Cuernos: +5, 1d8+3 perforante. Garras: +5, 2d4+3 cortante.'},
{name:'Shambling Mound',nd:'5',type:'planta',size:'Grande',ac:15,hp:'136 (16d10+48)',speed:'20 ft., nado 20 ft.',str:18,dex:8,con:16,int:5,wis:10,cha:5,skills:'Sigilo +2',saves:'',immune:'Rayo, Veneno; Cegado, Ensordecido, Agotamiento, Asustado, Envenenado',resist:'Frío, Fuego',senses:'Visión ciega 60 ft., pasiva 10',langs:'—',cr:'5',xp:1800,traits:'Absorber rayo: rayo lo cura y se agranda.',actions:'Multiataque: 2 golpes y tragar si tiene agarrado. Golpe: +7, 2d8+4 contundente y agarrado (CD14). Tragar: agarrado y cegado 2d8+4 ácido por turno.'},
{name:'Stirge',nd:'1/8',type:'bestia',size:'Diminuta',ac:14,hp:'2 (1d4)',speed:'10 ft., vuelo 40 ft.',str:4,dex:16,con:11,int:2,wis:8,cha:6,skills:'',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 9',langs:'—',cr:'1/8',xp:25,traits:'',actions:'Pico: +5, 1d4+3 perforante y agarrado. Drenaje de sangre: automático en objetivo agarrado, 1d4+3 necrótico. Si drena 10 PG se llena y suelta.'},
{name:'Troglodita',nd:'1/4',type:'humanoide',size:'Mediana',ac:11,hp:'13 (2d8+4)',speed:'30 ft.',str:14,dex:10,con:14,int:6,wis:10,cha:6,skills:'Sigilo +2',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 10',langs:'Troglodita',cr:'1/4',xp:50,traits:'Hedor: CD12 CON o envenenado mientras esté a 5 ft. Camaleón.',actions:'Multiataque: mordida y 2 garras. Mordida: +4, 1d4+2 perforante. Garra: +4, 1d4+2 cortante.'},
{name:'Umber Hulk',nd:'5',type:'monstruo',size:'Grande',ac:18,hp:'93 (11d10+33)',speed:'30 ft., excavación 20 ft.',str:20,dex:13,con:16,int:9,wis:10,cha:10,skills:'',saves:'',immune:'',resist:'',senses:'Visión en la oscuridad 120 ft., Temblorsense 60 ft., pasiva 10',langs:'Umber Hulk',cr:'5',xp:1800,traits:'Mirada confundidora: criatura que empieza turno a 30 ft. y lo ve: CD15 CAR o confundida hasta inicio siguiente turno.',actions:'Multiataque: 2 garras y mandíbulas. Garra: +8, 2d8+5 cortante. Mandíbulas: +8, 3d10+5 cortante.'},
{name:'Water Weird',nd:'3',type:'elemental',size:'Grande',ac:13,hp:'58 (9d10+9)',speed:'0 ft., nado 60 ft.',str:17,dex:16,con:13,int:11,wis:10,cha:10,skills:'',saves:'',immune:'Veneno; Agotamiento, Agarrado, Paralizado, Envenenado, Postrado, Restringido, Inconsciente',resist:'Ácido, Fuego; Contundente, Perforante, Cortante de armas no mágicas',senses:'Visión ciega 30 ft., pasiva 10',langs:'Comprende Aquan pero no puede hablar',cr:'3',xp:700,traits:'Invisible en agua. Ligado al agua: muere si sale a más de 30 ft. de su agua.',actions:'Constricción: +5, 3d6+3 contundente y agarrado (CD13). Ahogamiento: solo objetivo agarrado, CD13 CON o incapacitado.'},
{name:'Yuan-ti Sangre Pura',nd:'1',type:'humanoide',size:'Mediana',ac:11,hp:'40 (9d8)',speed:'30 ft.',str:11,dex:12,con:11,int:13,wis:12,cha:14,skills:'Engaño +4, Sigilo +3',saves:'',immune:'Veneno; Envenenado',resist:'',senses:'Visión en la oscuridad 60 ft., pasiva 11',langs:'Abysal, Común, Dracónico',cr:'1',xp:200,traits:'Resistencia mágica. Hechizos innatos (CAR CD12): A voluntad: animal amistad (solo serpientes); 3/día: sugestión.',actions:'Cimitarra: +3, 1d6+1 cortante. Arco corto: +3, 1d6+1 perforante más 2d6 veneno.'}
);

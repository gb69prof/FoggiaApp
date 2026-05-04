export type PlaceCategory = "monumento" | "moderno" | "ristorante" | "locale";

export interface Place {
  id: string;
  name: string;
  category: PlaceCategory;
  shortDescription: string;
  coords: [number, number]; // [lat, lng]
  image?: string;
  sections?: {
    storia?: string;
    evoluzione?: string;
    contesto?: string;
    curiosita?: string;
    funzione?: string;
    rilevanza?: string;
  };
  info?: {
    address?: string;
    hours?: string;
    phone?: string;
    website?: string;
  };
}

/**
 * Contenuti basati su informazioni storiche generalmente documentate
 * (fonti istituzionali, Diocesi di Foggia-Bovino, Polo Museale, bibliografia locale).
 * Dove le fonti sono incerte, si è scelto un tono prudente e generico.
 */
export const places: Place[] = [
  {
    id: "cattedrale-foggia",
    name: "Cattedrale di Foggia",
    category: "monumento",
    shortDescription:
      "Basilica Cattedrale dedicata alla Beata Maria Vergine Assunta, custode dell’icona della Madonna dei Sette Veli (Iconavetere), simbolo religioso e identitario della città.",
    coords: [41.4614, 15.5446],
    sections: {
      storia:
        "La Cattedrale di Foggia fu edificata nella seconda metà del XII secolo, in epoca normanna, e consacrata nei primi decenni del XIII secolo. Sin dalle origini è strettamente legata al ritrovamento della tavola bizantina detta Iconavetere o Madonna dei Sette Veli, attorno alla quale si sviluppò il primo nucleo abitato di Foggia.",
      evoluzione:
        "L’edificio ha subito profondi rimaneggiamenti nel corso dei secoli. Il devastante terremoto del 1731 danneggiò gravemente la struttura: la parte superiore della facciata e gli interni furono ricostruiti in forme barocche, mentre la parte inferiore conserva ancora elementi romanici originari, tra cui il caratteristico cornicione decorato. Anche i bombardamenti della Seconda guerra mondiale colpirono Foggia in modo durissimo, rendendo necessari ulteriori restauri nel dopoguerra.",
      contesto:
        "La Cattedrale rappresenta il cuore religioso della Capitanata e per secoli è stata punto di riferimento dell’intera diocesi. Il suo doppio linguaggio architettonico — romanico in basso, barocco in alto — racconta visivamente la stratificazione storica della città.",
      curiosita:
        "Sotto la cattedrale si trova la cripta, che custodisce la venerata Iconavetere. La devozione popolare verso questa immagine è documentata fin dal Medioevo ed è all’origine del nome stesso della città secondo una tradizione locale.",
    },
    info: { address: "Via Duomo, Foggia" },
  },
  {
    id: "arco-federico-ii",
    name: "Arco di Federico II (Porta Grande)",
    category: "monumento",
    shortDescription:
      "Resto monumentale comunemente identificato con l’ingresso del palazzo imperiale fatto edificare a Foggia da Federico II di Svevia.",
    coords: [41.4625, 15.5438],
    sections: {
      storia:
        "L’arco è ciò che resta, secondo la tradizione e gli studi locali, del Palatium che Federico II di Svevia fece costruire a Foggia nel XIII secolo, scegliendo la città come una delle sedi predilette del suo regno nel Sud Italia. Sull’architrave è ancora leggibile un’iscrizione latina che ricorda la fondazione voluta dall’imperatore.",
      evoluzione:
        "Del grande complesso imperiale resta oggi quasi esclusivamente questo portale, inglobato nel tessuto urbano. La struttura originaria fu progressivamente smantellata e riutilizzata nei secoli successivi, in particolare dopo i terremoti che colpirono la Capitanata.",
      contesto:
        "Sotto Federico II, Foggia divenne uno dei centri amministrativi del Regno di Sicilia, con un ruolo di primo piano nella gestione del Tavoliere e della Dogana della Mena delle Pecore, istituita successivamente nel XV secolo dagli Aragonesi.",
    },
    info: { address: "Via Arpi, Foggia" },
  },
  {
    id: "museo-civico-arpi",
    name: "Museo Civico – Palazzo Arpi",
    category: "monumento",
    shortDescription:
      "Principale museo cittadino, ospitato nel complesso di Palazzo Arpi: raccoglie reperti archeologici, sezioni storiche e materiali legati all’antica Arpi e alla Capitanata.",
    coords: [41.4628, 15.5435],
    sections: {
      storia:
        "Il Museo Civico di Foggia ha sede nel complesso di Palazzo Arpi, in pieno centro storico. La sua collezione documenta la lunga storia del territorio, dalle popolazioni daunie all’età romana, fino all’età moderna, con particolare attenzione all’antica città di Arpi, uno dei centri più importanti della Daunia preromana.",
      evoluzione:
        "Nel corso del tempo le collezioni si sono ampliate grazie a campagne di scavo nel territorio della Capitanata e a donazioni. Il museo ha attraversato diverse fasi di riallestimento per migliorare la fruizione delle sezioni archeologiche, etnografiche e storico-artistiche.",
      contesto:
        "Il museo è uno dei principali punti di riferimento per comprendere la civiltà daunia, una cultura preromana che ha lasciato testimonianze importanti in tutta la provincia, dalle stele antropomorfe ai corredi funerari.",
    },
    info: { address: "Piazza Vincenzo Nigri, Foggia" },
  },
  {
    id: "chiesa-delle-croci",
    name: "Chiesa delle Croci",
    category: "monumento",
    shortDescription:
      "Complesso devozionale settecentesco composto da una serie di cappelle (le “Croci”) che conducono alla chiesa del Calvario, lungo un suggestivo percorso processionale.",
    coords: [41.4587, 15.5395],
    sections: {
      storia:
        "Il complesso delle Croci nacque nel XVIII secolo per volontà del frate cappuccino Antonio da Olivadi, che promosse a Foggia la costruzione di un percorso devozionale ispirato alla Via Crucis. Il cammino si snoda attraverso cinque cappelle votive culminanti in un arco trionfale e nella chiesa dedicata al Calvario.",
      evoluzione:
        "L’insieme architettonico è giunto fino a noi conservando il suo impianto originario, pur con interventi di restauro succedutisi nel tempo. È considerato uno dei luoghi più caratteristici dell’identità religiosa e urbana foggiana.",
      contesto:
        "Le Croci si inseriscono nella tradizione delle Vie Crucis monumentali diffuse nell’Italia meridionale del Settecento, frutto della spiritualità francescana e cappuccina molto attiva in Capitanata.",
    },
    info: { address: "Via delle Croci, Foggia" },
  },
  {
    id: "chiesa-san-tommaso",
    name: "Chiesa di San Tommaso Apostolo",
    category: "monumento",
    shortDescription:
      "Antica chiesa del centro storico foggiano, tra le più rappresentative della stratificazione religiosa della città.",
    coords: [41.4621, 15.5452],
    sections: {
      storia:
        "La chiesa di San Tommaso Apostolo è una delle chiese storiche di Foggia, documentata nel tessuto urbano del centro antico. Le sue forme attuali risentono dei numerosi interventi succedutisi nei secoli, in particolare in seguito al terremoto del 1731 che colpì duramente l’intera città.",
      evoluzione:
        "Come molti edifici sacri foggiani, anche San Tommaso ha attraversato fasi di ricostruzione e restauro. Conserva elementi che testimoniano la lunga storia della comunità parrocchiale e del quartiere in cui sorge.",
      contesto:
        "La chiesa fa parte del tessuto delle parrocchie storiche del centro, importanti per comprendere l’organizzazione religiosa e sociale della Foggia di età moderna.",
    },
    info: { address: "Centro storico, Foggia" },
  },
  {
    id: "pozzo-federico-ii",
    name: "Pozzo di Federico II",
    category: "monumento",
    shortDescription:
      "Antico pozzo legato alla tradizione del Palatium federiciano, parte delle testimonianze residue dell’età sveva a Foggia.",
    coords: [41.4626, 15.5441],
    sections: {
      storia:
        "Il cosiddetto Pozzo di Federico II è una struttura idrica storica che la tradizione locale collega al complesso del palazzo imperiale federiciano. Insieme all’Arco di Porta Grande, è una delle poche presenze materiali che ricordano la presenza dell’imperatore svevo a Foggia.",
      contesto:
        "L’importanza dell’approvvigionamento idrico nella Foggia medievale era notevole, data la posizione della città nel Tavoliere. Pozzi e cisterne furono per secoli infrastrutture vitali del centro abitato.",
    },
    info: { address: "Centro storico, Foggia" },
  },
  {
    id: "ipogei-tomba-medusa",
    name: "Ipogei urbani e Tomba della Medusa",
    category: "monumento",
    shortDescription:
      "Sistema di ambienti sotterranei e sepolture daunie del territorio foggiano: la Tomba della Medusa, in particolare, è uno dei reperti più noti conservati al Museo Civico.",
    coords: [41.4629, 15.5436],
    sections: {
      storia:
        "Il territorio foggiano e l’antica Arpi hanno restituito un ricco patrimonio di ipogei e tombe a camera di età daunia ed ellenistica. Tra questi spicca la cosiddetta Tomba della Medusa, scoperta nel territorio di Arpi e riferibile al periodo ellenistico, celebre per le decorazioni che le hanno dato il nome.",
      evoluzione:
        "I reperti provenienti da queste sepolture sono in parte conservati ed esposti presso il Museo Civico di Foggia, dove permettono di ricostruire usi funerari, simbologie e rapporti culturali tra la Daunia e il mondo greco-italico.",
      contesto:
        "Gli ipogei rappresentano una delle chiavi di lettura più importanti per comprendere la società daunia, la sua élite aristocratica e il dialogo culturale con la Magna Grecia.",
    },
    info: { address: "Museo Civico, Piazza Nigri, Foggia" },
  },
  {
    id: "centro-storico-porte",
    name: "Centro storico e antiche porte",
    category: "monumento",
    shortDescription:
      "Il nucleo antico di Foggia conserva tracce delle mura e degli accessi storici, con vie strette e piazze che raccontano la stratificazione medievale e moderna della città.",
    coords: [41.4620, 15.5443],
    sections: {
      storia:
        "Il centro storico di Foggia si è sviluppato intorno al sito del ritrovamento dell’Iconavetere e al successivo nucleo medievale. Nel tempo la città fu protetta da una cinta muraria con diverse porte di accesso, tra cui la più nota è la cosiddetta Porta Grande, oggi identificata con l’Arco di Federico II.",
      evoluzione:
        "Le mura e gran parte delle porte storiche sono andate perdute, in conseguenza dei terremoti, dei rifacimenti urbanistici e in particolare dei pesanti bombardamenti del 1943. Il tessuto antico è oggi leggibile soprattutto nella maglia stradale e in alcuni edifici sopravvissuti.",
      contesto:
        "Camminare nel centro storico significa attraversare la storia di Foggia: dalle origini medievali, all’età sveva e angioina, fino alle trasformazioni di età moderna e contemporanea.",
    },
    info: { address: "Centro storico, Foggia" },
  },

  // --- MODERNI ---
  {
    id: "teatro-giordano",
    name: "Teatro Umberto Giordano",
    category: "moderno",
    shortDescription:
      "Principale teatro di Foggia, dedicato al compositore foggiano Umberto Giordano, sede della stagione lirica e concertistica cittadina.",
    coords: [41.4609, 15.5430],
    sections: {
      funzione:
        "Il Teatro Umberto Giordano è il principale spazio per opera lirica, concerti, prosa e spettacoli della città. Ospita la stagione di tradizione e numerose iniziative culturali rivolte sia ai cittadini sia ai visitatori.",
      rilevanza:
        "Intitolato al compositore foggiano Umberto Giordano (autore, tra le altre, di Andrea Chénier e Fedora), rappresenta un luogo simbolico per la vita culturale della città e un punto di riferimento per la musica in Capitanata.",
    },
    info: { address: "Piazza Cesare Battisti, Foggia" },
  },
  {
    id: "piazza-giordano",
    name: "Piazza Umberto Giordano e Chiesa di Gesù e Maria",
    category: "moderno",
    shortDescription:
      "Una delle piazze centrali della città, affacciata sulla Chiesa di Gesù e Maria e sul monumento a Umberto Giordano: luogo di passeggio e incontro.",
    coords: [41.4607, 15.5432],
    sections: {
      funzione:
        "La piazza è uno dei principali punti di ritrovo del centro: ospita il monumento dedicato a Umberto Giordano e si affaccia sulla Chiesa di Gesù e Maria, edificio religioso storico della città.",
      rilevanza:
        "È uno spazio molto frequentato da residenti e visitatori, vicino alle vie dello shopping e alla zona pedonale, e rappresenta un buon punto di partenza per esplorare il centro.",
    },
  },
  {
    id: "villa-comunale",
    name: "Villa Comunale “Karol Wojtyła”",
    category: "moderno",
    shortDescription:
      "Storico parco urbano di Foggia, intitolato a Giovanni Paolo II: alberi monumentali, viali, fontane e spazi per il relax.",
    coords: [41.4598, 15.5410],
    sections: {
      funzione:
        "La Villa Comunale è il principale parco storico cittadino. Offre viali alberati, aree verdi, fontane e spazi dedicati al gioco e al relax, ed è frequentata quotidianamente da famiglie, sportivi e studenti.",
      rilevanza:
        "Costituisce un’importante area verde nel cuore di Foggia ed è un luogo di passeggio molto amato. L’intitolazione a Karol Wojtyła ricorda il legame della città con la figura di Giovanni Paolo II.",
    },
  },
  {
    id: "parco-boschetto",
    name: "Parco del Boschetto",
    category: "moderno",
    shortDescription:
      "Ampia area verde alle porte della città, ideale per camminate, sport all’aria aperta e momenti di svago in famiglia.",
    coords: [41.4520, 15.5360],
    sections: {
      funzione:
        "Il Parco del Boschetto è un’area verde periurbana frequentata per attività ricreative, jogging e tempo libero. Rappresenta uno dei principali ‘polmoni verdi’ della città.",
      rilevanza:
        "È molto utilizzato dai foggiani per uscire dal contesto urbano restando nelle vicinanze del centro: una buona occasione anche per i visitatori che vogliono conoscere la città oltre i monumenti.",
    },
  },
  {
    id: "palazzo-dogana",
    name: "Palazzo Dogana",
    category: "moderno",
    shortDescription:
      "Sede storica della Dogana della Mena delle Pecore di Puglia, oggi importante edificio istituzionale e sede di mostre ed eventi culturali.",
    coords: [41.4615, 15.5448],
    sections: {
      funzione:
        "Palazzo Dogana è oggi sede di uffici istituzionali e ospita regolarmente mostre, convegni e iniziative culturali aperte al pubblico.",
      rilevanza:
        "L’edificio nasce come sede della Regia Dogana della Mena delle Pecore di Puglia, istituzione fondamentale per la storia economica del Tavoliere a partire dall’età aragonese. Visitarlo significa entrare in uno dei luoghi simbolo della storia amministrativa di Foggia.",
    },
    info: { address: "Piazza XX Settembre, Foggia" },
  },
  {
    id: "piazza-cavour",
    name: "Piazza Cavour e Fontana del Sele",
    category: "moderno",
    shortDescription:
      "Una delle piazze più scenografiche di Foggia, dominata dalla monumentale fontana che celebra l’arrivo dell’acquedotto pugliese.",
    coords: [41.4602, 15.5468],
    sections: {
      funzione:
        "Piazza Cavour è uno snodo importante del centro città, circondata da spazi verdi e palazzi di pregio, ed è frequentata da famiglie, studenti e visitatori.",
      rilevanza:
        "La fontana monumentale al centro della piazza è dedicata all’arrivo a Foggia delle acque dell’Acquedotto Pugliese, evento di grande rilevanza per la città e per tutta la Capitanata.",
    },
  },
];

export const getPlaceById = (id: string) => places.find((p) => p.id === id);

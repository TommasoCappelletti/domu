const communications = [
  {
    title: "Avviso di manutenzione ascensore",
    description:
      "Si informa che l'ascensore sarà fuori servizio per manutenzione programmata il giorno 15 settembre 2022 dalle ore 9:00 alle ore 16:00. Si prega di organizzarsi di conseguenza e ci scusiamo per il disagio.",
    date: "13-09-2022",
    id: "38-8-2026",
  },
  {
    title: "Convocazione assemblea straordinaria",
    description:
      "L'assemblea straordinaria del condominio si terrà il giorno 15 novembre 2021 alle ore 18:30 presso la sala riunioni. Si discuterà di lavori straordinari e bilancio. La presenza di tutti è importante.",
    date: "11-11-2021",
    id: "28-5-2025",
  },
  {
    title: "Lavori di tinteggiatura facciata",
    description:
      "A partire dal 1° febbraio 2024 avranno inizio i lavori di tinteggiatura della facciata del palazzo. Si prega di rimuovere eventuali oggetti dai balconi e di chiudere bene le finestre per evitare disagi.",
    date: "29-01-2024",
    id: "46-8-2025",
  },
  {
    title: "Chiusura acqua per manutenzione",
    description:
      "Si avvisa che il giorno 6 maggio 2021 dalle ore 8:00 alle 14:00 verrà interrotta l'erogazione dell'acqua per lavori di manutenzione straordinaria alla rete idrica condominiale. Ci scusiamo per il disagio.",
    date: "04-05-2021",
    id: "43-10-2026",
  },
  {
    title: "Raccolta rifiuti: nuove disposizioni",
    description:
      "Dal 15 maggio 2025 entreranno in vigore nuove modalità per la raccolta differenziata. Si prega di consultare l'avviso in bacheca per i dettagli e di rispettare le nuove regole per evitare sanzioni.",
    date: "13-05-2025",
    id: "27-9-2025",
  },
  {
    title: "Guasto illuminazione cortile",
    description:
      "Si informa che l'illuminazione del cortile è attualmente fuori servizio a causa di un guasto. L'intervento di riparazione è stato programmato per il giorno 8 gennaio 2020. Ci scusiamo per il disagio.",
    date: "07-01-2020",
    id: "79-10-2026",
  },
  {
    title: "Sostituzione portone d’ingresso",
    description:
      "Il portone principale verrà sostituito il 25 luglio 2025. Durante i lavori, l'accesso al condominio avverrà dall’ingresso secondario. Si prega di prestare attenzione e seguire le indicazioni esposte.",
    date: "23-07-2025",
    id: "80-2-2026",
  },
  {
    title: "Verifica impianto antincendio",
    description:
      "Si comunica che il giorno 3 novembre 2021 verrà effettuata una verifica del sistema antincendio del condominio. Durante i controlli potrebbero verificarsi brevi interruzioni. Grazie per la collaborazione.",
    date: "01-11-2021",
    id: "45-3-2025",
  },
];

export async function getCommunications() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(communications);
    }, 2000);
  });
}

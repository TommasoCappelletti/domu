import { createSlice } from "@reduxjs/toolkit";
import { getDate } from "../../helpers/Date";

const initialState = [
  {
    id: crypto.randomUUID(),
    date: getDate(2025, 11, 22),
    title: "Assemblea Condominiale",
    description:
      "Si comunica che l'assemblea condominiale si terrà il giorno 25 marzo alle ore 18:00 nella sala riunioni. Si prega di partecipare.",
    readed: false,
  },
  {
    id: crypto.randomUUID(),
    date: getDate(2025, 10, 15),
    title: "Lavori di Manutenzione",
    description:
      "Dal 27 al 30 marzo verranno effettuati lavori di manutenzione all'impianto idrico. Potrebbero verificarsi interruzioni dell'acqua.",
    readed: false,
  },
  {
    id: crypto.randomUUID(),
    date: getDate(2025, 8, 9),
    title: "Parcheggi Riservati",
    description:
      "Si ricorda ai condomini di rispettare i posti auto assegnati. I veicoli parcheggiati in aree non autorizzate saranno rimossi.",
    readed: false,
  },
  {
    id: crypto.randomUUID(),
    date: getDate(2025, 3, 19),
    title: "Raccolta Differenziata",
    description:
      "Si prega di rispettare il calendario della raccolta differenziata e di non lasciare rifiuti nei corridoi o nelle aree comuni.",
    readed: false,
  },
  {
    id: crypto.randomUUID(),
    date: getDate(2024, 1, 7),
    title: "Festa in Condominio",
    description:
      "Sabato 6 aprile organizziamo una festa in cortile! Porta qualcosa da mangiare o da bere e unisciti a noi per una serata conviviale.",
    readed: false,
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    insertPost(state, action) {
      state.unshift(action.payload);
    },
    deletePost(state, action) {
      const post = state.findIndex((post) => post.id === action.payload);
      state.splice(post, 1);
    },
    toggleReadPost(state, action) {
      const post = state.find((post) => post.id === action.payload);
      if (post) post.readed = !post.readed;
    },
  },
});

export const { insertPost, deletePost, toggleReadPost } = postSlice.actions;

export default postSlice.reducer;

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

UTLITA':

- Tailwind

  1. seguire procedura sulla pagina (meglio installare versione 3)
  2. Copiare configurazione da questo progetto sia per tailwind.config.js sia per vite.config.js
  3. Nel file index.html inserire:
  <link href="./src/output.css" rel="stylesheet" />

- Prettier for Tailwind

  1. npm install -D prettier prettier-plugin-tailwindcss
  2. creare un file "prettier.config.cjs" ed inserire:
     module.exports = {
     plugins: ["prettier-plugin-tailwindcss"],
     };

- Font awesome

  1. npm install --save @fortawesome/fontawesome-free
  2. npm i --save @fortawesome/free-solid-svg-icons
  3. Inserire nel tag head:
  <link
      rel="stylesheet"
      href="node_modules/@fortawesome/fontawesome-free/css/all.css"
  />

- ESlint -> copiare configurazione da questo progetto (eslint.config.js)

- React Redux Toolkit -> npm i @reduxjs/toolkit react-redux

- React router -> npm i react-router-dom@latest

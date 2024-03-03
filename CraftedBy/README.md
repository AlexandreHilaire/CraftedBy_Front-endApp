# CraftedBy

This template should help get you started developing with Vue 3 in Vite.

## Installation guide (fr)

Pour l'initialisation de ce projet il faut suivre plusieurs étapes décrites si dessous

### Initialisation d'un projet VueJs

Bien sur il faut commencer par initialiser un projet VueJs via la commande `npm create vue@latest` et répondre aux questions posées.
Voici les choix :

- &#9746; Typescript
- &#9746; JSX
- [x] VueRouteur
- [x] Pinia
- &#9746; Vitest
- &#9746; test end to end
- [x] Eslint
- [x] Prettier

### Installer TailwindCss

#### Installation

Avant d'installer DaisyUi il a fallut installer tailwindCss

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Puis créer le fichier de configuration

```bash
npx tailwindcss init -p
```

Pour le faire focntionner j'ai du réajuster les règes de purges

```javascript
content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
```

#### Utilisation

Pour l'inclure dans le projet il faut l'inclure dans le fichier css principal de l'appli

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### installation de DaisyUi

Pour installé DaisyUi il faut suivre la doc officielle : [DaisyUi](https://daisyui.com/docs/install/)

```bash
npm i -D daisyui@latest
```

Dans le tailwind.config.js il faut modifier les plugins

```javascript
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```

### Installation d'Axios

Pour effectuer des requêtes API le projet utilise Axios

```bash
npm install axios
```

Puis il faut l'importer dans le projet, j'ai fais le choix de l'importer dans le main.js

```bash
import axios from 'axios';
```

### Installation de PhosphorIcons

Pour installer PhosphorIcons

```bash
npm install @phosphor-icons/vue
```

#### Utilisation

Pour l'utiliser il faut l'importer das les composants

```javascript
import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";
```

Puis les utiliser dans les templates

```html
<PhHeart :size="32" color="hotpink" weight="fill"/>
```

### L'auto import

Pour installer l'auto importing d’icônes il faut modifier le vite.config

```javascript
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver(),
      ],
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        phosphor: PhosphorIcons,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

## Installation guide (fr)

Pour l'initialisation de ce projet il faut suivre plusieurs étapes décrites si dessous

### Initialisation d'un projet VueJs

Bien sur il faut commencer par initialiser un projet VueJs via la commande `npm create vue@latest` et répondre aux questions posées.
Voici les choix :

- &#9746; Typescript
- &#9746; JSX
- [x] VueRouteur
- [x] Pinia
- &#9746; Vitest
- &#9746; test end to end
- [x] Eslint
- [x] Prettier

### Installer TailwindCss

#### Installation

Avant d'installer DaisyUi il a fallut installer tailwindCss

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Puis créer le fichier de configuration

```bash
npx tailwindcss init -p
```

Pour le faire focntionner j'ai du réajuster les règes de purges

```javascript
content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
```

#### Utilisation

Pour l'inclure dans le projet il faut l'inclure dans le fichier css principal de l'appli

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### installation de DaisyUi

Pour installé DaisyUi il faut suivre la doc officielle : [DaisyUi](https://daisyui.com/docs/install/)

```bash
npm i -D daisyui@latest
```

Dans le tailwind.config.js il faut modifier les plugins

```javascript
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

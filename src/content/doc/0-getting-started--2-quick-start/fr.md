<script>
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🚀" /> Démarrer avec Odyc.js

Envie de créer un jeu rapidement ? Voici **trois façons de commencer**, selon vos préférences :

---

## <Emoji src="🧪" /> Utiliser l’éditeur en ligne

Le moyen le plus simple de commencer est d’utiliser [l’éditeur en ligne](/fr/playground).  
Pas besoin d’installer quoi que ce soit : ouvrez le lien et commencez à coder votre jeu directement dans le navigateur.

---

## <Emoji src="📦" /> Utiliser un CDN

Si vous préférez travailler localement **sans configuration complexe**, vous pouvez importer Odyc depuis un CDN.

1. Créez un fichier `index.html`
2. Copiez-collez ce code :

```html
<!doctype html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://www.unpkg.com/odyc@latest/dist/index.global.js"></script>
	</head>
	<body>
		<script>
			const game = odyc.createGame({
				title: 'Mon super jeu'
			})
		</script>
	</body>
</html>
```

3. Ouvrez le fichier dans un navigateur.

---

## <Emoji src="🔧" /> Utiliser un bundler (Vite, Webpack…)

Pour les projets plus avancés, vous pouvez intégrer Odyc.js via npm :

```bash
npm install odyc
```

Ensuite, dans votre fichier JavaScript ou TypeScript :

```js
import { createGame } from 'odyc'

const game = createGame({
	title: 'Mon Super Jeu'
})
```

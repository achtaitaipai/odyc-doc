<script>
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="✨" /> Bienvenue

Odyc.js est une petite librairie JavaScript conçue pour créer des jeux narratifs en associant des pixels, des sons, du texte et un peu de logique.  
Tout se construit **par le code**, mais sans complexité inutile : votre jeu peut tenir dans un seul fichier.

---

## <Emoji src="🎮" /> Un jeu, une fonction

Créer un jeu avec Odyc.js, c’est simplement appeler `createGame()`.  
Vous fournissez vos sprites, vos dialogues, vos sons, vos interactions, puis le moteur s’occupe du reste.

```js
createGame({
	player: {
		sprite: 7,
		position: [2, 5]
	},
	map: `
		########
		#......#
		#..X...#
		#......#
		########
	`,
	templates: {
		X: {
			sprite: 4,
			dialog: 'Bonjour, aventurier·ère !'
		}
	}
})
```

---

## <Emoji src="🧭" /> Par où commencer ?

La documentation est organisée en **quatre grandes sections** :

### 🧱 Construction du monde

Définissez le joueur, la carte, les sprites, les sons et les dialogues.

### ⚙️ Interaction & logique

Rendez le monde interactif avec les événements et les actions.

### 🎨 Configuration

Personnalisez l’apparence, les filtres, les touches, les couleurs et l’écran.

### 🔧 Helpers

Fonctions pour vous simplifier la vie lors du développement avec Odyc.

---

## <Emoji src="📫" /> Une question ? Une idée ?

Odyc.js est un projet libre et ouvert.
Vous pouvez contribuer à la documentation, proposer des idées ou poser des questions sur [GitHub](https://github.com/achtaitaipai/odyc) ou par mail à [slt@charlescailleteau.com](mailto:slt@charlescailleteau.com).

---

💫 **Amusez-vous bien.**

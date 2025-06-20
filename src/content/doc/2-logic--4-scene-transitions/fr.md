<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🚪" /> Passer d'une scène à l'autre

Pour créer plusieurs scènes dans votre jeu, appelez simplement `createGame()` plusieurs fois. Chaque appel remplace complètement la scène précédente.

---

## <Emoji src="🎬" /> Principe

```js
function openMenu() {
	createGame({
		// Configuration du menu
		templates: [
			{
				sprite: '1',
				onCollide() {
					openGame() // Aller au jeu
				}
			}
		]
	})
}

function openGame() {
	createGame({
		// Configuration du jeu
		templates: [
			{
				sprite: '2',
				onCollide() {
					openMenu() // Retour au menu
				}
			}
		]
	})
}

openMenu() // Démarrer
```

---

## <Emoji src="💾" /> Conserver des données

Les variables déclarées en dehors de `createGame()` sont conservées entre les scènes :

```js
let score = 0
let level = 1

function nextLevel() {
	level++
	createGame({
		onStart() {
			showMessage(`Niveau ${level} - Score: ${score}`)
		}
		//...
	})
}
```

<Aside>

Chaque `createGame()` recrée entièrement le jeu. Seules les variables globales persistent.

</Aside>

---

## <Emoji src="🚫" /> Effacer l'écran

La méthode `game.clear()` permet de stopper le jeu et remplacer l'affichage par une couleur unie :

```js
const game = createGame({
	templates: [
		{
			sprite: '1',
			async onCollide() {
				await game.openMessage('...')
				game.clear('0') // Efface avec une couleur spécifique

				// Puis créer une nouvelle scène
				createGame({
					//...
				})
			}
		}
	]
})
```

**Paramètre :**

- `color` (string|number, optionnel) : Couleur d'effacement. Si non spécifiée, utilise la couleur de fond du jeu.

<Aside>

Généralement pas nécessaire, mais utile pour éviter un flash entre une scène avec un message et une nouvelle scène.

</Aside>


<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="⚙️" /> Configuration par défaut

Lorsque vous créez un jeu avec `createGame()`, une configuration par défaut est appliquée. Vous pouvez ensuite surcharger n’importe quelle propriété pour personnaliser votre jeu.

---

## <Emoji src="📋" /> Valeurs par défaut

Voici la configuration utilisée si vous ne précisez rien :

```js
createGame({
	player: {
		sprite: 0
	},
	templates: {},
	map: `
		........
		........
		........
		........
		........
		........
		........
		........
	`,
	colors: [
		'#212529',
		'#f8f9fa',
		'#ced4da',
		'#228be6',
		'#fa5252',
		'#fcc419',
		'#ff922b',
		'#40c057',
		'#f06595',
		'#a52f01'
	],
	messageBackground: 0,
	messageColor: 1,
	dialogBackground: 0,
	dialogColor: 1,
	dialogBorder: 1,
	dialogSpeed: 'NORMAL',
	screenWidth: 8,
	screenHeight: 8,
	cellWidth: 8,
	cellHeight: 8,
	background: 1,
	volume: 0.5,
	controls: {
		LEFT: ['ArrowLeft', 'KeyA'],
		RIGHT: ['ArrowRight', 'KeyD'],
		UP: ['ArrowUp', 'KeyW'],
		DOWN: ['ArrowDown', 'KeyS'],
		ACTION: ['Enter', 'Space']
	}
})
```

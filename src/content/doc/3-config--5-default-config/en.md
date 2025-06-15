<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="⚙️" /> Default Configuration

When you create a game using `createGame()`, a set of default options is automatically applied.  
You can override any of these values to customize your game.

---

## <Emoji src="📋" /> Default Values

Here’s the configuration used if no custom options are provided:

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
	dialogIntervalMs: 30,
	screenWidth: 8,
	screenHeight: 8,
	cellWidth: 8,
	cellHeight: 8,
	background: 1,
	volume: 0.5,
	controls: {
		LEFT: 'ArrowLeft',
		RIGHT: 'ArrowRight',
		UP: 'ArrowUp',
		DOWN: 'ArrowDown',
		ACTION: ['Enter', 'Space']
	}
})
```

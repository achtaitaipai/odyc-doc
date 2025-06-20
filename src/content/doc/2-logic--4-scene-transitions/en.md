<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🚪" /> Scene Transitions

To create multiple scenes in your game, simply call `createGame()` multiple times. Each call completely replaces the previous scene.

---

## <Emoji src="🎬" /> Basic Principle

```js
function openMenu() {
	createGame({
		// Menu configuration
		templates: [
			{
				sprite: '1',
				onCollide() {
					openGame() // Go to game
				}
			}
		]
	})
}

function openGame() {
	createGame({
		// Game configuration
		templates: [
			{
				sprite: '2',
				onCollide() {
					openMenu() // Back to menu
				}
			}
		]
	})
}

openMenu() // Start
```

---

## <Emoji src="💾" /> Preserving Data

Variables declared outside `createGame()` are preserved between scenes:

```js
let score = 0
let level = 1

function nextLevel() {
	level++
	createGame({
		onStart() {
			showMessage(`Level ${level} - Score: ${score}`)
		}
		//...
	})
}
```

<Aside>

Each `createGame()` completely recreates the game. Only global variables persist.

</Aside>

---

## <Emoji src="🚫" /> Clearing the Screen

The `game.clear()` method stops the game and replaces the display with a solid color:

```js
const game = createGame({
	templates: [
		{
			sprite: '1',
			async onCollide() {
				await game.openMessage('...')
				game.clear('0') // Clear with specific color

				// Then create new scene
				createGame({
					//...
				})
			}
		}
	]
})
```

**Parameter:**

- `color` (string|number, optional): Color to clear with. If not specified, uses the game's background color.

<Aside>

Usually not necessary, but useful to avoid flashing between a scene with a message and a new scene.

</Aside>


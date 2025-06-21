<script>
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="✨" /> Welcome

Odyc.js is a tiny JavaScript library designed to create narrative games by combining pixels, sounds, text, and a bit of logic.  
Everything is built **through code**, but without unnecessary complexity: your entire game can fit in a single file.

---

## <Emoji src="🎮" /> One Function to Make a Game

Creating a game with Odyc.js is as simple as calling `createGame()`.  
You provide your sprites, dialogs, sounds, and interactions — and the engine takes care of the rest.

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
			dialog: 'Hello, adventurer!'
		}
	}
})
```

---

## <Emoji src="🧭" /> Where to Start?

The documentation is organized into **four main sections**:

### 🧱 World Building

Define the player, the map, sprites, sounds, and dialogs.

### ⚙️ Interaction & Logic

Make your world interactive using events and game actions.

### 🎨 Configuration

Customize the appearance, filters, controls, colors, and screen.

### 🔧 Helpers

Functions to make your life easier when developing with Odyc.

---

## <Emoji src="📫" /> Questions or Ideas?

Odyc.js is an open and free project.
You’re welcome to contribute to the documentation, suggest ideas, or ask questions on [GitHub](https://github.com/achtaitaipai/odyc) or via email at [slt@charlescailleteau.com](mailto:slt@charlescailleteau.com).

---

💫 **Have fun!**

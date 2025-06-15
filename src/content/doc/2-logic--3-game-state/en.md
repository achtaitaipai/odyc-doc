<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import PaintDemo from '../../../lib/ui/Doc/PaintDemo.svelte'
</script>

# <Emoji src="⚡" /> The Game State

To update the grid, add or remove elements, you can use the `game` object, which provides a set of dedicated methods.

---

## <Emoji src="🎯" /> `getCell`

This method lets you access an element at a specific position on the grid and modify its properties:

```js
const game = createGame()
const element = game.getCell(9, 4)
element.visible = false
```

<Aside>

The available properties are the same as those listed for [event targets](/doc/interaction-and-logic/events#available-properties).

</Aside>

---

## <Emoji src="⚙️" /> `setCell`

This method modifies an element directly at a specific position.
It takes three arguments: `x`, `y`, and an object with the properties to update.

```js
game.setCell(3, 4, {
	visible: false,
	dialog: 'I am invisible'
})
```

---

## <Emoji src="🪏" /> `setAll`

`setAll` allows you to update **all elements** that share the same symbol:

```js
game.setAll('#', {
	visible: false
})
```

---

## <Emoji src="➕" /> `addToCell`

Adds a new element to a given cell.
Parameters: position `x`, position `y`, and the symbol of the element to add.

```js
game.addToCell(3, 2, '#')
```

<Aside variant="Warning">
Only one element can exist per cell. If the cell is already occupied, the existing element will be removed.
</Aside>

---

## <Emoji src="🐒" /> `player`

The `game.player` object gives you access to the **player** and lets you change their `position` and `sprite`:

```js
game.player.position = [5, 6]
game.player.sprite = `
  ..1..
  .111.
  11111
  .1.1.
  .1.1.
`
```

---

## <Emoji src="⏰" /> Turn

The `game.turn` property lets you track the **number of turns** since the game started.
A **turn** corresponds to **a player movement attempt**, whether the move is successful or not.

```js
const game = createGame({
	onTurn() {
		if (game.turn % 10 === 0) {
			game.openMessage(`10 turns have passed!`)
		}
	}
})
```

---

## <Emoji src="⚖️" /> `width` and `height`

To get the dimensions of the world, use the `game.width` and `game.height` properties.
These are read-only values.

```js
alert(`width: ${game.width}, height: ${game.height}`)
```

---

## <Emoji src="🌍" /> `loadMap`

To load a new map, use `game.loadMap()`.
It takes two arguments:

1. A new `map` string (multiline format),
2. An optional position to reset the player.

```js
game.loadMap(
	`
  ########
  #......#
  #......#
  #......#
  #......#
  #......#
  #......#
  ########
  `,
	[3, 5]
)
```

---

## <Emoji src="🎛️" /> `updateFilter`

You can update the current filter settings using the `updateFilter` method.

It accepts an object containing only the **settings to update** (all other settings remain unchanged).

```js
const game = createGame({
	filter: {
		name: 'fractal',
		settings: {
			sideCount: 12,
			scale: 0.9,
			rotation: 0
		}
	}
})

game.updateFilter({
	scale: 0.3
})
```

<Aside variant="Warning">

`updateFilter` cannot be used to change the **filter name**, only its **settings**.

</Aside>

---

## <Emoji src="🧠" /> Rendering Behavior

Odyc automatically re-renders the screen **every time the game state changes**.

If you update a property like `sprite`, `position`, `dialog`, `visible`..., the game will reflect the change immediately:

```js
game.player.sprite = newSprite
game.setCell(3, 4, { visible: false })
```

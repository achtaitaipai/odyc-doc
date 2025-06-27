<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import PaintDemo from '../../../lib/ui/Doc/PaintDemo.svelte'
</script>

# <Emoji src="⚡" /> The Game State

To modify the grid or get information about the game, you can use the `game` object, which provides a set of dedicated methods.

---

## <Emoji src="🎯" /> Read/modify a cell at a given position

### `getCellAt`

`getCellAt` allows you to get a cell at a given position, then modify its properties:

```js
const game = createGame()
const cell = game.getCellAt(9, 4)
cell.visible = false
```

<Aside>

The properties are the same as those for [event targets](/doc/interaction-and-logic/events#available-properties).

</Aside>

### `clearCellAt`

To remove a cell.

```js
game.clearCellAt(3, 4)
```

### `updateCellAt`

This method allows you to modify multiple properties of an element at a given position.
It takes three parameters: `x`, `y`, and an object containing the properties to modify.

```js
game.updateCellAt(3, 4, {
	visible: false,
	dialog: 'I am invisible'
})
```

### `setCellAt`

`setCellAt` allows you to apply a template to a cell, if the cell already has parameters they will be overwritten.

```js
game.setCellAt(3, 2, '#')
```

---

## <Emoji src="🪏" /> Read/modify multiple cells

It is also possible to read or apply modifications to multiple cells at once.

### Query

To do this you will need to use a query that will describe which cells you are addressing.

| name         | type                   | description                         |
| ------------ | ---------------------- | ----------------------------------- |
| `symbol`     | `string` or `string[]` | the template, or a list of template |
| `x`          | `number`               | The column number                   |
| `y`          | `number`               | The row number                      |
| `isOnScreen` | `boolean`              | `true` if the object is on screen   |
| `visible`    | `boolean`              |
| `sprite`     | `number` or `string`   |
| `dialog`     | `string` or `string[]` |
| `end`        | `string` or `string[]` |

### `getCells`

To get multiple `cells`, you need to use the `getCells(query)` method

```js
const walls = game.getCells({ solid: true })
```

### `clearCells`

You can remove multiple cells at once with `clearCells`.

```js
game.clearCells({ visible: false, x: 4 })
```

### `updateCells`

The `updateCells` method allows you to modify multiple cells at once. It takes a `query` parameter followed by the parameters to modify.

```js
game.updateCells({ symbol: ['x', '#'], visible: true }, { sprite: 3, solid: true })
```

### `setCells`

`setCells` allows you to apply a `template` to multiple cells.

```js
game.setCells({ isOnScreen: true }, '#')
```

---

## <Emoji src="🐒" /> `player`

The `game.player` object gives you access to the **player**, and lets you change their `position`, `sprite`, and `visible` properties:

```js
game.player.position = [5, 6]
game.player.sprite = `
  ..1..
  .111.
  11111
  .1.1.
  .1.1.
`
game.player.visible = false
```

The `player` object also exposes the `direction` value.
This is a read-only property that reflects the last direction the player attempted to move in.
It updates every time the player presses a movement key, even if the move fails (e.g. because of a wall).

```js
const dir = game.player.direction
// Example: [0, -1] for a move upward
```

---

## <Emoji src="⏰" /> `turn`

`game.turn` allows you to know the number of turns elapsed since the beginning of the game. A turn corresponds to a movement attempt.

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
The method takes two parameters:

1. A new `map` as a multiline string,
2. An optional position to relocate the player.

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

You can update the current filter settings with the `updateFilter` method.

It takes an object containing **the settings to modify** (the others will remain unchanged).

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

`updateFilter` does not allow changing the **name** of the filter, only its **settings**.

</Aside>

---

## <Emoji src="🚫" /> `clear`

The `clear()` method allows you to stop the game and replace the display with a solid color:

```js
game.clear() // Clear with background color
// or
game.clear('0') // Clear with specific color
```

**Parameter:**

- `color` (string|number, optional): Clear color. If not specified, uses the game's background color.

<Aside>

Usually not necessary, but can be useful in some cases like between a scene with a message open and another scene.

</Aside>

---

## <Emoji src="🧠" /> Rendering Behavior

Odyc automatically redraws the screen **every time the game state changes**.

If you modify a property like `sprite`, `position`, `dialog`, `visible`..., the game is updated immediately:

```js
game.player.sprite = newSprite
game.setCellAt(3, 4, { visible: false })
```

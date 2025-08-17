<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🪤" /> Events

To add interactivity, Odyc.js provides a simple event system.  
It lets you trigger actions or modify the game state.

---

## <Emoji src="⛳" /> Template Events

### <Emoji src="🔎" /> Available event types

There are nine types of events:

- **`onCollideStart`** — called when the player **collides** with the element, occurs before dialog, sound and end
- **`onCollide`** — called when the player **collides** with the element
- **`onEnterStart`** — called when the player **steps onto a tile** containing the element, occurs before dialog, sound and end
- **`onEnter`** — called when the player **steps onto a tile** containing the element
- **`onLeave`** — called when the player **leaves a tile** containing the element
- **`onScreenEnter`** — called when the element **enters the visible screen**
- **`onScreenLeave`** — called when the element **leaves the screen**
- **`onTurn`** — called at the end of each turn, after the player attempted to move
- **`onMessage`** - called via the `sendMessageToCells` method

```js
createGame({
	templates: {
		x: {
			onCollideStart() {
				alert('collide start')
			},
			onCollide() {
				alert(1)
			},
			onEnterStart() {
				alert('enter start')
			},
			onEnter() {
				alert(2)
			},
			onLeave() {
				alert(3)
			},
			onTurn() {
				alert(4)
			},
			onScreenEnter() {
				alert('hi')
			},
			onScreenLeave() {
				alert('bye')
			},
			onMessage() {
				alert('5 / 5')
			}
		}
	}
})
```

---

### <Emoji src="🎯" /> Target of the event

When an event is triggered, the affected object is passed as a parameter.
You can use it to **modify or remove the element dynamically**.

```js
createGame({
	templates: {
		x: {
			onCollide(target) {
				target.remove()
			}
		}
	}
})
```

---

### <Emoji src="📋" /> Available properties

| Property / Method | Type                   | Description                                         | Read-only |
| ----------------- | ---------------------- | --------------------------------------------------- | --------- |
| `solid`           | `boolean`              | Whether the object is passable                      | No        |
| `visible`         | `boolean`              | Whether the object is visible                       | No        |
| `sprite`          | `number` \| `string`   | Changes the object’s appearance                     | No        |
| `sound`           | `string`\| `object`    | Changes the sound played on interaction             | No        |
| `dialog`          | `string` \| `string[]` | Modifies the dialog text                            | No        |
| `end`             | `string` \| `string[]` | Triggers a custom game ending                       | No        |
| `symbol`          | `string`               | The character representing the object in the map    | Yes       |
| `position`        | `[number, number]`     | `[x, y]` position of the object on the grid         | Yes       |
| `isOnScreen`      | `boolean`              | `true` if the object is currently visible on screen | Yes       |
| `remove`          | `() => void`           | Removes the element from the game                   | —         |
| `moveTo`          | `(x, y) => void`       | Moves the element to the specified position         | —         |

### Example: change a property

Let’s create a character who says "Hello" the first time, then "Hello again" afterwards:

```js
createGame({
	templates: {
		x: {
			dialog: 'Hello',
			onCollide(target) {
				target.dialog = 'Hello again'
			}
		}
	}
})
```

### Remove an element

To remove an element's properties when touched, use the `remove()` method:

```js
createGame({
	templates: {
		x: {
			onCollide(target) {
				target.remove()
			}
		}
	}
})
```

### Move an element

To move an element to a new position, use `moveTo(x, y)`:

```js
createGame({
	templates: {
		x: {
			onCollide(target) {
				target.moveTo(3, 2)
			}
		}
	}
})
```

<Aside variant="Warning">

If the new position already has properties, they will be overwritten.

</Aside>

### onMessage

`onMessage` differs slightly from other events in that you trigger it yourself via `game.sendMessageToCells`. The `onMessage` method is called with two arguments: the event target and the message:

```js
const game = createGame({
	templates: {
		x: {
			sprite: 1,
			onMessage(target, message) {
				if (message === 'turnOff') target.sprite = 0
				else if (message === 'turnOn') target.sprite = 1
			}
		}
	}
})

game.sendMessageToCells({ symbols: 'x' }, 'turnOff')
```

---

## Player Events

### <Emoji src="🎮"/> `player.onInput`

The `onInput` event is triggered in the following cases:

- when a **direction key is pressed** (or a swipe on a touch screen),
- or when an **action key is used** (`Enter`, `Space`, or a tap on mobile).

```js
createGame({
	player: {
		onInput(input) {
			console.log(input)
		}
	}
})
```

The function receives an `input` argument, which can be one of: `UP`, `RIGHT`, `DOWN`, `LEFT`, or `ACTION`.

---

### <Emoji src="⏰"/> `player.onTurn`

The `onTurn` event is called at the end of each turn, after the player attempted to move.

```js
createGame({
	player: {
		sprite: '0',
		onTurn(player) {
			player.sprite = Math.floor(Math.random() * 9)
		}
	}
})
```

The function receives a `player` argument similar to [`game.player`](/en/doc/interaction-and-logic/game-state#player)

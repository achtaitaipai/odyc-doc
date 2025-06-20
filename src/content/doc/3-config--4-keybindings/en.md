<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import KeyDemo from '../../../lib/ui/Doc/KeyDemo.svelte'
</script>

# <Emoji src="🎮" /> Custom Controls

By default, Odyc.js uses the arrow keys or **WASD** keys for movement, and **Space** or **Enter** to interact.

But you can fully redefine the control scheme using the `controls` option.

---

## <Emoji src="🧩" /> Default Setup

Here’s the default control configuration if none is specified:

```js
controls: {
  LEFT: ['ArrowLeft', 'KeyA'],
  RIGHT: ['ArrowRight', 'KeyD'],
  UP: ['ArrowUp', 'KeyW'],
  DOWN: ['ArrowDown', 'KeyS'],
  ACTION: ['Enter', 'Space']
}
```

---

## <Emoji src="⚙️" /> Customizing the Keys

You can override this configuration when calling `createGame()`:

```js
createGame({
	controls: {
		LEFT: 'KeyA',
		RIGHT: 'KeyD',
		UP: 'KeyW',
		DOWN: 'KeyS',
		ACTION: 'ShiftLeft'
	}
})
```

Each key can be:

- a **string** representing a keyboard key (`'z'`, `'ArrowLeft'`, `'Shift'`, etc.)
- or an **array of strings** if you want to allow multiple keys for the same action

---

## <Emoji src="🔑" /> Recognized Keys

Key names follow the standard **[`KeyboardEvent.code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)** values in JavaScript.

> The `KeyboardEvent.code` represents the physical key on the keyboard,
> not the character it generates.

> For example, the code is `"KeyQ"` for the physical **Q** key,
> which produces different characters depending on the keyboard layout.

Press a key to see its code:

<KeyDemo/>

---

## <Emoji src="🎯" /> Available Actions

Here are the keys you can customize:

| Key      | Action performed       |
| -------- | ---------------------- |
| `UP`     | Move the player up     |
| `DOWN`   | Move the player down   |
| `LEFT`   | Move the player left   |
| `RIGHT`  | Move the player right  |
| `ACTION` | Skip dialog or message |

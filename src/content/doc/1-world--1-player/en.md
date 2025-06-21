<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="😎" /> The Player

The `player` is the character you control in the game. It is defined by two properties: **its appearance** and **its starting position**.

---

## <Emoji src="👁️" /> Player Appearance

The player’s appearance is set using the `sprite` property. It can be:

### A number between `0` and `9`

In this case, the player will be shown as a solid-colored rectangle using the corresponding color:

```js
createGame({
	player: {
		sprite: 7
	}
})
```

### A string

This allows you to define a more complex sprite, line by line. Each digit corresponds to a color, and `.` represents a transparent pixel:

```js
createGame({
	player: {
		sprite: `
      ...44...
      ...88...
      ...88...
      .434434.
      4.3443.4
      1.3333.1
      ..3333..
      ..3..3..
    `
	}
})
```

<Aside>

Sprites are explained in more detail in the [dedicated section](/doc/world-building/sprites).

</Aside>

---

## <Emoji src="🚩" /> Starting Position

You can define the player’s initial position on the map using the `position` key.
It should be an array in the form `[x, y]`, where `x` is the column and `y` is the row in the grid.

For example, `[2, 5]` places the character in the 2nd column and 5th row (from the top):

```js
createGame({
	player: {
		sprite: 7,
		position: [3, 4]
	}
})
```

By default, the player appears at the top-left corner of the map, at position `[0, 0]`.

---

## <Emoji src="👻" /> Player Visibility

You can control whether the player is visible using the `visible` property:

```js
createGame({
	player: {
		sprite: 7,
		visible: false
	}
})
```

By default, the player is visible (`visible: true`).

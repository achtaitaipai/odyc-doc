<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🎨" /> Sprite Helpers

Helper functions for creating and manipulating sprites in Odyc.js.

---

## <Emoji src="🔤" /> charToSprite

The `charToSprite()` function converts any character into an 8×8 sprite for Odyc.js.

### <Emoji src="⚡" /> Usage

```js
import { createGame, charToSprite } from 'odyc'

createGame({
	player: {
		// Character 'A' in color '1'
		sprite: charToSprite('A')
	},
	templates: [
		{
			// Character '@' in color '3'
			sprite: charToSprite('@', '3')
		}
	]
})
```

### <Emoji src="📋" /> Parameters

- `char` (string) : Any character to convert into a sprite
- `color` (string, optional) : Palette color to use for the character. Default: `0`

**Returns:** An 8×8 sprite string representation of the character.

---

## <Emoji src="🎨" /> mergeSprites

Combines multiple sprites into a single sprite by overlaying them on top of each other. Later sprites in the arguments will be drawn over earlier ones.

### <Emoji src="⚡" /> Usage

```js
import { mergeSprites } from 'odyc'

const basePlayerSprite = `
		.....
		.....
		33333
		31313
		33333
		3...3
		`
const hatSprite = `
		.000.
		00000
		`
const playerSprite = mergeSprites(basePlayerSprite, hatSprite)
```

<Aside>

**Note:** The `mergeSprites` function creates a new sprite without modifying the original sprites. Non-transparent characters from later sprites will overwrite characters from earlier sprites at the same position. Transparent pixels (`.`) allow lower layers to show through.

</Aside>

### <Emoji src="📋" /> Parameters

- `sprite1` (string) : The first sprite to merge (bottom layer)
- `sprite2` (string) : The second sprite to merge
- `...sprites` (string, optional) : Additional sprites to merge on top

**Returns:** A new sprite string with all input sprites merged together.


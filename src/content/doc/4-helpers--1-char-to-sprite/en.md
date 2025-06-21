<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🔤" /> charToSprite

The `charToSprite()` function converts any character into an 8×8 sprite for Odyc.js.

---

## <Emoji src="⚡" /> Usage

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

---

## <Emoji src="📋" /> Parameters

- `char` (string) : Any character to convert into a sprite
- `color` (string, optional) : Palette color to use for the character. Default: `0`

**Returns:** An 8×8 sprite string representation of the character.

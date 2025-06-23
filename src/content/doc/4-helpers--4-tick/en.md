<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="⏱️" /> tick

The `tick()` function returns a promise that resolves when the next meaningful state change occurs in the game. This is useful for synchronizing code with the game's internal state updates.

---

## <Emoji src="⚡" /> Use Cases

```js
import { createGame, tick } from 'odyc'

const game = createGame({
	// Your game configuration
})

async function loadGame() {
	document.body.style.transition = 'opacity 0.5s'
	document.body.style.opacity = '0'

	await new Promise((resolve) => setTimeout(resolve, 500))

	const game2 = createGame({ filter: { name: 'crt' } })
	await tick()

	document.body.style.opacity = '1'
}
```

<Aside>

**Note:** The tick promise resolves after each game render cycle, when dialogs/messages/prompts open or close, and when the game is cleared. This makes it perfect for creating smooth animations or waiting for UI state changes.

</Aside>

---

## <Emoji src="📋" /> Return Value

**Returns:** A `Promise<void>` that resolves when the next meaningful game state change occurs.

### When tick resolves:
- After each game render cycle
- When dialogs, messages, or prompts open
- When dialogs, messages, or prompts close  
- When the game is cleared
<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="📸" /> makeScreenshot

The `makeScreenshot()` function captures the current game screen and downloads it as an image file.

---

## <Emoji src="⚡" /> Usage

```js
import { createGame, makeScreenshot } from 'odyc'

const game = createGame({
	// Your game configuration
})

// Take screenshot when pressing Cmd/Ctrl + S
document.addEventListener('keydown', (event) => {
	if ((event.metaKey || event.ctrlKey) && event.code === 'KeyS') {
		makeScreenshot('game-screenshot')
	}
})

// Or take a screenshot programmatically
makeScreenshot('my-game-screenshot')
```

---

## <Emoji src="📋" /> Parameters

- `filename` (string) : The filename for the downloaded screenshot file


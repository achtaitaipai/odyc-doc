<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="📸" /> makeScreenshot

The `makeScreenshot()` function captures the current game screen and provides methods to save or access the screenshot data.

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
		const screenshot = makeScreenshot()
		screenshot.save('game-screenshot')
	}
})

// Or take a screenshot programmatically
const screenshot = makeScreenshot()

// Save the screenshot as a file
screenshot.save('my-game-screenshot')

// Or access the data URL directly
console.log(screenshot.dataUrl) // "data:image/png;base64,..."
```

---

## <Emoji src="📋" /> Return Value

The function returns an object with the following properties and methods:

- `save(filename: string)` : Method to save the screenshot as a file with the specified filename
- `dataUrl` (readonly string) : Base64-encoded data URL of the screenshot image


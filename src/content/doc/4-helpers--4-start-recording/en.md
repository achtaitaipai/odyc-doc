<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🎬" /> startRecording

The `startRecording()` function begins recording the game screen and returns a function to stop the recording and save it as a video file.

---

## <Emoji src="⚡" /> Usage

```js
import { createGame, startRecording } from 'odyc'

const game = createGame({
	// Your game configuration
})

// Start recording with keyboard shortcut (Cmd/Ctrl + R)
document.addEventListener('keydown', (event) => {
	if ((event.metaKey || event.ctrlKey) && event.code === 'KeyR') {
		const stopAndSave = startRecording()
		
		// Stop recording after 10 seconds
		setTimeout(() => {
			stopAndSave('gameplay-recording')
		}, 10000)
	}
})

// Or start recording programmatically
const stopAndSave = startRecording()

// Stop and save the recording
stopAndSave('my-game-recording')
```

---

## <Emoji src="📋" /> Return Value

The function returns a `stopAndSave` function:

- `stopAndSave(filename: string): void` : Function to stop the recording and save it as a video file with the specified filename
<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="📸" /> makeScreenshot

La fonction `makeScreenshot()` capture l'écran de jeu actuel et le télécharge comme fichier image.

---

## <Emoji src="⚡" /> Utilisation

```js
import { createGame, makeScreenshot } from 'odyc'

const game = createGame({
	// Configuration de votre jeu
})

// Prendre une capture d'écran en appuyant sur Cmd/Ctrl + S
document.addEventListener('keydown', (event) => {
	if ((event.metaKey || event.ctrlKey) && event.code === 'KeyS') {
		makeScreenshot('capture-jeu')
	}
})

// Ou prendre une capture d'écran par programmation
makeScreenshot('ma-capture-jeu')
```

---

## <Emoji src="📋" /> Paramètres

- `filename` (string) : Le nom de fichier pour la capture d'écran téléchargée


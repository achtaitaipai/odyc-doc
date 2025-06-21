<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="📸" /> makeScreenshot

La fonction `makeScreenshot()` capture l'écran de jeu actuel et fournit des méthodes pour sauvegarder ou accéder aux données de la capture d'écran.

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
		const screenshot = makeScreenshot()
		screenshot.save('capture-jeu')
	}
})

// Ou prendre une capture d'écran par programmation
const screenshot = makeScreenshot()

// Sauvegarder la capture d'écran comme fichier
screenshot.save('ma-capture-jeu')

// Ou accéder directement à l'URL de données
console.log(screenshot.dataUrl) // "data:image/png;base64,..."
```

---

## <Emoji src="📋" /> Valeur de retour

La fonction retourne un objet avec les propriétés et méthodes suivantes :

- `save(filename: string)` : Méthode pour sauvegarder la capture d'écran comme fichier avec le nom spécifié
- `dataUrl` (string en lecture seule) : URL de données encodée en Base64 de l'image de capture d'écran


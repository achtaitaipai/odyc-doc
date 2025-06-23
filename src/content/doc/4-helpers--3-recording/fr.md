<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="📹" /> Enregistrement

Fonctions utilitaires pour capturer des captures d'écran et enregistrer des vidéos de gameplay de vos jeux Odyc.js.

---

## <Emoji src="📸" /> makeScreenshot

La fonction `makeScreenshot()` capture l'écran de jeu actuel et le télécharge comme fichier image.

### <Emoji src="⚡" /> Utilisation

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

### <Emoji src="📋" /> Paramètres

- `filename` (string) : Le nom de fichier pour la capture d'écran téléchargée

---

## <Emoji src="🎬" /> startRecording

La fonction `startRecording()` commence l'enregistrement de l'écran de jeu et retourne une fonction pour arrêter l'enregistrement et le sauvegarder comme fichier vidéo.

### <Emoji src="⚡" /> Utilisation

```js
import { createGame, startRecording } from 'odyc'

const game = createGame({
	// Configuration de votre jeu
})

// Commencer l'enregistrement avec un raccourci clavier (Cmd/Ctrl + R)
document.addEventListener('keydown', (event) => {
	if ((event.metaKey || event.ctrlKey) && event.code === 'KeyR') {
		const stopAndSave = startRecording()
		
		// Arrêter l'enregistrement après 10 secondes
		setTimeout(() => {
			stopAndSave('enregistrement-gameplay')
		}, 10000)
	}
})

// Ou commencer l'enregistrement par programmation
const stopAndSave = startRecording()

// Arrêter et sauvegarder l'enregistrement
stopAndSave('mon-enregistrement-jeu')
```

### <Emoji src="📋" /> Valeur de retour

La fonction retourne une fonction `stopAndSave` :

- `stopAndSave(filename: string): void` : Fonction pour arrêter l'enregistrement et le sauvegarder comme fichier vidéo avec le nom spécifié
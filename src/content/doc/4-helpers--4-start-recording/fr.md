<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🎬" /> startRecording

La fonction `startRecording()` commence l'enregistrement de l'écran de jeu et retourne une fonction pour arrêter l'enregistrement et le sauvegarder comme fichier vidéo.

---

## <Emoji src="⚡" /> Utilisation

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

---

## <Emoji src="📋" /> Valeur de retour

La fonction retourne une fonction `stopAndSave` :

- `stopAndSave(filename: string): void` : Fonction pour arrêter l'enregistrement et le sauvegarder comme fichier vidéo avec le nom spécifié
<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="⏱️" /> tick

La fonction `tick()` retourne une promesse qui se résout lors du prochain changement d'état significatif du jeu. Ceci est utile pour synchroniser le code avec les mises à jour internes de l'état du jeu.

---

## <Emoji src="⚡" /> Cas d'utilisation

```js
import { createGame, tick } from 'odyc'

const game = createGame({
	// Configuration de votre jeu
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

**Note :** La promesse tick se résout après chaque cycle de rendu du jeu, quand les dialogues/messages/prompts s'ouvrent ou se ferment, et quand le jeu est effacé. Cela la rend parfaite pour créer des animations fluides ou attendre les changements d'état de l'interface.

</Aside>

---

## <Emoji src="📋" /> Valeur de retour

**Retour :** Une `Promise<void>` qui se résout lors du prochain changement d'état significatif du jeu.

### Quand tick se résout :

- Après chaque cycle de rendu du jeu
- Quand les dialogues, messages ou prompts s'ouvrent
- Quand les dialogues, messages ou prompts se ferment
- Quand le jeu est effacé

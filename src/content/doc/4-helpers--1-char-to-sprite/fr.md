<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🔤" /> charToSprite

La fonction `charToSprite()` convertit n'importe quel caractère en sprite 8×8 pour Odyc.js.

---

## <Emoji src="⚡" /> Utilisation

```js
import { createGame, charToSprite } from 'odyc'

createGame({
	player: {
		// Caractère 'A' en couleur '1'
		sprite: charToSprite('A')
	},
	templates: [
		{
			// Caractère '@' en couleur '3'
			sprite: charToSprite('@', '3')
		}
	]
})
```

---

## <Emoji src="📋" /> Paramètres

- `char` (string) : N'importe quel caractère à convertir en sprite
- `color` (string, optionnel) : Couleur de la palette à utiliser. Par défaut : `1`

**Retour :** Une représentation de sprite 8×8 sous forme de chaîne de caractères.

<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🎨" /> Utilitaires Sprite

Fonctions utilitaires pour créer et manipuler des sprites dans Odyc.js.

---

## <Emoji src="🔤" /> charToSprite

La fonction `charToSprite()` convertit n'importe quel caractère en sprite 8×8 pour Odyc.js.

### <Emoji src="⚡" /> Utilisation

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

### <Emoji src="📋" /> Paramètres

- `char` (string) : N'importe quel caractère à convertir en sprite
- `color` (string, optionnel) : Couleur de la palette à utiliser. Par défaut : `0`

**Retour :** Une représentation de sprite 8×8 sous forme de chaîne de caractères.

---

## <Emoji src="🎨" /> mergeSprite

Combine plusieurs sprites en un seul sprite en les superposant. Les sprites plus tardifs dans les arguments seront dessinés par-dessus les précédents.

### <Emoji src="⚡" /> Utilisation

```js
import { mergeSprite } from 'odyc'

const basePlayerSprite = `
		.....
		.....
		33333
		31313
		33333
		3...3
		`
const hatSprite = `
		.000.
		00000
		`
const playerSprite = mergeSprite(basePlayerSprite, hatSprite)
```

<Aside>

**Note :** La fonction `mergeSprite` crée un nouveau sprite sans modifier les sprites originaux. Les caractères non-transparents des sprites ultérieurs écraseront les caractères des sprites précédents à la même position. Les pixels transparents (`.`) permettent aux couches inférieures de transparaître.

</Aside>

### <Emoji src="📋" /> Paramètres

- `sprite1` (string) : Le premier sprite à fusionner (couche de base)
- `sprite2` (string) : Le deuxième sprite à fusionner
- `...sprites` (string, optionnel) : Sprites supplémentaires à fusionner par-dessus

**Retour :** Une nouvelle chaîne de sprite avec tous les sprites d'entrée fusionnés ensemble.
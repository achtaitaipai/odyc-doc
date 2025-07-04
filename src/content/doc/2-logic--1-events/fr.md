<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🪤" /> Les Événements

Pour ajouter de l'interactivité, Odyc.js propose un système d’événements.  
Ils permettent de déclencher des actions ou de modifier l’état du jeu.

---

## <Emoji src="⛳" /> Les évènements liés aux `templates`

### <Emoji src="🔎" /> Types d’événements

Il existe six types d’événements :

- **`onCollide`** — appelé quand le joueur **entre en collision** avec l’élément
- **`onEnter`** — appelé quand le joueur **entre sur une case** contenant l’élément
- **`onLeave`** — appelé quand le joueur **quitte une case** contenant l’élément
- **`onScreenEnter`** — appelé quand l’élément **entre dans l’écran**
- **`onScreenLeave`** — appelé quand l’élément **sort de l’écran**
- **`onTurn`** — appelé à la fin de chaque tour, après que le joueur a tenté de se déplacer
- **`onMessage`** - appelé via la méthode `sendMessageToCells`

```js
createGame({
  templates: {
    x: {
      onCollide() {
        alert(1)
      },
      onEnter() {
        alert(2)
      },
      onLeave() {
        alert(3)
      }
      onTurn(){
        alert(4)
      }
      onScreenEnter() {
        alert('hi')
      }
      onScreenLeave() {
        alert('bye')
      }
      onMessage() {
        alert('message')
      }
    }
  }
})
```

---

### <Emoji src="🎯" /> La cible de l’événement

Lorsqu’un événement est déclenché, l’objet concerné est passé en paramètre de la fonction.
Cela vous permet de **le modifier dynamiquement** ou de **le supprimer**.

```js
createGame({
	templates: {
		x: {
			onCollide(cible) {
				cible.remove()
			}
		}
	}
})
```

---

### <Emoji src="📋" /> Propriétés disponibles

| Propriété / Méthode | Type                   | Description                                         | Lecture seule |
| ------------------- | ---------------------- | --------------------------------------------------- | ------------- |
| `solid`             | `boolean`              | Rend l’objet traversable ou non                     | Non           |
| `visible`           | `boolean`              | Affiche ou masque l’objet                           | Non           |
| `sprite`            | `number` \| `string`   | Change l’apparence de l’objet                       | Non           |
| `sound`             | `string`\| `object`    | Change le son joué lors d’une interaction           | Non           |
| `dialog`            | `string` \| `string[]` | Modifie le texte affiché dans la boîte de dialogue  | Non           |
| `end`               | `string` \| `string[]` | Déclenche une fin de jeu personnalisée              | Non           |
| `symbol`            | `string`               | Le caractère représentant l’objet dans la `map`     | Oui           |
| `position`          | `[number, number]`     | Coordonnées `[x, y]` de l’objet sur la carte        | Oui           |
| `isOnScreen`        | `boolean`              | `true` si l'objet est à l'écran                     | Oui           |
| `remove`            | `() => void`           | Supprime l’élément                                  | —             |
| `moveTo`            | `(x, y) => void`       | Déplace l'élément à la position passée en argument. | —             |

### Exemple : changer une propriété

Imaginons un personnage qui dit "Bonjour" la première fois, puis "Re-bonjour" les fois suivantes :

```js
createGame({
	templates: {
		x: {
			dialog: 'Bonjour',
			onCollide(cible) {
				cible.dialog = 'Re-bonjour'
			}
		}
	}
})
```

### Supprimer une case

Pour supprimer les propriétés d'une case lorsqu’on la touche, utilisez la méthode `remove()` :

```js
createGame({
	templates: {
		x: {
			onCollide(cible) {
				cible.remove()
			}
		}
	}
})
```

### Déplacer une case

Pour déplacer une case à une nouvelle position, utilisez `moveTo(x, y)` :

```js
createGame({
	templates: {
		x: {
			onCollide(cible) {
				cible.moveTo(3, 2)
			}
		}
	}
})
```

<Aside variant="Warning">

Si la nouvelle position a déjà des propriétés celles-ci seront écrasées.

</Aside>

### onMessage

`onMessage` diffère légèrement des autres évènements dans le sens ou c'est vous qui le déclenché via `game.sendMessageToCells`. La méthode `onMessage` est appelée avec deux arguments: la cible de l'évènement et le message:

```js
const game = createGame({
	templates: {
		x: {
			sprite: 1,
			onMessage(cible, message) {
				if (message === 'éteindre') cible.sprite = 0
				else if (message === 'allumer') cible.sprite = 1
			}
		}
	}
})

game.sendMessageToCells({ symbols: 'x' }, 'éteindre')
```

---

## Les évènements liés au `player`

### <Emoji src="🎮"/> `player.onInput`

L'évènement `onInput` est déclenchée dans les cas suivants :

- lorsqu’une **touche directionnelle est pressée** (ou un glissement sur écran tactile),
- ou lorsqu’une **touche d’action est utilisée** (`Enter`, `Espace`, ou un tap sur mobile).

```js
createGame({
	player: {
		onInput(input) {
			console.log(input)
		}
	}
})
```

La fonction reçoit un argument `input` qui peut être égal à `UP`, `RIGHT`, `DOWN`, `LEFT` ou `ACTION`.

### <Emoji src="⏰"/> `player.onTurn`

L'évènement `onTurn` est appelé à la fin de chaque tour, après que le joueur a tenté de se déplacer.

```js
createGame({
	player: {
		sprite: '0',
		onTurn(player) {
			player.sprite = Math.floor(Math.random() * 9)
		}
	}
})
```

La fonction reçoit un argument `player` similaire à [`game.player`](/fr/doc/interaction-and-logic/game-state#player)

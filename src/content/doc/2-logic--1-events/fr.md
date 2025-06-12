<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🪤" /> Les Événements

Pour ajouter de l'interactivité, Odyc.js propose un système d’événements.  
Ils permettent de déclencher des actions ou de modifier l’état du jeu lorsque le joueur interagit avec un élément.

Les événements sont définis dans les `templates`.

---

## <Emoji src="🔎" /> Types d’événements

Il existe six types d’événements :

- **`onCollide`** — appelé quand le joueur **entre en collision** avec l’élément
- **`onEnter`** — appelé quand le joueur **entre sur une case** contenant l’élément
- **`onLeave`** — appelé quand le joueur **quitte une case** contenant l’élément
- **`onScreenEnter`** — appelé quand l’élément **entre dans l’écran**
- **`onScreenLeave`** — appelé quand l’élément **sort de l’écran**
- **`onTurn`** — appelé à la fin de chaque tour, après que le joueur a tenté de se déplacer

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
    }
  }
})
```

---

## <Emoji src="🎯" /> La cible de l’événement

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

| Propriété / Méthode | Type                   | Description                                        | Lecture seule |
| ------------------- | ---------------------- | -------------------------------------------------- | ------------- |
| `solid`             | `boolean`              | Rend l’objet traversable ou non                    | Non           |
| `visible`           | `boolean`              | Affiche ou masque l’objet                          | Non           |
| `sprite`            | `number` \| `string`   | Change l’apparence de l’objet                      | Non           |
| `sound`             | `string`\| `object`    | Change le son joué lors d’une interaction          | Non           |
| `dialog`            | `string` \| `string[]` | Modifie le texte affiché dans la boîte de dialogue | Non           |
| `end`               | `string` \| `string[]` | Déclenche une fin de jeu personnalisée             | Non           |
| `symbol`            | `string`               | Le caractère représentant l’objet dans la `map`    | Oui           |
| `position`          | `[number, number]`     | Coordonnées `[x, y]` de l’objet sur la carte       | Oui           |
| `isOnScreen`        | `boolean`              | `true` si l'objet est à l'écran                    | Oui           |
| `remove`            | `() => void`           | Supprime l’élément                                 | —             |

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

### Supprimer un objet

Pour faire disparaître un objet lorsqu’on le touche, utilisez la méthode `remove()` :

```js
createGame({
	templates: {
		x: {
			dialog: 'Bonjour',
			onCollide(cible) {
				cible.remove()
			}
		}
	}
})
```

<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import PaintDemo from '../../../lib/ui/Doc/PaintDemo.svelte'
</script>

# <Emoji src="⚡" /> L’état du jeu

Pour modifier la grille ou obtenir des informations sur le jeu, vous pouvez utiliser l'objet `game`, qui fournit un ensemble de méthodes dédiées

---

## <Emoji src="🎯" /> Lire/modifier une case à une position donnée

### `getCellAt`

`getCellAt` permet d'obtenir une case à une position donnée, puis de modifier ses propriétés:

```js
const game = createGame()
const cell = game.getCellAt(9, 4)
cell.visible = false
```

<Aside>

Les propriétés sont les mêmes que pour [la cible des évènements](/fr/doc/interaction-and-logic/events#proprietes-disponibles).

</Aside>

### `setCellAt`

`setCellAt` permet d'appliquer un template à une case, si la case a déjà des paramètres ceux-ci seront écrasés.

```js
game.setCellAt(3, 2, '#')
```

### `updateCellAt`

Cette méthode permet de modifier plusieurs propriétés d'un élément à une position donnée.
Elle prend trois paramètres : `x`, `y`, et un objet contenant les propriétés à modifier.

```js
game.updateCellAt(3, 4, {
	visible: false,
	dialog: 'Je suis invisible'
})
```

### `clearCellAt`

Pour supprimer une case.

```js
game.clearCellAt(3, 4)
```

---

## <Emoji src="🪏" /> Lire/modifier plusieurs cases

Il est également possible, de lire ou appliquer des modifications à plusieurs cases à la fois.

### Query

Pour ce faire vous devrez utiliser une query qui décrira à quelles cases vous vous adresser.

| nom          | type                   | description                           |
| ------------ | ---------------------- | ------------------------------------- |
| `symbol`     | `string` ou `string[]` | le template, ou une liste de template |
| `x`          | `number`               | Le numéro de la colonne               |
| `y`          | `number`               | Le numéro de la rangée                |
| `isOnScreen` | `boolean`              | `true` si l'objet est à l'écran       |
| `visible`    | `boolean`              |
| `sprite`     | `number` ou `string`   |
| `dialog`     | `string` ou `string[]` |
| `end`        | `string` ou `string[]` |

### `getCells`

Pour obtenir plusieurs `cases`, il faut utiliser la méthode `getCells(query)`

```js
const walls = game.getCells({ solid: true })
```

### `setCells`

`setCells` vous permet d'appliquer un `template` à plusieurs cases.

```js
game.setCells({ isOnScreen: true }, '#')
```

### `updateCells`

La méthode `updateCells` permet de modifier plusieurs cases en une seule fois. Elle prend en paramètre une `query` suivi des paramètres à modifier.

```js
game.updateCells({ symbol: ['x', '#'], visible: true }, { sprite: 3, solid: true })
```

### `clearCells`

Vous pouvez supprimer plusieurs cases d'un coup avec `clearCells`.

```js
game.clearCells({ visible: false, x: 4 })
```

### `sendMessageToCells`

Cette méthode vous permet de déclencher la méthode `onMessage` sur toutes les cases ciblées. Elle prend en paramètre une `query` suivi du message qui est optionnel est peut-être de n'importe quel type.

```js
game.sendMessageToCells({ symbols: 'x' }, 'éteindre')
```

---

## <Emoji src="🐒" /> `player`

L’objet `game.player` permet d'accéder au **joueur**, et de modifier sa `position`, sa `sprite` et sa propriété `visible` :

```js
game.player.position = [5, 6]
game.player.sprite = `
  ..1..
  .111.
  11111
  .1.1.
  .1.1.
`
game.player.visible = false
```

L'objet `player` expose également la valeur `direction`. Elle est en lecture seule et reflète la dernière direction tentée par le joueur. Elle est mise à jour à chaque fois que le joueur appuie sur une touche de déplacement, même si le mouvement échoue (par exemple à cause d’un mur).

```js
const dir = game.player.direction
// Exemple : [0, -1] pour un déplacement vers le haut
```

## <Emoji src="⏰"/> `turn`

`game.turn` vous permet de connaître le nombre de tours écoulés depuis le début de la partie. Un tour correspond à une tentative de déplacement.

---

## <Emoji src="⚖️" /> `width` et `height`

Pour obtenir les dimensions du monde, utilisez les propriétés `game.width` et `game.height`.
Ces propriétés sont en lecture seule.

```js
alert(`largeur : ${game.width}, hauteur : ${game.height}`)
```

---

## <Emoji src="🌍" /> `loadMap`

Pour charger une nouvelle carte, utilisez `game.loadMap()`.
La méthode prend deux paramètres :

1. Une nouvelle `map` sous forme de chaîne multilignes,
2. Une position optionnelle pour replacer le joueur.

```js
game.loadMap(
	`
  ########
  #......#
  #......#
  #......#
  #......#
  #......#
  #......#
  ########
  `,
	[3, 5]
)
```

---

## <Emoji src="🎛️" /> `updateFilter`

Vous pouvez mettre à jour les paramètres du filtre en cours avec la méthode `updateFilter`.

Elle prend en argument un objet contenant **les réglages à modifier** (les autres resteront inchangés).

```js
const game = createGame({
	filter: {
		name: 'fractal',
		settings: {
			sideCount: 12,
			scale: 0.9,
			rotation: 0
		}
	}
})

game.updateFilter({
	scale: 0.3
})
```

<Aside variant="Warning">

`updateFilter` ne permet pas de changer le **nom** du filtre, uniquement ses **réglages**.

</Aside>

---

## <Emoji src="🚫" /> `clear`

La méthode `clear()` permet de stopper le jeu et remplacer l'affichage par une couleur unie :

```js
game.clear() // Efface avec la couleur de fond
// ou
game.clear('0') // Efface avec une couleur spécifique
```

**Paramètre :**

- `color` (string|number, optionnel) : Couleur d'effacement. Si non spécifiée, utilise la couleur de fond du jeu.

<Aside>

Généralement pas nécessaire, mais peut être utile dans certains cas comme entre une scène avec un message ouvert et une autre scène.

</Aside>

---

## <Emoji src="🧠" /> Comportement de rendu

Odyc redessine automatiquement l’écran **à chaque fois que l’état du jeu change**.

Si vous modifiez une propriété comme `sprite`, `position`, `dialog`, `visible`…, le jeu est mis à jour immédiatement :

```js
game.player.sprite = newSprite
game.setCellAt(3, 4, { visible: false })
```

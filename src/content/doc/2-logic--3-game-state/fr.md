<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import PaintDemo from '../../../lib/ui/Doc/PaintDemo.svelte'
</script>

# <Emoji src="⚡" /> Modifier l’état du jeu

Pour modifier la grille, ajouter ou supprimer des éléments, vous pouvez utiliser l’objet `game`, qui fournit un ensemble de méthodes dédiées.

---

## <Emoji src="🎯" /> `getCell`

Cette méthode permet d’obtenir un élément à une position donnée dans la grille, puis de modifier ses propriétés :

```js
const game = createGame()
const element = game.getCell(9, 4)
element.visible = false
```

<Aside> 
Les propriétés sont les mêmes que pour [la cible des évènements](fr/doc/interaction-and-logique/evenements#proprietes-disponibles).
</Aside>

---

## <Emoji src="⚙️" /> `setCell`

Cette méthode permet de modifier directement un élément à une position donnée.
Elle prend trois paramètres : `x`, `y`, et un objet contenant les propriétés à modifier.

```js
game.setCell(3, 4, {
	visible: false,
	dialog: 'Je suis invisible'
})
```

---

## <Emoji src="🪏" /> `setAll`

`setAll` permet de modifier **tous les éléments** portant un symbole donné :

```js
game.setAll('#', {
	visible: false
})
```

---

## <Emoji src="➕" /> `addToCell`

Ajoute un nouvel élément sur une case donnée.
Paramètres : position `x`, position `y`, et symbole de l’élément à ajouter.

```js
game.addToCell(3, 2, '#')
```

<Aside variant="Warning">
Il ne peut y avoir qu’un seul élément par case. Si la case est déjà occupée, elle sera écrasée.
</Aside>

---

## <Emoji src="🐒" /> `player`

L’objet `game.player` permet d'accéder au **joueur**, et de modifier sa `position` et sa `sprite`:

```js
game.player.position = [5, 6]
game.player.sprite = `
  ..1..
  .111.
  11111
  .1.1.
  .1.1.
`
```

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

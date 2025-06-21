<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="😎" /> Le Joueur

Le `player` est le personnage que l’on contrôle dans le jeu. Il est défini par deux propriétés :**son apparence** et **sa position**.

---

## <Emoji src="👁️" /> Apparence du joueur

L'apparence du joueur est définie par la propriété `sprite`. Elle peut être:

### Un nombre entre `0` et `9`

Dans ce cas, le joueur sera représenté par un rectangle uni de la couleur correspondante:

```js
createGame({
	player: {
		sprite: 7
	}
})
```

### Une chaîne de caractères

Cela permet de décrire une sprite plus détaillée, ligne par ligne. Chaque chiffre fait référence à une couleur, les `.` représentent des pixels transparents:

```js
createGame({
	player: {
		sprite: `
      ...44...
      ...88...
      ...88...
      .434434.
      4.3443.4
      1.3333.1
      ..3333..
      ..3..3..
    `
	}
})
```

<Aside>

Le fonctionnement des sprites est expliqué plus en détail dans la [section dédiée](/fr/doc/world-building/sprites).

</Aside>

---

## <Emoji src="🚩" /> Position de départ

Vous pouvez définir la position initiale du joueur sur la carte avec la clé `position`.
Elle prend la forme d’un tableau `[x, y]`, où `x` correspond à la colonne et `y` à la ligne dans la grille.

Par exemple, `[2, 5]` place le personnage à la 2ᵉ colonne et à la 5ᵉ ligne (en partant du haut).

```js
createGame({
	player: {
		sprite: 7,
		position: [3, 4]
	}
})
```

Par défaut, le joueur apparaît en haut à gauche, à la position `[0, 0]`.

---

## <Emoji src="👻" /> Visibilité du joueur

Vous pouvez contrôler si le joueur est visible avec la propriété `visible` :

```js
createGame({
	player: {
		sprite: 7,
		visible: false
	}
})
```

Par défaut, le joueur est visible (`visible: true`).

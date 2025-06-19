<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🌍" /> Les Templates et la Map

Les `templates` permettent de définir tous les objets de votre jeu : obstacles, items, personnages, etc.  
Chaque `template` est associé à un caractère unique (ex. `"X"`, `"$"`, `"e"`, `"#"`).  
Vous pouvez ensuite attribuer un ensemble de propriétés à chaque `template`, puis les utiliser dans la `map`.

---

## <Emoji src="⚙️" /> Propriétés des templates

Chaque template accepte les propriétés suivantes:

| Propriété    | Valeur par défaut | Description                                                                                                                           |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `solid`      | `true`            | Définit si le joueur peut passer au travers de l'élément.                                                                             |
| `visible`    | `true`            | Définit si la sprite est affichée ou non.                                                                                             |
| `foreground` | `false`           | Définit si la sprite doit être dessinée devant le joueur.                                                                             |
| `sprite`     | Aucun             | Définit l'apparence de l'objet ([voir sprites](/fr/doc/world-building/sprites))                                                       |
| `sound`      | Aucun             | Son joué à l’interaction ([voir sons](/fr/doc/world-building/sounds))                                                                 |
| `dialog`     | Aucun             | Message affiché dans la boîte de dialogue quand le joueur interagit avec l’objet ([voir dialogues](/fr/doc/world-building/dialogues)) |
| `end`        | Aucun             | Déclenche la fin du jeu avec un message personnalisé ([voir titre & fin de jeu](/fr/doc/world-building/title-and-end))                |

```js
createGame({
	templates: {
		r: {
			sprite: 6,
			sound: ['HIT', 999],
			visible: false,
			end: 'Perdu'
		},
		g: {
			sprite: 7,
			dialog: "Je suis de l'herbe.",
			solid: false
		}
	}
})
```

---

## <Emoji src="🗺️" /> La Map

La `map` définit la disposition spatiale des éléments du jeu en utilisant une grille ASCII.
Chaque caractère correspond à un `template`.

💡 Créer une map, c’est un peu comme dessiner une sprite !

- Chaque caractère déclaré dans `templates` est interprété.
- Les espaces, tabulations et lignes vides sont ignorés.
- Tout caractère non défini est traité comme une case vide.

```js
createGame({
	templates: {
		x: { sprite: 0 },
		g: { sprite: 7 },
		r: { sprite: 4 }
	},
	map: `
    xxxxxxxxxxxxxxxx
    x..............x
    x...........g..x
    x..............x
    x..............x
    x....r.........x
    x..............x
    xxxxxxxxxxxxxxxx
  `
})
```

---

## <Emoji src="☄️" /> Templates dynamiques

Un `template` ne doit pas forcément être un objet fixe.
Vous pouvez aussi le définir comme une **fonction** qui retourne un objet.
C’est utile si vous souhaitez créer des éléments **légèrement différents à chaque apparition**.

Par exemple, pour créer un mur dont **chaque instance a une couleur différente** :

```js
createGame({
	templates: {
		x: () => ({
			sprite: Math.floor(Math.random() * 9)
		})
	}
	//...
})
```

La fonction est appelée **chaque fois qu’un élément `x` est placé sur la carte**.

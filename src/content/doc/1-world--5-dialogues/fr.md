<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="💬"/> Les Dialogues

Les dialogues permettent d'introduire des conversations, des indices ou des éléments narratifs... Vous pouvez également les enrichir avec des effets visuels et des couleurs.

---

## <Emoji src="✏️"/> Définir un dialogue

Pour associer un dialogue à un élément du jeu, utilisez la propriété `dialog` dans la définition de vos templates :

```javascript
createGame({
	templates: {
		'@': {
			dialog: 'Bonjour le monde !'
		}
	}
})
```

À chaque fois que le joueur rentrera en contact avec un élément `@`, la boîte de dialogue affichera `Bonjour le monde !`.

---

## <Emoji src="⛓️‍💥"/> Découper un dialogue

Pour forcer un retour à la ligne utilisez le caractère `|`.

```js
'Bonjour !|Comment allez-vous ?|Bonne journée !'
```

<Aside variant="Note">
Pour laisser des lignes vides, il est possible de faire suivre plusieurs <code>|</code>.
</Aside>

---

## <Emoji src="💥"/> Ajouter des effets et des couleurs au texte

Pour rendre votre dialogue plus dynamique, vous pouvez lui appliquer des effets et des couleurs en utilisant une syntaxe simple.

<video src="/doc/dialog-fx.webm" autoplay loop muted playsinline/>

### Effets

| Effet                | Syntaxe         | Description                       |
| -------------------- | --------------- | --------------------------------- |
| Vague verticale      | `~votre texte~` | Lettres qui montent et descendent |
| Vague horizontale    | `_votre texte_` | Lettres qui ondulent latéralement |
| Secousse aléatoire   | `votre %texte%` | Tremblement désordonné            |
| Secousse horizontale | `votre =texte=` | Tremblement gauche-droite         |
| Secousse verticale   | `votre ^texte^` | Tremblement haut-bas              |
| Clignotement         | `votre °texte°` | Apparition-dispariton             |

### Couleurs

Pour appliquer une couleur, encadrez le texte avec `<c>`, où `c` est un caractère représentant une couleur dans [votre palette](/fr/doc/configuration/colors#personnaliser-la-palette) :

```js
'<3>Texte bleu<3> '
```

Il est possible de combiner une couleur avec un effet.

```js
'~<2>Texte gris avec un mouvement de vague<2>~'
```

## <Emoji src="🫥"/> Afficher des caractères spéciaux

Si vous souhaitez afficher un caractère réservé (comme `%`, `~`, `_`, `^`, `=`, `°` ), précédez-le de deux antislash `\` :

```js
'Il ne me reste que 56\\% de batterie'
```

affichera :

_Il ne me reste que 56% de batterie_

---

## <Emoji src="🏎️"/> Vitesse d'affichage des dialogues

La vitesse d'affichage des dialogues peut être ajustée dans la configuration initiale du jeu à l'aide de la clé `dialogIntervalMs` :

```js
createGame({
	//...
	dialogIntervalMs: 15
})
```

La valeur correspond au nombre de millisecondes attendues entre chaque caractère.

Valeur par défaut : `30`

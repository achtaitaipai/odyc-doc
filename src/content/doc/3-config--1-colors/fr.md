<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import PaintDemo from '../../../lib/ui/Doc/PaintDemo.svelte'
import ColorsDemo from '../../../lib/ui/Doc/ColorsDemo.svelte'
</script>

# <Emoji src="🫟" /> Modifier les couleurs

Odyc.js utilise une palette prédéfinie pour dessiner les sprites, les dialogues et les messages du jeu. Vous pouvez la remplacer ou l’ajuster comme vous le souhaitez.

---

## <Emoji src="🌈" /> Personnaliser la palette

Voici la palette de couleurs par défaut. Cliquez sur une couleur pour copier son code hexadécimal.

<ColorsDemo/>

_Ces couleurs sont issues de l’excellente palette [Open Color](https://yeun.github.io/open-color/)._

Par **défaut**, la palette contient **10 couleurs**, accessibles via les caractères `0` à `9`.

Cependant, vous pouvez définir jusqu’à **62 couleurs**.
Dans ce cas, vous pouvez utiliser toute la plage suivante dans vos sprites :

```
0–9  → 10 premières couleurs
a–z → 26 suivantes
A–Z → 26 dernières
```

Chaque caractère dans un sprite correspond à une position dans le tableau `colors`.

```js
createGame({
	colors: [
		'red', // 0
		'orange', // 1
		'lab(50% 40 59.5)', // 2
		'hwb(12 50% 0%)', // 3
		'#f06595', // 4
		'#f09', // 5
		'oklch(60% 0.15 50)', // 6
		'hsl(150 30% 60%)', // 7
		'light-dark(white, black)', // 8
		'black', // 9
		'hotpink', // a
		'#0000ff', // b
		'#ffff00' // c
		// etc.
	]
})
```

Le tableau `colors` peut contenir **n’importe quelle valeur de couleur CSS valide** : noms, codes hexadécimaux, RGB, HSL, LAB, etc.
[Voir la référence des formats](https://developer.mozilla.org/fr/docs/Web/CSS/color_value)

---

## <Emoji src="💅"/> Apparence des dialogues et des messages

Vous pouvez également personnaliser l’apparence des boîtes de dialogue et de message avec des options supplémentaires.

### Boîte de dialogue

- `dialogColor` → couleur du texte
- `dialogBackground` → couleur du fond
- `dialogBorder` → couleur de la bordure

Ces valeurs peuvent être une [couleur CSS](https://developer.mozilla.org/fr/docs/Web/CSS/color_value) ou un caractère correspondant à une couleur de la palette.

```javascript
createGame({
	// ...
	dialogBackground: '#228be6',
	dialogBorder: 3,
	dialogColor: 'white'
})
```

<Aside>

Les couleurs définies pour la boîte de dialogue s'appliquent également à la fenêtre de `prompt`.

</Aside>

### Boîte de message

- `messageColor` → couleur du texte
- `messageBackground` → couleur du fond

Ces valeurs peuvent être une [couleur CSS](https://developer.mozilla.org/fr/docs/Web/CSS/color_value) ou un caractère correspondant à une couleur de la palette.

```javascript
createGame({
	//...
	messageColor: 'red',
	messageBackground: '#228be6'
})
```

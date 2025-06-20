<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import PaintDemo from '../../../lib/ui/Doc/PaintDemo.svelte'
</script>

# <Emoji src="👾"/> Les Sprites

Comme tout le reste dans Odyc.js, les sprites sont décrites via le code. Leur définition se fait à l’aide de chaînes de caractères, un petit peu comme des dessins _ASCII_.

```js
createGame({
	player: {
		sprite: `
			...55...
			...55...
			.000000.
			0.0000.0
			5.0000.5
			..3333..
			..3..3..
			..0..0..
			`
	}
	//...
})
```

---

## <Emoji src="🟦" /> Un simple rectangle

Si vous souhaitez que votre élément soit représenté par un rectangle de couleur, vous pouvez attribué un caractère correspondant à une couleur de la palette.

```js
sprite: '5'
```

---

## <Emoji src="✍️" /> Dessiner

Il parait que l'expérience vaut mieux que les discours. Vous pouvez essayer l'éditeur ci-après pour comprendre comment sont codés les sprites.  
D'un côté, une zone de dessin que vous pouvez modifier, de l'autre, la description de la sprite comme elle apparaitrait dans votre code.

<PaintDemo/>

Chaque ligne représente une rangée de pixels, et chaque caractère correspond à un pixel.

- **Caractères `0–9`, `a–z`, `A–Z`**: : correspond à une couleur spécifique (par ex. `0` pour noir, `1` pour blanc, etc.).
- **Retour à la ligne** : commence une nouvelle rangée de pixels.
- **Espaces, tabulations, lignes vides** : ignorés.
- **Autres caractères** : pixels transparents (par exemple, `.`).

<Aside>

Pour gagner de la place vous pouvez utiliser `\n` pour remplacer les sauts de ligne.
`'..4.4...\n..4.4.4.'`

</Aside>

---

## <Emoji src="🔤" /> Caractères texte comme sprites

Pour le prototypage rapide ou les jeux basés sur du texte, vous pouvez convertir n'importe quel caractère en sprite 8×8 en utilisant la fonction helper `charToSprite()` :

```js
import { createGame, charToSprite } from 'odyc'

createGame({
	player: {
		sprite: charToSprite('A')
	},
	templates: [
		{
			// Caractère '@' en couleur '3'
			sprite: charToSprite('@', '3')
		}
	]
	//...
})
```

**Paramètres :**

- `char` (string) : N'importe quel caractère unique à convertir en sprite
- `color` (string, optionnel) : Couleur de la palette à utiliser pour le caractère. Par défaut : `1`

**Retour :** Une représentation de sprite 8×8 sous forme de chaîne de caractères.

---

## <Emoji src="👀" /> Ressources

Voici des ressources qui peuvent vous aider à trouver des idées pour vos sprites:

- [Pixeltwist](https://pixeltwist.achtaitaipai.com/) : propose une infinité de sprites générées aléatoirement.
- [Baxel](https://baxel.achtaitaipai.com/) : une collection ouverte de sprites créées par la communauté.
- [odyc-cli](https://github.com/Meldiron/odyc-cli) par Meldiron : un outil en ligne de commande pour créer des projets Odyc.js, convertir des images en sprites, et optimiser le flux de développement de jeux.

<Aside>

Pour importer une sprite depuis l’un de ces sites dans votre jeu, faites simplement **clic droit → copier l’image**, puis **collez-la dans l’outil de dessin** du [playground](/fr/playground).

</Aside>


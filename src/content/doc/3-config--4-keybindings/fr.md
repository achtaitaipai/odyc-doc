<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import KeyDemo from '../../../lib/ui/Doc/KeyDemo.svelte'
</script>

# <Emoji src="🎮" /> Touches personnalisées

Par défaut, Odyc.js utilise les flèches du clavier ou les touches **WASD** pour se déplacer, et la touche **espace** ou **Entrée** pour interagir.

Mais vous pouvez redéfinir librement les touches de contrôle via la propriété `controls`.

---

## <Emoji src="🧩" /> Configuration par défaut

Voici la configuration utilisée si vous ne précisez rien :

```js
controls: {
  LEFT: ['ArrowLeft', 'KeyA'],
  RIGHT: ['ArrowRight', 'KeyD'],
  UP: ['ArrowUp', 'KeyW'],
  DOWN: ['ArrowDown', 'KeyS'],
  ACTION: ['Enter', 'Space']
}
```

---

## <Emoji src="⚙️" /> Personnaliser les touches

Vous pouvez surcharger cette configuration à la création du jeu via `createGame()` :

```js
createGame({
	controls: {
		LEFT: 'KeyA',
		RIGHT: 'KeyD',
		UP: 'KeyW',
		DOWN: 'KeyS',
		ACTION: 'ShiftLeft'
	}
})
```

Chaque clé attend :

- soit une **chaîne de texte** correspondant à une touche clavier (`'z'`, `'ArrowLeft'`, `'Shift'`...)
- soit un **tableau de chaînes** si vous souhaitez associer plusieurs touches à une même action

---

## <Emoji src="🔑" /> Touches reconnues

Les noms de touches sont les **valeurs standard de l’attribut [`KeyboardEvent.code`](https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent/code)** en JavaScript.

> La propriété KeyboardEvent.code représente une touche physique du clavier (contrairement au caractère généré par celle-ci).

> Par exemple, le code retourné est "KeyQ" pour le caractère "q" sur un clavier QWERTY, mais le même code représente le caractère "'" sur un clavier Dvorak, et le caractère "a" sur un clavier AZERTY. Cela rend impossible l'utilisation du code pour déterminer le code d'une clé destiné aux utilisateurs s'ils n'utilisent pas une disposition de clavier anticipé.

Pressez une touche pour voir son code:

<KeyDemo/>

---

## <Emoji src="🎯" /> Actions disponibles

Les clés que vous pouvez configurer sont les suivantes :

| Clé      | Action associée                   |
| -------- | --------------------------------- |
| `UP`     | Déplacer le joueur vers le haut   |
| `DOWN`   | Déplacer le joueur vers le bas    |
| `LEFT`   | Déplacer le joueur vers la gauche |
| `RIGHT`  | Déplacer le joueur vers la droite |
| `ACTION` | Passer un dialogue ou un message  |

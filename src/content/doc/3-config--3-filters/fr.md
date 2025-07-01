<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🎨" /> Les Filtres

Les **filtres** permettent de modifier l’apparence visuelle globale du jeu, en appliquant des effets graphiques à l’ensemble de l’écran.

<Aside variant="Warning">

Les filtres sollicitent **fortement la carte graphique. ** Ils peuvent **réduire les performances** sur des machines plus anciennes. Certains appareils (notamment mobiles) peuvent **ne pas supporter WebGL**.

</Aside>

---

## <Emoji src="🧪" /> Utilisation

L’ajout d’un filtre se fait lors de l’appel à `createGame`, via la propriété `filter`.

```js
createGame({
	filter: {
		name: 'neon'
	}
})
```

Chaque filtre a un **nom** et peut recevoir des **réglages personnalisés** via la clé `settings`.

---

## <Emoji src="✨" /> Filtres disponibles

### `fractal`

![fractal](/doc/fractal.png)

Transforme chaque pixel de l’image en un **polygone**

```js
filter: {
  name: 'fractal',
  settings: {
    sideCount: 12,   // Nombre de côtés
    scale: 0.9,      // Zoom global (0 à 1)
    rotation: 0      // Rotation (0 à 1)
  }
}
```

---

### `crt`

![crt](/doc/crt.png)

Recrée l'effet des anciens écrans **cathodiques** (scanlines, distorsion, courbure).

```js
filter: {
  name: 'crt',
  settings: {
    warp: 0.7,           // Courbure de l’écran (0 à 1)
    lineIntensity: 0.2,  // Opacité des lignes
    lineWidth: 0.6,      // Épaisseur des lignes
    lineCount: 85        // Nombre total de lignes
  }
}
```

---

### `glow`

![glow](/doc/glow.png)

Donne un effet **lumineux et vaporeux**.

```js
filter: {
  name: 'glow',
  settings: {
    intensity: 0.8    // Intensité de la lueur
  }
}
```

---

### `neon`

![neon](/doc/neon.png)

Combine un effet de **lueur** avec une **mosaïque pixellisée**.

```js
filter: {
  name: 'neon',
  settings: {
    scale: 0.75,      // Taille des carreaux (0 à 1)
    intensity: 0.8    // Intensité de la lueur
  }
}
```

<Aside>

Le rendu du filtre `neon` est beaucoup plus intéressant sur un fond noir. Si vous n'avez pas accès au css, comme dans le playground, vous pouvez utiliser la ligne suivante:

```js
document.body.style.setProperty('background', 'black')
//...
```

</Aside>

---

## <Emoji src="💡" /> Shaders personnalisés

Pour aller plus loin, vous pouvez fournir vos **propres shaders WebGL** via la propriété `filter`.

Un shader personnalisé peut inclure :

- un **fragment shader** (`fragment`)
- un **vertex shader** (`vertex`)
- des **uniforms** via `settings`

Voici par exemple un filtre qui inverse les couleurs.

```js
const myShader = `
precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texCoords;

void main() {
  vec4 color = texture2D(u_texture, v_texCoords);
  gl_FragColor = vec4(1.0 - color.rgb, color.a);
}
`

createGame({
	filter: {
		fragment: myShader
	}
})
```

Les propriétés de l’objet `settings` sont injectées dans le shader en tant qu’uniforms (préfixées par `u_`).

<Aside>

Pour vous inspirer, jetez un œil au dossier [`src/shaders`](https://github.com/achtaitaipai/odyc/tree/main/src/shaders) du dépôt GitHub.  
Vous y trouverez les shaders utilisés par les filtres natifs (`crt`, `neon`, etc).

</Aside>

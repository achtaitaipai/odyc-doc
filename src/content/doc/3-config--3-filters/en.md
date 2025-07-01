<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="🎨" /> Filters

**Filters** let you apply visual effects to the entire screen, changing the overall look of your game.

<Aside variant="Warning">

Filters are **GPU-intensive**. They can **reduce performance** on older machines.  
Some devices (especially mobile ones) **might not support WebGL**.

</Aside>

---

## <Emoji src="🧪" /> Usage

To use a filter, simply pass a `filter` option when calling `createGame`:

```js
createGame({
	filter: {
		name: 'neon'
	}
})
```

Each filter has a **name**, and can take custom **settings** using the `settings` key.

---

## <Emoji src="✨" /> Available Filters

### `fractal`

![fractal](/doc/fractal.png)

Turns each pixel of the image into a **polygon**.

```js
filter: {
  name: 'fractal',
  settings: {
    sideCount: 12,   // Number of sides
    scale: 0.9,      // Global zoom (0 to 1)
    rotation: 0      // Rotation (0 to 1)
  }
}
```

---

### `crt`

![crt](/doc/crt.png)

Simulates an old **CRT screen** with scanlines, distortion, and curvature.

```js
filter: {
  name: 'crt',
  settings: {
    warp: 0.7,           // Screen curvature (0 to 1)
    lineIntensity: 0.2,  // Line opacity
    lineWidth: 0.6,      // Line thickness
    lineCount: 85        // Number of scanlines
  }
}
```

---

### `glow`

![glow](/doc/glow.png)

Creates a **luminous and vaporous** effect.

```js
filter: {
  name: 'glow',
  settings: {
    intensity: 0.8    // Glow intensity
  }
}
```

---

### `neon`

![neon](/doc/neon.png)

Creates a glowing **neon effect** with a pixelated mosaic overlay.

```js
filter: {
  name: 'neon',
  settings: {
    scale: 0.75,      // Tile size (0 to 1)
    intensity: 0.8    // Glow intensity
  }
}
```

<Aside>

The `neon` filter looks best on a black background.
If you can't use CSS (like in the playground), you can add this line:

```js
document.body.style.setProperty('background', 'black')
//...
```

</Aside>

---

## <Emoji src="💡" /> Custom Shaders

If you want full control, you can define your own **WebGL shaders** using the `filter` property.

A custom filter can include:

- a **fragment shader** (`fragment`)
- a **vertex shader** (`vertex`)
- any **uniforms** via `settings`

Here’s an example of a filter that inverts all colors:

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

All `settings` values are injected into the shader as uniforms (prefixed with `u_`).

<Aside>

Need inspiration? Check out the [`src/shaders`](https://github.com/achtaitaipai/odyc/tree/main/src/shaders) folder in the GitHub repo.
It includes the shaders used by the built-in filters (`crt`, `neon`, etc).

</Aside>

<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import PaintDemo from '../../../lib/ui/Doc/PaintDemo.svelte'
import ColorsDemo from '../../../lib/ui/Doc/ColorsDemo.svelte'
</script>

# <Emoji src="🫟" /> Customizing Colors

Odyc.js uses a predefined color palette to render sprites, dialogs, and messages.  
You can replace or adjust it however you like.

---

## <Emoji src="🌈" /> Customizing the Palette

Here is the default color palette. Click a color to copy its hex code.

<ColorsDemo/>

_These colors are based on the excellent [Open Color](https://yeun.github.io/open-color/) palette._

By **default**, the palette contains **10 colors**, referenced by characters `0` to `9`.

However, you can provide up to **62 colors** in total.
In that case, you can use the full range of characters to represent colors in your sprites:

```
0–9  → first 10 colors
a–z → next 26 colors
A–Z → final 26 colors
```

Each character corresponds to a position in the `colors` array.

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
		// and so on...
	]
})
```

The `colors` array can include any valid [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value): names, hex codes, HSL, LAB, etc.

---

## <Emoji src="🌈" /> Background Color

Use the `background` option to set the background color.

```javascript
createGame({
	//...
	background: '#ff00ff'
})
```

The `background` value can be a [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) or a character pointing to a color in your palette.

---

## <Emoji src="💅"/> Dialog and Message Appearance

You can also customize the appearance of dialog and message boxes with dedicated options.

### Dialog Box

- `dialogColor` → text color
- `dialogBackground` → background color
- `dialogBorder` → border color

These values can be any [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) or a character referring to a color from your palette.

```javascript
createGame({
	// ...
	dialogBackground: '#228be6',
	dialogBorder: '3',
	dialogColor: 'white'
})
```

<Aside>

The colors defined for the dialog box also apply to the `prompt` window.

</Aside>

### Message Box

- `messageColor` → text color
- `messageBackground` → background color

These also accept any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) or a palette index.

```javascript
createGame({
	//...
	messageColor: 'red',
	messageBackground: '#228be6'
})
```

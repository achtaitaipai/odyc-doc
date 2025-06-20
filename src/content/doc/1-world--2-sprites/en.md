<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import PaintDemo from '../../../lib/ui/Doc/PaintDemo.svelte'
</script>

# <Emoji src="👾"/> Sprites

Like everything else in Odyc.js, sprites are defined directly in code.  
They’re described using **strings**, a bit like _ASCII art_.

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

## <Emoji src="🟦" /> A Simple Colored Block

If you want an element to appear as a plain colored rectangle, just assign a single character that corresponds to a palette color:

```js
sprite: '5'
```

---

## <Emoji src="✍️" /> Drawing Sprites

Sometimes it’s easier to draw than to explain.
Use the editor below to try out how sprite definitions work.
On one side, you can draw; on the other, you’ll see the code string that represents your sprite.

<PaintDemo/>

Each line represents a row of pixels, and each character is a pixel:

- **Characters `0–9`, `a–z`, `A–Z`**: correspond to entries in your palette (up to 62 colors total)
- **Newline**: starts a new row
- **Spaces, tabs, blank lines**: are ignored
- **Other characters**: represent transparent pixels (e.g. `.`)

<Aside>

To make your code shorter, you can use `\n` instead of line breaks:  
`'..4.4...\n..4.4.4.'`

</Aside>

---

## <Emoji src="👀" /> Sprite Inspiration

Here are two useful resources for generating or browsing sprite ideas:

- [Pixeltwist](https://pixeltwist.achtaitaipai.com/) – an infinite stream of random sprites.
- [Baxel](https://baxel.achtaitaipai.com/) – a growing, open collection of community-created sprites.

<Aside>

To import a sprite from one of these sites into your game, simply **right-click → copy image**, then **paste it into the drawing tool** in the [playground](/playground).

</Aside>


<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="💬"/> Dialogues

Dialogues let you add conversations, hints, or narrative elements to your game.  
You can also enhance them with visual effects and color highlights.

---

## <Emoji src="✏️"/> Defining a dialogue

To assign a dialogue to a game element, use the `dialog` property in the `templates` section:

```javascript
createGame({
	templates: {
		'@': {
			dialog: 'Hello world!'
		}
	}
})
```

Every time the player interacts with the `@` element, a dialogue box will display `Hello world!`.

---

## <Emoji src="⛓️‍💥"/> Splitting a dialogue

To force a line break, use the `|` character.

```js
'Hello!|How are you?|Have a great day!'
```

<Aside variant="Note">
To insert empty lines, just use multiple <code>|</code> in a row.
</Aside>

---

## <Emoji src="💥"/> Adding effects and colors to text

You can make your dialogue more expressive with simple syntax for **visual effects** and **color changes**.

<video src="/doc/dialog-fx.webm" autoplay loop muted playsinline/>

### Effects

| Effect           | Syntax        | Description               |
| ---------------- | ------------- | ------------------------- |
| Vertical wave    | `~your text~` | Letters move up and down  |
| Horizontal wave  | `_your text_` | Letters wave side to side |
| Random shake     | `your %text%` | Chaotic shaking           |
| Horizontal shake | `your =text=` | Left-right shaking        |
| Vertical shake   | `your ^text^` | Up-down shaking           |
| Blinking         | `your °text°` | Flashing on/off           |

### Colors

To apply a color, wrap text in `<c>`, where `c` is a character representing a color from [your palette](/doc/configuration/colors#customizing-the-palette):

```js
'<3>Blue text<3>'
```

You can also combine effects and colors:

```js
'~<2>Gray text with wave effect<2>~'
```

---

## <Emoji src="🫥"/> Displaying special characters

To display a reserved character (like `%`, `~`, `_`, `^`, `=`, `°`), escape it with **two backslashes** `\\`:

```js
'I only have 56\\% battery left'
```

will display:

_I only have 56% battery left_

---

## <Emoji src="🏎️"/> Dialogue Speed

The display speed of dialogues can be adjusted in the initial game configuration using the `dialogSpeed` key:

```js
createGame({
	//...
	dialogSpeed: 'FAST'
})
```

Available values:

- `'SLOW'` - Slow typing speed
- `'NORMAL'` - Normal typing speed (default)
- `'FAST'` - Fast typing speed

<script>
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
import Aside from '../../../lib/ui/Doc/Aside.svelte'
</script>

# <Emoji src="🚀" /> Getting Started with Odyc.js

Want to create a game quickly? Here are **three ways to start**, depending on your preferences:

---

## <Emoji src="🧪" /> Use the Online Editor

The easiest way to get started is to use the [online editor](/playground).  
No setup required: just open the link and start coding your game directly in your browser.

---

## <Emoji src="📦" /> Use a CDN

If you prefer working locally **without a complex setup**, you can import Odyc.js from a CDN.

1. Create an `index.html` file
2. Paste the following code:

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://www.unpkg.com/odyc@latest/dist/index.global.js"></script>
	</head>
	<body>
		<script>
			const game = odyc.createGame({
				title: 'My Awesome Game'
			})
		</script>
	</body>
</html>
```

3. Open the file in your browser.

<Aside variant="Warning">

Using `latest` may lead to unexpected breaking changes. For more stability, consider pinning a specific version

</Aside>

---

## <Emoji src="🔧" /> Use a Bundler (Vite, Webpack…)

For more advanced projects, you can install Odyc.js via npm:

```bash
npm install odyc
```

Then in your main JavaScript or TypeScript file:

```js
import { createGame } from 'odyc'

const game = createGame({
	title: 'My Awesome Game'
})
```

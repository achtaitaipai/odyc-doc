<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="📐" /> vec2

The `vec2` helper provides utilities for manipulating 2D vectors (positions, coordinates).

---

## <Emoji src="⚡" /> Creation

```js
import { vec2 } from 'odyc'

// With separate coordinates
const v1 = vec2(3, 4)

// With an [x, y] array
const v2 = vec2([3, 4])
```

---

## <Emoji src="🔧" /> Methods

### Addition and subtraction

```js
const v1 = vec2(2, 3)
const v2 = vec2(1, 1)

const addition = v1.add(v2) // or v1.add(1, 1)
const subtraction = v1.sub(v2) // or v1.sub(1, 1)
```

### Multiplication and division

```js
const v = vec2(4, 6)

const multiplied = v.multiply(2) // [8, 12]
const divided = v.divide(2) // [2, 3]
```

### Distance and comparison

```js
const v1 = vec2(0, 0)
const v2 = vec2(3, 4)

const distance = v1.distance(v2) // 5 (Euclidean distance)
const manhattan = v1.manhattanDistance(v2) // 7 (Manhattan distance)
const equal = v1.equals(v2) // false
```

---

## <Emoji src="📊" /> Properties

```js
const v = vec2(3, 4)

console.log(v.length) // 5 (vector magnitude)
console.log(v.direction) // [1, 1] (sign-based direction)
console.log(v.value) // [3, 4] (get coordinates)

// Modify coordinates
v.value = [5, 6]
//or
v.x = 5
v.y = 6
```

---

## <Emoji src="📋" /> Reference Table

| Method/Property             | Parameters                     | Returns            | Description                          |
| --------------------------- | ------------------------------ | ------------------ | ------------------------------------ |
| `add(vector)`               | `vec2` or `[x, y]` or `(x, y)` | `vec2`             | Adds another vector                  |
| `sub(vector)`               | `vec2` or `[x, y]` or `(x, y)` | `vec2`             | Subtracts another vector             |
| `multiply(scalar)`          | `number`                       | `vec2`             | Multiplies by a scalar               |
| `divide(scalar)`            | `number`                       | `vec2`             | Divides by a scalar                  |
| `distance(vector)`          | `vec2` or `[x, y]`             | `number`           | Euclidean distance to another vector |
| `manhattanDistance(vector)` | `vec2` or `[x, y]`             | `number`           | Manhattan distance to another vector |
| `equals(vector)`            | `vec2` or `[x, y]`             | `boolean`          | Checks if vectors are equal          |
| `length`                    | -                              | `number`           | Vector magnitude (read-only)         |
| `direction`                 | -                              | `[number, number]` | Sign-based direction (read-only)     |
| `value`                     | -                              | `[number, number]` | Get/set coordinates                  |
| `x`                         | -                              | `number`           | Get/set x coordinate                 |
| `y`                         | -                              | `number`           | Get/set y coordinate                 |

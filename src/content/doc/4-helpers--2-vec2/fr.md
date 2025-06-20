<script>
import Aside from '../../../lib/ui/Doc/Aside.svelte'
import Emoji from '../../../lib/ui/Doc/Emoji.svelte'
</script>

# <Emoji src="📐" /> vec2

L'helper `vec2` fournit des utilitaires pour manipuler des vecteurs 2D (positions, coordonnées).

---

## <Emoji src="⚡" /> Création

```js
import { vec2 } from 'odyc'

// Avec coordonnées séparées
const v1 = vec2(3, 4)

// Avec un tableau [x, y]
const v2 = vec2([3, 4])
```

---

## <Emoji src="🔧" /> Méthodes

### Addition et soustraction

```js
const v1 = vec2(2, 3)
const v2 = vec2(1, 1)

const addition = v1.add(v2) // ou v1.add(1, 1)
const soustraction = v1.sub(v2) // ou v1.sub(1, 1)
```

### Multiplication et division

```js
const v = vec2(4, 6)

const multiplication = v.multiply(2) // [8, 12]
const division = v.divide(2) // [2, 3]
```

### Distance et comparaison

```js
const v1 = vec2(0, 0)
const v2 = vec2(3, 4)

const distance = v1.distance(v2) // 5
const egal = v1.equals(v2) // false
```

---

## <Emoji src="📊" /> Propriétés

```js
const v = vec2(3, 4)

console.log(v.length) // 5 (magnitude du vecteur)
console.log(v.direction) // [1, 1] (direction basée sur le signe)
console.log(v.value) // [3, 4] (obtenir les coordonnées)

// Modifier les coordonnées
v.value = [5, 6]
//ou
v.x = 5
v.y = 6
```


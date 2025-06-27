<script module>
	import { GameWindow } from '$lib'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'ui/GameWindow',
		component: GameWindow,
		tags: ['autodocs'],
		argTypes: {}
	})
	const code = `
 createGame({
  player:{
    sprite:\`
    ...00...
    ...00...
    .000000.
    0.0000.0
    0.0000.0
    0.0000.0
    ..0..0..
    ..0..0..
    \`,
    position:[1,1]
  },
  background: 7,
})
`
</script>

<Story name="Primary" args={{ code, class: 'h-screen' }} />

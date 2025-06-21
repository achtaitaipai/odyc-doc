import { type Lang } from '$lib'

export type DocItem = { [lang in Lang]: string } & { path: string }

export type DocCategory = { [lang in Lang]: string } & { items: DocItem[] }

export type DocSummary = DocCategory[]
export const docSummary: DocSummary = [
	{
		en: 'Getting Started',
		fr: 'Pour commencer',
		items: [
			{ en: 'Intro', fr: 'Intro', path: '0-getting-started--1-intro' },
			{ en: 'Quick Start', fr: 'Démarrage rapide', path: '0-getting-started--2-quick-start' }
		]
	},
	{
		en: 'World Building',
		fr: 'Construction du monde',
		items: [
			{ en: 'Player', fr: 'Player', path: '1-world--1-player' },
			{ en: 'Sprites', fr: 'Sprites', path: '1-world--2-sprites' },
			{ en: 'Templates & Map', fr: 'Templates et Carte', path: '1-world--3-templates-map' },
			{ en: 'Sounds', fr: 'Sons', path: '1-world--4-sounds' },
			{ en: 'Dialogues', fr: 'Dialogues', path: '1-world--5-dialogues' },
			{ en: 'Title & End', fr: 'Titre & fin de jeu', path: '1-world--6-title-end' }
		]
	},
	{
		en: 'Interaction & Logic',
		fr: 'Interaction & logique',
		items: [
			{ en: 'Events', fr: 'Événements', path: '2-logic--1-events' },
			{ en: 'Game Actions', fr: 'Actions du jeu', path: '2-logic--2-game-actions' },
			{ en: 'Game State', fr: "L'état du jeu", path: '2-logic--3-game-state' },
			{
				en: 'Scene Transitions',
				fr: "Passer d'une scène à l'autre",
				path: '2-logic--4-scene-transitions'
			}
		]
	},
	{
		en: 'Configuration',
		fr: 'Configuration',
		items: [
			{ en: 'Colors', fr: 'Couleurs', path: '3-config--1-colors' },
			{ en: 'Screen & Camera', fr: 'Caméra & Écran', path: '3-config--2-screen-camera' },
			{ en: 'Filters', fr: 'Filtres', path: '3-config--3-filters' },
			{ en: 'Custom Key Bindings', fr: 'Touches personnalisées', path: '3-config--4-keybindings' },
			{
				en: 'Default Configuration',
				fr: 'Configuration par défaut',
				path: '3-config--5-default-config'
			}
		]
	},
	{
		en: 'Helpers',
		fr: 'Utilitaires',
		items: [
			{ en: 'charToSprite', fr: 'charToSprite', path: '4-helpers--1-char-to-sprite' },
			{ en: 'vec2', fr: 'vec2', path: '4-helpers--2-vec2' },
			{ en: 'makeScreenshot', fr: 'makeScreenshot', path: '4-helpers--3-make-screenshot' }
		]
	}
]

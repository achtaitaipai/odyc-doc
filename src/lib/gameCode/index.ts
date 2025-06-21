import odyc from 'odyc/dist/index.global.js?raw'
import messageChannelScript from './inlineScripts/messageChannel.js?raw'
import consoleScript from './inlineScripts/console.js?raw'
import gameRecorderScript from './inlineScripts/gameRecorder.js?raw'

export const buildGame = (code: string, debug = true) => `
<html>
<head>
  <meta charset="utf-8" />
</head>
<body>
  ${
		debug
			? `<script>
  ${messageChannelScript}
  ${consoleScript}
</script>`
			: ''
	}
  <script>
    ${odyc}
    const {createGame, createSound, charToSprite, vec2, makeScreenshot, startRecording} = odyc
//startofthegame
${code}
//endofthegame
    ${debug ? gameRecorderScript : ''}
  </script>
</body>
</html>
`

export const parseCode = (code: string) => {
	return code.match(/(?<=\/\/startofthegame\n)((.|\n)*)(?=\/\/endofthegame)/gm)
}

export function updateIframe(code: string, iframe: HTMLIFrameElement): void {
	const source = buildGame(code)
	iframe.srcdoc = source
}

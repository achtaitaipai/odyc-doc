;(function () {
	onload = () => {
		addEventListener('message', (e) => {
			if (e.ports[0]) {
				port = e.ports[0]
				port.onmessage = (e) => handleMessage(e)
			}
		})

		messageListeners.set('screenshot', (e) => {
			const screenshot = makeScreenshot()
			screenshot.save('img')
		})
		messageListeners.set('start-record', (e) => {
			port.postMessage({ type: 'start-record' })
		})
		messageListeners.set('stop-record', (e) => {
			port.postMessage({ type: 'stop-record' })
		})
	}
})()

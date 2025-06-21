;(function () {
	let stopRecord = null
	onload = () => {
		addEventListener('message', (e) => {
			if (e.ports[0]) {
				port = e.ports[0]
				port.onmessage = (e) => handleMessage(e)
			}
		})

		messageListeners.set('screenshot', (e) => {
			makeScreenshot('odyc-screenshot')
		})
		messageListeners.set('start-record', (e) => {
			stopRecord = startRecording()
			port.postMessage({ type: 'start-record' })
		})
		messageListeners.set('stop-record', (e) => {
			if (stopRecord) {
				stopRecord('odyc-record')
				stopRecord = null
			}
			port.postMessage({ type: 'stop-record' })
		})
	}
})()

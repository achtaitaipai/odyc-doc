;(function () {
	const isConsoleOpen = localStorage.getItem('console') === 'open'
	const LOGS_TYPES = /**@type {const}*/ (['log', 'error', 'warn', 'info'])
	const LOGS_COLORS = /**@type {const}*/ ({
		log: '#e9ecef',
		error: '#c92a2a',
		warn: '#e67700',
		info: '#e9ecef'
	})

	// Container Element
	const logContainer = document.createElement('div')
	Object.assign(logContainer.style, {
		display: isConsoleOpen ? 'block' : 'none',
		lineHeight: '1.6',
		position: 'fixed',
		bottom: '0',
		width: '100%',
		height: '6rem',
		borderTop: '3px solid #495057',
		zIndex: '2147483647',
		overflowY: 'scroll',
		fontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		fontSize: '.8rem',
		padding: '.4rem .6rem',
		backgroundColor: '#0c1323'
	})

	const closeBtn = document.createElement('button')
	Object.assign(closeBtn.style, {
		display: isConsoleOpen ? 'block' : 'none',
		position: 'fixed',
		right: '.5rem',
		bottom: '5rem',
		padding: '0',
		lineHeight: '0',
		fontSize: '1.25rem',
		background: 'transparent',
		border: 'none',
		cursor: 'pointer',
		color: '#f1f3f5'
	})
	closeBtn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="1em" height="1em">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
`

	document.body.style.backgroundColor = 'white'
	const openBtn = document.createElement('button')
	openBtn.setAttribute('title', 'console')
	Object.assign(openBtn.style, {
		display: isConsoleOpen ? 'none' : 'block',
		position: 'fixed',
		lineHeight: 0,
		bottom: '.3rem',
		left: '.3rem',
		zIndex: '2147483647',
		padding: '.25rem .5rem',
		border: 'none',
		backgroundColor: 'transparent',
		color: 'white',
		mixBlendMode: 'difference',
		cursor: 'pointer'
	})
	openBtn.textContent = 'Console'
	openBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" width="1em" height="1em">
    <rect width="18" height="18" x="3" y="3" rx="2"/>
    <path d="m10 8 4 4-4 4"/>
  </svg>`

	document.body.append(logContainer)
	document.body.append(openBtn)
	logContainer.append(closeBtn)

	openBtn.addEventListener('click', open)
	closeBtn.addEventListener('click', close)

	function open() {
		logContainer.style.setProperty('display', 'block')
		closeBtn.style.setProperty('display', 'block')
		openBtn.style.setProperty('display', 'none')
		localStorage.setItem('console', 'open')
	}

	function close() {
		logContainer.style.setProperty('display', 'none')
		closeBtn.style.setProperty('display', 'none')
		openBtn.style.setProperty('display', 'block')
		localStorage.setItem('console', 'close')
	}

	// Trap the logs
	LOGS_TYPES.forEach((type) => {
		const original = console[type]
		console[type] = (...args) => {
			writeToConsole(type, ...args)
			original(type, ...args)
		}
	})

	window.onerror = function (message, source, lineno, colno) {
		writeToConsole('error', `${message} (line: ${lineno ? lineno - 271 : ''})`)
	}

	window.addEventListener('unhandledrejection', (e) => {
		writeToConsole('error', `Unhandled rejection: ${e.reason}`)
	})

	/**
	 * @param type{typeof LOGS_TYPES[number]}
	 * @param args{any[]}
	 */
	function writeToConsole(type, ...args) {
		const message = args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : a)).join(' ')
		const element = document.createElement('div')
		element.style.color = LOGS_COLORS[type]
		element.textContent = message
		logContainer.appendChild(element)
		element.scrollIntoView()
	}
})()

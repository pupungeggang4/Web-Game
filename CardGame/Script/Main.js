window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    canvas.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    imageLoad()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now()

    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Map') {
        loopMap()
    } else if (scene === 'Game') {
        loopGame()
    } else if (scene === 'Custom') {
        loopCustom()
    }

    gameFramePrevious = Date.now()
    gameInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'Map') {
        mouseUpMap(x, y, button)
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button)
    } else if (scene === 'Custom') {
        mouseUpCustom(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Map') {
        keyDownMap(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    } else if (scene === 'Custon') {
        keyDownCustom(key)
    }
}

function keyUp(event) {
    let key = event.key
    console.log(key)

    if (key === 'F11') {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
        } else if (document.documentElement.exitFullscreen) {
            document.documentElement.exitFullscreen()
        }
    }

    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Map') {
        keyUpMap(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    } else if (scene === 'Custon') {
        keyUpCustom(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}
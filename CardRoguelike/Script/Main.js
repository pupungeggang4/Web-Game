window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    canvas.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16

    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Ready') {
        loopReady()
    } else if (scene === 'Map') {
        loopMap()
    } else if (scene === 'Game') {
        loopGame()
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
    } else if (scene === 'Ready') {
        mouseUpReady(x, y, button)
    } else if (scene === 'Map') {
        mouseUpMap(x, y, button)
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button)
    } else if (scene === 'Event') {
        mouseUpEvent(x, y, button)
    } else if (scene === 'Shop') {
        mouseUpShop(x, y, button)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Ready') {
        keyUpReady(key)
    } else if (scene === 'Map') {
        keyUpMap(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    } else if (scene === 'Event') {
        keyUpEvent(key)
    } else if (scene === 'Shop') {
        keyUpShop(key)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Ready') {
        keyDownReady(key)
    } else if (scene === 'Map') {
        keyDownMap(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    } else if (scene === 'Event') {
        keyDownEvent(key)
    } else if (scene === 'Shop') {
        keyDownShop(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(loop)
    }
}

function rightClick() {
    return false
}
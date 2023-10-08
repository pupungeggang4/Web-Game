window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElemenyById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16

    imageLoad()
    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'SaveSelect') {
        loopSaveSelect()
    } else if (scene === 'Field') {
        loopField()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (scene === 'Title') {
        loopTitle(x, y, button)
    } else if (scene === 'Field') {
        loopField(x, y, button)
    } else if (scene === 'Game') {
        loopGame(x, y, button)
    }
}

function keyDown(event) {
    let key = event.button

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Field') {
        keyDownField(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    }
}

function keyUp(event) {
    let key = event.button
    
    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Field') {
        keyUpField(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    }
}

function errorHandle(err, url, line, column, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}
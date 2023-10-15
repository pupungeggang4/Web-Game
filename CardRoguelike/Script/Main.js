window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    canvas.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keuDown, false)
    window.addEventListener('keyup', keyUp, false)

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16

    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    if (scene === 'Title') {
        loopTitle()
    }

    gameInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button
    
    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'Title') {
        mouseUpTitle(key)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        mouseUpTitle(key)
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
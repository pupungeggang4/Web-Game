function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    context.fillText(`Game`, UI.textTitle[0], UI.textTitle[1])
    context.drawImage(img.button.back, UI.buttonBack[0], UI.buttonBack[1])

    drawGameUpper()
    drawGameLower()

    if (pause === true) {
        drawPause()
    }
}

function mouseUpGame(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (pointInsideRectArray(x, y, UI.buttonBack)) {
                pause = true
            }
        }
    } else if (pause === true) {
        if (button === 0) {
            if (pointInsideRectArray(x, y, UI.pause.buttonResume)) {
                pause = false
            } else if (pointInsideRectArray(x, y, UI.pause.buttonExit)) {
                pause = false
                scene = 'Title'
                state = ''
            }
        }
    }
}

function keyDownGame(key) {

}

function keyUpGame(key) {

}
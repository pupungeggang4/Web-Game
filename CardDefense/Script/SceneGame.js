function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])

    if (state === 'Start') {
        drawStart()
    }

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

            if (state === 'Start') {

            }
        }
    } else if (pause === true) {
        if (button === 0) {
            if (pointInsideRectArray(x, y, UI.pause.buttonResume)) {
                pause = false
            } else if (pointInsideRectArray(x, y, UI.pause.buttonMap)) {
                pause = false
                scene = 'Map'
                state = ''
            } else if (pointInsideRectArray(x, y, UI.pause.buttonTitle)) {
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
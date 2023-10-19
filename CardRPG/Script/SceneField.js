function loopField() {
    if (pause === false) {
        if (state === '') {

        }
    }

    displayField()
}

function displayField() {
    drawSceneInit()

    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])

    if (pause === true) {
        drawPause()
    }
}

function mouseUpField(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.buttonBack)) {
                    pause = true
                    
                }
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

function keyDownField(key) {

}

function keyUpField(key) {

}
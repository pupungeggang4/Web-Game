function loopField() {
    displayField()
}

function displayField() {
    drawSceneInit()

    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])
}

function mouseUpField(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.buttonBack)) {
                    scene = 'Title'
                    state = ''
                }
            }
        }
    }
}

function keyDownField(key) {

}

function keyUpField(key) {

}
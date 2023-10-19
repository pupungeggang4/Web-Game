function loopCollection() {
    displayCollection()
}

function displayCollection() {
    drawSceneInit()

    context.fillText(`Collection`, UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])
}

function mouseUpCollection(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.buttonBack)) {
                    scene = scenePrevious
                    state = ''
                    scenePrevious = ''
                }
            }
        }
    }
}

function keyDownCollection(key) {

}

function keyUpCollection(key) {

}
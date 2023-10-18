function loopMap() {
    displayMap()
}

function displayMap() {
    drawSceneInit()

    context.fillText(`Select next tile.`, UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])
}

function mouseUpMap(x, y, button) {
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

function keyDownTitle(key) {

}

function keyUpTitle(key) {

}
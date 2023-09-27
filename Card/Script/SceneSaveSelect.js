function loopSaveSelect() {
    displaySaveSelect()
}

function displaySaveSelect() {
    drawSceneInit()

    context.fillText(`Select save file.`, UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])
}

function mouseUpSaveSelect(x, y, button) {
    if (button === 0) {
        if (pause === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.buttonBack)) {
                    scene = 'Title'
                    state = ''
                }
            }
        }
    }
}

function keyDownSaveSelect(key) {

}

function keyUpSaveSelect(key) {

}
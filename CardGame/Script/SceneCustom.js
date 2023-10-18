function loopCustom() {
    displayCustom()
}

function displayCustom(){
    drawSceneInit()

    context.fillText('Custom', UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])
}

function mouseUpCustom(x, y, button) {
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

function keyDownCustom(key) {

}

function keyUpCustom(key) {

}
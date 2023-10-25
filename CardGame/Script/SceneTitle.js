function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText('Card Game', UI.textTitle[0], UI.textTitle[1])

    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.buttonCustom[0], UI.title.buttonCustom[1], UI.title.buttonCustom[2], UI.title.buttonCustom[3])
    context.fillText('Custom Game', UI.title.textCustom[0], UI.title.textCustom[1])
}

function mouseUpTitle(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                    scene = 'Map'
                    state = ''
                    game.adventure = true
                    adventureInit()
                } else if (pointInsideRectArray(x, y, UI.title.buttonCustom)) {
                    scene = 'Custom'
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
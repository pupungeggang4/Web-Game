function loopReady() {
    displayReady()
}

function displayReady() {
    drawSceneInit()

    context.fillText(`Select character.`, UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])

    drawCharacterSelect()
    drawDescription()

    context.strokeRect(UI.ready.buttonStart[0], UI.ready.buttonStart[1], UI.ready.buttonStart[2], UI.ready.buttonStart[3])
    context.fillText(`Start`, UI.ready.textStart[0], UI.ready.textStart[1])
}

function mouseUpReady(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.buttonBack)) {
                    scene = 'Title'
                    state = ''
                }

                for (let i = 0; i < 6; i++) {
                    if (pointInsideRectArray(x, y, UI.ready.characterSelect[i])) {
                        selected.character = i
                    }
                }

                if (pointInsideRectArray(x, y, UI.ready.buttonStart)) {
                    if (selected.character != -1) {
                        gameInit()
                        scene = 'Map'
                        state = ''
                    }
                }
            }
        }
    }
}

function keyDownReady(key) {

}

function keyUpReady(key) {

}
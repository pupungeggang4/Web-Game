function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText('Desserterria RPG', UI.textTitle[0], UI.textTitle[1])

    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.buttonCollection[0], UI.title.buttonCollection[1], UI.title.buttonCollection[2], UI.title.buttonCollection[3])
    context.fillText('Collection', UI.title.textCollection[0], UI.title.textCollection[1])
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    context.fillText('Erase Data', UI.title.textErase[0], UI.title.textErase[1])

    if (state === 'EraseConfirm') {
        context.fillStyle = 'White'
        context.fillRect(UI.title.eraseConfirmRect[0], UI.title.eraseConfirmRect[1], UI.title.eraseConfirmRect[2], UI.title.eraseConfirmRect[3])
        context.fillStyle = 'Black'
        context.strokeRect(UI.title.eraseConfirmRect[0], UI.title.eraseConfirmRect[1], UI.title.eraseConfirmRect[2], UI.title.eraseConfirmRect[3])
        context.strokeRect(UI.title.buttonNo[0], UI.title.buttonNo[1], UI.title.buttonNo[2], UI.title.buttonNo[3])
        context.strokeRect(UI.title.buttonYes[0], UI.title.buttonYes[1], UI.title.buttonYes[2], UI.title.buttonYes[3])
        context.fillText('Erase data?', UI.title.eraseContirmText[0], UI.title.eraseContirmText[1])
        context.fillText('No', UI.title.textNo[0], UI.title.textNo[1])
        context.fillText('Yes', UI.title.textYes[0], UI.title.textYes[1])
    }
}

function mouseUpTitle(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                    scene = 'Field'
                    state = ''
                } else if (pointInsideRectArray(x, y, UI.title.buttonCollection)) {
                    scene = 'Collection'
                    state = ''
                } else if (pointInsideRectArray(x, y, UI.title.buttonErase)) {
                    state = 'EraseConfirm'
                }
            } else if (state === 'EraseConfirm') {
                if (pointInsideRectArray(x, y, UI.title.buttonNo)) {
                    state = ''
                } else if (pointInsideRectArray(x, y, UI.title.buttonYes)) {
                    eraseData()
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
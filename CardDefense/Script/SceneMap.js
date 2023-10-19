function loopMap() {
    displayMap()
}

function displayMap() {
    drawSceneInit()

    context.fillText(`Select Level`, UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.map.buttonCollection[0], UI.map.buttonCollection[1], UI.map.buttonCollection[2], UI.map.buttonCollection[3])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])

    drawLevel()
}

function mouseUpMap(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.buttonBack)) {
                    scenePrevious = 'Map'
                    scene = 'Title'
                    state = ''
                } else if (pointInsideRectArray(x, y, UI.map.buttonCollection)) {
                    scenePrevious = 'Map'
                    scene = 'Collection'
                    state = ''
                }

                for (let i = 1; i < 4; i++) {
                    if (pointInsideRect(x, y, dataLevel[i]['Position'][0] - camera[0], dataLevel[i]['Position'][1] - camera[1], 80, 80)) {
                        if (sessionVar.levelStatus[i] != 0) {
                            scene = 'Game'
                            state = 'Start'
                        }
                    }
                }
            }
        }
    }
}

function keyDownMap(key) {

}

function keyUpMap(key) {
    
}
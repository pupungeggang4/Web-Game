function loopMap() {
    if (state === 'Transition') {
        handleTransition()
    }

    displayMap()
}

function displayMap() {
    drawSceneInit()

    context.fillText(`Select next tile.`, UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])

    drawTile()
}

function mouseUpMap(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.buttonBack)) {
                    scene = 'Title'
                    state = ''
                }

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 8; j++) {
                        if (pointInsideRect(x, y, UI.map.tileStart[0] + UI.map.tileInterval[0] * j, UI.map.tileStart[1] + UI.map.tileInterval[1] * i, UI.map.tileSize[0], UI.map.tileSize[1])) {
                            if (j === game.nextColumn) {
                                selected.tileRow = i
                                selected.tileColumn = j
                                animation.transition = 1

                                if (game.tile[i][j] === 2) {
                                    sceneNext = 'Game'
                                    state = 'Transition'
                                } else if (game.tile[i][j] === 3) {
                                    sceneNext = 'Event'
                                    state = 'Transition'
                                } else if (game.tile[i][j] === 4) {
                                    sceneNext = 'Shop'
                                    state = 'Transition'
                                }
                            }
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
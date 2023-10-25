function loopMap() {
    displayMap()
}

function displayMap() {
    drawSceneInit()

    context.fillText('Choose your next block', UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonBack[0], UI.buttonBack[1], UI.buttonBack[2], UI.buttonBack[3])

    drawMap()

    context.strokeRect(UI.map.buttonDeck[0], UI.map.buttonDeck[1], UI.map.buttonDeck[2], UI.map.buttonDeck[3])
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
                        if (pointInsideRect(x, y, UI.map.cellStart[0] + UI.map.cellInterval[0] * j, UI.map.cellStart[1] + UI.map.cellInterval[1] * i, UI.map.cellSize[0], UI.map.cellSize[1])) {
                            console.log(i, j)

                            if (j === game.nextColumn) {
                                if (map.cell[i][j] === 2) {
                                    game.gameType = 'Concentration'
                                    scene = 'Game'
                                    state = ''
                                    gameInit()
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
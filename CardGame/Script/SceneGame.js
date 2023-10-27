function loopGame() {
    if (game.gameType === 'Concentration') {
        if (state === 'Flip') {
            concentrationFlipHandle()
        }
    }

    displayGame()
}

function displayGame() {
    drawSceneInit()

    if (game.gameType === 'Concentration') {
        drawConcentration()
    }
}

function mouseUpGame(x, y, button) {
    if (pause === false) {
        if (button === 0) {
            if (game.gameType === 'Concentration') {
                if (state === '') {
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 4; j++) {
                            if (pointInsideRectArray(x, y, UI.game.concentration.cardList[i][j])) {
                                concentrationFlipCard(i, j)
                            }
                        }
                    }
                }
            }
        }
    }
}

function keyDownGame(key) {

}

function keyUpGame(key) {

}
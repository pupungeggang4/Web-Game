function loopGame() {
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
                    
                }
            }
        }
    }
}

function keyDownGame(key) {

}

function keyUpGame(key) {

}
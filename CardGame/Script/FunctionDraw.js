function drawSceneInit() {
    context.font = '32px neodgm' 
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    
    context.clearRect(0, 0, 1280, 720)
}

function drawMap() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 8; j++) {
            if (map.cell[i][j] != 0) {
                context.strokeRect(UI.map.cellStart[0] + UI.map.cellInterval[0] * j, UI.map.cellStart[1] + UI.map.cellInterval[1] * i, UI.map.cellSize[0], UI.map.cellSize[1])
            }
        }
    }
}

function drawConcentration() {
    context.fillText(`Concentration Game`, UI.textTitle[0], UI.textTitle[1])

    context.strokeRect(UI.game.concentration.scoreboard[0], UI.game.concentration.scoreboard[1], UI.game.concentration.scoreboard[2], UI.game.concentration.scoreboard[3])

    for (let i = 0; i < 12; i++) {
        context.strokeRect(UI.game.concentration.cardList[i][0], UI.game.concentration.cardList[i][1], UI.game.concentration.cardList[i][2], UI.game.concentration.cardList[i][3])
    }
}
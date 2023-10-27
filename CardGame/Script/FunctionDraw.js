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
    context.fillText(`Move : ${game.concentration.moveLeft}`, UI.game.concentration.moveText[0], UI.game.concentration.moveText[1])
    context.fillText(`Score : ${game.concentration.score}`, UI.game.concentration.scoreText[0], UI.game.concentration.scoreText[1])

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (game.concentration.cardStatus[i][j] === 0) {
                context.drawImage(img.cardBack, UI.game.concentration.cardList[i][j][0], UI.game.concentration.cardList[i][j][1])
            } else if (game.concentration.cardStatus[i][j] === 1) {
                drawCard(game.concentration.card[i][j], UI.game.concentration.cardList[i][j])
            }

            if (game.concentration.cardStatus[i][j] != 2) {
                context.strokeRect(UI.game.concentration.cardList[i][j][0], UI.game.concentration.cardList[i][j][1], UI.game.   concentration.cardList[i][j][2], UI.game.concentration.cardList[i][j][3])
            }
        }
    }
}

function drawCard(card, position) {
    context.font = '32px neodgm'
    
    if (card[0] === 'Fire') {
        context.drawImage(img.fire, position[0] + UI.card.image[0], position[1] + UI.card.image[1])
    }

    if (card[0] === 'Water') {
        context.drawImage(img.water, position[0] + UI.card.image[0], position[1] + UI.card.image[1])
    }

    if (card[0] === 'Wind') {
        context.drawImage(img.wind, position[0] + UI.card.image[0], position[1] + UI.card.image[1])
    }

    if (card[0] === 'Earth') {
        context.drawImage(img.earth, position[0] + UI.card.image[0], position[1] + UI.card.image[1])
    }

    if (card[0] === 'Light') {
        context.drawImage(img.light, position[0] + UI.card.image[0], position[1] + UI.card.image[1])
    }

    if (card[0] === 'Dark') {
        context.drawImage(img.dark, position[0] + UI.card.image[0], position[1] + UI.card.image[1])
    }

    context.fillText(`${card[1]}`, position[0] + UI.card.number[0], position[1] + UI.card.number[1])
}
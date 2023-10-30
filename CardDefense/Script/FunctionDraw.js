function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.fillStyle = 'Black'
    context.lineWidth = 2

    context.clearRect(0, 0, 1280, 720)
}

function drawLevel() {
    context.lineWidth = 10

    for (let i = 1; i < 4; i++) {
        for (let j = 0; j < dataLevel[i]['Next'].length; j++) {
            let tempLevel = dataLevel[i]['Next'][j]
            context.beginPath()
            context.moveTo(Math.floor(dataLevel[i]['Position'][0] - camera[0] + 40), Math.floor(dataLevel[i]['Position'][1] - camera[1] + 40))
            context.lineTo(Math.floor(dataLevel[tempLevel]['Position'][0] - camera[0] + 40), Math.floor(dataLevel[tempLevel]['Position'][1] - camera[1] + 40))
            context.stroke()
        }
    }

    context.lineWidth = 2

    for (let i = 1; i < 4; i++) {
        if (sessionVar.levelStatus[i] === 0) {
            context.drawImage(img.levelLocked, Math.floor(dataLevel[i]['Position'][0] - camera[0]), Math.floor(dataLevel[i]['Position'][1] - camera[1]))
        } else if (sessionVar.levelStatus[i] === 1) {
            context.drawImage(img.levelOpened, Math.floor(dataLevel[i]['Position'][0] - camera[0]), Math.floor(dataLevel[i]['Position'][1] - camera[1]))
        } else if (sessionVar.levelStatus[i] === 2) {
            context.drawImage(img.levelCleared, Math.floor(dataLevel[i]['Position'][0] - camera[0]), Math.floor(dataLevel[i]['Position'][1] - camera[1]))
        }
    }
}

function drawPause() {
    context.fillStyle = 'White'
    context.fillRect(UI.pause.rect[0], UI.pause.rect[1], UI.pause.rect[2], UI.pause.rect[3])
    context.fillStyle = 'Black'
    context.strokeRect(UI.pause.rect[0], UI.pause.rect[1], UI.pause.rect[2], UI.pause.rect[3])

    context.fillText(`Pause`, UI.pause.textPause[0], UI.pause.textPause[1])
    context.strokeRect(UI.pause.buttonResume[0], UI.pause.buttonResume[1], UI.pause.buttonResume[2], UI.pause.buttonResume[3])
    context.fillText(`Resume`, UI.pause.textResume[0], UI.pause.textResume[1])
    context.strokeRect(UI.pause.buttonMap[0], UI.pause.buttonMap[1], UI.pause.buttonMap[2], UI.pause.buttonMap[3])
    context.fillText(`Exit to Map`, UI.pause.textMap[0], UI.pause.textMap[1])
    context.strokeRect(UI.pause.buttonTitle[0], UI.pause.buttonTitle[1], UI.pause.buttonTitle[2], UI.pause.buttonTitle[3])
    context.fillText(`Exit to Title`, UI.pause.textTitle[0], UI.pause.textTitle[1])
}

function drawStart() {
    context.fillStyle = 'White'
    context.fillRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3]) 
    context.fillStyle = 'Black'
    context.strokeRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3])

    context.fillText(`Build your deck.`, UI.game.start.textTitle[0], UI.game.start.textTitle[1])

    context.strokeRect(UI.game.start.card[0], UI.game.start.card[1], UI.game.start.card[2], UI.game.start.card[3])

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 8; j++) {
            context.strokeRect(UI.game.start.card[0] + UI.game.start.cardSize[0] * j, UI.game.start.card[1] + UI.game.start.cardSize[1] * i, UI.game.start.cardSize[0], UI.game.start.cardSize[1])
        }
    }

    context.strokeRect(UI.game.start.deck[0], UI.game.start.deck[1], UI.game.start.deck[2], UI.game.start.deck[3])

    for (let i = 0; i < 9; i++) {
        context.strokeRect(UI.game.start.deck[0], UI.game.start.deck[1] + UI.game.start.deckCardListSize[1] * i, UI.game.start.deckCardListSize[0], UI.game.start.deckCardListSize[1])
    }
    context.strokeRect(UI.game.start.buttonStart[0], UI.game.start.buttonStart[1], UI.game.start.buttonStart[2], UI.game.start.buttonStart[3])
    context.fillText(`Start Game`, UI.game.start.textStart[0], UI.game.start.textStart[1])
}
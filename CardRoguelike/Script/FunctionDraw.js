function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2

    context.clearRect(0, 0, 1280, 720)
}

function drawCharacterSelect() {
    for (let i = 0; i < 6; i++) {
        context.strokeRect(UI.ready.characterSelect[i][0], UI.ready.characterSelect[i][1], UI.ready.characterSelect[i][2], UI.ready.characterSelect[i][3])
    }

    context.strokeStyle = 'Green'
    if (selected.character != -1) {
        context.strokeRect(UI.ready.characterSelect[selected.character][0], UI.ready.characterSelect[selected.character][1], UI.ready.characterSelect[selected.character][2], UI.ready.characterSelect[selected.character][3])
    }
    context.strokeStyle = 'Black'
}

function drawTile() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 8; j++) {
            if (game.tile[i][j] > 0) {
                context.strokeRect(UI.map.tileStart[0] + UI.map.tileInterval[0] * j, UI.map.tileStart[1] + UI.map.tileInterval[1] * i, UI.map.tileSize[0], UI.map.tileSize[1])
            }
        }
    }
}

function drawPause() {
    context.fillStyle = 'White'
    context.fillRect(UI.pause.rect[0], UI.pause.rect[1], UI.pause.rect[2], UI.pause.rect[3])
    context.fillStyle = 'Black'
    context.strokeRect(UI.pause.rect[0], UI.pause.rect[1], UI.pause.rect[2], UI.pause.rect[3])

    context.fillText(`Paused`, UI.pause.textPause[0], UI.pause.textPause[1])
    context.strokeRect(UI.pause.buttonResume[0], UI.pause.buttonResume[1], UI.pause.buttonResume[2], UI.pause.buttonResume[3])
    context.fillText(`Resume`, UI.pause.textResume[0], UI.pause.textResume[1])
    context.strokeRect(UI.pause.buttonExit[0], UI.pause.buttonExit[1], UI.pause.buttonExit[2], UI.pause.buttonExit[3])
    context.fillText(`Exit to title`, UI.pause.textExit[0], UI.pause.textExit[1])
}
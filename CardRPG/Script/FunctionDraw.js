function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2

    context.clearRect(0, 0, 1280, 720)
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
    context.fillText(`Save and Exit`, UI.pause.textExit[0], UI.pause.textExit[1])
}
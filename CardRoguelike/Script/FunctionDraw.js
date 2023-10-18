function drawSceneInit() {
    context.font = '32px opensans'
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
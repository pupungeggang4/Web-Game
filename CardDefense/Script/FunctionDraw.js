function drawSceneInit() {
    context.font = '32px Opensans'
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
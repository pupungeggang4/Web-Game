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

function drawDescription() {
    context.strokeRect(UI.ready.description.rect[0], UI.ready.description.rect[1], UI.ready.description.rect[2], UI.ready.description.rect[3])

    if (selected.character != -1) {
        context.fillText(`${dataCharacter[selected.character]['Element']}`, UI.ready.description.textElement[0], UI.ready.description.textElement[1])
        context.drawImage(img.icon.life, UI.ready.description.iconLife[0], UI.ready.description.iconLife[1])
        context.fillText(`${dataCharacter[selected.character]['Life']}`, UI.ready.description.textLife[0], UI.ready.description.textLife[1])
        context.drawImage(img.icon.energy, UI.ready.description.iconEnergy[0], UI.ready.description.iconEnergy[1])
        context.fillText(`${dataCharacter[selected.character]['Energy']}`, UI.ready.description.textEnergy[0], UI.ready.description.textEnergy[1])
        context.drawImage(img.icon.attack, UI.ready.description.iconAttack[0], UI.ready.description.iconAttack[1])
        context.fillText(`${dataCharacter[selected.character]['Attack']}`, UI.ready.description.textAttack[0], UI.ready.description.textAttack[1])
        context.drawImage(img.icon.sorcery, UI.ready.description.iconSorcery[0], UI.ready.description.iconSorcery[1])
        context.fillText(`${dataCharacter[selected.character]['Sorcery']}`, UI.ready.description.textSorcery[0], UI.ready.description.textSorcery[1])
        context.drawImage(img.icon.hardness, UI.ready.description.iconHardness[0], UI.ready.description.iconHardness[1])
        context.fillText(`${dataCharacter[selected.character]['Hardness']}`, UI.ready.description.textHardness[0], UI.ready.description.textHardness[1])
    }
}

function drawTile() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 8; j++) {
            if (game.tile[i][j] === 1) {
                context.drawImage(img.button.none, UI.map.tileStart[0] + UI.map.tileInterval[0] * j, UI.map.tileStart[1] + UI.map.tileInterval[1] * i)
            } else if (game.tile[i][j] === 2) {
                context.drawImage(img.button.battle, UI.map.tileStart[0] + UI.map.tileInterval[0] * j, UI.map.tileStart[1] + UI.map.tileInterval[1] * i)
            } else if (game.tile[i][j] === 3) {
                context.drawImage(img.button.event, UI.map.tileStart[0] + UI.map.tileInterval[0] * j, UI.map.tileStart[1] + UI.map.tileInterval[1] * i)
            } else if (game.tile[i][j] === 4) {
                context.drawImage(img.button.shop, UI.map.tileStart[0] + UI.map.tileInterval[0] * j, UI.map.tileStart[1] + UI.map.tileInterval[1] * i)
            } else if (game.tile[i][j] === 5) {
                context.drawImage(img.button.boss, UI.map.tileStart[0] + UI.map.tileInterval[0] * j, UI.map.tileStart[1] + UI.map.tileInterval[1] * i)
            }
        }
    }
}

function drawGameUpper() {

}

function drawGameLower() {
    // Status
    context.fillStyle = 'White'
    context.fillRect(UI.game.lower.statRect[0], UI.game.lower.statRect[1], UI.game.lower.statRect[2], UI.game.lower.statRect[3])
    context.fillStyle = 'Black'
    context.strokeRect(UI.game.lower.statRect[0], UI.game.lower.statRect[1], UI.game.lower.statRect[2], UI.game.lower.statRect[3])

    context.drawImage(img.icon.life, UI.game.lower.iconLife[0], UI.game.lower.iconLife[1])
    context.fillText(`${player.life}/${player.lifeMax}`, UI.game.lower.textLife[0], UI.game.lower.textLife[1])
    let lifeBarPixel = Math.min(160, Math.floor(player.life / player.lifeMax * 160))
    context.drawImage(img.barEmpty, UI.game.lower.barLife[0], UI.game.lower.barLife[1])
    context.drawImage(img.barFullLife, 0, 0, lifeBarPixel, UI.game.lower.barLife[3], UI.game.lower.barLife[0], UI.game.lower.barLife[1], UI.game.lower.barLife[2], UI.game.lower.barLife[3])

    context.drawImage(img.icon.energy, UI.game.lower.iconEnergy[0], UI.game.lower.iconEnergy[1])
    context.fillText(`${Math.floor(player.energy)}/${player.energyMax}`, UI.game.lower.textEnergy[0], UI.game.lower.textEnergy[1])
    let energyBarPixel = Math.min(160, Math.floor(player.energy / player.energyMax * 160))
    context.drawImage(img.barEmpty, UI.game.lower.barEnergy[0], UI.game.lower.barEnergy[1])
    context.drawImage(img.barFullEnergy, 0, 0, energyBarPixel, UI.game.lower.barEnergy[3], UI.game.lower.barEnergy[0], UI.game.lower.barEnergy[1], UI.game.lower.barEnergy[2], UI.game.lower.barEnergy[3])

    context.drawImage(img.icon.attack, UI.game.lower.iconAttack[0], UI.game.lower.iconAttack[1])
    context.fillText(`${player.attack}`, UI.game.lower.textAttack[0], UI.game.lower.textAttack[1])
    context.drawImage(img.icon.sorcery, UI.game.lower.iconSorcery[0], UI.game.lower.iconSorcery[1])
    context.fillText(`${player.sorcery}`, UI.game.lower.textSorcery[0], UI.game.lower.textSorcery[1])
    context.drawImage(img.icon.hardness, UI.game.lower.iconHardness[0], UI.game.lower.iconHardness[1])
    context.fillText(`${player.hardness}`, UI.game.lower.textHardness[0], UI.game.lower.textHardness[1])

    // Card
    context.fillStyle = 'White'
    context.fillRect(UI.game.lower.hand[0], UI.game.lower.hand[1], UI.game.lower.hand[2], UI.game.lower.hand[3])
    context.fillStyle = 'Black'
    context.strokeRect(UI.game.lower.hand[0], UI.game.lower.hand[1], UI.game.lower.hand[2], UI.game.lower.hand[3])

    context.strokeRect(UI.game.lower.baseAttack[0], UI.game.lower.baseAttack[1], UI.game.lower.baseAttack[2], UI.game.lower.baseAttack[3])
    context.strokeRect(UI.game.lower.cardBack[0], UI.game.lower.cardBack[1], UI.game.lower.cardBack[2], UI.game.lower.cardBack[3])
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
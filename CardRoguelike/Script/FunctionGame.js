function handleTransition() {
    if (animation.transition < 0) {
        scene = sceneNext

        if (scene === 'Game') {
            state = 'Start'
        } else {
            state = ''
        }
    } else {
        animation.transition -= delta / 1000
    }
}

function adventureInit() {
    player.level = 1
    player.lifeMax = dataCharacter[selected.character]['Life']
    player.energyMax = dataCharacter[selected.character]['Energy']
    player.attack = dataCharacter[selected.character]['Attack']
    player.sorcery = dataCharacter[selected.character]['Sorcery']
    player.hardness = dataCharacter[selected.character]['Hardness']
}

function gameInit() {
    field.playerPosition = [80, 80]
    field.unit = []
}
function gameInit() {
    player.level = 1
    player.energy = 4
    player.energyMax = 6
    player.deckOriginal = []
    player.deckCurrent = []
    player.life = 3

    game.tile = JSON.parse(JSON.stringify(dataLevel[selected.level]['Tile']))
    game.core = [dataLevel[selected.level]['Core'][1] * 80, dataLevel[selected.level]['Core'][0] * 80]
}
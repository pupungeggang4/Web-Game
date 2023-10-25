function adventureInit() {
    player.deck = []

    for (let i = 1; i < 7; i++) {
        player.deck.push(['Fire', i])
        player.deck.push(['Water', i])
        player.deck.push(['Wind', i])
        player.deck.push(['Earth', i])
    }

    game.nextColumn = 1
}

function gameInit() {
    player.deckCurrent = JSON.parse(JSON.stringify(player.deck))

    if (game.gameType === 'Concentration') {
        game.concentration.card = [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ]
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                let index = Math.floor(Math.random() * player.deckCurrent.length)

                game.concentration.card[i][j] = player.deckCurrent.splice(index, 1)[0]
            }
        }
    }
}
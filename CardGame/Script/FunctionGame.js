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

        game.concentration.cardStatus = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                let index = Math.floor(Math.random() * player.deckCurrent.length)

                game.concentration.card[i][j] = player.deckCurrent.splice(index, 1)[0]
            }
        }

        game.concentration.cardFlip = 0
        game.concentration.score = 0
        game.concentration.moveLeft = 10
        game.concentration.cardFlipped = []
        animation.concentration.flip = 0
    }
}

function concentrationFlipCard(row, column) {
    if (game.concentration.cardFlip === 0) {
        if (game.concentration.cardStatus[row][column] === 0) {
            game.concentration.cardFlip = 1
            game.concentration.cardStatus[row][column] = 1
            game.concentration.cardFlipped.push(JSON.parse(JSON.stringify(game.concentration.card[row][column])))
        }
    } else if (game.concentration.cardFlip === 1) {
        if (game.concentration.cardStatus[row][column] === 0) {
            game.concentration.cardFlip = 2
            game.concentration.cardStatus[row][column] = 1
            game.concentration.cardFlipped.push(JSON.parse(JSON.stringify(game.concentration.card[row][column])))
            state = 'Flip'
            animation.concentration.flip = 1
        }
    }
}

function concentrationFlipHandle() {
    if (animation.concentration.flip < 0) {
        if (game.concentration.cardFlipped[0][1] === game.concentration.cardFlipped[1][1]) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 4; j++) {
                    if (game.concentration.cardStatus[i][j] === 1) {
                        game.concentration.cardStatus[i][j] = 2
                    }
                }
            }

            game.concentration.score += 1
        } else {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 4; j++) {
                    if (game.concentration.cardStatus[i][j] != 2) {
                        game.concentration.cardStatus[i][j] = 0
                    }
                }
            }
        }
        state = ''
        game.concentration.cardFlip = 0
        game.concentration.cardFlipped = []
        game.concentration.moveLeft -= 1

        if (game.concentration.moveLeft <= 0) {
            state = 'Result'
        }
    } else {
        animation.concentration.flip -= delta / 1000
    }
}
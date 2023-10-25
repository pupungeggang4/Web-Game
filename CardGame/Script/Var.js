let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let pause = false

let tutorial = ''

let selected = {
    row : -1,
    column : -1,
}

let map = {
    cell : [
        [0, 2, 2, 2, 2, 2, 2, 0],
        [1, 2, 2, 2, 2, 2, 2, 2],
        [0, 2, 2, 2, 2, 2, 2, 0],
    ],
}

let player = {
    life : 60,
    lifeMax : 60,
    deck : [],
    deckCurrent : [],
}

let game = {
    adventure : false,
    gameType : '',
    nextColumn : -1,

    concentration : {
        card : [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ],
    }
}
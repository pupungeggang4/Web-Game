let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let sceneNext = ''
let state = ''
let pause = false

let animation = {
    transition : 0,
}

let selected = {
    character : -1,
    tileRow : -1,
    tileColumn : -1,
}

let player = {
    life : 60,
    lifeMax : 60,
    energy : 8,
    energyMax : 8,
    energyGen : 1,

    attack : 0,
    sorcery : 0,
    hardness : 0,
}

let game = {
    floor : 1,
    nextColumn : 1,
    tile : [
        [0, 2, 3, 2, 2, 4, 2, 0],
        [1, 2, 2, 4, 2, 2, 3, 5],
        [0, 2, 2, 2, 2, 2, 2, 0],
    ],
}

let field = {
    unit : [],
}
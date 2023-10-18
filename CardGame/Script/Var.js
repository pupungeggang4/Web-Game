let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let pause = false

let mode = ''

let map = {
    cell : [
        [0, 2, 3, 2, 2, 2, 3, 0],
        [1, 2, 2, 3, 2, 2, 2, 4],
        [0, 2, 2, 2, 2, 3, 2, 0],
    ],
}

let player = {
    life : 60,
    lifeMax : 60,
    deck : [],
}

let game = {
    adenture : false,
    type : '',
}
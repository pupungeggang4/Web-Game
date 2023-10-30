let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let pause = false
let scenePrevious = ''

let sessionVar = {}
let camera = [0, 0]

let animation = {

}

let selected = {
    level : -1,
}

let player = {
    level : 0,
    energy : 0,
    energyMax : 0,
    hand : [],
    deckOriginal : [],
    deckCurrent : [],
    equipment : [],
    life : 0,
}

let UIVar = {
    deckScroll : 0,
    cardScroll : 0,
}

let game = {
    time : 0,
    wave : [],
    tile : [],
    moveDirection : [],
    core : [],
    spawn : [],
}
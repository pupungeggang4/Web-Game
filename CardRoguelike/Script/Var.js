let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let pause = false

let player = {
    life : 60,
    lifeMax : 60,
    energy : 8,
    energyMax : 8,
    energyGen : 1,
}
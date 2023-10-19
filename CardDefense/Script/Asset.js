let img = {
    levelCleared : new Image(),
    levelOpened : new Image(),
    levelLocked : new Image(),
    card : [],
}

function imageLoad() {
    img.levelCleared.src = 'Image/LevelCleared.png'
    img.levelOpened.src = 'Image/LevelOpened.png'
    img.levelLocked.src = 'Image/LevelLocked.png'
}
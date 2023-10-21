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
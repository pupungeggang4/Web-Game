window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElemenyById('Screen')
    context = canvas.getContext('2d')
}

function errorHandle(err, url, line, column, obj) {

}

function rightClick() {
    return false
}
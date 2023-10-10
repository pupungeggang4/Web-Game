function saveInit() {
    let sessionVar = localStorage.getItem(fileName)

    if (sessionVar === null) {
        localStorage.setItem(fileName, JSON.stringify(emptySave))
    }

    sessionVar = JSON.parse(localStorage.getItem(fileName))
}

function saveData() {
    localStorage.setItem(fileName, JSON.stringify(sessionVar))
}

function loadData() {
    sessionVar = JSON.parse(localStorage.getItem(fileName))
}

function eraseData() {
    localStorage.setItem(fileName, JSON.stringify(emptySave))
    sessionVar = JSON.parse(localStorage.getItem(fileName))
}
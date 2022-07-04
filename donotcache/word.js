function countWord() {
    let wordsCounting = 0
    let charCounting = 0
    let linesCounting = 0
    let words = document.getElementById('words')
    let char = document.getElementById('char')
    let lines = document.getElementById('lines')
    let beseni = document.getElementById('beseni').value

    let wordsArr = beseni.split(' ')
    let linesArr = beseni.split('\n')

    wordsCounting = wordsArr.length
    charCounting = beseni.length
    linesCounting = linesArr.length

    if(beseni == 0) {
        wordsCounting = 0
        linesCounting = 0
    }

    words.innerText = wordsCounting
    char.innerText = charCounting
    lines.innerText = linesCounting
}

function reset() {
    document.getElementById('beseni').value = ''
    let words = document.getElementById('words').innerText = 0
    let char = document.getElementById('char').innerText = 0
    let lines = document.getElementById('lines').innerText = 0
}
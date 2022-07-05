const mainUrl = window.location.href

if(mainUrl.includes('?msgid=777shemdoe')) {
    let tData = mainUrl.split('777shemdoe')
    let msgid = tData[1]
    let size = tData[2]
    let epno = tData[3]

    let wait = document.getElementById('wait')
    let real = document.getElementById('real')
    let waitButton = document.getElementById('waitB')
    let count = 5

    real.setAttribute('onclick', `openTg('${msgid}', '${epno}', '${size}')`)
    document.getElementById('ep').innerText = `${epno} (${size} MB)`


    let interval = setInterval(()=>{
        count-=1
        wait.innerText = count

        if(count == 0) {
            clearInterval(interval)
            waitButton.style.display = 'none'
            real.style.display = 'block'
        }
    }, 1200)
}

else {
    window.open('/', '_self')
}

function openTg(msgid, epno, size) {
    window.open(`tg://resolve?domain=dramastorebot&start=fromWeb${msgid}`)
}
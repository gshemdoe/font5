const mainUrl = window.location.href

if(mainUrl.includes('?nano=')) {
    let nano = mainUrl.split('nano=')[1]

    let wait = document.getElementById('wait')
    let real = document.getElementById('real')
    let waitButton = document.getElementById('waitB')
    let count = 10

    real.setAttribute('onclick', `openTg('${nano}')`)


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
    document.querySelector('.one').style.display = 'none'
}

function openTg(nano) {
    window.open(`tg://resolve?domain=ohmychannelbot&start=${nano}`)
}
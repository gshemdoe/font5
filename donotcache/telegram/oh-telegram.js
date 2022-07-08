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
    }, 1500)
}

else {
    window.open('/', '_self')
}

function openTg(nano) {
    window.open(`tg://resolve?domain=ohmychannelbot&start=${nano}`)
}


//subiri implementation
let wting = document.getElementById('timing5')
let scrollToBtn = document.getElementById('scrollTo')
let subiriCont2 = document.querySelector('.subiriCont2')
let subiriCont1 = document.querySelector('.subiriCont1')
let subiriTime = 5
let ourUserBox = document.getElementById('tgBody')
let subiriMainCont = document.getElementById('subiriMainCont')

ourUserBox.style.display = 'none'

let subiriInterval = setInterval(() => {
    subiriTime--
    wting.innerText = '0' + subiriTime
    if (subiriTime == 0) {
        clearInterval(subiriInterval)
        subiriCont1.style.display = 'none'
        subiriCont2.style.display = 'block'
        ourUserBox.style.display = 'block'
    }
}, 1000)

scrollToBtn.addEventListener('click', () => {
    subiriMainCont.style.display = 'none'
    document.getElementById('ftitleToHide').style.display = 'none'
    
    if(ourUserBox.style.display == 'none') {
        ourUserBox.style.display = 'block'
    }

    ourUserBox.scrollIntoView({
        behavior: 'smooth'
    })
})
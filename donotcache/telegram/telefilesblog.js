function loadTelegramFile() {
    let dynamicBtn = document.getElementById('dynamicBtn')
    let dynamicTitle = document.getElementById('dynamicTitle')
    let mainUrl = window.location.href

    if (mainUrl.includes('#getting-episode-dramaid=')) {
        //mfan0 #getting-episode-dramaid=123&size=544.4&epno=12

        //calling subiri
        document.getElementById('addingPtsBlog').style.display = 'block'
        let scrollTo = document.getElementById('scrollTo')
        scrollTo.setAttribute('onclick', `scrollingFileBtn('tgBodyDSTG')`)
        subiriTimeForFiles(document.getElementById('tgBodyDSTG'))

        let haashUrl = window.location.hash
        let msgid = haashUrl.split('dramaid=')[1].split('&')[0]
        let size = haashUrl.split('&size=')[1].split('&')[0]
        let epno = haashUrl.split('&epno=')[1]

        dynamicBtn.innerText = 'Get File'
        dynamicTitle.innerText = `Download Episode ${epno}`

        let wait = document.getElementById('waitDSTG')
        let real = document.getElementById('realDSTG')
        let waitButton = document.getElementById('waitBDSTG')
        let count = 15

        let dsWeb = document.getElementById('dstweb')
        real.setAttribute('onclick', `openTgDS('${msgid}', '${epno}', '${size}')`)
        dsWeb.setAttribute('href', `https://t.me/dramastorebot?start=fromWeb${msgid}`)
        document.getElementById('ep').innerText = `${epno} (${size} MB)`


        let interval = setInterval(() => {
            count -= 1
            wait.innerText = count

            if (count == 0) {
                clearInterval(interval)
                waitButton.style.display = 'none'
                real.style.display = 'block'
                document.querySelector('.dstweb').style.display = 'flex'
            }
        }, 1500)
    }



    // check if premium ohmy
    if (mainUrl.includes('#getting-full-show-showid=')) {
        //mfan0 #getting-full-show-showid=GHGghdttY
        dynamicBtn.innerText = 'Get File'
        dynamicTitle.innerText = 'Download Full Premium Show'

        let haashUrl = window.location.hash
        let nano = haashUrl.split('showid=')[1]

        //calling subiri
        document.getElementById('addingPtsBlog').style.display = 'block'
        let scrollTo = document.getElementById('scrollTo')
        scrollTo.setAttribute('onclick', `scrollingFileBtn('tgBodyOHTG')`)
        subiriTimeForFiles(document.getElementById('tgBodyOHTG'))

        let wait = document.getElementById('waitOHTG')
        let real = document.getElementById('realOHTG')
        let waitButton = document.getElementById('waitBOHTG')
        let count = 15

        let ohWeb = document.getElementById('ohtweb')
        ohWeb.setAttribute('href', `https://t.me/ohmychannelV2bot?start=fromWeb-${nano}`)
        real.setAttribute('onclick', `openTg('${nano}')`)


        let interval = setInterval(() => {
            count -= 1
            wait.innerText = count

            if (count == 0) {
                clearInterval(interval)
                waitButton.style.display = 'none'
                real.style.display = 'block'
                document.querySelector('.ohtweb').style.display = 'flex'
            }
        }, 1500)
    }
}

loadTelegramFile()


//opening those files
function openTg(nano) {
    window.open(`tg://resolve?domain=ohmychannelV2bot&start=fromWeb-${nano}`)
}

function openTgDS(msgid, epno, size) {
    window.open(`tg://resolve?domain=dramastorebot&start=fromWeb${msgid}`)
}



//important functions
//subiri implementation for files
function subiriTimeForFiles(box) {
    let wting = document.getElementById('timing5Points')
    let subiriCont2 = document.getElementById('subiriCont2Points')
    let subiriCont1 = document.getElementById('subiriCont1Points')
    let subiriTime = 5
    let subiriMainCont = document.getElementById('subiriMainContPoints')


    box.style.display = 'none'

    let subiriInterval = setInterval(() => {
        subiriTime--
        wting.innerText = '0' + subiriTime
        if (subiriTime == 0) {
            clearInterval(subiriInterval)
            subiriCont1.style.display = 'none'
            subiriCont2.style.display = 'block'
            box.style.display = 'block'
        }
    }, 1500)
}


//When scrolling clicked
function scrollingFileBtn(e) {
    let theBox = document.getElementById(e)

    theBox.scrollIntoView({
        behavior: 'smooth'
    })
}
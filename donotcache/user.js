var tarehe = new Date();
var mwaka = tarehe.getFullYear()
var mwezi = tarehe.getMonth() + 1
var leo = tarehe.getDate()
var saa = tarehe.getHours()
var dakika = tarehe.getMinutes()
var sekunde = tarehe.getSeconds()

const domain = `https://netdramastore.herokuapp.com`
// const domain = `http://localhost:3000`


document.getElementById('yaLeo').innerHTML = leo + "/" + mwezi + "/" + mwaka

const real = document.getElementById('real')
const shadow = document.getElementById('shadow')
const wait = document.getElementById('wait')
const youhave = document.getElementById('youhave')
const modalReal = document.querySelectorAll('.modalReal')
const footerbtn = document.querySelector('.footerbtn')
const ftbtn = document.getElementById('ftbtn')
const modalDesc = document.querySelector('.modalDesc')
const dots5 = document.querySelector('.loaderButton')
const spinner4 = document.querySelector('.loaderModal')
const EAT = document.getElementById('eat')
var userId = ''
const fname = document.getElementById('fname')
const mainPoints = document.getElementById('mainPoints')
const epDownloaded = document.getElementById('ep-downloaded')
const stts = document.getElementById('stts')
const modalFname = document.getElementById('pointsModalLabel')
const userbox = document.getElementById('userbox')
let pftitle = document.getElementById('pftitle')
let bodytxt = document.getElementById('bodytxt')

function waiting(points) {
    let counting = 7
    if (points > 4 && points < 40) {
        EAT.innerText = '15 seconds'
        counting = 15
    } else if (points > 39 && points < 60) {
        EAT.innerText = '30 seconds'
        counting = 30
    } else if (points > 59) {
        EAT.innerText = '1 minute'
        counting = 60
    } else if (points < 5) {
        EAT.innerText = '7 seconds'
        counting = 7
    }

    if (points == 0) {
        userbox.classList.add('red')
    } else {
        userbox.classList.remove('red')
    }

    let interval = setInterval(() => {
        counting--
        wait.innerText = counting
        if (counting == 0) {
            real.style.display = 'block'
            shadow.style.display = 'none'
            clearInterval(interval)
        }
    }, 1000)
}

async function loadDramastore() {
    const href = window.location.href

    if (href.includes('?userid=DS')) {
        let id = href.split('?userid=DS')[1].split('/randpage')[0].trim()
        userId = id
        let url = `${domain}/newuser-ds/${id}`

        fname.innerText = 'Loading... ⏳'
        mainPoints.innerText = '⏳'
        epDownloaded.innerText = '⏳'
        stts.innerText = 'Loading... ⏳'

        try {
            let res = await fetch(url)
            let data = await res.json()

            if (data[0].res == 'user not found') {
                let onyo = confirm(`User ID does not exist in our database, You'll be redirected to the homepage`)
                if (onyo == true || onyo == false) {
                    window.open('/', '_self')
                }
            }

            waiting(data[0].points)

            fname.innerText = data[0].fname.substring(0, 24)
            mainPoints.innerText = data[0].points
            epDownloaded.innerText = data[0].downloaded

            if (Number(data[0].points) > 0) {
                stts.innerText = 'Able to get files'
            } else { stts.innerText = 'Unable to get files' }

            let randomPost = Math.floor(Math.random() * data[1].length)
            pftitle.innerText = data[1][randomPost].title
            bodytxt.innerHTML = data[1][randomPost].body.replace(/--/g, '<b>').replace(/__/g, '</b>').replace(/\n/g, '<br>')
            window.document.title = data[1][randomPost].title


        } catch (error) {
            let warn = confirm(`An Error occur while trying to serving the page to you, please try again later \nError: ${error.message}\n\nYou'll be redirected to homepage`)

            if (warn == true || warn == false) {
                window.open('/', '_self')
            }
            console.log(error.message)
        }
    }
}
//calling above function
loadDramastore()


real.addEventListener('click', async () => {
    try {
        let res = await fetch(`${domain}/dramastore-add-points/user/${userId}`, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
        })
        let data = await res.json()
        modalFname.innerText = data.fname.substring(0, 24)
        youhave.innerText = data.points
        mainPoints.innerText = data.points
        dots5.style.display = 'none'
        spinner4.style.display = 'none'

        let rano2 = Math.floor(1000 + Math.random() * 9000)
        ftbtn.setAttribute('href', `/pages/users.html?userid=DS${userId}/randpage/${rano2}`)

        footerbtn.style.display = 'block'
        modalDesc.style.display = 'flex'
        real.style.display = 'none'
        shadow.style.display = 'block'

    } catch (err) {
        let errorWindow = window.open("")
        errorWindow.document.write(err.message + "<br></h3><h3>Error! Failed to add points, Telegram the screenshot of this error to @shemdoe</h3>")
        console.log(err.message)
    }
})

function closeModal() {
    let rano = Math.floor(1000 + Math.random() * 9000)
    window.open(`/pages/users.html?userid=DS${userId}/randpage/${rano}`, '_self')
}

async function loadPost() {
    const url = window.location.href
    const getUrl = `https://netdramastore.herokuapp.com/blog`
    // const getUrl = `http://localhost:3000/blog`

    if (url.includes('?id=')) {
        let postId = url.split('?id=')[1].trim()
        let mainBody = document.querySelector('.mainBody')
        let loader = document.querySelector('.loader')
        let titleH = document.getElementById('titleH')
        let ptitle = document.getElementById('ptitle')
        let pdate = document.getElementById('pdate')
        let pbody = document.getElementById('pbody')
        let tags = document.getElementById('tags')

        let recents = document.getElementById('recents')
        let popular = document.getElementById('popular')

        let postCont = document.getElementById('postCont')

        let res = await fetch(`${getUrl}/${postId}`)
        if (res.status == 404 || res.status == 300) {
            let con = confirm('Post not found or there is an error with the connection, press OK to go to homepage')

            if (con == true) {
                window.open('/', '_self')
            } else {
                window.open('/', '_self')
            }
        }

        let data = await res.json()
        //showing the post
        document.title = data[0].title
        titleH.innerText = data[0].title
        ptitle.innerText = data[0].title
        pdate.innerText = new Date(data[0].createdAt).toLocaleString('en-us')
        pbody.innerHTML = data[0].body.replace(/--/g, '<b>').replace(/__/g, '</b>').replace(/\n/g, '<br>')
        data[0].tags.forEach(tag => {
            let child = document.createElement('div')
            child.setAttribute('class', 'tag')
            child.innerHTML = `<i class="fa-solid fa-tag"></i> ${tag}`
            tags.appendChild(child)
        })

        //showing recent posts
        data[1].forEach(rp => {
            let rpost = document.createElement('div')
            rpost.classList.add('post')
            rpost.setAttribute('onclick', `openPost('${rp._id}')`)
            rpost.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${rp.title}`
            recents.appendChild(rpost)
        })

        //showing popular posts
        data[2].forEach(pp => {
            let ppost = document.createElement('div')
            ppost.classList.add('post')
            ppost.setAttribute('onclick', `openPost('${pp._id}')`)
            ppost.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${pp.title}`
            popular.appendChild(ppost)

            //you may like
            let flexPosts = document.createElement('div')
            flexPosts.classList.add('flexPosts')
            flexPosts.setAttribute('onclick', `openPost('${pp._id}')`)
            flexPosts.innerHTML = `<div class="fpheader">${pp.title}</div><div class="desc">${pp.body.substring(0, 200)}... <span class="readMore" onclick="openPost('${pp._id}')">READ MORE</span></div><div class="fpfooter"></div>`
            postCont.appendChild(flexPosts)
        })

        //showing page if its not dynamic and not telegram files
        if (!url.includes('#adding')) {
            mainBody.style.display = 'block'
            loader.style.display = 'none'
        }

    } else {
        window.open('/', '_self')
    }
}

loadPost()

//oepening side posts
function openPost(id) {
    window.open(`/blog/post.html?id=${id}`, '_self')
}






// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// loading Dramastore Points Info
async function loadDSPoints() {
    let mainUrl = window.location.href
    let hashUrl = window.location.hash

    if (mainUrl.includes('?id=') && mainUrl.includes('#adding-points-dramastore')) {
        let thePostId = mainUrl.split('?id=')[1].split('#adding')[0]
        let theUserId = hashUrl.split('userid=DS')[1]
        let mainBody = document.querySelector('.mainBody')
        let loader = document.querySelector('.loader')

        document.getElementById('dynamicBtn').innerText = 'Go To Add Points'
        document.getElementById('dynamicTitle').innerText = 'Adding Points'

        let scrollTo = document.getElementById('scrollTo')
        scrollTo.setAttribute('onclick', `scrollingBtn('userboxDS')`)

        let dramastoreTableAndUserBoxCont = document.querySelector('.dramastoreTableAndUserBoxCont')
        let userboxDS = document.getElementById('userboxDS')
        let shadowDS = document.getElementById('shadowDS')
        let realDS = document.getElementById('realDS')
        let sttsDS = document.getElementById('sttsDS')
        let waitDS = document.getElementById('waitDS')
        let epDownloadedDS = document.getElementById('ep-downloadedDS')
        let mainPointsDS = document.getElementById('mainPointsDS')
        let fnameDS = document.getElementById('fnameDS')
        let eatds = document.getElementById('eatds')
        let addingPtsBlog = document.querySelector('.addingPtsBlog')
        let ftbtn = document.getElementById('ftbtnDS')
        let closeModalXDS = document.getElementById('closeModalXDS')


        const DSuserInfo = `https://netdramastore.herokuapp.com/dsuser/info/${thePostId}/${theUserId}`

        try {
            let res = await fetch(DSuserInfo)
            if (res.status == 500) {
                let ntfound = alert('User does not exist, click ok to go to homepage')

                if (ntfound == true || ntfound == false) {
                    window.open('/', '_self')
                }
            }

            else if (res.status == 501) {
                let ntfound = alert('Opps! Internal Error.... Report this to @shemdoe')

                if (ntfound == true || ntfound == false) {
                    window.open('/', '_self')
                }
            }

            let data = await res.json()

            // calling subiri implementation
            addingPtsBlog.style.display = 'block'
            subiriTime(userboxDS)

            //showing pages ///// important
            mainBody.style.display = 'block'
            loader.style.display = 'none'

            //injecting user data
            fnameDS.innerText = data[0].fname.substring(0, 22)
            mainPointsDS.innerText = data[0].points
            epDownloadedDS.innerText = data[0].downloaded

            dramastoreTableAndUserBoxCont.style.display = 'block'

            //calling waiting and table function
            waiting(data[0].points, userboxDS, waitDS, realDS, shadowDS, eatds, sttsDS)
            loadTable(data[2])

            //Add random post to footerBtn
            let rn = Math.floor(Math.random() * data[1].length)
            let rnPst = data[1][rn]._id
            ftbtn.setAttribute('href', `/blog/post.html?id=${rnPst}#adding-points-dramastore-userid=DS${theUserId}`)
            closeModalXDS.setAttribute('onclick', `window.open('/blog/post.html?id=${rnPst}#adding-points-dramastore-userid=DS${theUserId}', '_self')`)

        } catch (err) {
            alert(`Error: ${err.message} \n\nYou will be redirected to homepage in 3 seconds`)
            setTimeout(() => { window.open('/', '_self') }, 3000)
        }

    }
}
loadDSPoints()


//ADDING POINTS BTN DRAMASTORE
document.getElementById('realDS').addEventListener('click', async () => {

    //let domain = 'http://localhost:3000'
    let domain = 'https://netdramastore.herokuapp.com'
    let hashUrl = window.location.hash
    let userId = hashUrl.split('userid=DS')[1]

    try {
        let res = await fetch(`${domain}/dramastore-add-points/user/${userId}`, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
        })
        let data = await res.json()

        let modalFname = document.getElementById('pointsModalLabelDS')
        let youhave = document.getElementById('youhaveDS')
        let mainPoints = document.getElementById('mainPointsDS')
        let dots5 = document.getElementById('loaderModalDS')
        let spinner4 = document.getElementById('loaderBtn')
        let modalDesc = document.getElementById('modalDescDS')
        let ftbtn = document.getElementById('ftbtnDS')

        modalFname.innerText = data.fname.substring(0, 24)
        youhave.innerText = data.points
        mainPoints.innerText = data.points
        dots5.style.display = 'none'
        spinner4.style.display = 'none'

        ftbtn.style.display = 'block'
        modalDesc.style.display = 'flex'
        document.getElementById('realDS').style.display = 'none'
        document.getElementById('shadowDS').style.display = 'block'

    } catch (err) {
        let errorWindow = window.open("")
        errorWindow.document.write(err.message + "<br></h3><h3>Error! Failed to add points, Telegram the screenshot of this error to @shemdoe</h3>")
        console.log(err.message)
    }
})

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// loading OHMY Points Info
async function loadOHPoints() {
    let mainUrl = window.location.href
    let hashUrl = window.location.hash

    if (mainUrl.includes('?id=') && mainUrl.includes('#adding-points-ohmy')) {
        let thePostId = mainUrl.split('?id=')[1].split('#adding')[0]
        let theUserId = hashUrl.split('userid=OH')[1]
        let mainBody = document.querySelector('.mainBody')
        let loader = document.querySelector('.loader')

        document.getElementById('dynamicBtn').innerText = 'Go To Add Points'
        document.getElementById('dynamicTitle').innerText = 'Adding Points'

        let scrollTo = document.getElementById('scrollTo')
        scrollTo.setAttribute('onclick', `scrollingBtn('userboxOH')`)

        let userboxOH = document.getElementById('userboxOH')
        let shadowOH = document.getElementById('shadowOH')
        let realOH = document.getElementById('realOH')
        let sttsOH = document.getElementById('sttsOH')
        let waitOH = document.getElementById('waitOH')
        let mainPointsOH = document.getElementById('mainPointsOH')
        let fnameOH = document.getElementById('fnameOH')
        let eatoh = document.getElementById('eatoh')
        let addingPtsBlog = document.querySelector('.addingPtsBlog')
        // let ftbtn = document.getElementById('ftbtnOH')
        let closeModalXOH = document.getElementById('closeModalXOH')


        const OHuserInfo = `https://netdramastore.herokuapp.com/ohuser/info/${thePostId}/${theUserId}`

        try {
            let res = await fetch(OHuserInfo)
            if (res.status == 500) {
                let ntfound = alert('User does not exist, click ok to go to homepage')

                if (ntfound == true || ntfound == false) {
                    window.open('/', '_self')
                }
            }

            else if (res.status == 501) {
                let ntfound = alert('Opps! Internal Error.... Report this to admin of OH MY Channel')

                if (ntfound == true || ntfound == false) {
                    window.open('/', '_self')
                }
            }

            let data = await res.json()

            // calling subiri implementation
            addingPtsBlog.style.display = 'block'
            subiriTime(userboxOH)

            //showing pages ///// important
            mainBody.style.display = 'block'
            loader.style.display = 'none'

            //injecting user data
            fnameOH.innerText = data[0].name.substring(0, 22)
            mainPointsOH.innerText = data[0].points

            //calling waiting and table function
            waiting(data[0].points, userboxOH, waitOH, realOH, shadowOH, eatoh, sttsOH)

            //Add random post to footerBtn
            let rn = Math.floor(Math.random() * data[1].length)
            let rnPst = data[1][rn]._id
            // ftbtn.setAttribute('href', `/blog/post.html?id=${rnPst}#adding-points-ohmy-userid=OH${theUserId}`)
            closeModalXOH.setAttribute('onclick', `window.open('/blog/post.html?id=${rnPst}#adding-points-ohmy-userid=OH${theUserId}', '_self')`)

        } catch (err) {
            alert(`Error: ${err.message} \n\nYou will be redirected to homepage in 3 seconds`)
            setTimeout(() => { window.open('/', '_self') }, 3000)
        }

    }
}
loadOHPoints()


//ADDING POINTS BTN OHMY BOT
// document.getElementById('realOH').addEventListener('click', async () => {

//     //let domain = 'http://localhost:3000'
//     let domain = 'https://netdramastore.herokuapp.com'
//     let hashUrl = window.location.hash
//     let userId = hashUrl.split('userid=OH')[1]

//     try {
//         let res = await fetch(`${domain}/ohmy-add-points/user/${userId}`, {
//             method: 'GET',
//             mode: 'cors',
//             headers: { 'Content-Type': 'application/json' }
//         })
//         let data = await res.json()

//         let modalFname = document.getElementById('pointsModalLabelOH')
//         let youhave = document.getElementById('youhaveOH')
//         let mainPoints = document.getElementById('mainPointsOH')
//         let dots5 = document.getElementById('loaderModalOH')
//         let spinner4 = document.getElementById('loaderBtnOH')
//         let modalDesc = document.getElementById('modalDescOH')
//         let ftbtn = document.getElementById('ftbtnOH')

//         modalFname.innerText = data.name.substring(0, 24)
//         youhave.innerText = data.points
//         mainPoints.innerText = data.points
//         dots5.style.display = 'none'
//         spinner4.style.display = 'none'

//         ftbtn.style.display = 'block'
//         modalDesc.style.display = 'flex'
//         document.getElementById('realOH').style.display = 'none'
//         document.getElementById('shadowOH').style.display = 'block'

//     } catch (err) {
//         let errorWindow = window.open("")
//         errorWindow.document.write(err.message + "<br></h3><h3>Error! Failed to add points, Telegram the screenshot of this error to Oh MY! Admin</h3>")
//         console.log(err.message)
//     }
// })

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%





//important functions
function waiting(points, userbox, waitbar, real, shadow, EAT, stts) {
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

    if (points <= 2) {
        stts.innerText = 'Unable to get files'
    } else {
        stts.innerText = 'Able to get files'
    }

    let interval = setInterval(() => {
        counting--
        waitbar.innerText = counting
        if (counting == 0) {
            real.style.display = 'block'
            shadow.style.display = 'none'
            clearInterval(interval)
        }
    }, 1000)
}



// Table JS
async function loadTable(data) {
    let spinnerTable = document.getElementById('spinnerTable')
    let rankTable = document.getElementById('rankTable')
    let ranktbody = document.getElementById('ranktbody')

    spinnerTable.style.display = 'none'
    rankTable.style.display = 'table'

    data.forEach((user, index) => {
        let tr = document.createElement('tr')
        if (user.userId == 1473393723) {
            tr.innerHTML = `<th scope="row">${index + 1}</th><td>𝑺𝒉𝒆𝒎𝒅𝒐𝒆<span class="admin">admin</span></td><td>${user.points}</td><td>${user.downloaded}</td>`
            ranktbody.appendChild(tr)
        }
        else {
            tr.innerHTML = `<th scope="row">${index + 1}</th><td>${user.fname.substring(0, 16)}</td><td>${user.points}</td><td>${user.downloaded}</td>`
            ranktbody.appendChild(tr)
        }

    })
}


//subiri implementation for Points
function subiriTime(box) {
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


//when addin points btn clicked
function scrollingBtn(e) {
    let theBox = document.getElementById(e)

    theBox.scrollIntoView({
        behavior: 'smooth'
    })
}
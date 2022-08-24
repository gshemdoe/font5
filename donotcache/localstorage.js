function local_storage_setup() {
    let forLocalMainUrl = window.location.href
    let forLocalHashUrl = window.location.hash

    if (forLocalMainUrl.includes('?id=') && forLocalMainUrl.includes('#adding-points-dramastore')) {
        let for_local_userid = forLocalHashUrl.split('userid=DS')[1]
        if (!localStorage.getItem('ds_id')) {
            localStorage.setItem('ds_id', `${for_local_userid}`)
        } else {
            let prevId = localStorage.getItem('ds_id')
            if(for_local_userid != prevId) {
                localStorage.removeItem('ds_id')
                localStorage.setItem('ds_id', for_local_userid)
            }
        }
    }

    if (forLocalMainUrl.includes('?id=') && forLocalMainUrl.includes('#adding-points-ohmy')) {
        let for_local_userid = forLocalHashUrl.split('userid=OH')[1]
        if (!localStorage.getItem('oh_id')) {
            localStorage.setItem('oh_id', `${for_local_userid}`)
        } else {
            let prevId = localStorage.getItem('oh_id')
            if(for_local_userid != prevId) {
                localStorage.removeItem('oh_id')
                localStorage.setItem('oh_id', for_local_userid)
            }
        }
    }
}

local_storage_setup()


//checking if exist add option to send directly
function local_storage_send_direct() {
    let forLocalMainUrl = window.location.href

    if (forLocalMainUrl.includes('?id=') && forLocalMainUrl.includes('#getting-episode-dramaid')) {
        let haashUrl = window.location.hash
        let msgid = haashUrl.split('dramaid=')[1].split('&')[0]
        if (localStorage.getItem('ds_id') != null) {
            document.querySelector('.or_ds').style.display = 'block'
            let req_ds_tg = document.getElementById('req_ds_tg')
            req_ds_tg.setAttribute('onclick', `send_ds_tg('${msgid}')`)
            req_ds_tg.style.display = 'block'
        }
    }

    if (forLocalMainUrl.includes('?id=') && forLocalMainUrl.includes('#getting-full-show-showid')) {
        let haashUrl = window.location.hash
        let nano = haashUrl.split('showid=')[1]
        if (localStorage.getItem('oh_id') != null) {
            document.querySelector('.or_oh').style.display = 'block'
            let req_oh_tg = document.getElementById('req_oh_tg')
            req_oh_tg.setAttribute('onclick', `send_oh_tg('${nano}')`)
            req_oh_tg.style.display = 'block'
        }
    }
}

local_storage_send_direct()


//make bot sendfile
async function send_ds_tg(msgid) {
    let domain = 'https://netdramastore.herokuapp.com'
    //let domain = 'http://localhost:3000'
    let id = localStorage.getItem('ds_id')
    let res = await fetch(`${domain}/direct-ds-send/${id}/${msgid}`)

    if(res.status == 200) {
        let cf = confirm('✔ File sent successfully to your inbox, return to Telegram to download it.')

        if(cf == true || cf == false) {
            window.location.reload()
        }
    }
    else if (res.status == 404) {
        let cf = confirm(`Ooops! I couldn't send this file to you, the possible reason is that, you blocked Dramastore Bot on Telegram. Close this message and click "OPEN IN TELEGRAM" button to continue`)
    }
}

async function send_oh_tg(nano) {
    let domain = 'https://netdramastore.herokuapp.com'
    //let domain = 'http://localhost:3000'
    let id = localStorage.getItem('oh_id')
    let res = await fetch(`${domain}/direct-oh-send/${id}/${nano}`)

    if(res.status == 200) {
        let cf = confirm('✔ File sent successfully to your inbox, return to Telegram to watch it')

        if(cf == true || cf == false) {
            window.location.reload()
        }
    }
    else if (res.status == 404) {
        let cf = confirm(`Ooops! I couldn't send this file to you, the possible reason is that, you blocked Booster Bot on Telegram or you never interacted with it. Close this message and click "OPEN IN TELEGRAM" button to continue`)
    }
}


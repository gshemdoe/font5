// js for tos pages

const getUrl = `https://netdramastore.herokuapp.com/recent-popular/all-posts`

async function loadSidePost() {
    let mainBody = document.querySelector('.mainBody')
    let loader = document.querySelector('.loader')
    let recents = document.getElementById('recents')
    let popular = document.getElementById('popular')

    let res = await fetch(`${getUrl}`)
    if (res.status == 404 || res.status == 300) {
        let con = confirm('Post not found or there is an error with the connection, press OK to go to homepage')

        if (con == true) {
            window.open('/', '_self')
        } else {
            window.open('/', '_self')
        }
    }

    let data = await res.json()

    //showing random post to telegram files
    if (document.getElementById('tgpftitle') != null) {
        let tgpftitle = document.getElementById('tgpftitle')
        let tgbodytxt = document.getElementById('tgbodytxt')

        let randomPost = Math.floor(Math.random() * data[1].length)
        tgpftitle.innerText = data[1][randomPost].title
        tgbodytxt.innerHTML = data[1][randomPost].body.replace(/--/g, '<b>').replace(/__/g, '</b>').replace(/\n/g, '<br>')
        window.document.title = data[1][randomPost].title
    }


    //showing recent posts
    data[0].forEach(rp => {
        //for side posts
        let rpost = document.createElement('div')
        rpost.classList.add('post')
        rpost.setAttribute('onclick', `openPost('${rp._id}')`)
        rpost.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${rp.title}`
        recents.appendChild(rpost)
    })

    //showing popular posts
    data[1].forEach(pp => {
        let ppost = document.createElement('div')
        ppost.classList.add('post')
        ppost.setAttribute('onclick', `openPost('${pp._id}')`)
        ppost.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${pp.title}`
        popular.appendChild(ppost)
    })

    //showing page
    setTimeout(() => {
        mainBody.style.display = 'block'
        loader.style.display = 'none'
    }, 2000)
}

loadSidePost()

//oepening side posts
function openPost(id) {
    window.open(`/blog/post.html?id=${id}`, '_self')
}
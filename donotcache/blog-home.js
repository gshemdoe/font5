// js for tos pages

const getUrl = `https://netdramastore.herokuapp.com/recent-popular/all-posts`

async function loadSidePost() {
    let mainBody = document.querySelector('.mainBody')
    let loader = document.querySelector('.loader')
    let recents = document.getElementById('recents')
    let popular = document.getElementById('popular')

    let postCont = document.getElementById('postCont')

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
    console.log(data)

    //showing recent posts
    data[0].forEach(rp => {
        //for side posts
        let rpost = document.createElement('div')
        rpost.classList.add('post')
        rpost.setAttribute('onclick', `openPost('${rp._id}')`)
        rpost.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${rp.title}`
        recents.appendChild(rpost)

        //for home posts
        let flexPosts = document.createElement('div')
        flexPosts.classList.add('flexPosts')
        flexPosts .setAttribute('onclick', `openPost('${rp._id}')`)
        flexPosts.innerHTML = `<div class="fpheader">${rp.title}</div><div class="desc">${rp.body.substring(0,200)}... <span class="readMore" onclick="openPost('${rp._id}')">READ MORE</span></div><div class="fpfooter"></div>`
        postCont.appendChild(flexPosts)
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
    mainBody.style.display = 'block'
    loader.style.display = 'none'
}

loadSidePost()

//oepening side posts
function openPost(id) {
    window.open(`/blog/post.html?id=${id}`, '_self')
}
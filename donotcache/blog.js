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

        //showing page
        mainBody.style.display = 'block'
        loader.style.display = 'none'
    } else {
        window.open('/', '_self')
    }
}

loadPost()

//oepening side posts
function openPost(id) {
    window.open(`/blog/post.html?id=${id}`, '_self')
}
const mainUrl = window.location.href

if(mainUrl.includes('?nano=')) {
    let nano = mainUrl.split('nano=')[1]

    let posts = [
        '62c84d54da06342665e31fb7',
        '62ca86111afa2af6f7a1026c',
        '62cd8fbe9de0786aafdb98b7',
        '62df23671eef6dabf5feecde',
        '63212e1f6eeba4e82a45bd27',
        '632e58662744c9849dd69ba1',
        '632e5c7d2744c9849dd69c0a'
    ]
    let rnp = Math.floor(Math.random() * posts.length)

    let url = `/blog/post.html?id=${posts[rnp]}#getting-full-show-showid=${nano}`

    window.open(url, '_self')
}
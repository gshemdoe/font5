const mainUrl = window.location.href

if(mainUrl.includes('?msgid=777shemdoe')) {
    let tData = mainUrl.split('777shemdoe')
    let msgid = tData[1]
    let size = tData[2]
    let epno = tData[3]

    let posts = [
        '62c84d54da06342665e31fb7',
        '62ca86111afa2af6f7a1026c',
        '62cd8fbe9de0786aafdb98b7',
        '62df23671eef6dabf5feecde'
    ]
    let rrnp = Math.floor(Math.random() * posts.length)

    let url = `/blog/post.html?id=${posts[rrnp]}#getting-episode-dramaid=${msgid}&size=${size}&epno=${epno}`
    window.open(url, '_self')
}
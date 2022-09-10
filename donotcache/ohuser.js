var tarehe = new Date();
var mwaka = tarehe.getFullYear()
var mwezi = tarehe.getMonth() + 1
var leo = tarehe.getDate()
var saa = tarehe.getHours()
var dakika = tarehe.getMinutes()
var sekunde = tarehe.getSeconds()

const domain = `https://web-production-9956.up.railway.app`
// const domain = `http://localhost:3000`


document.getElementById('yaLeo').innerHTML = leo + "/" + mwezi + "/" + mwaka

function redirectingOhUsersToPointsBlog() {
    const href = window.location.href

    if (href.includes('?userid=OH')) {
        let id = href.split('?userid=OH')[1].split('/randpage')[0].trim()

        window.open(`/blog/post.html?id=62c84d54da06342665e31fb7#adding-points-ohmy-userid=OH${id}`, '_self')
    }
}
redirectingOhUsersToPointsBlog()
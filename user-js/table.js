// to avoid variable confilicts assign variable with unique names

let domainForTableJs = `http://localhost:3000`
let spinnerTable = document.getElementById('spinnerTable')
let rankTable = document.getElementById('rankTable')
let ranktbody = document.getElementById('ranktbody')

async function loadTable() {
    if (window.location.href.includes("?userid=DS")) {
        let res = await fetch(`${domainForTableJs}/users-ds/table`)
        let data = await res.json()
        spinnerTable.style.display = 'none'
        rankTable.style.display = 'table'

        data.forEach((user, index) => {
            let tr = document.createElement('tr')
            if (user.userId == 1473393723) {
                tr.innerHTML = `<th scope="row">${index + 1}</th><td>𝑺𝒉𝒆𝒎𝒅𝒐𝒆<span class="admin">admin</span></td><td>${user.points}</td><td>${user.downloaded}</td>`
                ranktbody.appendChild(tr)
            }
            else {
                tr.innerHTML = `<th scope="row">${index + 1}</th><td>${user.fname.substring(0,16)}</td><td>${user.points}</td><td>${user.downloaded}</td>`
                ranktbody.appendChild(tr)
            }

        })
    } else {
        spinnerTable.style.display = 'none'
    }
}
loadTable()
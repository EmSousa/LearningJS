const frmGame = document.querySelector("#frmGame")

frmGame.addEventListener("submit", function(event) {
    const txtGameYear = document.querySelector("#txtGameYear").value
    const currentYear = new Date().getFullYear()

    if(txtGameYear > 1950 && txtGameYear <= currentYear) {
        alert("Validação OK")
        addGameTable()
        frmGame.reset()
    } else {
        alert("erro")
    }

    event.preventDefault()

})


function addGameTable() {
    const table = document.querySelector("table")
    const gameName = document.querySelector("#txtGameName").value
    const gameYear = document.querySelector("#txtGameYear").value
    const gameGenre = document.querySelector("#txtGameGenre").value
    const gameCover = document.querySelector("#txtGameCover").value

    table.innerHTML += `
        <tr>
            <td>${gameName}</td>
            <td>${gameYear}</td>
            <td>${gameGenre}</td>
            <td><img src="${gameCover}"/></td>
            <td></td>
        </tr>
    `

}
//array de filmes
const movies = []

const frmMovie = document.querySelector("form")

document.querySelector("#movieYear").max = new Date().getFullYear()

frmMovie.addEventListener("submit", function (event) {
    //obter os valores dos elementos no formulário
    const movieName = document.querySelector("#movieName").value
    const movieGenre = document.querySelector("#movieGenre").value
    const movieYear = document.querySelector("#movieYear").value
    const movieCover = document.querySelector("#movieCover").value
    const movieTrailer = document.querySelector("#movieTrailer").value
    //1.Verificar se título já existe no array
    if (isTitleAvailable(movieName) === true) {
        //2.se não existir
        //2.1 criar um objeto Movie
        const movie = {
            title: movieName,
            genre: movieGenre,
            year: movieYear,
            cover: movieCover,
            trailer: movieTrailer
        }
        //2.2 inserir o objeto Movie no array movies
        movies.push(movie)
        renderTable()     
        console.table(movies)
    }  else {
        //3.se existir
            //3.1 informar o utilizador que o filme já existe
        alert("O filme já está existe!")
    } 
    
        


    event.preventDefault()

})

//Funções auxiliares
function isTitleAvailable(movieName) {
    for (const movie of movies) {
        if (movie.title.toLowerCase() === movieName.toLowerCase()) {
            return false;
        }
    }
    return true;
}

//preencher a tabela com o array movies
function renderTable(){
    //1.obter uma referência à tabela
    const table = document.querySelector("table")
    //2.Alimentar a tabela
    table.innerHTML = `
    <tr>
        <th>Título</th>
        <th>Género</th>
        <th>Opções</th>
    </tr>`
    for (const movie of movies) {
        table.innerHTML += `
        <tr>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>
                <button onClick='showCover("${movie.cover}")'>Ver Capa</button>
                <button>Ver Tabela</button>
                <button>Remover</button>
            </td>
        </tr>`        
    }
}

function showCover(movieCover){
    const dialog = document.querySelector("#dlgCover")
    const img = dialog.querySelector("img")
    img.src = movieCover
    dialog.showModal();
}
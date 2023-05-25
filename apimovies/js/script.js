//variavel para armazenar a chave da api
const API_KEY = "94d6ddd93db63868c339b12a2610f37e"

//criamos a função assincrona para buscar os filmes

async function getMovies(){
    try {
        //cria uma variavel para amarzenar a resposta do link
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        //criar uma variavel para armazenar em json
        let data = await response.json();
        //passo esse json para uma função que exibira os dados no html
        displayMovie(data.results);
    } catch (error){
        console.log(error);

    }
}

//criar função para mostra os dados no html
function displayMovie(movies){
    let moviesContainer = document.getElementById("moviesContainer");
    moviesContainer.innerHTML = "";

    movies.forEach(movie => {
        let movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <h2>${movie.title} </h2>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <p> ${movie.overview}</P>
        `;
        moviesContainer.appendChild(movieElement);
        
    });
   
}
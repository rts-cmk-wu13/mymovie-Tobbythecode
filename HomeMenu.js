/**
 * Extract id as string from url to pokemon
 * @param {string} file_path - a url to a pokemon from pokeApi 
 * @returns {string}
 */
function getIdFromMovie(file_path) {
    return file_path
}
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjQ4ZmQyNzBjNGI0OWI4ODIzODMxZTdlMTA0M2FmYyIsIm5iZiI6MTc0MDk4NjkwMi42NzI5OTk5LCJzdWIiOiI2N2M1NWExNjQ4ZWU5MDE1YWI3YTc3YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Lre4Qu-_NH8YEQO6z2q3eOHutIoWccifEn4xgvG04Po'
    }
  };
  





    let headerElm = document.createElement("nav");
headerElm.className = "Header_main"

headerElm.innerHTML = `
<section class="navContainer">
<nav class="Movie__navbar">
    <figure>
    <img src="" alt="placeholder.png">
</figure>

<h1>MyMovies</h1>

<button>
    lights
</button>
</nav>


</section>
</section>


`
document.querySelector("header").append(headerElm)
;

 let mainELm = document.createElement("section")

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

.then(function(response) {
    return response.json()

}).then(
    function(data) {
   mainELm.innerHTML +=  data.results.map(movie => `
<div class="movie_poster-container" >
<article>
<img src="${baseUrl}/${getIdFromMovie(movie.poster_path)}" alt="">
<p>${movie.original_title}</p>
</article>
</div>
`).join("")
document.querySelector("main").append(mainELm)

   
}
)


   
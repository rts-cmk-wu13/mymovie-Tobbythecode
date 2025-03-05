

/**
 * 
 * @param {string} file_path 
 * @returns {string}
 */

const baseUrl = 'https://image.tmdb.org/t/p/w500';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjQ4ZmQyNzBjNGI0OWI4ODIzODMxZTdlMTA0M2FmYyIsIm5iZiI6MTc0MDk4NjkwMi42NzI5OTk5LCJzdWIiOiI2N2M1NWExNjQ4ZWU5MDE1YWI3YTc3YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Lre4Qu-_NH8YEQO6z2q3eOHutIoWccifEn4xgvG04Po'
    }
  };
  



let search = window.location.search;
let params = new URLSearchParams(search);
let movie = params.get("movie");



fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US&page=1&append_to_response=credits`, options)
  .then(function(response) {
    return response.json()

}).then(  
    function(data) {


let mainElm = document.createElement("section");
mainElm.className = "main_main "

mainElm.innerHTML = `
<section class="navContainer ">
<nav class="Movie__navbar ">
    <figure>
 <img class=" full-width"  src="${baseUrl}/${data.backdrop_path}" alt="">
</figure> 
<p>${Math.floor(movie.runtime/60)}h ${(movie.runtime%60)}min </p>

<p>${data.original_title}</p>  

</section>



`
document.querySelector("main").append(mainElm)
;

    })
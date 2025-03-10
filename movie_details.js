

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



fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US&page=1&append_to_response=credits,release_dates`, options)


  .then(function(response) {
    return response.json()

}).then(  
    function(movie) {

      let headerElm = document.createElement("div");
      headerElm.className = "Header_main"  
      headerElm.innerHTML = `
  <figure class="backdrop__poster--img full-width">
    <img src="${baseUrl}/${movie.backdrop_path}" alt="">
  </figure> 
      
     
      
      
      
      `
      document.querySelector("header").append(headerElm)
      ;

let mainElm = document.createElement("section");
mainElm.className = "main_main "

mainElm.innerHTML = `


 <h1>${movie.original_title}</h1>  
 <p class="no-columns">${movie.vote_average.toFixed(1)}/10 IMDb</p>
 <section class="no-columns detailed__genres">
 <p>
  ${movie.genres.map(genre => `<span class="specific__genre--types ">${genre.name}</span>`).join(", ")}
</p>
</section>
<div class="essenstial__container columns full-width   ">
<section class=" generic_info--essenstial full-width columns ">
<p>${Math.floor(movie.runtime/60)}h ${(movie.runtime%60)}min </p>
${movie.spoken_languages.map(language => `${language.name}`).join(", ")}
<p>${movie.budget}</p>
</section>
</div>
<h2>description</h2>
<p class="no-columns description__movie">${movie.overview}</p>
<div class="columns  popular_headline">
    <h1>Cast</h1>
    <button>see more</button>
  </div>
       <section class=" castmember__images--scroll colunms">
     ${movie.credits.cast.map(function(castMember){
      return `
      <article> 

<figure>
  <img class="castmember__images" src="${baseUrl}/${castMember.profile_path}" alt="">
     </figure>
     <p>${castMember.name}</p>  </article>
`
       })}
   
      
  
    <section>


`
document.querySelector("main").append(mainElm)
;

    })
 
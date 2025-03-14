

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

function findRating(release_dates_array) {

  if (!release_dates_array || !release_dates_array.results) return "Not Rated";

  let localRelease = release_dates_array.results.find(release => release.iso_3166_1 === "US");
  let release = localRelease?.release_dates.find(r => r.certification !== "");

  if (release?.certification) return release.certification;

  let fallbackRelease = release_dates_array.results.find(release => 
    release.release_dates.some(r => r.certification !== "")
  );

  let fallbackRating = fallbackRelease?.release_dates.find(r => r.certification !== "");

  return fallbackRating?.certification 
    ? `${fallbackRating.certification} (${fallbackRelease.iso_3166_1})` 
    : "Not Rated";
}
      let headerElm = document.createElement("nav");
      headerElm.className = "Header_main"  
      headerElm.innerHTML = `
<section class="navContainer full-width">

<nav class="Movie__navbar  columns full-width  ">
    <figure class="burger--Menu__header">
      <a href="index.html">
    <i class="fa-solid fa-arrow-left"></i></a>
</figure>




 
 

<div class="switch">
<label for="switch"> 
  <input type="checkbox" name="switch" id="switch">
  <span class="slider round"></span>
</label>
</div></nav>
</section>


    
      `
      document.querySelector("header").append(headerElm)
      ;

 
fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US&page=1&append_to_response=credits,release_dates`, options)


  .then(function(response) {
    return response.json()

}).then(  
    function(movie) {


 

     
      
      
  
let mainElm = document.createElement("section");
mainElm.className = "main_main full-width "

  


mainElm.innerHTML = `

<article class="full-width movie__summary-info">
  <figure class="backdrop__poster--img full-width  ">
    <img src="${baseUrl}/${movie.backdrop_path}" alt="">
  </figure> 
      
 <h1 class="movie__title-headline">${movie.original_title}</h1>  <div class="imdb__rating">
 <i class="fa-solid fa-star" style="color: #FFD43B;"></i><p class="no-columns undertitle__score">${movie.vote_average.toFixed(1)}/10 IMDb</p>
</div>
 <section class="no-columns detailed__genres">
 <p>
  ${movie.genres.map(genre => `<span class="specific__genre--types ">${genre.name}</span>`).join(", ")}
</p></article>
</section>
<div class="essenstial__container columns full-width   ">
<section class=" generic_info--essenstial full-width columns ">
  <div class="full-width columns upper__names">
<p>runtime</p>
<p>language</p>
<p>rating</p></div>
<p>${Math.floor(movie.runtime/60)}h ${(movie.runtime%60)}min </p>

${movie.spoken_languages.map(language => `${language.name}`).join(", ")}
<p>${findRating(movie.release_dates)}</p>

<h2 class="main_headlines">description</h2>
</section>
</div>

<p class="no-columns description__movie">${movie.overview}</p>
<div class="columns  popular_headline">
    <h1 class="main_headlines">Cast</h1>
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
 
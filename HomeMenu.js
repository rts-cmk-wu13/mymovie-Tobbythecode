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
  





    let headerElm = document.createElement("nav");
headerElm.className = "Header_main"

headerElm.innerHTML = `
<section class="navContainer1  columns full-width">
<nav class="movie__navbar1  columns ">
    <figure class="burger--Menu__header">
    <i class="fa-solid fa-bars"></i>
</figure>

<h1>MyMovies</h1>


 
 

<div class="switch">
<label for="switch"> 
  <input type="checkbox" name="switch" id="switch">
  <span class="slider round"></span>
</label>
</div></nav>
</section>

   <div class="columns  now_headline">
    <h1>now showing</h1>
    <button>see more</button>
  </div>
    <section class="main_test--scroll colunms" >

`
document.querySelector("header").append(headerElm)
;

let genreMap = {}; 

fetch('https://api.themoviedb.org/3/genre/movie/list', options)
.then(response => response.json())
.then(data => {
  genreMap = data.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});
})
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())


  console.log(genreMap);
let anotherdivElm = document.createElement("div")
 let SectionELm = document.createElement("section")

 SectionELm.className = "main_scroll"
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)

.then(function(response) {
    return response.json()

}).then(  
    function(data) {
      
      SectionELm.innerHTML =  `
  

      ${data.results.map(movie => `
<div class="movie_poster-container" >

<article>
<figure class="now-showing_movie__images">
<a href="/movie_details.html?movie=${movie.id}">
<img src="${baseUrl}/${movie.poster_path}" alt="">
</a> 

</figure>
 <p class="movie__title-name">${movie.original_title}</p> <div class="imdb__rating">
  <p>${movie.vote_average.toFixed(1)}/10 IMDb</p></div>
</article>
</div>
`).join("")}    </section>
`
document.querySelector("main").append(SectionELm)

   
}
)
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
.then(function(response) {
  return response.json()

}).then(
  function(data) {
    anotherdivElm.innerHTML = `
    <div class="columns  popular_headline">
    <h1>Popular</h1>
    <button>see more</button>
  </div>
    <section>
${data.results.map(movie => `
  
   <div class="movie_poster-container">
        <article class = "popular_movie--container columns">
          <figure class="popular-movie__images">
          <a href="/movie_details.html?movie=${movie.id}">
        <img src="${baseUrl}/${movie.poster_path}" alt="">
         </a>
          </figure>
               <div class="movie__sidetext_info">
          <p class="movie__title-name" >${movie.original_title}</p>
          <div class="imdb__rating">
       <i class="fa-solid fa-star" style="color: #FFD43B;"></i>   <p>${movie.vote_average.toFixed(1)}/10 IMDb</p></div>
      <p >     
  ${movie.genre_ids.map(id => `
  <span class="specific__genre--types">${genreMap[id] || "Unknown"}</span>`)
  .join(", ")}
    </p>
          </div>
        </article>

      </div>
  
  `).join("")}
    </section>
    `

document.querySelector("main").append( anotherdivElm)

  })

let FooterElm = document.createElement("section")
FooterElm.className = "Footer_main"

FooterElm.innerHTML = `
<section class="footer__container">
<i class="fa-solid fa-film"></i>
<i class="fa-solid fa-ticket-simple"></i>
<i class="fa-solid fa-bookmark"></i>
</section>
`
document.querySelector("footer").append( FooterElm)
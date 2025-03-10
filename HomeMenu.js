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
<section class="navContainer  columns full-width">
<nav class="Movie__navbar  columns ">
    <figure class="burger--Menu__header">
    <i class="fa-solid fa-bars"></i>
</figure>

<h1>MyMovies</h1>


 
 
</nav>
<div class="switch">
<label for="switch"> 
  <input type="checkbox" name="switch" id="switch">
  <span class="slider round"></span>
</label>
</div>
</section>



`
document.querySelector("header").append(headerElm)
;

let genreMap = {}; 



fetch('https://api.themoviedb.org/3/movie/12?language=en-US', options)
  .then(response => response.json())
  .then(data => {
    genreMap = data.genres.reduce((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});
  })

let anotherdivElm = document.createElement("div")
 let SectionELm = document.createElement("section")

 SectionELm.className = "main_scroll"
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

.then(function(response) {
    return response.json()

}).then(  
    function(data) {
      
      SectionELm.innerHTML =  `
     <div class="columns  popular_headline">
    <h1>now showing</h1>
    <button>see more</button>
  </div>
    <section class="main_test--scroll colunms" >

      ${data.results.map(movie => `
<div class="movie_poster-container" >

<article>
<figure class="now-showing_movie__images">
<a href="/movie_details.html?movie=${movie.id}">
<img src="${baseUrl}/${movie.poster_path}" alt="">
</a> 

</figure>
<p>${movie.original_title}</p>
<p>${movie.vote_average.toFixed(1)}/10 IMDb</p>
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
        <img src="${baseUrl}/${movie.poster_path}" alt="">
        
          </figure>
               <div class="movie__sidetext_info">
          <p>${movie.original_title}</p>
          <p>${movie.vote_average.toFixed(1)}/10 IMDb</p>
          
 <p >
                  ${movie.genre_ids.map(id => `
                  <span class="specific__genre--types">${genreMap[id]}
                  </span>`).join(", ")}
                  
                </p>

          </div>
        </article>

      </div>
  
  `).join("")}
    </section>
    `

document.querySelector("main").append( anotherdivElm)

  })


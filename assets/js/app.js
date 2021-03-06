//Intial Value
const API_KEY = "8dddd58c0616af22ec23a77f66e03313";
const IMAGE_URL='https://image.tmdb.org/t/p/w500';

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=8dddd58c0616af22ec23a77f66e03313";

const buttonElement = document.querySelector("#search");

const inputElement = document.querySelector("#inputValue");

const movieSearchable = document.querySelector("#movies-searchable");

   

function movieSection(movies) {
  return movies.map((movie) => {

    if(movie.poster_path!==null){
      return ` 
      <img src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id} />
      `;
    }
   
  });
}

function createMoviesContainer(movies) {
  const movieElement = document.createElement("div");
  movieElement.setAttribute('class', 'movie');

  const movieTemplate = `<section class="section">
     ${movieSection(movies)}
    </sections>
    <div class="content">
       <p id="content-close>X</p>
    </div>`;

  movieElement.innerHTML = movieTemplate;
  return movieElement;
}

function renderSearchMovies(data){
  movieSearchable.innerHTML='';
  const movies=data.results;
  const movieBlock=createMoviesContainer(movies);
  movieSearchable.appendChild(movieBlock);
  console.log("Data: ", data);
}


buttonElement.onclick = function (event) {
  event.preventDefault();
  const value = inputElement.value;

  const newUrl = url + "&query=" + value;
  fetch(newUrl)
    .then((res) => res.json())
    .then(renderSearchMovies)
    .catch((error) => {
      console.log("Error: ", error);
    });
    inputElement.value='';
  console.log("Value:", value);
};

document.onclick=function(event){
  const target=event.target;

  
  console.log('Hello World');
}



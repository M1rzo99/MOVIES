 class MovieService {
     _apiBase = 'https://api.themoviedb.org/3/movie'
     _apiLng = 'language=en-US'
     _apiKey = 'api_key=a04db84b8b065da965a1502aa8230d54'
     _apiImg = 'https://image.tmdb.org/t/p/original';


     getResource = async(url) => {
         const response = await fetch(url);

         if (!response.ok) {
             throw new Error(`Cuold not fetch${url}, status:${response.status}`)
         }
         return await response.json()
     }

     getAllPopular = async() => {
         return this.getResource(`${this._apiBase}/popular?${this._apiLng}&page=1&${this._apiKey}`)
     }

     getAllTranding = async() => {
         const response = await this.getResource(`${this._apiBase}/top_rated?${this._apiLng}&page=1&${this._apiKey}`)
         const movies = response.results
         return movies && movies.map(movie => this._transfromMovies(movie))
     }

     getAllDetelies = async(id) => {
         const movie = await this.getResource(`${this._apiBase}/${id}?${this._apiLng}&${this._apiKey}`)
         return this._transfromMovies(movie)
     }

     getRandomMovies = async() => {
         const res = await this.getAllPopular()
         const movie = (res.results[Math.floor(Math.random() * res.results.length)]) // random elementlarni olib beradi
         return this._transfromMovies(movie)
     }

     _transfromMovies = (movie) => {
         return {
             name: movie.original_title,
             description: movie.overview,
             poster_path: `${this._apiImg}${movie.poster_path}`,
             backdrop_path: `${this._apiImg}${movie.backdrop_path}`,
             id: movie.id,
             release_date: movie.release_date,
             vote_average: movie.vote_average
         }
     }

 }

 export default MovieService
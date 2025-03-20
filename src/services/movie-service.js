import { useHttp } from "../hooks/use-http"

const useMovieService = () => {
    const { request, loading, error, clearError } = useHttp()
    const _apiBase = 'https://api.themoviedb.org/3/movie'
    const _apiLng = 'language=en-US'
    const _apiKey = 'api_key=a04db84b8b065da965a1502aa8230d54'
    const _apiImg = 'https://image.tmdb.org/t/p/original'
    const _apiPage = 1


    const getAllPopular = async(page = _apiPage) => {
        const response = await request(`${_apiBase}/popular?${_apiLng}&page=${page}&${_apiKey}`)
        const movies = response.results
        return movies && movies.map(movie => _transfromMovies(movie))
    }

    const getAllTranding = async(page = _apiPage) => {
        const response = await request(`${_apiBase}/top_rated?${_apiLng}&page=${page}&${_apiKey}`)
        const movies = response.results
        return movies && movies.map(movie => _transfromMovies(movie))
    }

    const getAllDetelies = async(id) => {
        const movie = await request(`${_apiBase}/${id}?${_apiLng}&${_apiKey}`)
        return _transfromMovies(movie)
    }

    const getRandomMovies = async() => {
        const res = await getAllPopular()
        const movie = res[Math.floor(Math.random() * res.length)];
        // random elementlarni olib beradi
        return (movie)
    }

    const _transfromMovies = (movie) => {
        return {
            name: movie.original_title,
            description: movie.overview,
            poster_path: `${_apiImg}${movie.poster_path}`,
            backdrop_path: `${_apiImg}${movie.backdrop_path}`,
            id: movie.id,
            release_date: movie.release_date,
            vote_average: movie.vote_average
        }
    }

    return {
        getAllTranding,
        getRandomMovies,
        getAllDetelies,
        getAllPopular,
        clearError,
        loading,
        error
    }
}



export default useMovieService;
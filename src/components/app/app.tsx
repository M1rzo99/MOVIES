import React from "react"
import Navbar from "../navber/navbar"
import Hero from "../hero/hero"
import RowMovies from "../row-movies/row-movies"
import MovieService from "../../services/movie-service"
const App =()=>{
    // const movieServie = new MovieService()
    // movieServie.getAllPopular().then(data=>console.log(data));
    // movieServie.getAllTranding().then(data=>console.log(data))
    // movieServie.getAllDetelies(12).then(data=>console.log(data))

return <div  className="app">
    <Navbar/>
    <Hero/>
    <RowMovies/> 
</div>
}
export default App
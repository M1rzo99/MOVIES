import React from "react"
import Navbar from "../navber/navbar"
import Hero from "../hero/hero"
import RowMovies from "../row-movies/row-movies"
const App =()=>{
return <div  className="app">
    <Navbar/>
    <Hero/>
    <RowMovies/> 
</div>
}
export default App
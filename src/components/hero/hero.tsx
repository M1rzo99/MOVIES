import React from 'react'
import './hero.scss'

 const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__info'>
            <h2>FIND MOVIES</h2>
            <h1>TV shoes and more</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Architecto nemo nostrum cumque tenetur est sapiente dolor ex,
                  repellat ratione excepturi nam amet pariatur ab. Culpa, laborum. L
                  abore doloremque maiores recusandae minus tempore, consequuntur molestias eos ipsa,
                   assumenda nobis necessita
                   electus fugit eum incidunt ea?
                   </p>
                   <button className='btn btn-primary'>Details</button>
        </div>
        <div className='hero__movie'>
        <img src="/image1.svg" alt="img" />
        <div className='hero__movie-descr'>
            <h2>Madellin</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Repudiandae libero dignissimos rem 
                ad aliquid nulla velit ducimus eaque maxime delectus quod sit voluptas optio
                 qui minus at numquam illo commodi soluta inventore fugiat saepe, quibusdam mollitia? 
                 Dolor odit porro totam asperiores,
                 inventore quidem quisquam, ut eveniet reiciendis suscipit rerum provident! </p>
                 <div>
                 <button className='btn btn-secondary'>Random Movies</button>
                 <button className='btn btn-primary'>Deteils</button>
                 </div>
        </div>
        </div>
    </div>
  )
}
export default Hero

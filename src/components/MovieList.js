import React from 'react'
 import { useSelector} from 'react-redux'
import MovieCard from './MovieCard'
 
 


function MovieList(props) {
   const {searchResults  , term} = props
   
    const  movie  = useSelector((state)=>{
        return  state.movie
    })

    
   
     
  return (
    <div >
         <h2>Movie List</h2>
          <div  className='row'>
          {term.length < 1 ?  
               
             <div>
            {movie.map((ele)=>{
                return <MovieCard  key={ele.id} {...ele}  />
            })}
            </div>
        : 
        <div>
        {searchResults.map((ele)=>{
                return <MovieCard  key={ele.id} {...ele} />
       })}
       </div>

}
         </div>
    </div>
  )
}

export default MovieList
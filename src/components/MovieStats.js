import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
// import {useDispatch} from 'react-redux'
// import {getMovie} from '../action/movieAction'

function MovieStats(props) {
//  const dispatch = useDispatch()
//    useEffect(()=>{
//      dispatch(getMovie())
//    },[dispatch])

    const movie = useSelector((state)=>{
        return state.movie
    })
 
  return (
    <div className='card text-dark bg-light'>
         <h2>Movie Stats</h2>
        <h4>Total Movies = {movie.length}</h4>
         
    </div>
  )
}

export default MovieStats

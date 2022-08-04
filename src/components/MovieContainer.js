import React , {useState} from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import MovieStats from './MovieStats'
import {useSelector} from 'react-redux'
import Search from './Search'
import '../App.css'


function MovieContainer(props) {
  const [term, setTerm] = useState('')
  const [searchResults , setSearchResults] = useState([])

  

  const movies = useSelector((state)=>{
    return state.movie
    
  })
  
   const searchHandler=(searchTerm)=>{
   setTerm(searchTerm)
    if (searchTerm !==""){
      const  newMovieList = movies.filter((ele)=>{
       return Object.values(ele)
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      })
      setSearchResults(newMovieList)
    } else {
      setSearchResults(movies)
    }
  }

  
   
  return (
    <div>
      <div >
        <div>
      <h1>My Big Movie List</h1> <hr/>
         <Search term={term} searchKeyWord={searchHandler}/>
        <MovieStats  /><hr/>
        </div>
          <div className='row'>
        <div className='col-md-8'>
           <div className='row'>
        <MovieList searchResults={searchResults}  term={term}/> 
           </div>
        </div>
        
        
         <div className='col-md-4'>
         <MovieForm  />
         </div>
         </div>

         </div>
       
    </div>
  )
}

export default MovieContainer
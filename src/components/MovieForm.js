import React ,{useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addMovie} from '../action/movieAction'

function MovieForm(props) {
     const dispatch =useDispatch()
    const [movie , setMovie] = useState('')
    const [imdb , setImdb] = useState('')
    const [list , setList] = useState([])

   
  
    useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('list')) || []
         setList(result)
         } ,[])
     
         useEffect(()=>{
            localStorage.setItem("list" , JSON.stringify(list))
        },[list])
     
     
     const handleSubmit=(e)=>{
         e.preventDefault()

         const data ={
             id : Number(new Date()),
            
             movie : movie ,
             imdb  : Number (imdb)
         }
         console.log(data)
          dispatch(addMovie(data))
             setList(data)
          setMovie('')
          setImdb('')
     }
  return (
    <div className='form-floating '  style={{width : '300px' }}>
        <div className=''>
        <h2>Add Movies</h2>
         <div className=''>
        <form onSubmit={handleSubmit}>
            <input className='form-control'  type='text' placeholder='Enter Movie Name..' value={movie} onChange={(e)=>{setMovie(e.target.value)}}/> <br/><br/>

            <input className='form-control' type='text' placeholder='Imdb Rating..' value={imdb} onChange={(e)=>{setImdb(e.target.value)}}/><br/><br/>

            <button> ADD </button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default MovieForm
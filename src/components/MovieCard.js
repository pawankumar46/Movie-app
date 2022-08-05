import React from 'react'
import {useDispatch} from 'react-redux' 
import {removeId} from '../action/movieAction'
import img1 from '../components/image/images.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieCard(props) {
    const dispatch = useDispatch()
    const {id ,movie , imdb } = props

    const handleRem=(id)=>{
       dispatch(removeId(id))
    }
  return (
      <div  className='col-sm-4'>

     
    <div  > 
   <div    >
      <div  >
         <div >
            <div className='card my-1'>
      <center> 
           <img  style={{height : '100px' , width : '100px'}} src={img1} alt={img1}/> </center>
        <div className='card-body'>
        <h4 className='card-title'> Movie-{movie} </h4>
        <h5 className='card-text'> IMDB  - #{imdb}</h5> 
        </div>
         
         <div className='card-footer'>
         <button className='btn btn-danger' onClick={()=>{
             handleRem(id)
         }}>remove</button>
         </div>
         </div>
         </div>
        
        </div>
        </div>
      
        </div>
        </div>
        
  )
}

export default MovieCard
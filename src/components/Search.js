import React from 'react'
import {useSelector} from 'react-redux'


function Search(props) {
  const {term ,searchKeyWord} = props

  const movie = useSelector((state)=>{
    return state.movie
  })
  console.log('sort' , movie)

  const getSearchTerm=(e)=>{
        searchKeyWord(e.target.value)
  }

   
  
  return (
    <div className='search'>
         <form className='form'>
           <input type='text' placeholder='search Movie...'  value={term} onChange={getSearchTerm}/>
            <i className='fa fa-search'/>
           
         </form>

        
    </div>
  )
}

export default Search
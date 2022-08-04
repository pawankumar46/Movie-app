const initialMovie =  [ ]

const movieReducer = (state = initialMovie , action)=>{
 switch (action.type){
     case 'ADD_MOVIE' :{
         return [...state , {...action.payload}]
     }
    //  case 'GET' : {
    //      return [{...action.payload}]
    //  }
     case 'Remove' : {
         return state.filter((ele)=>{
             return ele.id !== action.payload
         })
     }
     default : {
         return [...state]
     }
 }
}

export default movieReducer
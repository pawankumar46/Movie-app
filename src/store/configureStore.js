import {createStore , combineReducers} from 'redux'
import movieReducer from '../reducer/movieReducer'


// import { persistStore , persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
 

//  const persistConfig ={
//      key : 'persist',
//      storage
//  }
// const persistedReducer = persistReducer(persistConfig , combineReducers)
 
  // const store = createStore(persistedReducer({
  //     movie : movieReducer
  // }))
  const store = createStore(combineReducers({
     movie : movieReducer
}))

// const persistor = persistStore(store)
export default store 
// export {persistor}
 

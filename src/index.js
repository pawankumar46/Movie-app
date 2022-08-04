import React from "react"
import  ReactDOM  from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"

import store from "./store/configureStore"
import { PersistGate } from "redux-persist/integration/react"
// import { persistor } from "./store/configureStore"
// import { PersistGate } from "redux-persist/integration/react"

 
 

  console.log( 'state',store.getState())

  store.subscribe(()=>{
    console.log('updated' , store.getState())
  })

   
const root = ReactDOM.createRoot(document.getElementById('root')) 

 root.render(
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}>

        <App />
        </PersistGate> */}
        <App />
        
      
      
      </Provider>
)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/views/components';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './app/lib/store'
import { addtoCart } from './app/lib/actions'
import { AppContainer } from './app/views/containers/index'

console.log('Initial state: ', store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addtoCart({name: 'kiwi'},2 ))
// store.dispatch(addtoCart({name: 'citron'},5 ))
unsubscribe()

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <AppContainer />
    </Provider>
  
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

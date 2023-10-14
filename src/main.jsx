import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  <Toaster position="top-center"
  reverseOrder={false}/>
  </Provider>
  </React.StrictMode>,
)

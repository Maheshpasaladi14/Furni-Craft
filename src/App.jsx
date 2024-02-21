import React from 'react'
import Layout from './Layout/Layout'
import { Provider } from 'react-redux'
import store from './Redux/store'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer
       theme='dark'
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
/>
      {/* Same as */}
      <ToastContainer />
      <Layout  />
    </Provider>

  )
}

export default App
import './App.css'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
      <Router/>
      {/* </Switch> */}
    </BrowserRouter>
    </>
  )
}

export default App

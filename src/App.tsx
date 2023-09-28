import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

function App() {

  useEffect(()=>{

    (async ()=>{
      const result = await axios.get('https://tracking.bosta.co/shipments/track/7234258');
      // setRes(result)
  
      console.log({result})

    })();
  },[])
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

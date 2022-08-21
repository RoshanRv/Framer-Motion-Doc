import { motion ,AnimatePresence} from "framer-motion"
import {Routes,Route, useLocation} from 'react-router-dom'
import {useState} from 'react'
import Home from "./pages/Home"
import Parallax from "./pages/Parallax"

const divVariant={
  hidden:{
    x:'-100vw',
  },
  visible:{
    x:0

    ,transition:{
      delay:.1,duration:.4,type:'spring'
    }
  },
  exit:{
    x:'-100vw'
  }
}

const hello={
  hidden:{
  },
  visible:{
    scale:1.5,
    // originX:0,
    
    transition:{
      delay:.6,
      yoyo:Infinity
    }
  }
}

function App() {

  
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes  key={location.key} location={location} >
          <Route path="/" element={<Home/>}/>
          <Route path='/parallax' element={<Parallax/>}/>
      </Routes>
    </AnimatePresence>
    
    
  );
}

export default App;

import { motion ,AnimatePresence} from "framer-motion"
import {Routes,Route, useLocation} from 'react-router-dom'
import {useState} from 'react'
import Home from "./pages/Home"
import RoutePage from "./pages/RoutePage"

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
      <Routes location={location} key={location.key} >
          <Route path="/" element={<Home/>}/>
          <Route path='/route' element={<RoutePage/>}/>
      </Routes>
    </AnimatePresence>
    
    
  );
}

export default App;

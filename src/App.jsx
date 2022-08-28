import { AnimatePresence} from "framer-motion"
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from "./pages/Home"
import Parallax from "./pages/Parallax"
import Footer from "./components/Footer"

function App() {
  
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes  key={location.key} location={location} >
          <Route path="/" element={<Home/>}/>
          <Route path='/parallax' element={<Parallax/>}/>
      </Routes>
      <Footer/>
    </AnimatePresence>
    
    
  );
}

export default App;

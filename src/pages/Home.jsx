import { motion ,AnimatePresence} from "framer-motion"

import {useState} from 'react'
import { Link } from "react-router-dom"

const container={

    hidden:{
        opacity:0,
    },
    visible:{
        opacity:100,
        transition:{
            type:'tween'
        }
    },
    exit:{
        // x:'-100vw',
        opacity:0,
        transition:{
            ease:'easeInOut',
            type:'tween'
        }
    }

}

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
    x:'-100vw',
    
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

const Home = () => {

    const [show,setShow] = useState(false)


  return (
    <motion.div variants={container} animate='visible' initial='hidden' exit={'exit'}  className="App p-10 ">
      <motion.button  
      whileHover={{scale:1.2}}
      // transition={{type:'tween'}}
       onClick={()=>setShow(e=>!e)}
       className='border-2 border-black rounded-full p-3 px-6'
        >Show</motion.button>

      <AnimatePresence>
      {show&&<motion.div 
      initial={'hidden'} 
      animate={'visible'} 
      variants={divVariant}
      exit={'exit'}
        className='my-10 p-5 rounded-lg bg-red-400 text-white'>
        <h1 className='w-max mx-auto' variants={hello} whileHover={{x:20}} >Hello Word</h1>
        </motion.div>}
      </AnimatePresence>

      <Link to={'/route'}>Hello </Link>
      
    </motion.div>
  )
}

export default Home
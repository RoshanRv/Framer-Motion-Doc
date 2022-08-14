import React from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const container={

    hidden:{
        x:'100vw',
    },
    visible:{
        x:0,
        transition:{
            type:'tween'
        }
    },
    exit:{
        x:'-100vw',
        transition:{
            ease:'easeInOut',
            type:'tween'
        }
    }

}

const RoutePage = () => {
  return (
    // <AnimatePresence></AnimatePresence>
    <motion.div className='p-5 rounded-full bg-sky-300 ' variants={container} animate='visible' initial='hidden' exit={'exit'} >
        <h1 className='w-max p-2' >Heello</h1>



        <motion.svg
        
         width="149" height="86" viewBox="0 0 149 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
        initial={{pathLength:0}}
        animate={{pathLength:1}}
        transition={{duration:5}}
         d="M87 5.99999C132.151 15.9292 146.394 28.542 147.5 66.5C113.886 90.4418 92.4727 91.988 48.1716 66.5M87 5.99999C85.6215 36.1972 77.039 49.4064 48.1716 66.5M87 5.99999C87 5.99999 48.1716 18 48.1716 5.99999C48.1716 -6.00001 22 5.99999 22 5.99999M22 5.99999L1 66.5M22 5.99999C21.724 31.0297 26.394 44.4181 48.1716 66.5" stroke="black" />
        </motion.svg>




        <Link to='/'>Back</Link>
    </motion.div>
  )
}

export default RoutePage
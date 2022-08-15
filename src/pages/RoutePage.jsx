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
    <motion.div className='p-5 rounded-full bg-sky-30 ' variants={container} animate='visible' initial='hidden' exit={'exit'} >
        <h1 className='w-max p-2' >Heello</h1>

        
        <Link to='/'>Back</Link>
    </motion.div>
  )
}

export default RoutePage
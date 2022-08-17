import React,{useRef}from 'react'
import useGetPointer from '../hooks/useGetPointer'
import { motion } from 'framer-motion'

const CustomCursor = () => {

    const ref = useRef(null)
    const {x,y} = useGetPointer(ref)

  return (
    <div>

        <motion.div 
        ref={ref} 
        className='w-20 h-20 rounded-full bg-sky-600 fixed'
    //     animate={{x,y,borderRadius:[0,10,30,10,50,0],scale:[1,.2,1.2,.5,.9,1],rotate:[0,45,360,-90,30,0]}}
    //     transition={{duration:.1,ease:'linear',
    //     borderRadius:{repeat:Infinity,duration:3},
    //     scale:{repeat:Infinity,duration:3},
    //     rotate:{repeat:Infinity,duration:3},
    // }}
        />

    </div>
  )
}

export default CustomCursor
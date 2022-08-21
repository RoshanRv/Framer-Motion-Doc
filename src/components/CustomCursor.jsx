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
        className='w-20 h-20 rounded-full bg-white mix-blend-hue fixed z-50 pointer-events-auto'
        animate={{x,y}}
        transition={{duration:0.1,ease:'linear'}}

        />

    </div>
  )
}

export default CustomCursor
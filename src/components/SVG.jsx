import React from 'react'
import Block from './Block'
import { motion,useScroll } from 'framer-motion'
import Title from './Title'


const SVG = () => {

    const {scrollYProgress} = useScroll()

  return (
    <div>
        <Title>SVG</Title>
        {/* <Block> */}
        <div className='fixed bg-black p-2 top-0 left-0'>
            <svg width="265" height="293" viewBox="0 0 265 293" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                // animate={{pathLength:0}}
                style={{pathLength:scrollYProgress}}
                d="M19 109C84 120 131 2 131 2L264 21C193.6 13 136.333 194 139 291L100 277C204 165 53 255 53 255L1 233C36.6667 230 90.2 201 19 109Z" stroke="white" stroke-width="2"
                />
            </svg>
        </div>
        

        {/* </Block> */}

    </div>
  )
}

export default SVG
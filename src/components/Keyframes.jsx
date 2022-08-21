import React from 'react'
import { motion } from 'framer-motion'
import Block from './Block'
import Title from './Title'
import { CopyBlock,dracula } from 'react-code-blocks'

const text=`
    <Block>
        <motion.div 
        animate={{
            x:[0,0,0,0,0,0,0,200],
            rotate:[0,45,360,90,270,0] ,
            scale:[1,.7,1.2,.3,1.9,1],
            borderRadius:[0,10,40,0,50,0]
                }}
        transition={{repeat:Infinity,repeatDelay:2,duration:5}}
        className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900">   
        </motion.div>
    </Block>
`

const Keyframes = () => {
  return (
    <div>
        <Title>Keyframes</Title>

        <Block>
            <motion.div 
            animate={{
                x:[0,0,0,0,0,0,0,300],
                rotate:[0,45,360,90,270,0] ,
                scale:[1,.7,1.2,.3,1.9,1],
                borderRadius:[0,10,40,0,50,0]
                    }}
            transition={{repeat:Infinity,repeatDelay:2,duration:5}}
            className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900">
            </motion.div>
            <motion.h1 className='text-white text-4xl font-bold text-center absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2'
            animate={{opacity:[0,1]}}
            transition={{times:[0.9,1],repeat:Infinity, repeatDelay:2,duration:5}}
            >
                    Framer-Motion-Doc
            </motion.h1>
        </Block>

            {/*             code         */}
        <div className="w-full lg:w-max mx-auto my-10 ">
            <CopyBlock text={text} language={'jsx'} theme={dracula} highlight={'5,6,7,8,10'} />
        </div>
        


    </div>
  )
}

export default Keyframes
import React from 'react'
import Title, { Subtitle } from './Title'
import { useTransform,motion,useMotionValue } from 'framer-motion'
import Block from './Block'
import { CopyBlock,dracula } from 'react-code-blocks'

const text=`
    const x = useMotionValue(0)
    const background = useTransform(x,[-100,0,100],[color1,color2,color3]) 
    const scale = useTransform(x,[-100,0,100],[1.5,1,1.5],{clamp:false})
    return(
        <Block>
            <motion.div
            drag='x'
            className='w-20 h-20 mx-auto rounded-xl'  
            dragConstraints={{ left: 0, right: 0 }}
            animate={{x:0}}
            style={{x,background,scale}}
            >
            </motion.div>
        </Block>
    )
`

const UseTransform = () => {

    const x = useMotionValue(0)
    const background = useTransform(x,[-100,0,100],
        ['linear-gradient(124deg, rgba(198,115,13,1) 29%, rgba(255,0,44,1) 100%)',
        'linear-gradient(124deg, rgba(78,180,199,1) 29%, rgba(0,78,255,1) 100%)',
        'linear-gradient(124deg, rgba(83,199,78,1) 29%, rgba(245,255,0,1) 100%)'])
    const scale = useTransform(x,[-100,0,100],[1.5,1,1.5],{clamp:false})

  return (
    <div>
        <Title>UseTransform</Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"  >

            {/*             code         */}
            <div className="w-full lg:w-max mx-auto my-10 ">
                <CopyBlock text={text} language={'jsx'} theme={dracula} highlight={'2,3,4,12'} />
            </div>

            <Block>
                <Subtitle>Drag</Subtitle>
                <motion.div
                drag='x'
                className='w-20 h-20 mx-auto rounded-xl'
                dragConstraints={{ left: 0, right: 0 }}
                animate={{x:0}}
                style={{x,background,scale}}
                >
                </motion.div>
            </Block>
        </div>

    </div>
  )
}

export default UseTransform
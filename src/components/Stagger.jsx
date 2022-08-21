import React from 'react'
import Block from './Block'
import Title from './Title'
import { motion } from 'framer-motion'
import { CopyBlock,dracula } from 'react-code-blocks'

const parent={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        
        transition:{
            // delayChildren:2,
            when:'beforeChildren',
            delay:1,
            // staggerChildren:.1
        }
    },

}

const child={
    hidden:{
        opacity:0
    },
    pop:(custom)=>({
        opacity:1,
        transition:{
            delay:.04*custom
        }
    })
}

const text=`
const parent={
    hidden:{opacity:0},
    visible:{opacity:1,
        transition:{
//you can use these if u want stagger effect on initial stage instead of whileInView  
            // delayChildren:2,
            // staggerChildren:.1
        }},}

const child={
    hidden:{opacity:0},
    pop:(custom)=>({
        opacity:1,
        transition:{
            delay:.04*custom
        }})}

return (
    <Block>
        <motion.div
        className='p-5 rounded-lg bg-white w-max grid grid-cols-2 lg:grid-cols-4 mx-auto'
        variants={parent}
        initial='hidden'
        animate='visible'
        whileInView={'pop'}
        >
            {[1,2,...,16].map((data,i)=><Child key={i} custom={data}/>)}
        </motion.div>
    </Block>
)
`



const Stagger = () => {
  return (
    <div>
        <Title>Stagger Animations</Title>
        <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-2">
            <Block>
                <motion.div
                className='p-5 rounded-lg bg-white w-max grid grid-cols-4 lg:grid-cols-4 mx-auto'
                variants={parent}
                initial='hidden'
                animate='visible'
                whileInView={'pop'}
                >
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((data,i)=><Child key={i} custom={data} />)}
                    
                </motion.div>
            </Block>

            {/*             code         */}
            <div className="w-full  mx-auto my-10 ">
                <CopyBlock text={text} language={'jsx'} theme={dracula}/>
            </div>
        </div>
       
    </div>
  )
}

export default Stagger




const Child = ({custom})=>{
    return(
        <motion.div 
        className='lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-bl from-sky-500 to-blue-700 rounded-lg m-2'
        variants={child}
        custom={custom}
        >

        </motion.div>
    )
}
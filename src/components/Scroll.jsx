import React,{useState}from 'react'
import Block from './Block'
import Title, { Subtitle } from './Title'
import { motion } from 'framer-motion'
import { CopyBlock,dracula } from 'react-code-blocks'

const text=`
    const {scrollYProgress} = useScroll()
    return(
        <motion.div 
        style={{scaleX:scrollYProgress}} 
        className="h-2 origin-left fixed right-0 top-0
         left-0 bg-gradient-to-r from-sky-500 to-blue-700 z-50"   
        />
    )
`

const popTxt=`
    <Block>
        <div className="w-80 relative flex items-end ">
            <motion.div 
            initial={{y:300,rotate:-12}}
            whileInView={{y:-40,rotate:-12}}
            transition={{duration:.4,type:'spring',bounce:0.5}}
            className="w-60-rotate-12 h-80 bg-white mx-auto rounded-lg"/>
        </div>
    </Block>
`

const Scroll = ({showProgressBar,setShowProgressBar}) => {

  return (
    <div>
        <Title>Scroll Animations</Title>

        {/*          */}
        <Subtitle>Scroll Linked</Subtitle>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Block>
                <h1 className="text-white text-xl text-center mb-6 font-bold">Progress Bar</h1>
                <motion.button 
                className=' text-lg bg-white px-10 py-2 rounded-full w-max block mx-auto font-bold'
                whileHover={{scale:1.2}}
                whileTap={{scale:0.8}}
                onClick={()=>setShowProgressBar(e=>!e)}
                >{showProgressBar?'Hide':'Show'}
                </motion.button>
            </Block>

            {/*             code         */}
            <div className="w-full lg:w-max mx-auto my-10 ">
                <CopyBlock text={text} language={'jsx'} theme={dracula} highlight={'2,5'} />
            </div>
        </div>


        {/*          */}
        <Subtitle>Scroll Triggered</Subtitle>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {/*             code         */}
            <div className="w-full lg:w-max mx-auto my-10 ">
                <CopyBlock text={popTxt} language={'jsx'} theme={dracula} highlight={'5,6'} />
            </div>

            <Block>
                <div className="w-80 relative flex items-end mx-auto h-[30rem] overflow-hidden bg-gradient-to-br from-sky-500 to-blue-600 rounded-b-lg">
                    <div className="absolute -top-20 -left-20 bg-[#030c17] w-[40rem] h-[27rem] rotate-12 "></div>
                    <motion.div 
                    initial={{y:300,rotate:-12}}
                    whileInView={{y:-40,rotate:-12}}
                    transition={{duration:.4,type:'spring',bounce:0.5}}
                    className="w-60 shadow-2xl -rotate-12 h-80 bg-white mx-auto rounded-lg text-4xl font-bold text-center flex flex-col justify-center ">Scroll Triggered</motion.div>
                </div>
               
            </Block>
            
        </div>
        



    </div>
  )
}

export default Scroll
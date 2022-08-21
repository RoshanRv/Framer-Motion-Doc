import { AnimatePresence,motion } from 'framer-motion'
import React,{useState,useEffect}from 'react'
import Block from './Block'
import Title from './Title'
import { CopyBlock,dracula } from 'react-code-blocks'


const AwaitPresence = () => {


    const [count,setCount]=useState(0)
    const [exitBefore,setExitBefore]=useState(false)
    const [text,setText]=useState(``)

    useEffect(()=>{
        setText(`
        const [count,setCount]=useState(0)
        return(
        <Block>
            <AnimatePresence  exitBeforeEnter={${exitBefore}} >
                <motion.div 
                layout
                className='p-20 rounded-xl bg-gradient-to-br from-sky-500
                to-blue-700 text-white text-9xl font-bold mx-auto w-max'
                initial={{opacity:0.8, scale:1.4}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:0.6}}
                key={count}
                >
                    {count}
                </motion.div>
            </AnimatePresence>
        </Block>)
        `)

    },[exitBefore])

  return (
    <div>
        <Title>Exit Before Enter</Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/*             code         */}
            <div className="w-full  mx-auto my-10 ">
                <CopyBlock text={text} language={'jsx'} theme={dracula}/>
            </div>

            <Block>
                <div className='flex w-max gap-x-4 p-2 text-white text-xl items-center mx-auto mb-4 font-semibold' >
                    <h1>Exit Before Enter</h1>
                    <motion.input 
                    whileTap={{scale:2.1}}
                    type="checkbox" 
                    checked={exitBefore}
                    onChange={(e) => setExitBefore(e.currentTarget.checked)} 
                    className=''
                    />
                </div>
                <AnimatePresence  exitBeforeEnter={exitBefore} >
                    
                    <motion.div 
                    layout
                    className='p-20 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-white text-9xl font-bold mx-auto w-max'
                    initial={{opacity:0.8, scale:1.4}}
                    animate={{opacity:1, scale:1}}
                    exit={{opacity:0, scale:0.6}}
                    key={count}
                    >
                        {count}
                    </motion.div>
                </AnimatePresence>

                <motion.button 
                    className=' text-lg bg-white mt-10 px-10 py-2 rounded-full w-max block mx-auto font-bold'
                    whileHover={{scale:1.2}}
                    whileTap={{scale:0.8}}
                    onClick={()=>setCount(count+1)}
                    >Next
                    </motion.button>

            </Block>
        </div>
        
    </div>
  )
}

export default AwaitPresence
import { AnimatePresence ,motion} from 'framer-motion'
import Title from './Title'
import Block from './Block'
import { CopyBlock ,dracula} from "react-code-blocks"


import { useState,useEffect } from 'react'

const EntryExit = () => {

    const [showBox,setShowBox] = useState(false)
    const [effect,setEffect]=useState('opacity')

    const [text,setText] = useState('')

    useEffect(()=>{
        setText(`
        const [showBox,setShowBox] = useState(false)
    
        return (
            <Block>
                <AnimatePresence>
                    {showBox&&
                    (<motion.div className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900"        
                    initial={{${effect==='opacity'?'opacity:0':effect==='slide'?'x:"-100vw"':'scale:0'}}}   
                    animate={{${effect==='opacity'?'opacity:1':effect==='slide'?'x:0':'scale:1'}}}
                    exit={{${effect==='opacity'?'opacity:0':effect==='slide'?'x:"-100vw"':'scale:0'}}}
                    >
                    </motion.div>)}
                </AnimatePresence>
            </Block>)

            <button onClick={()=>setShowBox(e=>!e)}
            >{showBox?'Hide':'Show'}</button>
        `)
    },[effect])



  return (
    <div>
        <Title>Entry & Exit Animations</Title>
        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
            <Block>
                <AnimatePresence>
                    {/*         opacity  */}
                    {(showBox&&effect=='opacity')&&
                    (<motion.div className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900"
                    initial={{opacity:0,}}
                    animate={{opacity:1,}}
                    exit={{opacity:0,}}
                    >
                    </motion.div>)}

                    {/*         slide  */}
                    {(showBox&&effect=='slide')&&
                    (<motion.div className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900"
                    initial={{x:'-100vw',}}
                    animate={{x:0,}}
                    exit={{x:'-100vw',}}
                    >
                    </motion.div>)}

                    {/*         scale  */}
                    {(showBox&&effect=='scale')&&
                    (<motion.div className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900"
                    initial={{scale:0}}
                    animate={{scale:1.1}}
                    exit={{scale:0}}
                    >
                    </motion.div>)}
                </AnimatePresence>

                <motion.button className='px-6 py-2 text-white rounded-full mx-auto block text-lg w-max mt-20 border-2 border-white'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={()=>setShowBox(e=>!e)}
                >{showBox?'Hide':'Show'}</motion.button>
            </Block>

            <Block>
                <div className='flex h-full justify-around items-center text-lg text-white'>
                    <div className="text-center">
                        <h1>Opacity</h1>
                        <input type="radio" name="effect" value={'opacity'} onChange={(e)=>setEffect(e.target.value)} checked={effect==='opacity'}/>
                    </div>
                    <div className="text-center">
                        <h1>Slide</h1>
                        <input type="radio" name="effect" value={'slide'} onChange={(e)=>setEffect(e.target.value)} checked={effect==='slide'} />
                    </div>
                    <div className="text-center">
                        <h1>Scale</h1>
                        <input type="radio" name="effect" value={'scale'} onChange={(e)=>setEffect(e.target.value)} checked={effect==='scale'} />
                    </div>
                </div>
            </Block>
        </div>

        {/*             code         */}
        <div className="w-full lg:w-max mx-auto my-10 ">
            <CopyBlock text={text} language={'jsx'} theme={dracula} highlight={'6,7,8,9,10,11,12,13,14,17,18'} />
        </div>

    </div>
  )
}

export default EntryExit
import { AnimatePresence ,motion} from 'framer-motion'
import Title from './Title'
import Block from './Block'

import { useState } from 'react'

const EntryExit = () => {

    const [showBox,setShowBox] = useState(false)
    const [effect,setEffect]=useState('opacity')


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

    </div>
  )
}

export default EntryExit
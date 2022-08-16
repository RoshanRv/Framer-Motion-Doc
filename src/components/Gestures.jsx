import { motion } from "framer-motion"
import Block from "./Block"
import Title, { Subtitle } from "./Title"
import { CopyBlock,dracula } from "react-code-blocks"

const text=`
    <Block>
        <motion.button className="px-10 p-3 shadow-md text-white  
         text-xl rounded-full bg-gradient-to-br 
         block mx-auto from-sky-500 to to-blue-700"
        whileHover={{scale:1.2,textShadow:'1px 1px 10px skyblue'  
        ,boxShadow:'2px 2px 20px 2px blue'}}
        whileTap={{scale:0.8}}
        >Hover / Tap</motion.button>
    </Block>
`

const dragText =`
    <Block>
        <motion.div className="h-24 w-24 shadow-md mx-auto 
        text-xl bg-white rounded-lg border-2 border-black"    
        drag
        whileDrag={{scale:0.5}}
        dragSnapToOrigin
        ></motion.div>
    </Block>
`

const Gestures = () => {
  return (
    <div>
        <Title>Gestures</Title>
        {/*   Touch & Hover       */}
        <Subtitle>Touch & Hover</Subtitle>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Block>
                <motion.button className="px-10 p-3 shadow-md text-white text-xl rounded-full bg-gradient-to-br block mx-auto from-sky-500 to to-blue-700"
                whileHover={{scale:1.2,textShadow:'1px 1px 10px skyblue',boxShadow:'2px 2px 20px 2px blue'}}
                whileTap={{scale:0.8}}
                >Hover / Tap</motion.button>
            </Block>

            {/*             code         */}
            <div className="w-full lg:w-max mx-auto my-10 ">
                <CopyBlock text={text} language={'jsx'} theme={dracula} highlight={'6,7,8'} />
            </div>
        </div>

        {/*            DRAG         */}
        <Subtitle>Drag</Subtitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">

            {/*             code         */}
            <div className="w-full lg:w-max mx-auto my-10 ">
                <CopyBlock text={dragText} language={'jsx'} theme={dracula} highlight={'5,6,7'} />
            </div>

            <Block>
                <motion.div className="h-24 w-24 shadow-md mx-auto text-xl bg-white rounded-lg border-2 border-black"
                drag
                whileDrag={{scale:0.5}}
                dragSnapToOrigin
                ></motion.div>
            </Block>

            
        </div>
    </div>
  )
}

export default Gestures
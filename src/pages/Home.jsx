import { motion ,AnimatePresence,useScroll} from "framer-motion"
import { useState } from "react"
import Animate from "../components/Animate"
import AwaitPresence from "../components/AwaitPresence"
import CustomCursor from "../components/CustomCursor"
import EntryExit from "../components/EntryExit"
import Gestures from "../components/Gestures"
import Keyframes from "../components/Keyframes"
import Scroll from "../components/Scroll"
import Stagger from "../components/Stagger"
import ReorderList from "../components/ReorderList"
import UseTransform from "../components/UseTransform"
import SVG from "../components/SVG"


const Home = () => {

    const {scrollYProgress} = useScroll()
    const [showProgressBar,setShowProgressBar]=useState(true)


  return (
    <motion.div className="p-2 md:p-5 ">
        <AnimatePresence>
        {showProgressBar&&(
            <motion.div 
            initial={{y:-20}}
            animate={{y:0}}
            exit={{y:-20}}
            style={{scaleX:scrollYProgress}} 
            className="h-2 origin-left fixed right-0 top-0 left-0 bg-gradient-to-r from-sky-500 to-blue-700 z-50"
        />
        )}
        </AnimatePresence>    
        {/*     animate      */}
        <Animate />

        <EntryExit/>

        <Keyframes/>

        <Gestures/>

        <Scroll showProgressBar={showProgressBar} setShowProgressBar={setShowProgressBar} />

        <Stagger/>

        {/* <CustomCursor/> */}

        <AwaitPresence/>

        <ReorderList/>

        <UseTransform/>

        {/* <SVG /> */}
        

    </motion.div>
  )
}

export default Home
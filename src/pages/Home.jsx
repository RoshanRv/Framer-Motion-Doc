import { motion ,AnimatePresence,useScroll,useIsPresent} from "framer-motion"
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
import SharedLayout from "../components/SharedLayout"
import PrivacyScreen from "../components/PrivacyScreen"
import { Link } from "react-router-dom"


const Home = () => {

    const {scrollYProgress} = useScroll()
    const [showProgressBar,setShowProgressBar]=useState(true)

    const isPresent = useIsPresent()


  return (
    <motion.div className="p-2 md:p-5 bg-gradient-to-br from-sky-500 to-blue-600">
        <AnimatePresence>
        {showProgressBar&&(
            <motion.div 
            initial={{y:-20}}
            animate={{y:0}}
            exit={{y:-20}}
            style={{scaleX:scrollYProgress}} 
            className="h-4 origin-left fixed right-0 top-0 left-0 bg-gradient-to-r from-sky-500 to-blue-700 z-50"
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

        {/* <SharedLayout/> */}

        <Link to={'/parallax'} >
        <motion.button 
                className=' text-lg bg-black my-10 text-white px-10 py-2 rounded-full w-max block mx-auto font-bold'
                whileHover={{scale:1.2}}
                whileTap={{scale:0.8}}
                >Next Page
                </motion.button>
        </Link>

        <PrivacyScreen isPresent={isPresent}  />
        

    </motion.div>
  )
}

export default Home
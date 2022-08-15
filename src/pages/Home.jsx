import { motion ,AnimatePresence} from "framer-motion"
import { useState } from "react"
import Animate from "../components/Animate"
import EntryExit from "../components/EntryExit"
import Gestures from "../components/Gestures"
import Keyframes from "../components/Keyframes"


const Home = () => {

    

  return (
    <motion.div className="p-2 md:p-5 ">
        {/*     animate      */}
        <Animate />

        <EntryExit/>

        <Keyframes/>

        <Gestures/>
        

    </motion.div>
  )
}

export default Home
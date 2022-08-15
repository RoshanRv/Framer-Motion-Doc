import { motion ,AnimatePresence} from "framer-motion"
import { useState } from "react"
import Animate from "../components/Animate"
import EntryExit from "../components/EntryExit"
import Keyframes from "../components/Keyframes"


const Home = () => {

    

  return (
    <motion.div className="p-2 md:p-5 ">
        {/*     animate      */}
        <Animate />

        <EntryExit/>

        <Keyframes/>
        

    </motion.div>
  )
}

export default Home
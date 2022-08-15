import { motion ,AnimatePresence} from "framer-motion"
import { useState } from "react"
import Animate from "../components/Animate"
import EntryExit from "../components/EntryExit"


const Home = () => {

    

  return (
    <motion.div className="p-2 md:p-5 ">
        {/*     animate      */}
        <Animate />

        <EntryExit/>
        

    </motion.div>
  )
}

export default Home
import { motion,AnimatePresence } from "framer-motion"

const Block = ({children}) => {
  return (
    <AnimatePresence>
        <motion.div  className="p-2 shadow-inner w-full py-24 shadow-white rounded-lg bg-black/90 ">
            {children}
        </motion.div>
    </AnimatePresence>
    
  )
}

export default Block
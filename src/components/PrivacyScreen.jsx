import React from 'react'
import { motion } from 'framer-motion'

const PrivacyScreen = ({isPresent}) => {
  return (
    <motion.div
    className='fixed w-screen z-50 h-screen top-0 left-0 bottom-0 right-0 bg-gradient-to-br from-sky-500 to-blue-600'
    initial={{scaleX:1}}
    animate={{scaleX:0, transition: { duration: .5, ease: "easeIn" } }}
    exit={{scaleX:1 , transition: { duration: .5, ease: "easeOut" }  }}
    style={{ originX: isPresent ? 1 : 0 }}
    />
  )
}

export default PrivacyScreen
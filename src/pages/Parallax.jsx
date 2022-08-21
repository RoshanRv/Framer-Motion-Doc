import React ,{useRef} from 'react';
import { motion,useIsPresent,useScroll,useTransform,useSpring} from 'framer-motion'
import { Link } from 'react-router-dom';
import PrivacyScreen from '../components/PrivacyScreen';
import Title from '../components/Title';

const data = [
  {
    id:0,
    img:'https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg',   
  },
  {
    id:4,
    img:'https://www.transindiatravels.com/wp-content/uploads/the-red-fort-delhi.jpg',   
  },
  {
    id:2,
    img:'https://static.toiimg.com/photo/54422629.cms',   
  },
  {
    id:3,
    img:'https://blogs.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog-1024x706.jpg',   
  },
]

//    card Comp
const ImageCont = ({datum})=>{
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({target:ref})
  const y = useTransform(scrollYProgress,[0,1],[-100,100])
  return(
    <div  ref={ref}
    className='flex items-center mx-auto my-40' >
      <motion.div className='h-[30rem] w-[40rem] '>
        <img src={datum.img} alt="Places Of India" className='w-full h-full grayscale' />
      </motion.div>
      <motion.h1 
      className="text-black text-[15rem] -ml-20 z-20 font-bold"
      style={{y}}
      >{datum.id}</motion.h1>
    </div> 
  )
}

//  Main Comp
const Parallax = () => {

    const isPresent = useIsPresent()
    const {scrollYProgress} =useScroll()
    const scaleX = useSpring(scrollYProgress,{
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }) 

  return (
    <motion.div className='p-5  bg-gradient-to-br from-sky-500 to-blue-600 ' 
     >
      <Title>Parallax</Title>
      <div className='flex flex-col ' >
      {data.map((datum,i)=><ImageCont datum={datum} key={i} />)}
      </div>

      {/*     Progress */}
      <motion.div 
      className="fixed  left-0 bottom-0 right-0 bg-gradient-to-br from-sky-500 to-blue-600 -z-0  "
      >
            <motion.div 
          className="absolute  top-0 left-0  right-0 bg-white h-2 -z-0"
          style={{scaleX}}
          ></motion.div>

        <Link to={'/'} >
        <motion.button 
                className=' text-lg bg-black my-6 text-white px-10 py-2 rounded-full w-max block mx-auto font-bold'
                whileHover={{scale:1.2}}
                whileTap={{scale:0.8}}
                >Back
                </motion.button>
        </Link>

      </motion.div>
      
    <PrivacyScreen isPresent={isPresent}  />
    </motion.div>
  )
}

export default Parallax
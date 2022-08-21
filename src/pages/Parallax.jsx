import React ,{useRef,useEffect} from 'react';
import { motion,useIsPresent,useScroll,useTransform,useSpring} from 'framer-motion'
import { Link } from 'react-router-dom';
import PrivacyScreen from '../components/PrivacyScreen';
import Title from '../components/Title';
import CustomCursor from '../components/CustomCursor'

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
    className='flex items-center mx-auto my-40 z-20' >
      <motion.div className='md:h-[30rem] h-[12rem] w-[18rem] md:w-[40rem] '>
        <img src={datum.img} alt="Places Of India" className='w-full h-full rayscale z-20' />
      </motion.div>
      <motion.h1 
      className="text-black text-[10rem] md:text-[15rem] -ml-24 md:-ml-20 z-20 font-bold"
      style={{y}}
      >{datum.id}</motion.h1>
    </div> 
  )
}

const Progress = ({scaleX})=>{
  
  return(
      <motion.div 
      className="fixed  cursor-default left-0 bottom-0 right-0 bg-gradient-to-br from-sky-500 to-blue-600 z-40  "
      >
            <motion.div 
          className="absolute  top-0 left-0  right-0 bg-white h-2 "
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
  )
}

//  Main Comp
const Parallax = () => {

    const isPresent = useIsPresent()
    const {scrollYProgress} =useScroll()
    const slideN = useTransform(scrollYProgress,[0,1],[-800,800])
    const slideB = useTransform(scrollYProgress,[0,1],[400,-400])
    const scaleX = useSpring(scrollYProgress,{
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }) 

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <motion.div className='p-5  bg-gradient-to-br from-sky-500 to-blue-600 ' 
     >
      <div className="">
        <Title>Parallax</Title>
        <div className='flex flex-col ' >
        {data.map((datum,i)=><ImageCont datum={datum} key={i} />)}
        </div>

        {/*     text slide */}
            <div className="fixed select-none text-left text-black/20 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[13rem]  whitespace-nowrap font-bold">
              <motion.h1 
              className='text-left'
              style={{x:slideN}}
              >INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIA</motion.h1>
              <motion.h1 className=''
              style={{x:slideB}}
              >INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INDIA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDIA</motion.h1>
            </div>
          

        {/*  */}
      </div>
      
    <Progress scaleX={scaleX}/>
    <PrivacyScreen isPresent={isPresent}  />
    </motion.div>
  )
}

export default Parallax
import React,{useState}from 'react'
import { AnimateSharedLayout,motion } from 'framer-motion'
import Title from './Title'
import Block from './Block'

const data=[
    {
        title:"One",
        color:"rgba(255,0,44,1)"
    },
    {
        title:"Two",
        color:"rgba(0,78,255,1)"
    },
    {
        title:"Three",
        color:"rgba(83,199,78,1)"
    },
]

const SharedLayout = () => {

    const [isSelected,setIsSelected]= useState(0)

  return (
    <div>
        <Title>SharedLayout</Title>

        <Block>
            <AnimateSharedLayout>
                <motion.div className="flex gap-x-10 text-3xl font-bold text-white">
                    {data.map((datum,i)=>{
                        
                        return (
                            <>
                            <motion.div 
                            onClick={()=>setIsSelected(i)} 
                            initial={false}
                            animate={{fontSize:isSelected==i?'5rem':'2rem',}}
                            key={i}
                            style={{color:isSelected==i?datum.color:'#fff'}} 
                            className='cursor-pointer relative'  >
                                {datum.title}

                                {isSelected==i&&<motion.div 
                            className="absolute bg-white  -bottom-10  left-0 w-full h-2"
                            style={{backgroundColor:datum.color}}
                            />}
                                
                            </motion.div>

                              

                            </>
                            
                        )
                    })}
                </motion.div>
            </AnimateSharedLayout>



        </Block>


    </div>
  )
}

export default SharedLayout
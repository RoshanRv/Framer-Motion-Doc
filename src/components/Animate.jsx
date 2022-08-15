import { motion } from "framer-motion"
import { useState } from "react"
import { CopyBlock ,dracula} from "react-code-blocks"
import Block from "./Block"
import Title from "./Title"

const text = `
    const [xPos,setXPos] = useState(0)
    const [yPos,setYPos] = useState(0)
    const [borderRadiusValue,setBorderRadiusValue] = useState(0)
    const [rotateValue,setRotateValue] = useState(0)
 
    return(
    <div className="p-2 shadow-inner w-full py-24 shadow-white rounded-lg bg-black/90 ">   
        <motion.div 
        animate={{x:xPos, y:yPos, borderRadius:borderRadiusValue, rotate:rotateValue}}
        className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900">
        </motion.div>
    </div>)
    //      use input:range to play with the values
    `

const Animate = () => {

    const [xPos,setXPos] = useState(0)
    const [yPos,setYPos] = useState(0)
    const [borderRadiusValue,setBorderRadiusValue] = useState(0)
    const [rotateValue,setRotateValue] = useState(0)

    

  return (
    <div>
        <Title>Animate</Title>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 ">
            {/*      box    */}
            <Block>
                <motion.div 
                animate={{x:xPos,y:yPos,borderRadius:borderRadiusValue,rotate:rotateValue}}
                className="w-24 bg-white h-24 mx-auto  shadow-md shadow-gray-900">
                </motion.div>
            </Block>

            {/*     control   */}
            <div className="p-2 grid grid-cols-1 lg:grid-cols-2 shadow-inner text-white text-lg shadow-white w-full py-24  rounded-lg bg-black/90 ">

                <div className="flex items-center w-max gap-x-6 mx-auto  ">
                    <label className="" htmlFor="">X:</label>
                    <input className="outline-0 " type={'range'} min={-200} max={200} value={xPos} onChange={e=>setXPos(Number(e.target.value))} />
                    <span className="" >{xPos}</span>
                </div>
                <div className="flex items-center w-max gap-x-6 mx-auto  ">
                    <label htmlFor="">Y:</label>
                    <input type={'range'} min={-50} max={50} value={yPos} onChange={e=>setYPos(Number(e.target.value))} />
                    <span>{yPos}</span>
                </div>

                <div className="flex items-center w-max gap-x-6 mx-auto  ">
                    <label className="" htmlFor="">Border Radius:</label>
                    <input className="outline-0 " type={'range'} min={0} max={50} value={borderRadiusValue} onChange={e=>setBorderRadiusValue(Number(e.target.value))} />
                    <span className="" >{borderRadiusValue}</span>
                </div>
                <div className="flex items-center w-max gap-x-6 mx-auto  ">
                    <label htmlFor="">Rotate:</label>
                    <input type={'range'} min={0} max={360} value={rotateValue} onChange={e=>setRotateValue(Number(e.target.value))} />
                    <span>{rotateValue}</span>
                </div>
            </div>
        </section>

        {/*             code         */}
        <div className="w-full lg:w-max mx-auto my-10 ">
            <CopyBlock text={text} language={'jsx'} theme={dracula} highlight={'9,10,11,12'} />
        </div>

    </div>
  )
}

export default Animate
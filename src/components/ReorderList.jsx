import React,{useState} from 'react'
import { Reorder } from 'framer-motion'
import Title from './Title'
import Block from './Block'
import { CopyBlock,dracula } from 'react-code-blocks'

const text=`
    const [list,setList]=useState(["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"]) 
    return(
        <Block>
            <Reorder.Group values={list} onReorder={setList}  >
                {list.map((data,i)=>(
                    <Reorder.Item key={data} value={data} >
                        <div>
                            <h1>{data}</h1>
                        </div>
                    </Reorder.Item>))}
            </Reorder.Group>
        </Block>
    )

`

const ReorderList = () => {

    const [list,setList]=useState(["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"])

  return (
    <div>
        <Title>Reorder</Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Block>
                <Reorder.Group values={list} onReorder={setList}  >
                    {list.map((data,i)=>(
                            <Reorder.Item key={data} value={data} >
                                <div className='p-2 flex flex-col gap-y-2' >
                                    <h1 
                                    className='bg-white text-center 
                                    p-2 rounded-xl text-lg py-3 '
                                    >{data}</h1>
                                </div>
                            </Reorder.Item>
                        ))
                    }
                </Reorder.Group>
            </Block>

            {/*             code         */}
            <div className="w-full lg:w-max mx-auto my-10 ">
                <CopyBlock text={text} language={'jsx'} theme={dracula}  />
            </div>
        </div>

    </div>
  )
}

export default ReorderList
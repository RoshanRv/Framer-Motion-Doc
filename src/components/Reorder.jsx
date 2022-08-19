import React,{useState} from 'react'
import { Reorder } from 'framer-motion'
import Title from './Title'
import Block from './Block'

const Reorder = () => {

    const [list,setList]=useState(['Apple','Bannana','Cherry','Dragon-Fruit','Eggplant'])

  return (
    <div>
        <Title>Reorder</Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Block>
                <Reorder.Group values={list} onReorder={setList} axis='y' >
                    {
                        list.map((data,i)=>(
                            <Reorder.Item key={i}>
                                <div>data</div>
                            </Reorder.Item>
                        ))
                    }
                </Reorder.Group>
            </Block>
        </div>

    </div>
  )
}

export default Reorder
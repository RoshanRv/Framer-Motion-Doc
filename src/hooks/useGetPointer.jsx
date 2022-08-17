import {useState,useEffect}from 'react'

const useGetPointer = (ref) => {

    const [point,setPoint] = useState({x:0,y:0})

    useEffect(()=>{

        if(!ref.current) return 

        const handlePointer = ({clientX,clientY})=>{
            const element = ref.current
            const x = clientX - element.offsetLeft - element.offsetWidth/2
            const y = clientY - element.offsetTop - element.offsetHeight/2
            setPoint({x,y})
        }

        window.addEventListener('pointermove',handlePointer)

        return ()=>window.removeEventListener('pointermove',handlePointer)

    },[])

  return point
}

export default useGetPointer
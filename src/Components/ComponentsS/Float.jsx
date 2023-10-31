import { useContext, useState} from "react"
import { Context } from "../../Context/Context"

export const Float = () => {
  const {post, setPost} = useContext(Context)
  const [count, setCount] = useState(1)

  function clickB(){
    const task = {
      id:count,
      titulo:"",
      txt:""
    }
    setCount(count+1)
    setPost([...post,task])
  }
  return (
    <button onClick={()=>clickB()} className="absolute bg-slate-300 w-16 h-16 flex justify-center items-center rounded-lg right-6 bottom-6 border-2 border-black border-dashed text-3xl z-20">+</button>
  )
}

import { useContext } from "react"
import {Context} from "../../Context/Context.jsx"

export const Cards = () => {
  const {post, setPost} = useContext(Context)

  function clickBD(id){
    const itemD = post[id]
    const newList = post.filter(item => item !== itemD)
    setPost(newList)
  }
  return (
    <section className="bg-slate-500 w-full rounded-lg grid grid-cols-7 gap-2 p-2 overflow-auto">
      {
        post.map((ele,id) =>{
          return(
            <div className="bg-slate-300 rounded-lg h-72 flex flex-col" key={id}>
              <h1 className="basis-2/12 bg-cyan-300 rounded-lg">{ele.titulo}</h1>
              <p className="basis-8/12 bg-cyan-700">{ele.txt}</p>
              <button onClick={()=>clickBD(id)} className="basis-2/12 bg-red-400 rounded-lg hover:bg-black hover:text-white">Eliminar</button>
            </div>
          )
        })
      }
    </section>
  )
}

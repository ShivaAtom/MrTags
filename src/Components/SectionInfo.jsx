import {Cards} from "./ComponentsS/Cards.jsx"
import { Float } from "./ComponentsS/Float.jsx"
import {Context} from "../Context/Context.jsx"
import { useState } from "react"

export const SectionInfo = () => {
  const [post, setPost]=useState([
    {
      id:0,
      titulo:"",
      txt:""
    }
  ])

  return (
    <section className="bg-white flex-1 rounded-lg p-2 flex">
     <Context.Provider value={{post, setPost}}>
      <Cards/>
      <Float/>
     </Context.Provider>
    </section>
  )
}

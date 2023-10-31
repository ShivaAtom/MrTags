import {Cards} from "./ComponentsS/Cards.jsx"
import {GlobalContext} from "../Context/GlobalContext.jsx"
import { DefaultContext } from "../Context/DefaultContext.jsx"

export const SectionInfo = () => {
  return (
    <section className="bg-white flex-1 rounded-lg p-2 flex">
      <GlobalContext.Provider value={DefaultContext}>
        <Cards/>
      </GlobalContext.Provider>
    </section>
  )
}

import { BarSection } from "./Components/BarSection"
import { SectionInfo } from "./Components/SectionInfo"
const App = () => {
  return (
    <section className="bg-black h-screen w-full flex p-2 gap-2">
      <BarSection/>
      <SectionInfo/>
    </section>
  )
}

export default App
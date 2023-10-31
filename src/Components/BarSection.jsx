export const BarSection = () => {
  const SectionsIconsText = [
    {
      txt:"Home",
    },
    {
      txt:"Graphics",
    },
    {
      txt:"Sesion",
    },
    {
      txt:"Settings",
    },
  ]
  return (
    <aside className="bg-white w-20 rounded-lg flex p-1">
      <ul className="bg-slate-500 rounded-lg w-full p-1 flex flex-col gap-2">
        {
          SectionsIconsText.map((ele, id)=>{
            return(
              <li key={id} className="bg-cyan-600 rounded-b-lg h-14 flex items-center justify-center">
                <button className="bg-white w-full h-[100%] rounded-lg hover:bg-slate-500">{ele.txt}</button>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}
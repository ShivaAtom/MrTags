export const Cards = () => {
  const cards = [1,2,3,4,5]
  return (
    <section className="bg-slate-500 w-full rounded-lg grid grid-cols-7 gap-2">
      {
        cards.map((ele, id) => {
          return(
            <div className="bg-cyan-700 h-72 rounded-lg flex flex-col gap-2 p-2" key={id}>
              <div className="bg-slate-300 basis-3/12 rounded-lg"></div>
              <div className="bg-slate-300 basis-7/12 rounded-lg">{ele}</div>
              <div className="bg-slate-300 basis-2/12 rounded-lg"></div>
            </div>
          )
        })
      }
    </section>
  )
}

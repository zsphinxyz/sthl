
export default function Home() {
  const projects = [
    {
      id:1,
      link:'https://sdec78451.vercel.app',
      text:'Table'
    },
    {
      id:2,
      link:'https://fitwaygym.vercel.app',
      text:'Gym'
    },
    {
      id:3,
      link:'https://meddusa.vercel.app',
      text:'Medical'
    }
  ]
  return (
    <main className="flex gap-3 w-full h-full justify-center">
      {
        projects.map(i => (
          <a key={i.id} href={i.link} target="blank">
            <div className="min-w-10 min-h-10 max-w-2xl max-h-2xl bg-[#2f2f2f] p-10 rounded-xl shadow-md shadow-stone-900 hover:bg-[#3a3a3a] transition">
                <p className="text-xl font-bold text-[#aaa]">{i.text}</p>
            </div>
          </a>
        ))
      }
    </main>
  )
}
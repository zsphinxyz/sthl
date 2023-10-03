
export default function Home() {
  const projects = [
    {
      id:1,
      link:'https://21magic.vercel.app',
      text:'Magic',
      size:4,
    },
    {
      id:2,
      link:'https://fitwaygym.vercel.app',
      text:'Gym',
      size:4,
    },
    {
      id:3,
      link:'https://meddusa.vercel.app',
      text:'Med',
      size:4,
    },
    {
      id:4,
      link:'https://sdec78451.vercel.app',
      text:'Table',
      size:4,
    },
    {
      id:5,
      link:'https://quiz.zsphinx.repl.co/',
      text:'Quiz',
      size:3,
    },
    {
      id:6,
      link:'https://color.zsphinx.repl.co/',
      text:'Color',
      size:2
    },
    {
      id:7,
      link:'https://randomuser.zsphinx.repl.co/',
      text:'JSON',
      size:2
    },
  ]
  return (
    <main className="flex gap-5 h-full justify-center flex-wrap w-[70%]">
      {
        projects.map(i => (
          <a key={i.id} href={i.link} target="blank">
            <div className="group min-w-[100px] min-h-[100px] bg-[#2f2f2f] p-5 rounded-xl shadow-md shadow-stone-900 hover:bg-[#3a3a3a] border-b-stone-900 hover:border-b-green-500 border-b-2 transition flex items-center justify-center">
                <p className="leading-0 font-bold text-[#aaa] drop-shadow-2xl transition group-hover:text-green-200" style={{fontSize: i.size*6}}>{i.text}</p>
            </div>
          </a>
        ))
      }
    </main>
  )
}

const projects = [
    'zjpp.vercel.app',
    'sdec78451.vercel.app/list',
    // 'soe-thiha-lwin-resume.vercel.app',
    'z3d.vercel.app',
    'zfirst-z-sphinxs-projects.vercel.app',
    'zauthtest.vercel.app',
    'velolev.vercel.app',
]

export default function page() {
  return (
    <main className="text-white flex flex-col gap-2 ">
        {
            projects.map( i => (
                <a key={i} href={`https://${i}`} target="_blank" className="text-cyan-500 underline hover:no-underline visited:text-purple-400">{i}</a>
            ))
        }
    </main>
  )
}

'use client'
import {motion, animate, delay} from 'framer-motion';

import magic from '@/assets/magic.png';
// import color from '@/assets/color.png';
import gym from '@/assets/gym.png';
// import list from '@/assets/list.png';
import med from '@/assets/med.png';
// import quiz from '@/assets/quiz.png';
// import json from '@/assets/json.png';
import figma from '@/assets/figma.png';
import portfolio from '@/assets/portfolio.png';
import ztempa from '@/assets/ztempa.png';
import api from '@/assets/api.png';
import zmorse from '@/assets/zmorse.png';
import b3d from '@/assets/b3d.png'
import zapps from '@/assets/zapps.png'
import krist from '@/assets/krist.png'

import Image from 'next/image'

const CardHover = {
  init: {opacity:0, scaleY:0.2, x:-200},
  enter: {opacity:1, scaleY:1, x:0,}
}


export default function Home() {
  const projects = [
    {
      link:'https://zsphinxyz.vercel.app',
      text:'Portfolio',
      size:100,
      img: portfolio
    },
    {
      link:'https://b3d.vercel.app',
      text:'Blender 3D',
      size: 90,
      img: b3d
    },
    {
      link:'https://zapps.vercel.app',
      text:'React Apps',
      size: 90,
      img: zapps
    },
    {
      link:'https://zmorse.vercel.app',
      text:'Learn Morse Code',
      size: 90,
      img: zmorse
    },
    {
      link:'https://21magic.vercel.app',
      text:'Magic',
      size:100,
      img: magic

    },
    {
      link:'https://zkrist.vercel.app',
      text:'E-Commerce',
      size:100,
      img: krist,
      inprogress: true

    }, 
    {
      link:'https://ztempa.vercel.app/',
      text:'Content Posting App',
      size:100,
      img: ztempa
    },
    {
      link:'https://meddusa.vercel.app',
      text:'Med',
      size:90,
      img: med
    },
    {
      link:'https://figmaprojects.vercel.app/',
      text:'Projects from Figma',
      size:100,
      img: figma
    },
    {
      link:'https://fitwaygym.vercel.app',
      text:'Gym',
      size:90,
      img: gym
    },
    {
      link:'https://zapiz.vercel.app',
      text:'API',
      size:140,
      img: api
    },
    
    // {
    //   link:'https://sdec78451.vercel.app',
    //   text:'Table',
    //   size:100,
    //   img: list
    // },
    // {
    //   link:'https://color.zsphinx.repl.co/',
    //   text:'Color',
    //   size:50,
    //   img: color
    // },
    // {
    //   link:'https://randomuser.zsphinx.repl.co/',
    //   text:'JSON',
    //   size:50,
    //   img: json
    // },
    // {
    //   link:'https://quiz.zsphinx.repl.co/',
    //   text:'Quiz',
    //   size:70,
    //   img: quiz
    // },

  ]

  return ( 
    <main className="w-full">

      <div className='absolute left-1/2 top-1/2 w-1/5 h-1/5 max-w-2xl max-h-[672px] bg-white opacity-20 -translate-x-1/2 -translate-y-1/2 blur-[100px]' />
      <div className='absolute -left-16 top-50 w-1/5 h-1/5 max-w-2xl max-h-[672px] bg-blue-300 opacity-25 -translate-x-1/2 -translate-y-1/2 blur-[50px] rounded-full' />
      <div className='absolute right-10 bottom-10 w-[10%] h-[10%] max-w-2xl max-h-[672px] bg-blue-500 opacity-10 -translate-x-1/2 -translate-y-1/2 blur-[50px] rounded-full' />

      <section className='flex gap-5 h-full justify-center flex-wrap w-[90%] max-w-[1440px] mx-auto'> 
      {
        projects.map( (i, index) => (
          <motion.a 
            key={index} href={i.link} target="blank"
            variants={CardHover}
            initial="init"
            animate="enter"
            whileTap={{scale:0.9}}
            transition={{
              delay: index * 0.15,
              duration: 0.7,
              type: 'spring'
            }}
            >

              <motion.div 
                className="text-2xl group min-w-[300px] relative min-h-[200px] bg-[#2f2f2f] p-5 overflow-hidden object-cover rounded-xl [box-shadow:0_0_10px_0_#ccffcc22] hover:bg-[#3a3a3a] border-b-stone-900 hover:border-b-green-500  border-b-2 transition flex items-center justify-center"
                style={{}}
              >
                  <div className=' h-full absolute lef-0 top-0 overflow-hidden group'>
                    <Image src={i.img} alt={i.text} priority className='h-full object-cover saturate-[0.5] group-hover:scale-110 transition duration-200'/>
                  </div>

                  {/* Overlay */}
                  <motion.div className="absolute inset-0 w-full h-full bg-black/60" />

                  <motion.p className="font-bold text-[#ccc] drop-shadow-2xl group-hover:text-green-200" style={{fontSize: i.size+'%'}}>
                    {i.text}
                  </motion.p>

                  {
                    i.inprogress &&
                    <div title='Work In Progress' className="group/dot w-4 hover:w-24 overflow-hidden px-0.5 h-4 text-xs bg-yellow-400 absolute top-1 left-1 rounded-full transition-all">
                        <p className="hidden group-hover/dot:block text-nowrap">Work in Progress</p>
                    </div>
                  }

              </motion.div>

          </motion.a>
        ))
      } 

      </section>
    </main>
  )
}
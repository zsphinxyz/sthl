'use client'
import {motion} from 'framer-motion'

import magic from '@/assets/magic.png';
import color from '@/assets/color.png';
import gym from '@/assets/gym.png';
import list from '@/assets/list.png';
import med from '@/assets/med.png';
import quiz from '@/assets/quiz.png';
import json from '@/assets/json.png';
import figma from '@/assets/figma.png';

import Image from 'next/image'
import { useEffect, useState } from 'react';

const CardHover = {
  enter: {scaleY: 1},
  leave: {scaleY: 0.2}
}

export default function Home() {
  const projects = [
    {
      id:1,
      link:'https://21magic.vercel.app',
      text:'Magic',
      size:100,
      img: magic

    },
    {
      id:2,
      link:'https://fitwaygym.vercel.app',
      text:'Gym',
      size:90,
      img: gym
    },
    {
      id:3,
      link:'https://meddusa.vercel.app',
      text:'Med',
      size:90,
      img: med
    },
    {
      id:4,
      link:'https://sdec78451.vercel.app',
      text:'Table',
      size:100,
      img: list
    },
    {
      id:5,
      link:'https://quiz.zsphinx.repl.co/',
      text:'Quiz',
      size:70,
      img: quiz
    },
    {
      id:6,
      link:'https://color.zsphinx.repl.co/',
      text:'Color',
      size:50,
      img: color
    },
    {
      id:7,
      link:'https://randomuser.zsphinx.repl.co/',
      text:'JSON',
      size:50,
      img: json
    },
    {
      id:8,
      link:'https://figmaprojects.vercel.app/',
      text:'Projects from Figma',
      size:100,
      img: figma
    },
  ]
  return (
    <main className="flex gap-5 h-full justify-center flex-wrap w-[70%]">
      {
        projects.map(i => (
          <motion.a 
            key={i.id} href={i.link} target="blank"
            initial={ {opacity:0, scale:0.1, x:-200} }
            animate={ {opacity:1, scale:1, x:0} }
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            >
            <motion.div 
              className="text-2xl group min-w-[300px] relative min-h-[200px] bg-[#2f2f2f] p-5 overflow-hidden object-cover rounded-xl shadow-md shadow-stone-900 hover:bg-[#3a3a3a] border-b-stone-900 hover:border-b-green-500 border-b-2 transition flex items-center justify-center"
              variants={CardHover}
            >
                <div className=' h-full absolute lef-0 top-0 overflow-hidden'>
                  <Image src={i.img} alt={i.text} className='h-full object-cover saturate-[0.5] group-hover:saturate-100'/>
                </div>

                {/* Overlay  */}
                <motion.div 
                  className='w-full h-full bg-gray-900/60 absolute z-1'
                  initial={ {scaleY: 0.2} }
                  animate='leave'
                  whileHover='enter'
                >
                </motion.div>


                <motion.p className="leading-0 font-bold text-[#ddd] drop-shadow-2xl group-hover:text-green-200" style={{fontSize: i.size+'%'}}>
                  {i.text}
                </motion.p>

            </motion.div>

          </motion.a>
        ))
      }
    </main>
  )
}
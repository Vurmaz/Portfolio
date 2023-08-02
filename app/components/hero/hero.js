'use client'
import React from 'react'
import { motion } from 'framer-motion'
import HeroImage from './heroImage'
import HeroText from './heroText'
import HeroButtons from './heroButtons'

export default function Hero() {

  return (               
        <section id='home' className='h-auto w-full bg-black text-white sm:grid sm:grid-cols-2 flex flex-col mx-auto pt-16'>
            <motion.div      
                className='flex justify-center items-center p-8'
            >            
                <HeroImage />
            </motion.div>
            <div className='sm:p-2 lg:p-16 py-8 flex flex-col justify-center md:grid md:grid-rows-2 sm:gap-0 gap-4'>
                <div className='flex flex-col sm:justify-end sm:items-center md:items-start gap-2 sm:pb-8 items-center'>
                    <motion.h1 
                        initial={{ opacity:0 }}
                        whileInView={{ opacity:1 }}
                        viewport={{ once: true }}
                        transition={{ duration:0.5 , delay:0.3}}
                        className='text-red text-3xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl font-bold'
                    >
                        SADIK VURMAZ
                    </motion.h1>
                    <motion.h1 
                        initial={{ opacity:0 }}
                        whileInView={{ opacity:1 }}
                        viewport={{ once: true }}
                        transition={{ duration:0.5, delay:0.6 }}
                        className='text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-4xl text-white'
                    >
                        Full-Stack Web Developer
                    </motion.h1>                  
                </div>
                <motion.div 
                    initial={{ opacity:0 }}
                    whileInView={{ opacity:1 }}
                    viewport={{ once: true }}
                    transition={{ duration:0.5, delay:0.9 }}
                    className='flex flex-col items-center md:items-start'
                >
                    <HeroText />                      
                    <HeroButtons />   
                </motion.div>
            </div>            
        </section>                    
  )
}

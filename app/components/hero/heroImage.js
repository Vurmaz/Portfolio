import React from 'react'
import { motion } from 'framer-motion'

export default function HeroImage() {
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  return (
    <motion.img 
      initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }} 
      whileInView={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
      viewport={{ once: true }}       
      transition={{ duration: 1, delay: 1.3, }}  
      src='/hero.png' 
      className='w-7/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-full h-auto' />
  )
}

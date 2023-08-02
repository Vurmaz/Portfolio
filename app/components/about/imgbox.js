'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Imgbox({ index, item }) {

  return (
    <motion.div
      key={index}      
      className='flex flex-col gap-4 justify-center items-center w-full'
    >
        <h1 className='text-xs md:text-sm'>{item.title}</h1>
        <img src={`/${item.url}`} className='w-full h-auto' />          
    </motion.div>  
  )
}

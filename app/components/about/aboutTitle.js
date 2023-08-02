'use client'
import { motion } from 'framer-motion'

export default function AboutTitle() {
  return (
    <motion.h1  
        className='text-2xl sm:text-3xl text-center sm:mt-24'
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.5, delay:0.3 }}
        viewport={{ once:true }}
    >
        ABOUT ME
    </motion.h1>
  )
}

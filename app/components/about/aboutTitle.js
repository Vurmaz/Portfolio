'use client'
import { motion } from 'framer-motion'

export default function AboutTitle() {
  return (
    <motion.h1  
        className='text-2xl sm:text-3xl text-center sm:mt-24 sm:[--opacity-from:0%] sm:[--opacity-to:100%]'
        initial={{ opacity:'var(--opacity-from)' }}
        whileInView={{ opacity:'var(--opacity-to)' }}
        transition={{ duration:0.5, delay:0.3 }}
        viewport={{ once:true }}
    >
        ABOUT ME
    </motion.h1>
  )
}

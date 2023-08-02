'use client'
import { motion } from "framer-motion"

export default function SkillTitle() {
  return (
    <motion.h1 
        className='text-2xl sm:text-3xl text-center sm:mt-16 py-16'
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ transition:0.5, delay:0.3 }}
        viewport={{ once:true }}
    >
        SKİLLS
    </motion.h1>
  )
}

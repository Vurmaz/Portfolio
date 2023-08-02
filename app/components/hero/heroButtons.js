'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroButtons() {
  const variantsGrey = {
    initial:{
      backgroundColor:'#171717',      
    },
    final:{
      backgroundColor:'#444444',        
    }
  }

  const variantsRed = {
    initial:{
      backgroundColor:'#171717',
      
    },
    final:{
      backgroundColor:'#DA0037', 
           
    }
  }  

  return (
    <div className='flex flex-row justify-start gap-8 py-8'>
      <Link href='#projects'>
        <motion.button 
          className='h-fit bg-black p-2 sm:p-4 lg:px-8 text-white border-2 border-grey outline-0 text-xs md:text-sm'   
          variants={variantsGrey}
          initial='initial'
          whileHover='final'  
          transition={{  duration:0.7, ease:'easeInOut' }} 
        >
          Projects
        </motion.button>            
      </Link>    
      <Link href='#contact'>
        <motion.button 
          className='h-fit bg-black p-2 sm:p-4 lg:px-8 text-white border-2 border-red outline-0 text-xs md:text-sm'
          variants={variantsRed}
          initial='initial'
          whileHover='final'
          transition={{ duration:0.7, ease:'easeInOut' }}
        >
            HIRE ME
        </motion.button>         
      </Link>                               
    </div> 
  )
}

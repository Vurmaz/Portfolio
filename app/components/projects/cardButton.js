'use client'
import React from 'react'
import { motion, animate } from 'framer-motion' 
import Link from 'next/link'
import { BiCodeAlt } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'

export default function CardButton(props) {   
 
const buttonHoverStart = (event) => {        
  animate(event.target, { backgroundColor: "#EDEDED", color:'#171717' }, {
    duration: 0.9,
  })                 
}

const buttonHoverEnd = () => {
  animate(".change", { backgroundColor: "#171717", color:'#EDEDED' }, {
    duration: 0.2,
  })        
}    

  return (
    <Link href={props.url} target='_blank'>
      <motion.button 
        className='border-2 p-2 px-4 text-xs sm:text-sm md:text-base rounded-lg pointer-events-auto change flex items-center gap-1'      
        onHoverStart={(event)=>buttonHoverStart(event)}
        onHoverEnd={buttonHoverEnd}
        transition={{ ease:'easeInOut' }}  
      >        
        {
          props.text === 'CODE'
          ?
          <BiCodeAlt className='w-4 h-4' />
          :
          <CgWebsite className='w-4 h-4' />
        }
        {props.text} 
      </motion.button> 
    </Link>              
  )
}

'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, animate, stagger } from 'framer-motion'
import Link from 'next/link'

export default function ContactBox(props) {
   
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true })

  useEffect(()=>{
    if(isInView){
      animate('.contact-icons', { opacity :'var(--opacity-to)', y:'var(--y-to)' }, { duration:0.5 ,delay:stagger(0.1), ease:'easeInOut' })
    }
  }, [isInView])

  return (  
    <Link href={props.url} target='_blank'>
      <motion.div 
        ref={ref}        
        initial={{ opacity:'var(--opacity-from)', y:'var(--y-from)' }}   
        whileHover={{ scale:1.2 }}
        transition={{ duration:0.5 }}   
        className='
          flex flex-col items-center justify-center gap-2 contact-icons
          sm:[--opacity-from:0%] sm:[--opacity-to:100%] sm:[--y-from:-100%] sm:[--y-to:0]
        '
      >
          {props.icon} 
          <h1 className=''>{props.name}</h1>               
      </motion.div>        
    </Link>
              
  )
}

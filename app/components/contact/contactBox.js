'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, animate, stagger } from 'framer-motion'
import Link from 'next/link'

export default function ContactBox(props) {
   
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true })

  useEffect(()=>{
    if(isInView){
      animate('.contact-icons', { opacity : 1, y:0 }, { duration:0.5 ,delay:stagger(0.1), ease:'easeInOut' })
    }
  }, [isInView])

  return (  
    <Link href={props.url} target='_blank'>
      <motion.div 
        ref={ref}
        className='flex flex-col items-center justify-center gap-2 contact-icons'
        initial={{ opacity:0, y:-200 }}   
        whileHover={{ scale:1.2 }}
        transition={{ duration:0.5 }}   
      >
          {props.icon} 
          <h1 className=''>{props.name}</h1>               
      </motion.div>        
    </Link>
              
  )
}

'use client'
import React, { useRef, useEffect } from 'react'
import Tree from './tree'
import { motion, stagger, useInView, animate } from 'framer-motion'

export default function FrontEnd(props) {

let ref = useRef(null)
const isInView = useInView(ref, { once: true })

useEffect(() => { 
  if(isInView){
    animate(".fr", { x : 0, opacity:1 }, { delay: stagger(0.1, { startDelay:0.2 }), duration:0.9 })
  }
}, [isInView])

  return (
    <>
        <motion.h1 className='text-center py-2 text-sm sm:text-base mb-12' ref={ref}>Front-end</motion.h1>
        <motion.div className='grid grid-cols-1 gap-16' >
            {
                props.front.map((item, index) => {
                    return (
                      <motion.div 
                        key={index}
                        initial={{ x:-100, opacity:0 }}
                        className='fr'                       
                      > 
                        <Tree item={item} />
                      </motion.div>
                    )
                }) 
            }            
        </motion.div>        
    </>

  )
}

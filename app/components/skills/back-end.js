'use client'
import Tree from "./tree"
import React, { useRef, useEffect } from 'react'
import { motion, stagger, useInView, animate, useTransform, useScroll } from 'framer-motion'

export default function BackEnd(props) {

let ref = useRef(null)
let container = useRef(null)
const isInView = useInView(ref, { once: true })

const { scrollYProgress } = useScroll({ target:container, offset:['start start', 'end start'] })

let y = useTransform(scrollYProgress, [0, 1], ['0', '144%'])

useEffect(() => { 
  if(isInView){
    animate(".be", { y : 0, opacity:1 }, { delay: stagger(0.1, { startDelay:0.2 }), duration:0.9 })
  }
}, [isInView])

  return (
    <div>
      <h1 className='text-center py-2 text-sm sm:text-base mb-12' ref={ref}>Back-end</h1>
      <motion.div style={{ y }} ref={container} className='grid grid-cols-1 gap-16'>      
          {
              props.back.map((item) => {
                  return (
                    <motion.div
                      key={item._id} 
                      initial={{ y: 400, opacity:0 }}           
                      className="be"        
                    >
                      <Tree item={item} />
                    </motion.div>                    
                  )
              }) 
          }          
      </motion.div>         
    </div>
  )
}

'use client'
import Tree from "./tree"
import React, { useRef, useEffect } from 'react'
import { motion, stagger, useInView, animate, useScroll, useTransform } from 'framer-motion'

export default function Miscellaneous(props) {

let ref = useRef(null)
let container = useRef(null)
const isInView = useInView(ref, { once: true })

const { scrollYProgress } = useScroll({ target:container, offset:['start start', 'end start'] })

let y = useTransform(scrollYProgress, [0, 1], ['0', '31%'])

useEffect(() => { 
  if(isInView){
    animate(".mi", { x : 0, opacity:1 }, { delay: stagger(0.1, { startDelay:0.2 }), duration:0.9 })
  }
}, [isInView])

  return (
    <div>
      <h1 className='text-center py-2 text-sm sm:text-base mb-12' ref={ref}>Miscellaneous</h1>
      <motion.div ref={container} style={{ y }} className='grid grid-cols-1 gap-16 h-max'>
          {
              props.misc.map((item) => {
                  return (
                    <motion.div
                      key={item._id}
                      initial={{ x:100, opacity:0 }}
                      className='mi' 
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

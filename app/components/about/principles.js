'use client'
import React, { useEffect, useRef} from 'react'
import Imgbox from './imgbox'
import { motion, useInView, animate, stagger, useScroll, useTransform } from 'framer-motion'

export default function Principles() {
      let array = [
    {
      title:'Hard worker',
      url:'computer.png'
    },
    {
      title:'Flexible',    
      url:'flex.png',  
    },
    {
      title:'Active',
      url:'comm.png'
    }
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const container = useRef(null)

  const { scrollYProgress } = useScroll({ target:container, offset:['start start', 'end start'] })

  let y = useTransform(scrollYProgress, [0, 1], [0, 100])  

  useEffect(() => {
    if(isInView){
      animate(".f", { opacity: 1, y:0 }, { delay: stagger(0.5, { startDelay:0.9 }) })
    }
    
  }, [isInView])

  return (
    <div>        
        <motion.div 
          className='grid gap-2 md:gap-4 lg:gap-16 justify-center grid-cols-3 items-center mx-auto w-full sm:w-10/12 md:w-8/12 lg:8/12 py-8'
          style={{ y }}
          ref={container}
        >            
        {
            array.map((item, index) => {
            return(
                <motion.div 
                  key={index} 
                  ref={ref} 
                  className='f'
                  initial={{ opacity:0, y:50 }}                
                >
                  <Imgbox  index={index} item={item} />  
                </motion.div>                
            )
            })
        }
        </motion.div>            
    </div>

  )
}

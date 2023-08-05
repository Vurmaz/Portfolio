'use client'
import React, { useRef, useState, useEffect } from 'react'
import CardButton from './cardButton'
import { motion, useTransform, useScroll } from 'framer-motion' 

export default function Card(props) {

    const ref1 = useRef(null)
    const ref2 = useRef(null)

    const [imgHeight, setImgHeight] = useState(null)
    const [divHeight, setDivHeight] = useState(null)

    const detectHeight = () => {
        const height1 = ref1.current.clientHeight
        const height2 =  ref2.current.clientHeight        
        setImgHeight(height1) 
        setDivHeight(height2)       
    }

    const container = useRef(null)
    
    const { scrollYProgress } = useScroll({ target:container, offset:['start start', 'end start'] })

    let y = useTransform(scrollYProgress, [0, 1], [0, 100])      

    useEffect(() => {
        window.addEventListener('resize', detectHeight)
        return(() => {
            window.removeEventListener('resize', detectHeight)
        })         
    }, [imgHeight])
    
    useEffect(() => {
        const divHeight = ref2.current.clientHeight
        setDivHeight(divHeight)           
        const height1 = ref1.current.clientHeight
        setImgHeight(height1)       
    }, [])
    
  return (
    <div>
        <motion.div 
            className='card-box w-full sm:w-10/12 mx-auto md:w-7/12 lg:w-1/2'
            style={{ height: imgHeight + divHeight + 30, y  }} 
            initial={{ x:-200, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            viewport={{ once:true }}
            transition={{ duration:0.5, delay:0.5 }} 
            ref={container}          
        >  
        <div className='card pointer-events-none'>
            <div  className='front'>           
                <h1 className='p-2 text-xs sm:text-sm md:text-base'>{props.project.name}</h1>
                <img ref={ref1} src={`/${props.project.name}.png`} className='w-full img-cont' />
                <div ref={ref2}>
                    <p className='text-xs md:text-sm lg:text-base w-7/12 mx-auto text-center p-4'>
                        {props.project.desc}
                    </p>                    
                </div>                
                </div>
            <div className='back'>
                <h1 className='p-2 text-xs sm:text-sm md:text-base'>{props.project.name}</h1>
                <img src={`/${props.project.name}.gif`} />
                <div className=''>
                    <motion.div className='flex gap-4 justify-center p-8'>
                        <CardButton text={'CODE'} url={props.project.github} />
                        <CardButton text={'DEMO'} url={props.project.url} />                        
                    </motion.div>                     
                </div>
            </div>        
        </div>
        </motion.div>               
    </div>
  )
}

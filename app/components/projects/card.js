'use client'
import React, { useRef, useState, useEffect } from 'react'
import CardButton from './cardButton'
import { motion, useTransform, useScroll } from 'framer-motion' 

export default function Card(props) {

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const videoRef = useRef(null)

    const [imgHeight, setImgHeight] = useState(null)
    const [divHeight, setDivHeight] = useState(null)
    const [viewportWidth, setViewportWidth] = useState('')   

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
        setViewportWidth(window.innerWidth)
        const divHeight = ref2.current.clientHeight
        setDivHeight(divHeight)           
        const height1 = ref1.current.clientHeight
        setImgHeight(height1)  
        videoRef.current.pause()  
        const handleResize = () => {
            setViewportWidth(window.innerWidth)
        }    
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }          
    }, [])
    
  return (
    <div>
        <motion.div 
            className={`${viewportWidth > 640 ? 'card-box' : ''}
                w-full sm:w-10/12 mx-auto md:w-7/12 lg:w-1/2
                sm:[--x-from:-100%] sm:[--x-to:0] sm:[--opacity-from:0%] sm:[--opacity-to:100%]
            `}
            style={{ height: imgHeight + divHeight + 30, y  }} 
            initial={{ x:'var(--x-from)', opacity:'var(--opacity-from)' }}
            whileInView={{ x:'var(--x-to)', opacity:'var(--opacity-to)' }}
            viewport={{ once:true }}
            transition={{ duration:0.7, delay:0.5 }} 
            ref={container}   
            onHoverStart={()=>videoRef.current.play()}
            onHoverEnd={()=>videoRef.current.pause()}       
        >  
        <div className='card pointer-events-none'>
            <div className='front'>           
                <h1 className='p-2 text-xs sm:text-sm md:text-base'>{props.project.name}</h1>
                <img ref={ref1} src={`/${props.project.name}.webp`} alt={props.project.name} className='w-full img-cont' />
                <div ref={ref2}>
                    <p className='text-xs md:text-sm lg:text-base w-7/12 mx-auto text-center p-4'>
                        {props.project.desc}
                    </p>   
                    {
                        viewportWidth < 641
                        ?
                        <div className=''>
                            <motion.div className='flex gap-4 justify-center p-8'>
                                <CardButton text={'CODE'} url={props.project.github} />
                                <CardButton text={'DEMO'} url={props.project.url} />                        
                            </motion.div>                     
                        </div>                         
                        :
                        ''
                    }
                                    
                </div>                
                </div>
            <div className={viewportWidth > 640 ? `back` : 'hidden'}>            
                <h1 className='p-2 text-xs sm:text-sm md:text-base'>{props.project.name}</h1>
                
                <video ref={videoRef} src={ viewportWidth > 640 ? `/${props.project.name}.mp4` : ''} autoPlay loop muted />
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

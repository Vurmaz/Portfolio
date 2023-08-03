'use client'
import React, { useState, useEffect, useRef } from 'react'
import Menu from './menu'
import Image from 'next/image'
import { animate, motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {  

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [viewportWidth, setViewportWidth] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  

  useEffect(() => {
    const handleResize = () => {
        setViewportWidth(window.innerWidth)
    }    

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(()=>{

    setViewportWidth(window.innerWidth)
  },[])

  useEffect(()=>{
    if(viewportWidth > 640){   
      window.document.body.classList.remove('menu-active')
    }
  }, [viewportWidth])

  useEffect(()=>{
    if(isMenuOpen){       
      window.document.body.classList.add('menu-active')
    }

    return(()=>{
      window.document.body.classList.remove('menu-active')
    })
    
  }, [isMenuOpen])

  useEffect(()=>{
    if(isHovered){
      animate('.name-text', { opacity:1 }, { duration:1, ease:'easeInOut' })
    }
    return(()=>{
      animate('.name-text', { opacity:0 }, { duration:1, ease:'easeInOut' })  
    })
    
  }, [isHovered])

  return (
    <div className={`bg-black w-full flex justify-between fixed w-full z-50 p-2 px-4 text-white bt-2 bs-header`}>
      <Link href='#home'>
        <motion.div 
          className='flex items-center p-4 cursor-pointer' 
          ref={ref}
          onHoverStart={()=>setIsHovered(true)}
          onHoverEnd={()=>setIsHovered(false)}          
        >
          <Image 
            src='/S1.svg'
            width={44}
            height={44}
            alt='s'
            priority
          />
          <motion.h1 
            initial={{ opacity:0 }}
            className='text-xl name-text'                   
          >
            ADIK
          </motion.h1>
        </motion.div>      
      </Link>
      <div className='flex gap-2 p-4 items-center'>
        <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} viewportWidth={viewportWidth} />   
      </div>  
    </div>
    
  )
}

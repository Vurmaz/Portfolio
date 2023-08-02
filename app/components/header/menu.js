'use client'
import { CgMenuMotion, CgClose } from 'react-icons/cg'
import Link from 'next/link'
import { animate, motion } from 'framer-motion'

export default function Menu({ setIsMenuOpen, isMenuOpen, viewportWidth }) {

    const changeState = (state, e) => {
        if(state === true){
            animate(e.target.parentNode.children[1], { opacity:1, y:3 }, { duration:1 })
        }
        else{
            animate(e.target.parentNode.children[1], { opacity:0, y:15 }, { duration:1 })
        }
    }

    const array = [
        { name:'about' },{ name:'projects' }, { name:'skills' }, { name:'contact' }
    ]


  return (
    <div>
    {
        viewportWidth > 640
        ?
            <div className='grid grid-cols-4 gap-8 justify-end items-center text-white'>
                {
                    array.map((element, index) => {

                        return(
                            <Link 
                                href={`#${element.name}`}
                                key={index}
                            >
                                <motion.h4                                                 
                                    className='text-base text-center uppercase '                                 
                                    onHoverStart={(e)=>changeState(true, e)}
                                    onHoverEnd={(e)=>changeState(false, e)}                                                       
                                >   
                                    {element.name}
                                </motion.h4>   
                                <motion.div initial={{ opacity:0, y:15 }} className='w-16 h-px bg-white absolute'>
                                </motion.div>
                            </Link>
                        )
                    })
                }                              
            </div>
        :
        <>
            <button onClick={() => setIsMenuOpen((prev) => !prev)}>
                <CgMenuMotion className={`fade h-8 w-8 text-white ${isMenuOpen ? 'hidden' : 'block'}`} />
                <CgClose className={`fade h-8 w-8 text-white ${isMenuOpen ? 'block' : 'hidden'}`} />
            </button>
            {
            isMenuOpen
            ?
                <motion.div 
                    className='w-full z-50 h-full bg-black inset-0  fixed top-20 flex flex-col gap-8 p-4 pt-16 items-center'
                    initial={{ x:-200, opacity:0 }}
                    animate={isMenuOpen ? { x:0, opacity:1 } : '' }
                    transition={{ type:'keyframes', duration:0.5, ease:'linear' }}
                >
                    <Link href='#home'>
                       <h1 onClick={()=>setIsMenuOpen(false)} className='text-lg'>Home</h1>  
                    </Link>
                    <Link href='#about'>
                        <h1 onClick={()=>setIsMenuOpen(false)} className='text-lg'>About</h1>
                    </Link>
                    <Link href='#projects'>
                        <h1 onClick={()=>setIsMenuOpen(false)} className='text-lg'>Projects</h1>    
                    </Link>                    
                    <Link href='#skills'>
                        <h1 onClick={()=>setIsMenuOpen(false)} className='text-lg'>Skills</h1>
                    </Link>

                    <Link href='#contact'>
                        <h1 onClick={()=>setIsMenuOpen(false)} className='text-lg'>Contact</h1>    
                    </Link>
                </motion.div>
            :
            ''
            }         
        </>
    }    
    </div>
  )
}

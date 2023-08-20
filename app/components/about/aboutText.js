'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutText() {

  return (
    <div className=' w-full mx-auto flex justify-center sm:w-1/2 w-8/12 mt-8'>
      <motion.p  
         
          initial={{ opacity:'var(--opacity-from)' }}
          whileInView={{ opacity:'var(--opacity-to)' }}
          viewport={{ once: true }}       
          transition={{ duration: 0.5, delay: 0.9 }}  
          className='
            text-xs sm:text-xs md:text-sm text-justify about-text p-4
            sm:[--opacity-from:0%] sm:[--opacity-to:100%]
          '                              
      >
        I am Sadık a determined and skilled Full-Stack Web Developer with 
        the strong foundation in front-end technologies like HTML, CSS, and JavaScript, 
        combined with proficiency in back-end development and server-side technologies like Node.js and Express.
        My portfolio features a wide range of creative and functional web applications.
        Every project I worked on was committed to producing high-quality code and user-friendly interfaces.<br /><br />
        I began my education during the COVID pandemic and soon discovered that the internet is where I am most passionate. Then I made a hard decision and shifted from environmental engineering to web development.
        As a dedicated and independent learner, I found the Odin Project to be the ideal resource for my education in web programming. 
        After that, I am continuously enhancing my skills to keep up with the latest trends and best practices in web development.<br /><br />
        Beside coding, I enjoy walking, reading books and mangas, playing video games, and role-playing games. Rock music, sci-fi, dark fantasy worlds and football are some of my favorite things.       
      </motion.p>                 
    </div>
  )
}


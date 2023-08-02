import React from 'react'
import { motion } from 'framer-motion'
import { TfiEmail } from 'react-icons/tfi'
import ContactBox from './contactBox'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdOutlineContactPage } from 'react-icons/md'

export default function ContactLinks() {
  return (
    <div>
        <motion.div 
            className='flex gap-4 items-end'
        >                                       
        </motion.div>
        <div className='flex gap-16 justify-center p-4 items-center flex-wrap h-auto'>
            <ContactBox icon={<TfiEmail className='w-8 h-8' />} name={'Email'} url={'mailto:sadikvurmaz@gmail.com'} />
            <ContactBox icon={<BsTwitter className='w-8 h-8' />} name={'Twitter'} url={''} />
            <ContactBox icon={<BsGithub className='w-8 h-8' />} name={'Github'} url={'https://github.com/Vurmaz'} />
            <ContactBox icon={<BsLinkedin className='w-8 h-8' />} name={'LinkedIn'} url={''} />
            <ContactBox icon={<MdOutlineContactPage className='w-8 h-8' />} name={'Resume'} url={''} />                          
        </div>
    </div>
  )
}


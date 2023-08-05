'use client'
import * as Form from '@radix-ui/react-form';
import NameField from './nameField';
import EmailField from './emailField';
import MessageField from './messageField';
import { animate, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import axios from 'axios';
import * as Toast from '@radix-ui/react-toast';

export default function FormComponent() {

  const [isOpen, setIsOpen] = useState(false)

  const [data, setData] = useState({ 
    name:'',
    email:'',
    message:'' 
  })
  
  const submitForm = async(event) => {
    event.preventDefault()    
    await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/contact`,
      { data }
    )
    await setData({ 
      name:'',
      email:'',
      message:'' 
    })
    await setIsOpen(true)
  }

  const ani = () => {
    animate('.before', { opacity:1, width:'25%' }, { duration:1 })
  }
  const aniCancel = ()=> {
    animate('.before', { opacity:0, width:'0' }, { duration:1 })
  }
  
  return (  
    <>
      <Form.Root onSubmit={submitForm} className='w-full sm:w-10/12 md:w-8/12 lg:w-7/12 mx-auto p-4 gap-4 mt-16'>
      <div className='flex flex-row gap-4 w-full'>
          <NameField setData={setData} data={data} />
          <EmailField setData={setData} data={data} />
      </div>
          <MessageField setData={setData} data={data} />
          <Form.Submit  asChild className='w-full mt-8 flex relative' >            
              <div className='flex justify-center'> 
                <motion.button 
                  className='mx-auto text-white  w-1/2 py-2 px-4 relative z-10' 
                  onHoverStart={ani} 
                  onHoverEnd={aniCancel}                                                  
                >
                  Send Me Message
                </motion.button>  
                <motion.div 
                  className='w-1/2 bg-red absolute before opacity-0 pointer-events-none'
                ></motion.div>
              </div>
          </Form.Submit>
      </Form.Root>
      <Toast.Provider swipeDirection="left">
        <Toast.Root className='bg-red flex items-center justify-center' open={isOpen} onOpenChange={setIsOpen}>
          <Toast.Title className='text-white p-2  flex items-center justify-between gap-8'>
            MAIL HAS SENDED
            <AiOutlineClose onClick={()=>setIsOpen(false)} className='w-4 h-4 text-white cursor-pointer' />
          </Toast.Title>
        </Toast.Root>
        <Toast.Viewport className=' fixed bottom-0 left-0 flex flex-col p-4  w-max  m-0 list-none z-[2147483647] outline-none' />
    </Toast.Provider>
    </>
  )
}

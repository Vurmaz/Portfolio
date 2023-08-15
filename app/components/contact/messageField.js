
'use client'
import * as Form from '@radix-ui/react-form'
import { motion } from 'framer-motion'

export default function MessageField({ setData, data }) {
  return (
    <>
        <Form.Field className='mt-8'>
            <motion.div
                initial={{  y:'var(--y-from)', opacity:'var(--opacity-from)' }}
                whileInView={{ y:'var(--y-to)', opacity:'var(--opacity-to)' }}
                viewport={{ once: true }}
                transition={{ duration:0.7, delay:0.3 }}
                className='sm:[--y-from:25%] sm:[--y-to:0%] sm:[--opacity-from:0%] sm:[--opacity-to:100%]'                
            >
                <div className='flex items-baseline justify-between text-xs'>
                    <Form.Label>Message</Form.Label>
                    <Form.Message className='text-red font-bold' match='valueMissing'>Enter Message</Form.Message>
                </div> 
                <Form.Control asChild>
                    <textarea 
                        className='w-full p-2 h-48 bg-black bo border-b-2 input-shadow'
                        required
                        value={data.message}
                        onChange={(e)=>setData({...data, message:e.target.value })}                        
                    />
                </Form.Control>                 
            </motion.div>          
        </Form.Field>
    </>
  )
}

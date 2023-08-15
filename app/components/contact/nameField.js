'use client'
import * as Form from '@radix-ui/react-form';
import { motion } from 'framer-motion';

export default function NameField({ setData, data }) {
  return (        
        <Form.Field name='name' className='w-1/2'>
            <motion.div
                initial={{  x:'var(--x-from)', opacity:'var(--opacity-from)' }}
                whileInView={{ x:'var(--x-to)', opacity:'var(--opacity-to)' }}
                transition={{ duration:0.7, delay:0.3 }}
                viewport={{ once:true }}
                className='sm:[--x-from:-50%] sm:[--x-to:0%] sm:[--opacity-from:0%] sm:[--opacity-to:100%]'
            >
                <div className='flex items-baseline justify-between text-xs'>
                    <Form.Label className=''>Name</Form.Label>
                    <Form.Message className='text-red font-bold' match='valueMissing'>Enter name</Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className='bo h-12 w-full text-white pl-2 bg-black border-b-2 input-shadow'                        
                        name='name' 
                        required
                        value={data.name}
                        onChange={(e)=>setData({...data, name:e.target.value })}                        
                    /> 
                </Form.Control>                 
            </motion.div>           
        </Form.Field>        
  )
}


'use client'
import * as Form from '@radix-ui/react-form';
import { motion } from 'framer-motion';

export default function EmailField({ setData, data }) {
  return (
    <>
        <Form.Field name='email' className='w-1/2'>
            <motion.div
                initial={{ x:100, opacity:0 }}
                whileInView={{ x: 0, opacity:1 }}
                viewport={{ once:true }}
                transition={{ delay:0.3, duration:0.7 }}
            >
                <div className='flex items-baseline justify-between text-xs'>
                    <Form.Label>Email</Form.Label>
                    <Form.Message className='text-red font-bold' match='valueMissing'>Enter Email</Form.Message>
                    <Form.Message className='text-red font-bold' match='typeMismatch'>Invalid email</Form.Message>
                </div>   
                <Form.Control asChild>
                    <input
                        className='bo h-12 w-full text-white pl-2 bg-black border-b-2 input-shadow'
                        type='email'
                        name='email' 
                        required 
                        value={data.email}
                        onChange={(e)=>setData({...data, email:e.target.value })}                                                 
                    />                
                </Form.Control>                 
            </motion.div>     
        </Form.Field>            
    </>
  )
}

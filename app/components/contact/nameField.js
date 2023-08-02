'use client'
import * as Form from '@radix-ui/react-form';
import { motion } from 'framer-motion';

export default function NameField({ setData, data }) {
  return (        
        <Form.Field name='name' className='w-1/2'>
            <motion.div
                initial={{ x:-100, opacity:0 }}
                whileInView={{ x:0, opacity:1 }}
                transition={{ duration:0.7, delay:0.3 }}
                viewport={{ once:true }}
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

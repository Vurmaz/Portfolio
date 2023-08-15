'use client'
import FormComponent from "./form";
import ContactLinks from "./contactLinks";
import { motion } from "framer-motion";

export default function Contact() {

  return (
    <section id="contact" className='h-auto w-full bg-black text-white mx-auto p-8 pb-16 ' >
        <motion.h1 
          className='text-2xl sm:text-3xl text-center sm:mt-16 py-16 sm:[--opacity-from:0%] sm:[--opacity-to:100%]'
          initial={{ opacity:'var(--opacity-from)' }}
          whileInView={{ opacity:'var(--opacity-to)' }}
          viewport={{ once:true }}
          transition={{ duration:0.5, delay: 0.3 }}
        >
          CONTACT ME
        </motion.h1>              
          <div className="p-8 flex justify-evenly flex-col">
            <ContactLinks />          
          </div>         
        <FormComponent />        
    </section>
  )
}

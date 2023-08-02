'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Tree(props) {

const variant = {
    initial:{ scale: 1 },
    final:{ scale :1.2 }
}    

    return (
        <motion.div 
            className='flex flex-col items-center justify-center gap-2'
            variants={variant}
            initial='initial'
            whileHover='final'
            transition={{
                duration:0.5,
            }}
        >
            <Image 
                src={`/${props.item.name}.svg`}
                width={32}
                height={32}
                alt={props.item.name}
            />
            <h1 className='text-xs sm:text-sm'>{props.item.name}</h1>
        </motion.div>
    )
}

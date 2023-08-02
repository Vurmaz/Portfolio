
import AboutText from './aboutText'
import Principles from './principles'
import AboutTitle from './aboutTitle'

export default function About() {

  return (
    <section id='about' className='h-fit w-full bg-black text-white mx-auto p-8 py-16'>
      <AboutTitle />          
      <div className='flex mt-4 sm:mt-8 flex-col gap-20 sm:gap-28'>
        <AboutText />                  
        <Principles />              
      </div>  
    </section>
  )
}


import Header from './components/header'
import Hero from './components/hero/hero'
import Skills from './components/skills/skills'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'

export default function Home() {

  return (
    <>
      <header>
        <Header />        
      </header>
      <main className='overflow-hidden h-auto main'>
        <div className='h-auto'>                     
            <Hero />     
            <About />
            <Projects />
            <Skills />           
            <Contact />                  
        </div>      
      </main>
      <footer>
        <Footer /> 
      </footer>
    </>
  )
}

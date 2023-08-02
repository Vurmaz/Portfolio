
import Cards from "./cards"
import ProjectTitle from "./projectTitle"

export default function Projects() {
  return (
    <section 
      id="projects"
      className='h-auto w-full bg-black text-white mx-auto p-8'
    >      
      <ProjectTitle />
      <Cards />        
    </section>
  )
}

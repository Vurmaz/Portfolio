
import SkillTree from './skillTree'
import SkillTitle from './skillTitle'

export default function Skills() {
  return (
    <section id='skills' className='h-auto w-full bg-black text-white mx-auto p-8'>
      <SkillTitle />
      <div className='w-full sm:w-10/12 md:w-8/12 mx-auto'>
        <SkillTree />          
      </div>        
    </section>
  )
}

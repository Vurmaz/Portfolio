
import FrontEnd from "./front-end"
import BackEnd from "./back-end"
import Miscellaneous from "./miscellaneous"

const getSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/skill`)  
    if (!res.ok) {    
        throw new Error('Failed to fetch data')
    }
     return res.json()   
}

export default async function SkillTree() {

    const datas =  await getSkills()    
    
  return (
    <div className="grid grid-cols-3">
        <div className="border-r-2 border-double">
            <FrontEnd front={datas.skills.filter((item) => item.category == 'Front-end')} />  
        </div>
        <div>
            <BackEnd back={datas.skills.filter((item) => item.category == 'Back-end')} />
        </div>
        <div className="border-l-2 border-double">
            <Miscellaneous misc={datas.skills.filter((item) => item.category == 'Miscellaneous')} />
        </div>
    </div>
  )
}


import React from 'react'
import Card from './card'

const getProjects1 = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/project`)  
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data
}

export default async function Cards() {

    const data = await getProjects1()
    
    return (
        <div className='flex flex-col gap-48'>
            {
                data.projects.map((project) => {
                    
                    return (
                        <Card key={project._id} project={project} />                        
                    )
                })
            }        
        </div>
    )
}

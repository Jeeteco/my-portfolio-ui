import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

const ProjectContainer = () => {
    const project=[
        {
            name:"portfolio-UI",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeBKX6MfnebwQXAJQB1Vfy9eekiWupZpKBA&s"
            
        },
        {
            name:"portfolio-UI",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeBKX6MfnebwQXAJQB1Vfy9eekiWupZpKBA&s"
            
        },
        {
            name:"portfolio-UI",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeBKX6MfnebwQXAJQB1Vfy9eekiWupZpKBA&s"
            
        }


    ]
    return (
        <div className='project-Container'>

            <h1 style={{alignSelf:"center"}}>Projects</h1>
            {
                project.map((projectItem,index)=>(
                    <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={projectItem.image} />}
                >
                    <Meta title={projectItem.name} description="www.instagram.com" />
                </Card>
    
                ))
            }
           
        </div>
    )
}

export default ProjectContainer
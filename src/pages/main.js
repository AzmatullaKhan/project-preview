import './allPages.css'
import { Project1 } from './project1'
import { Project2 } from './project2'

export const Main=()=>{
    return(
    <div className='main-background'>
        <div className='main-mini-background'>
            <div className='project-main-container'>
                <section id='project1'>
                    <Project1 />
                </section>
                <section id='project2'>
                    <Project2 />
                </section>
            </div>
        </div>
    </div>
    )
}
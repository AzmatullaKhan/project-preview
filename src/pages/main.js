import './allPages.css'
import { Project1 } from './project1'
import { Project2 } from './project2'
import { Project3 } from './project3'
import { Project4 } from './project4'
import { Project5 } from './project5'
import { Project6 } from './project6'
import { Project7 } from './project7'
import { Project8 } from './project8'
import { Project9 } from './project9'
import { Project10 } from './project10'
import { Project11 } from './project11'

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
                <section id='project3'>
                    <Project3 />
                </section>
                <section id='project4'>
                    <Project4 />
                </section>
                <section id='project5'>
                    <Project5 />
                </section>
                <section id='project6'>
                    <Project6 />
                </section>
                <section id='project7'>
                    <Project7 />
                </section>  
                <section id='project8'>
                    <Project8 />
                </section>  
                <section id='project9'>
                    <Project9 />
                </section>  
                <section id='project10'>
                    <Project10 />
                </section>
                <section id='project10'>
                    <Project11 />
                </section>  
            </div>
        </div>
    </div>
    )
}
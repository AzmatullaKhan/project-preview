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
            <div className='href-holder'>
                <a href='#project1' className='project-href'>Project 1</a>
                <a href='#project2' className='project-href'>Project 2</a>
                <a href='#project3' className='project-href'>Project 3</a>
                <a href='#project4' className='project-href'>Project 4</a>
                <a href='#project5' className='project-href'>Project 5</a>
                <a href='#project6' className='project-href'>Project 6</a>
                <a href='#project7' className='project-href'>Project 7</a>
                <a href='#project8' className='project-href'>Project 8</a>
                <a href='#project9' className='project-href'>Project 9</a>
                <a href='#project10' className='project-href'>Project 10</a>
                <a href='#project11' className='project-href'>Project 11</a>
            </div>
        <div className='main-mini-background'>
            <div className='project-main-container'>
                <section id='project1'>
                    <Project1 />
                </section>
                <hr></hr>
                <section id='project2'>
                    <Project2 />
                </section>
                <hr></hr>
                <section id='project3'>
                    <Project3 />
                </section>
                <hr></hr>
                <section id='project4'>
                    <Project4 />
                </section>
                <hr></hr>
                <section id='project5'>
                    <Project5 />
                </section>
                <hr></hr>
                <section id='project6'>
                    <Project6 />
                </section>
                <hr></hr>
                <section id='project7'>
                    <Project7 />
                </section>
                <hr></hr>  
                <section id='project8'>
                    <Project8 />
                </section>
                <hr></hr>  
                <section id='project9'>
                    <Project9 />
                </section>
                <hr></hr>  
                <section id='project10'>
                    <Project10 />
                </section>
                <hr></hr>
                <section id='project10'>
                    <Project11 />
                </section>
                <hr></hr>  
            </div>
            <footer>
                <a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a>
            </footer>
        </div>
    </div>
    )
}
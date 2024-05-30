export const Project2=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>Todo List</h1>
            <p>-This React To-Do List application empowers users to efficiently manage tasks, prioritize activities, 
                and enhance productivity. Seamlessly crafted with React, it offers a responsive and intuitive user interface, 
                enabling users to add, edit, and delete tasks effortlessly. With dynamic updating and intuitive design, this 
                application streamlines task management, helping users stay organized and focused. Experience the power of 
                React in task management with this versatile To-Do List'application.</p>
                <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/todo-list' target={'_blank'} style={{fontSize:"22px"}}>Github</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project2/preview2-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project2/preview2-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project2/preview2-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project2/preview2-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project2/preview2-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project2/preview2-img3.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project2/preview2-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project2/preview2-img4.png')} /></a>
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
export const Project5=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>Chatting Bot</h1>
            <p> -This React-based chat bot application provides users with an interactive and seamless chatting experience. 
                Built with a modern front-end framework, the application ensures high performance, scalability, 
                and a user-friendly interface.</p>
                <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/chatting-bot' target={'_blank'}>Github Link</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project5/preview5-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project5/preview5-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project5/preview5-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project5/preview5-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project5/preview5-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project5/preview5-img3.png')} /></a>
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
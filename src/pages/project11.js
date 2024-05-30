export const Project11=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>Calculator</h1>
            <p> -I developed a fully functional calculator using React.js, HTML, and CSS, showcasing my skills in modern web development. 
                The calculator features a clean and intuitive user interface, providing basic arithmetic operations with seamless 
                interactivity. Utilizing React.js, I ensured efficient state management and a responsive design. This project 
                highlighted my ability to build interactive applications with a focus on user experience. Through this, I 
                demonstrated proficiency in front-end development and component-based architecture.
            </p>
            <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:-ReactJS, CSS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/calculator' target={'_blank'} style={{fontSize:"22px"}}>Github</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project11/preview11-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project11/preview11-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project11/preview11-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project11/preview11-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project11/preview11-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project11/preview11-img3.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project11/preview11-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project11/preview11-img4.png')} /></a>
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
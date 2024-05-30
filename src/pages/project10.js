export const Project10=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>Swecha Internship Project(Indian Map)</h1>
            <p> -During my SWECHA Internship, I developed an interactive Indian map using HTML, CSS, and JavaScript. 
                The project featured hover functionality, where each state's capital and popular local items are 
                displayed upon interaction. This engaging map provided users with an informative and visually appealing 
                way to learn about different states in India. The project highlighted my ability to create dynamic web 
                content that enhances user experience. This internship project demonstrated my proficiency in integrating 
                interactivity into web design.
            </p>
            <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:- CSS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/Internship_Swecha-Project' target={'_blank'} style={{fontSize:"22px"}}>Github</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project10/preview10-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project10/preview10-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project10/preview10-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project10/preview10-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project10/preview10-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project10/preview10-img3.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project10/preview10-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project10/preview10-img4.png')} /></a>
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
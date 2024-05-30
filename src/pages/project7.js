export const Project7=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>SGPA/CGPA Calculator</h1>
            <p> -The SGPA/CGPA Calculator project is a web application developed using React JS. It allows students 
                to input their semester grades and credits to calculate their Semester Grade Point Average (SGPA) and 
                Cumulative Grade Point Average (CGPA). The user-friendly interface ensures easy navigation and accurate 
                computations, providing real-time results as inputs are updated. The project employs state management 
                and React hooks to efficiently handle data and enhance performance. Additionally, it features a responsive 
                design, ensuring compatibility across various devices.</p>
                <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/College_Calculations' target={'_blank'}>Github Link</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project7/preview7-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project7/preview7-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project7/preview7-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project7/preview7-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project7/preview7-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project7/preview7-img3.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project7/preview7-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project7/preview7-img4.png')} /></a>
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
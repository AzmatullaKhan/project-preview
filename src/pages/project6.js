export const Project6=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>ATM Demo</h1>
            <p>-The ATM demo project built with React JS is a sleek, user-friendly interface that simulates basic ATM 
                functionalities. It allows users to perform actions such as checking their balance, making deposits, and 
                withdrawing funds, all within a secure and responsive environment. The project utilizes React's state 
                management to track user input and financial transactions dynamically. Additionally, it features a 
                clean, modern design, enhancing the user experience. The demo also integrates basic validation to 
                ensure realistic and error-free interactions.</p>
            <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:- ReactJS, CSS, JS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/ATM' target={'_blank'} style={{fontSize:"22px"}}>Github</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project6/preview6-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project6/preview6-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project6/preview6-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project6/preview6-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project6/preview6-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project6/preview6-img3.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project6/preview6-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project6/preview6-img4.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project6/preview6-img5.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project6/preview6-img5.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project6/preview6-img6.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project6/preview6-img6.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project6/preview6-img7.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project6/preview6-img7.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project6/preview6-img8.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project6/preview6-img8.png')} /></a>    
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
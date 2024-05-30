export const Project1=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>Movie TV Show Recommendation System</h1>
            <p>-Our Movie and TV Show Recommendation System empowers users to seamlessly 
            access information on specific movies, createpersonalized watchlists, and enjoy a smooth user experience.Offering a 
            curated selection of content, our system enhancesentertainment discovery, making it easy for users to find their 
            favorite movies and TV shows.</p>
            <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:- Python, Djnago, PSQl, CSS, JS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/Movie_TV_Show_Recommendation_System' target={'_blank'} style={{fontSize:"22px"}}>Github</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img3.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img4.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img5.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img5.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img6.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img6.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img7.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img7.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img8.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img8.png')} /></a>    
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
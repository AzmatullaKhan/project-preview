import './allPages.css'

export const Main=()=>{
    return(
    <div className='main-background'>
        <div className='main-mini-background'>
            <div className='project-main-container'>
                <div className='each-project-container'>
                    <h1>Movie TV Show Recommendation System</h1>
                    <p>-Our Movie and TV Show Recommendation System empowers users to seamlessly 
                    access information on specific movies, createpersonalized watchlists, and enjoy a smooth user experience.Offering a 
                    curated selection of content, our system enhancesentertainment discovery, making it easy for users to find their 
                    favorite movies and TV shows.</p>
                    <a rel='noreferrer' href='github.com' target={'_blank'}>Github Link</a><br></br>
                    <div className='project-photo-background' id='project_photo_background'>
                        <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img1.png')} /></a>
                        <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img2.png')} /></a>
                        <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img3.png')} /></a>
                        <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img4.png')} /></a>
                        <a rel='noreferrer' target={'_blank'} href={require('./images/project1/preview1-img5.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project1/preview1-img5.png')} /></a>    
                    </div>
                </div>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
            </div>
        </div>
    </div>
    )
}
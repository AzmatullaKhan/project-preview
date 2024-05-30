export const Project8=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>CSEdge Internship Tasks</h1>
            <p>-During my CSEdge Internship, I completed four dynamic projects using HTML, CSS, and JavaScript. 
                The first task involved creating an opening page featuring sections for home, features, testimonials, 
                and contact, providing a comprehensive overview of a web service. The second task was a sophisticated 
                lightbox gallery, allowing for interactive image viewing. The third project was the development of a 
                student enrollment form, incorporating responsive design for seamless user experience. Lastly, I 
                built a portfolio page that showcases all my previous tasks, offering a cohesive presentation of 
                my web development skills and accomplishments.</p>
            <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:- CSS JS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/CSEdge-Internship-Tasks' target={'_blank'} style={{fontSize:"22px"}}>Github</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img3.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img4.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img5.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img5.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img6.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img6.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img7.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img7.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img8.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img8.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img9.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img9.png')} /></a>    
                <a rel='noreferrer' target={'_blank'} href={require('./images/project8/preview8-img10.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project8/preview8-img10.png')} /></a>    
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
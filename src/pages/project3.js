export const Project3=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>Product Advertising</h1>
            <p> -The Product Advertising Website is a robust and dynamic single-page application (SPA) 
                built using React. This platform allows businesses to showcase their products and advertisements 
                effectively to potential customers. The application includes user authentication, product listings, 
                and advertisement management, all aimed at providing a seamless user'experience.</p>
                <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/Product_Advertising' target={'_blank'} style={{fontSize:"22px"}}>Github</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project3/preview3-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project3/preview3-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project3/preview3-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project3/preview3-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project3/preview3-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project3/preview3-img3.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project3/preview3-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project3/preview3-img4.png')} /></a>
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
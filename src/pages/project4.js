export const Project4=()=>{
    return(
        <div className='each-project-container'>
            <h1 style={{textDecoration:"underline"}}>Weather Forecast</h1>
            <p> -The Weather Forecasting Application is a sleek and user-friendly single-page application (SPA) 
                built using React. It provides real-time weather updates and forecasts for locations worldwide. 
                The application integrates with the OpenWeatherMap API to fetch and display current weather conditions, 
                hourly forecasts, and seven-day'forecasts.</p>
                <p style={{fontWeight:"bolder"}}><span style={{textDecoration:"underline"}}>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel='noreferrer' href='https://github.com/AzmatullaKhan/Weather_Forecast' target={'_blank'} style={{fontSize:"22px"}}>Github</a><br></br>
            <div className='project-photo-background' id='project_photo_background'>
                <div className='blur-left-left'></div>
                <div className='blur-left'></div>
                <div className='project-photo-left-section'>Scroll Right ⇛</div>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project4/preview4-img1.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project4/preview4-img1.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project4/preview4-img2.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project4/preview4-img2.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project4/preview4-img3.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project4/preview4-img3.png')} /></a>
                <a rel='noreferrer' target={'_blank'} href={require('./images/project4/preview4-img4.png')}><img alt='preview-img1' className='project-photo' src={require('./images/project4/preview4-img4.png')} /></a>
                <div className='project-photo-right-section'>⇚ Scroll Left</div>
                <div className='blur-right-right'></div>
                <div className='blur-right'></div>
            </div>
        </div>
    )
}
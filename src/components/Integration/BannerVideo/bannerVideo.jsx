import React from 'react';

import VideoContent from '../../../assets/video/video-content.mp4'
import './BannerVideo.css';

function BannerVideo({ header, classHeaderBanner }) {
  return (
      
      <>
      <div className='bannerVideo'>
        
        <video className='bannerVideo__video' width="100%" height="100%" loop autoPlay muted>
          <source src={VideoContent} type="video/mp4"/>
        </video>
        
        <h1 className={`bannerVideo__header ${classHeaderBanner}`}>{header}</h1>

      </div>
      </>

  );
}

export default BannerVideo;
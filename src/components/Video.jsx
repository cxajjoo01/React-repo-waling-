import React from 'react';

const Video = () => {
    return (
        <div className="video-container">
            <video className="custom-video-class" controls>
                <source src="/videoPix/pexels.mp4" type="video/mp4" />
            </video>
            <div className="play-button">
                Play
            </div>
        </div>
    );
};

export default Video;

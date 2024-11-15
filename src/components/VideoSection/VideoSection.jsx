
// VideoSection.js
import React from 'react';
import './VideoSection.css'; 
const VideoSection = () => {
  return (
    <div className="video-container">
      <section className="video-section">
        <iframe width="82%"  height="315" src="https://www.youtube.com/embed/8zEIgbWyla4?si=5W9sSt5zaJY2Je5O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>
    </div>
  );
};

export default VideoSection;
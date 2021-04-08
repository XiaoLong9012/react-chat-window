import React from 'react';


const VideoMessage = (props) => {
  return (
      <div className="sc-message--video">
          <video controls src={props.data.url} />
      </div>
  )
};

export default VideoMessage;
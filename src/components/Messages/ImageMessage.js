import React from 'react';

const ImageMessage = (props) => {
  return (
    <a className="sc-message--img" href={props.data.url} download={props.data.attachments[0].name}>
      <img src={props.data.url} />
    </a>
  )
};

export default ImageMessage;
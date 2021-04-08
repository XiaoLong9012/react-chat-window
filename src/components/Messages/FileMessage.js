import React from 'react';

const FileMessage = (props) => {
  return (
    <a className="sc-message--file" href={props.data.url} download={props.data.attachments[0].name}>
        <i className="icon-doc"></i>
        <p>{props.data.attachments[0].name}</p>
    </a>
  );
};

export default FileMessage;

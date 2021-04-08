import React from 'react';

const AudioMessage = (props) => {
    return (
        <div className="sc-message--audio">
            <audio controls src={props.data.url} />
        </div>
    )
};

export default AudioMessage;
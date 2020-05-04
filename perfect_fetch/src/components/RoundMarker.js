import React from 'react';

import '../styles/RoundMarker.css';

const RoundMarker = (props) => {

    return(
        <div className="RoundMarker-Container">
            {`Round ${props.currentRound}`}
        </div>
    )
}

export default RoundMarker;
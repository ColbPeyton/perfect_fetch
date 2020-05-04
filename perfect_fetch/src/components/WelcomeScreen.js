import React from 'react';

import '../styles/WelcomeScreen.css';

const WelcomeScreen = (props) => {

    
    return(
        <div className="WelcomeScreen-Container">
            <h1>Welcome to Perfect Fetch</h1>
            <div className="WelcomeScreen-Content">
                <p>If it is your first time: check out the how to page using the ? button</p>
            </div>
            <div className="WelcomeScreen-Button-Div">
                <button 
                    className="WelcomeScreen-Button-GetStarted"
                    onClick={() => props.disableWelcomeScreen()}
                    >
                        Get Started
                    </button>

                <button 
                className="WelcomeScreen-Button-Rules"
                onClick={()=> props.enable_disableRuleScreen()}
                >
                    ?
                </button>
            </div>
        </div>
    )
}

export default WelcomeScreen;
import React from 'react';

import '../styles/WelcomeScreen.scss';

import questionMark from '../images/Question Mark.png';
import pawPrintYellow from '../images/Paw Print B-04.png';

const WelcomeScreen = (props) => {

    
    return(
        <div className="WelcomeScreen-Container">
            <h1>Welcome to </h1>
            <img src={props.Logo} alt="logo" className="WelcomeScreen-Logo" />
            <div className="WelcomeScreen-Content">
                {/* <p className="WelcomeScreen-Content-Header">first time? </p>
                <p className="WelcomeScreen-Content-Instructions">check out the how to page using the ? button</p> */}
                <img className= "WelcomeScreen-Content-Image" src={pawPrintYellow} alt="paw print" />
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
                   <img className="WelcomeScreen-Button-Img" src={questionMark} alt="question mark" />
                </button>
            </div>
        </div>
    )
}

export default WelcomeScreen;
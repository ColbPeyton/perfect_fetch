import React from 'react';

import '../styles/WelcomeScreen.scss';

import questionMark from '../images/Question Mark.png';
import pawPrintYellow from '../images/Paw Print B-04.png';

const WelcomeScreen = (props) => {

    
    return(
        <div className='welcomeScreen'>
            <div className="container">
                <div className='header'>
                    <img src={props.Logo} alt="logo" className="logo" />
                </div>
                <div className="content">
                    <img className= "background-image" src={pawPrintYellow} alt="paw print" />
                </div>
                <div className="button-start">
                    <button onClick={() => props.disableWelcomeScreen()}>
                        Get Started
                    </button>
                </div>
                <div className='button-rules'>
                    <button onClick={()=> props.enable_disableRuleScreen()}>
                        <img className="rules-img" src={questionMark} alt="question mark" />
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default WelcomeScreen;
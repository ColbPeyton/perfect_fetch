import React,{useState} from 'react';

import '../styles/WelcomeScreen.scss';

import questionMark from '../images/Question Mark.png';
import pawPrintYellow from '../images/Paw Print B-04.png';

const WelcomeScreen = (props) => {

    const [icon, setIcon] = useState(false);

    function renderIcon(){
        return icon
        ? <i className="fas fa-times x-icon"></i>
        : <img className="rules-img" src={questionMark} alt="question mark" />
    }

    
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
                    <button onClick={() => props.disableWelcomeScreen() }>
                        Get Started
                    </button>
                </div>
                <div className='button-rules'>
                    <button onClick={()=> {
                            props.enable_disableRuleScreen();
                            setIcon(!icon);
                            }}>
                        {renderIcon()}
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default WelcomeScreen;
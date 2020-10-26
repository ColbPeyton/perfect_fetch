import React from 'react';

import '../styles/PawPrints.scss'

// import pawPrintBlue from '../images/Paw Print A-03.png';
// import pawPrintRed from '../images/Paw Print B-04.png';

//renders pawprints to screen based on the current round amount prop from App.js
class PawPrints extends React.Component{


    //Creates array of size of number of like the user has made this round, must fill array with any value to map pawprint
    renderPrints = () => {

        return(
            <div className="pawPrints-container">
                <div className={`paw ${this.props.numPawPrints >= 1 ? "pawPrints-icons-primary": "pawPrints-icons-primary-outline"}`}>
                    <i className="fas fa-paw fa-3x" key={0}/>
                </div>
                <div className={`paw ${this.props.numPawPrints >= 2 ? "pawPrints-icons-secondary": "pawPrints-icons-secondary-outline"}`}>
                    <i className="fas fa-paw fa-3x" key={1}/>
                </div>
                <div className={`paw ${this.props.numPawPrints >= 3 ? "pawPrints-icons-primary": "pawPrints-icons-primary-outline"}`}>
                    <i className="fas fa-paw fa-3x" key={2}/>
                </div>
                <div className={`paw ${this.props.numPawPrints >= 4 ? "pawPrints-icons-secondary": "pawPrints-icons-secondary-outline"}`}>
                    <i className="fas fa-paw fa-3x" key={3}/>
                </div>
                <div className={`paw ${this.props.numPawPrints >= 5 ? "pawPrints-icons-primary": "pawPrints-icons-primary-outline"}`}>
                    <i className="fas fa-paw fa-3x" key={4}/>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div>
                {this.renderPrints()}
            </div>
        )
    }
    
}

export default PawPrints;
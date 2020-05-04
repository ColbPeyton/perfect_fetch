import React from 'react';

import '../styles/PawPrints.css'

//renders pawprints to screen based on the current round amount prop from App.js
class PawPrints extends React.Component{


    //Creates array of size of number of like the user has made this round, must fill array with any value to map pawprint
    renderPrints = () => {

        return(
            <div className="PawPrints-Container">
                <div className={this.props.numPawPrints >= 1 ? "PawPrints-Icons-Blue": "PawPrints-Icons-Blue-Outline"}>
                    <i className="fas fa-paw fa-3x" key={0}/>
                </div>
                <div className={this.props.numPawPrints >= 2 ? "PawPrints-Icons-Red": "PawPrints-Icons-Red-Outline"}>
                    <i className="fas fa-paw fa-3x" key={1}/>
                </div>
                <div className={this.props.numPawPrints >= 3 ? "PawPrints-Icons-Blue": "PawPrints-Icons-Blue-Outline"}>
                    <i className="fas fa-paw fa-3x" key={2}/>
                </div>
                <div className={this.props.numPawPrints >= 4 ? "PawPrints-Icons-Red": "PawPrints-Icons-Red-Outline"}>
                    <i className="fas fa-paw fa-3x" key={3}/>
                </div>
                <div className={this.props.numPawPrints >= 5 ? "PawPrints-Icons-Blue": "PawPrints-Icons-Blue-Outline"}>
                    <i className="fas fa-paw fa-3x" key={4}/>
                </div>
            </div>
        )
    


        // let  counter = 0;
        // const arr = new Array(this.props.numPawPrints).fill('i')
        // return arr.map((item, i) =>{
        //     counter +=1;
        //     return (
        //         <div className={counter % 2 === 0 ? "PawPrints-Icons-Red" : "PawPrints-Icons-Blue"}>
        //             <i className="fas fa-paw fa-3x" key={i.toString()}/>
        //         </div>
        //         )
        // })
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
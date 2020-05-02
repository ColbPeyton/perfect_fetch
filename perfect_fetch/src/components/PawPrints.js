import React from 'react';


//renders pawprints to screen based on the current round amount prop from App.js
class PawPrints extends React.Component{


    //Creates array of size of number of like the user has made this round, must fill array with any value to map pawprint
    renderPrints = () => {
        const arr = new Array(this.props.numPawPrints).fill('i')
        return arr.map((item, i) =>{
            return <i className="fas fa-paw" key={i.toString()}/>
        })
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
import React from 'react';

import '../styles/Rules.scss';

class Rules extends React.Component{
    
    state={
        rulesrendered: false,
        style: {
            transition: 'animation: slideUp 1s forwards'
        }
    }


    componentDidMount(){
        this.setState({rulesrendered: true})
    }

    componentWillReceiveProps(){
        this.setState({rulesrendered: false})
    }

    // componentWillEnter(callback) {
    //     this.onTransitionEnd = callback;
    //     setTimeout(() => {
    //       this.setState({
    //         style: mountedStyle,
    //       });
    //     }, 20);
    //   }
  
    //   componentWillLeave(callback) {
    //     this.onTransitionEnd = callback;
    //     this.setState({
    //       style: unmountedStyle,
    //     });
    //   }

    render(){
        return(
            <div 
                className={this.state.rulesrendered ? "Rules-Container" : "Rules-Container-Exit"}
                style={this.state.style}
                >
                <div className="Rules-Title">
                    <h2>Let's find the perfect dog for you</h2>
                </div>
                <div className="Rules-Content">
                    <p className="Rules-Content-Steps">Steps to success:</p>
                    <ul className="Rules-Content-List">
                        <li>5 rounds</li>
                        <li>select 5 dogs per round</li>
                        <li>we will determine your favorite</li>

                        
                    </ul>
                    <p className="Rules-li-final">All images are provided by DogAPI</p>
                </div>
                
            </div>
        )
    }
}

export default Rules;
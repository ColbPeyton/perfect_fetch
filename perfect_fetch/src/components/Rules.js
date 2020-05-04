import React from 'react';

import '../styles/Rules.css';

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
                    <h2>find the perfect dog for you</h2>
                </div>
                <div className="Rules-Content">
                    <ul className="Rules-Content-List">
                        <li>Step 1</li>
                        <li>Step 1</li>
                        <li>Step 1</li>
                        <li>Step 1</li>
                        <li>Step 1</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Rules;
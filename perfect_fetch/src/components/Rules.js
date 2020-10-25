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

    UNSAFE_componentWillReceiveProps(){
        this.setState({rulesrendered: false})
    }


    render(){
        return(
            <div 
                className={this.state.rulesrendered ? "rules-container" : "rules-container-exit"}
                style={this.state.style}
                >
                <div className="rules-title">
                    <h2>Let's find your</h2>
                    <h2>Perfect Fetch</h2>
                </div>
                <div className="rules-content">
                    <p className="rules-content-steps">How This Works:</p>
                    <ul className="rules-content-list">
                        <li>Select 5 of your favorite dogs each round.</li>
                        <li>We will use your choices to determine your <span>Perfect Fetch</span>!</li>

                    </ul>
                    <p className="rules-final">Images are provided by DogAPI</p>
                </div>
                
            </div>
        )
    }
}

export default Rules;
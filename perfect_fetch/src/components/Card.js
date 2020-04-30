import React from 'react';

import Image from './Image';
import ImageInfo from './ImageInfo';

const axios = require('axios');


class Card extends React.Component{

    state={
        dogImage: null,
        imageFetched: false
    }

    async componentDidMount(){
        await axios.get(`https://dog.ceo/api/breed/${this.props.randomDog}/images/random`)
        .then((response)=> {
            this.setState({dogImage: response.data.message, imageFetched: true});
        })
        .catch((error)=>{
            console.log(error)
        })
    }



    updateRoundAndImage = () => {
        this.props.updateRound();
    }



    renderImage = () =>{
        if(this.state.imageFetched){
            return(
                <div>
                <Image dogImage={this.state.dogImage} />
                <ImageInfo dogImage ={this.state.dogImage} />
                </div>
                )
        }else{
            return null
        }
    }

    render(){
        return(
            <div>
                {this.renderImage()}
                 <div>
                    <button>
                        <i className="far fa-times-circle fa-2x"></i>
                    </button>
                    <button onClick={this.updateRoundAndImage}>
                        <i className="far fa-check-circle fa-2x"></i>
                    </button>
            </div>
            </div>
        )
    }
}

export default Card;
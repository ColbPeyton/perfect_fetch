import React from 'react';

import Image from './Image';
import ImageInfo from './ImageInfo';



class Card extends React.Component{

    state={
        imageFetched: true
    }

    //call parent function addDogs and increasePawPrints
    updateRoundAndImage = () => {
        //remove dog breed from image string to be added to parent state object
        const breed = this.props.currentDog
        .split('/')[4]
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

        //pass fixed string to parent function
        this.props.addDogs(breed);
        this.props.increasePawPrints();
    }

    //call parent function, does not increment current round or add dog to parent state array
    didNotLike = () => {
        this.props.didNotLikeDog();
    }


    render(){
        return(
            <div>
                <div>
                    <Image currentDog={this.props.currentDog} />
                    <ImageInfo currentDog ={this.props.currentDog} />
                </div>
                 <div>
                    <button onClick={this.didNotLike}>
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
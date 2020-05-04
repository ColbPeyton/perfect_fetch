import React from 'react';

import Image from './Image';
import ImageInfo from './ImageInfo';

import '../styles/Card.css';

class Card extends React.Component{

    state={
        imageFetched: true,
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
            <div className="Card-Container">
                <div className="Card-Content">
                    <div className="Card-Content-Image">
                        <Image currentDog={this.props.currentDog} />
                    </div>
                    <div className="Card-Content-Info">
                        <ImageInfo currentDog ={this.props.currentDog} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
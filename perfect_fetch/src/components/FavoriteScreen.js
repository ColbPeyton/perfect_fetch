import React from 'react';

import '../styles/FavoriteScreen.scss';

import Image from './Image';
import ImageInfo from './ImageInfo';

const FavoriteScreen = (props) => {
    
    return(
        <div className="FavoriteScreen-Container">
        <h1>Your Perfect Match</h1>
            <div className="FavoriteScreen-Content">
            
            <div className="FavortieScreen-Card-Container">
                <div className="Card-Content">
                    <div className="Card-Content-Image">
                        <Image currentDog={props.favoriteImage} />
                    </div>
                    <div className="Card-Content-Info">
                        <ImageInfo currentDog ={props.favoriteImage} />
                    </div>
                </div>
            </div>
            </div>
            <div className="FavoriteScreen-Button-Div">
                <button 
                    className="FavoriteScreen-Button-GetStarted"
                    onClick={() => props.startOver()}
                    >
                        Try Again?
                    </button>
            </div>
        </div>
    )
}

export default FavoriteScreen;
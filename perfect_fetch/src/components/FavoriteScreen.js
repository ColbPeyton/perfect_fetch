import React from 'react';

import '../styles/FavoriteScreen.scss';

import Image from './Image';
import ImageInfo from './ImageInfo';

const FavoriteScreen = (props) => {
    
    return(
        <div className="favoriteScreen-container">
            <div className='favoriteScreen-header'>
                <h1>Your Perfect Fetch</h1>
            </div>
            <div className="favoriteScreen-content">
            
            <div className="favortieScreen-card-container">
                <div className="card-content">
                    <div className="card-content-image">
                        <Image currentDog={props.favoriteImage} />
                    </div>
                    <div className="card-content-info">
                        <ImageInfo currentDog ={props.favoriteImage} />
                    </div>
                </div>
            </div>
            </div>
            <div className="favoriteScreen-button">
                <button 
                    onClick={() => props.startOver()}
                    >
                        Try Again?
                    </button>
            </div>
        </div>
    )
}

export default FavoriteScreen;
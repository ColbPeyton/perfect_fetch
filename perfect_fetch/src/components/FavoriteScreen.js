import React from 'react';

import '../styles/FavoriteScreen.css';

const FavoriteScreen = (props) => {


    
    return(
        <div className="FavoriteScreen-Container">
            <h1>Your Perfect Match</h1>
            <div className="FavoriteScreen-Content">
                <img src={props.favoriteImage} alt={props.favoriteDog} />
            </div>
            <div className="FavoriteScreen-Button-Div">
                <button 
                    className="FavoriteScreen-Button-GetStarted"
                    onClick={() => props.disableWelcomeScreen()}
                    >
                        Try Again?
                    </button>
            </div>
        </div>
    )
}

export default FavoriteScreen;
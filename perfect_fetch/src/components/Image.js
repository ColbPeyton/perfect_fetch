import React from 'react';
import '../styles/Image.scss'


import '../styles/Image.scss';

const Image = (props) =>{

    
    const breed = props.currentDog
        .split('/')[4]
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    return(
        <div className="Image-Container">
            <img className="Image-DogImage"src={props.currentDog} alt={breed}/>
        </div>
    )
   
}

export default Image;
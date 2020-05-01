import React from 'react';
import '../styles/Image.css'


const Image = (props) =>{

    return(
        <div className="Image-Container">
            <img className="Image-DogImage"src={props.currentDog} />
        </div>
    )
   
}

export default Image;
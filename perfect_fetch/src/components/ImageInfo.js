import React from 'react';
import '../styles/Image.css'


const ImageInfo = (props) =>{

    const breed = props.currentDog
        .split('/')[4]
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    return(

        <div className="ImageInfo-Container">
            <p>{breed}</p>
        </div>

    )
   
}

export default ImageInfo;
import React from 'react';
import '../styles/Image.scss'

import '../styles/ImageInfo.scss';

const ImageInfo = (props) =>{

    let breed = props.currentDog
        .split('/')[4]
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

        //if dog breed is 2 words, remove "-" and reverse order of the words
        if(/\b\w*[-']\w*\b/g.test(breed)){
            breed = breed
            .split('-')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .reverse()
            .join(' ')
        }


    return(

        <div className="ImageInfo-Container">
            <p className="ImageInfo-Content">{breed}</p>
        </div>

    )
   
}

export default ImageInfo;
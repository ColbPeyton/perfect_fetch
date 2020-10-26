import React, {useState, useEffect} from 'react';

import '../styles/RoundMarker.scss';

import round1 from '../images/Round 1-05.png';
import round2 from '../images/Round 2-06.png';
import round3 from '../images/Round 3-07.png';
import round4 from '../images/Round 4-08.png';
import round5 from '../images/Round 5-09.png';


const RoundMarker = (props) => {

    const [active, setActive] = useState(true);
    const [main, setMain] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setActive(false)
        }, 2500);
    }, []);
    useEffect(()=>{
        setTimeout(()=>{
            setMain(false)
        }, 3000);
    }, [active]);

    const determineRound = ()=> {
        switch(props.currentRound){
            case 0: 
                return <img className="RoundMarker-Img" src={round1} alt="round 1" />
            case 1:
                return <img className="RoundMarker-Img" src={round2} alt="round 2" />
            case 2:
                return <img className="RoundMarker-Img" src={round3} alt="round 3" />
            case 3:
                return <img className="RoundMarker-Img" src={round4} alt="round 4" />
            default:
                return <img className="RoundMarker-Img" src={round5} alt="round 5" />
        }
 
    }

    return(
        <div className={`roundMarker ${main ? '' : 'not-active'}`}>
            <div className={`RoundMarker-Container ${active ? 'active' : 'not-active'}`}>
                {determineRound()}
            </div>
        </div>

    )
}

export default RoundMarker;
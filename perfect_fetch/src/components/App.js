import React from 'react';

import Card from './Card';
import PawPrints from './PawPrints';

const axios = require('axios');

class App extends React.Component{

    state={
        allDogs: null,
        currentRound: 0,
        dogsChosen: [],
        randomDog: null
    }

    async componentDidMount(){
        await axios.get('https://dog.ceo/api/breeds/list/all')
        .then((response)=> {
            const dogArr = Object.keys(response.data.message);
            this.setState({allDogs: dogArr});
            this.generateRandomDog();
        })
        .catch((error)=>{
            console.log(error)
        })

        await axios.get('https://dog.ceo/api/breeds/image/random/3')
        .then((response)=> {
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
        

        
    }


    generateRandomDog = () => {
        let randomLoc = Math.floor(Math.random() * this.state.allDogs.length);
        this.setState({randomDog: this.state.allDogs[randomLoc]})
    }

    addDogs = (dogArr) =>{
        this.setState({dogsChosen: [...this.state.dogsChosen, ...dogArr ]})
    }

    updateRound = () =>{
        this.setState({currentRound: ++this.state.currentRound})
        this.generateRandomDog();
    }


    renderCard = () => {
        if(this.state.randomDog){
            return(
                <div>
                    <Card randomDog={this.state.randomDog} updateRound={this.updateRound}/>
                    <PawPrints currentRound={this.state.currentRound}/>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
            {this.renderCard()}
            
            </div>
        )
    }
}

export default App;
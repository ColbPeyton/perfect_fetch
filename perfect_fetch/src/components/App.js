import React from 'react';

import Card from './Card';
import PawPrints from './PawPrints';

const axios = require('axios');

class App extends React.Component{

    state={
        arrOfDogImages: [],         //storing fetched dog images
        numPawPrints: 0,            //current round in choosing user is in (determine fetched dogs)
        currentPosInArr: 0,         //manage pos in arrOfDogImages for currentDog
        dogsChosen: {},             //object of user chosen dogs, determine favorite
        currentDog: null,           //current dog image in arrofDogImages, passed to childen for rendering
        currentRound: 0             //round user is currently on, keeps track of current position of user, at 5 will determine user's favorite dog
    }

    //generate first set of images on component load
    async componentDidMount(){
        this.getDogImages(); 
    }

    //fetch 10 random images, set state with images
    getDogImages = async() => {
        await axios.get('https://dog.ceo/api/breeds/image/random/10')
        .then((response)=> { 
            this.setState({arrOfDogImages: [response.data.message]})
            this.generateNewDog();
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    generateNewDog = () => {
        // let randomLoc = Math.floor(Math.random() * this.state.arrOfDogImages.length);
        // this.setState({randomDog: this.state.arrOfDogImages[randomLoc]})
        // this.generateDogImage();

        this.setState({
            currentDog: this.state.arrOfDogImages[0][this.state.currentPosInArr],
            currentPosInArr: this.state.currentPosInArr+=1
        })

        if(this.state.currentPosInArr >= 10){
            this.setState({currentPosInArr: 0})
            this.getDogImages();
        }
    }

    //user has liked this dog, add to the chosen state
    //if exists, increment by 1. if it doesn't, add to the object and set to 1
    addDogs = (dog) =>{
        if(this.state.dogsChosen.hasOwnProperty(dog)){
            this.setState(prevState => ({
                dogsChosen: {
                    ...prevState.dogsChosen,
                [dog]: this.state.dogsChosen[dog] += 1
                }
            }))
        }else{
            this.setState(prevState => ({
                dogsChosen: {
                    ...prevState.dogsChosen,
                    [dog]: 1
                }
            }))
        }
    }

    //render new dog, does not add dog to user favorites
    didNotLikeDog = () => {
        this.generateNewDog();
    }

    //managing pawprints, passed to children, calls generateNewDog
    increasePawPrints = () =>{
        this.setState({numPawPrints: this.state.numPawPrints += 1})
        this.generateNewDog();

        if(this.state.numPawPrints >= 5){
            this.updateRound();
        }
    }

    //increase current round after 5 pawprints, reset pawprints to 0
    updateRound = () => {
        this.setState({currentRound: ++this.state.currentRound, numPawPrints: 0})

        if(this.state.currentRound >= 2){
            this.determineFavorite();
        }
    }

    determineFavorite = () => {
        const favorite = Object.keys(this.state.dogsChosen).reduce((a, b) => {
            return this.state.dogsChosen[a] > this.state.dogsChosen[b] ? a : b
        })

        console.log(this.state.dogsChosen[favorite], favorite)
        if(this.state.dogsChosen[favorite] == 1){
            this.setState({currentRound: 1})
        }

        console.log(favorite)
    }

    displayFavorite = () => {

    }




    renderCard = () => {
        if(this.state.currentDog){
            return(
                <div>
                    <Card 
                        increasePawPrints={this.increasePawPrints} 
                        didNotLikeDog={this.didNotLikeDog}
                        addDogs={this.addDogs}
                        currentDog={this.state.currentDog}
                        />
                    <PawPrints numPawPrints={this.state.numPawPrints}/>
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
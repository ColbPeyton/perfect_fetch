import React from 'react';

import Card from './Card';

import PawPrints from './PawPrints';
import Rules from './Rules';
import WelcomeScreen from './WelcomeScreen';
import RoundMaker from './RoundMarker';
import BetweenRoundScreen from './BetweenRoundScreen';


import '../styles/App.scss';
import FavoriteScreen from './FavoriteScreen';

import Logo from '../images/Perfect Fetch Logo-02.png';

const axios = require('axios');


function delayUnmounting(Component) {
    return class extends React.Component {
      state = {
        shouldRender: this.props.isMounted
      };
  
      componentDidUpdate(prevProps) {
        if (prevProps.isMounted && !this.props.isMounted) {
          setTimeout(
            () => this.setState({ shouldRender: false }),
            this.props.delayTime
          );
        } else if (!prevProps.isMounted && this.props.isMounted) {
          this.setState({ shouldRender: true });
        }
      }
  
      render() {
        return this.state.shouldRender ? <Component {...this.props} /> : null;
      }
    };
  }

  const DelayedRules = delayUnmounting(Rules);

class App extends React.Component{

    state={
        arrOfDogImages: [],         //storing fetched dog images
        numPawPrints: 0,            //current round in choosing user is in (determine fetched dogs)
        currentPosInArr: 0,         //manage pos in arrOfDogImages for currentDog
        dogsChosen: {},             //object of user chosen dogs, determine favorite
        currentDog: null,           //current dog image in arrofDogImages, passed to childen for rendering
        currentRound: 0,            //round user is currently on, keeps track of current position of user, at 5 will determine user's favorite dog
        rulesRendered: false,
        welcomeScreenRendered: true,
        startOfNewRound: true,
        isButtonDisabled: false,
        favoriteDog: null,
        favoriteImage: null,
        favoriteScreenRendered: false
    }

    //generate first set of images on component load
    async componentDidMount(){
        this.getDogImages(); 
    }

    //fetch 10 random images, set state with images
    getDogImages = async() => {
        await axios.get('https://dog.ceo/api/breeds/image/random/25')
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
        let nextPos = this.state.currentPosInArr + 1;
        this.setState({
            currentDog: this.state.arrOfDogImages[0][this.state.currentPosInArr],
            currentPosInArr: nextPos
        })

        if(this.state.currentPosInArr >= 24){
            this.setState({currentPosInArr: 0})
            this.getDogImages();
        }
    }

    //user has liked this dog, add to the chosen state
    //if exists, increment by 1. if it doesn't, add to the object and set to 1
    addDogs = (dog) =>{
        let updateDog = this.state.dogsChosen[dog] + 1;
        if(this.state.dogsChosen.hasOwnProperty(dog)){
            this.setState(prevState => ({
                dogsChosen: {
                    ...prevState.dogsChosen,
                [dog]: updateDog
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
        this.disableButtons();
        this.generateNewDog();
    }

    //managing pawprints, passed to children, calls generateNewDog
    increasePawPrints = () =>{
        let nextPawPrint = this.state.numPawPrints + 1;
        this.setState({numPawPrints: nextPawPrint, startOfNewRound: false})
        this.generateNewDog();

        if(this.state.numPawPrints >= 4){
            // setTimeout(()=>{
                this.updateRound();
            // }, 100)
            
        }
    }

    //increase current round after 5 pawprints, reset pawprints to 0
    updateRound = () => {
        let nextRound = this.state.currentRound + 1;
        this.setState({currentRound: nextRound, numPawPrints: 0, startOfNewRound: true})

        if(this.state.currentRound >= 0){
            this.setState({ favoriteScreenRendered: true})
            setTimeout(()=> {
                this.determineFavorite();
            }, 500)
        }
    }

    determineFavorite = () => {
        const favorite = Object.keys(this.state.dogsChosen).reduce((a, b) => {
            return this.state.dogsChosen[a] > this.state.dogsChosen[b] ? a : b
        })

        // console.log(this.state.dogsChosen[favorite], favorite)
        // if(this.state.dogsChosen[favorite] === 1){
        //     this.setState({currentRound: 0})
        // }
        if(this.state.currentRound >= 0){
        this.setState({favoriteDog: favorite});
        this.getFavoriteImage();
        }
    }


    updateRoundAndImage = () => {
        this.disableButtons();
        //remove dog breed from image string to be added to parent state object
        const breed = this.state.currentDog
        .split('/')[4]
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

        //pass fixed string to parent function
        this.addDogs(breed);
        this.increasePawPrints();
    }



    disableWelcomeScreen = () => {
        this.setState({welcomeScreenRendered : false, rulesRendered: false, startOfNewRound: true})
    }

    enable_disableRuleScreen = ()=> {
        this.setState({rulesRendered: !this.state.rulesRendered})
    }

    renderWelcomeScreen = () => {
        if(this.state.welcomeScreenRendered){
            return(
                <div className="App-WelcomeScreen">
                    <WelcomeScreen Logo={Logo} disableWelcomeScreen={this.disableWelcomeScreen} enable_disableRuleScreen={this.enable_disableRuleScreen} rulesRendered={this.rulesRendered}/>
                </div>
            )
        }
    }

    getFavoriteImage = async()=> {
        const replaceDog = this.state.favoriteDog.replace('-','/').toLowerCase();
            await axios.get(`https://dog.ceo/api/breed/${replaceDog}/images/random`)
            .then((response)=>{
                this.setState({favoriteImage: response.data.message});
                // console.log(this.state.favoriteImage)
            })
            .catch(e => {
                console.log(e);
            })
    }
    renderFavorite = () => {
        if(this.state.favoriteDog && this.state.favoriteImage && !this.state.welcomeScreenRendered){
            return(
                <div>
                    <FavoriteScreen  startOver={this.startOver} favoriteImage={this.state.favoriteImage} favoriteDog={this.state.favoriteDog}/>
                </div>
            )
        }
        return null;
    }


    renderBetweenScreen = () => {
        if(this.state.favoriteScreenRendered){
            return(
                <BetweenRoundScreen favoriteScreenRendered={this.state.favoriteScreenRendered}/>
            )
        }
        return null
    }




    renderCard = () => {
        if(this.state.currentDog && !this.state.welcomeScreenRendered && !this.state.favoriteDog){
            return(
                <div className="card-container">
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

    renderButtons = () => {
        if(this.state.currentDog && !this.state.welcomeScreenRendered && !this.state.favoriteDog){
            return(
                <div className="button-container">
                <button 
                    className="app-button button-left"
                    onClick={this.didNotLikeDog}
                    disabled={this.state.isButtonDisabled}
                    >
                    <i className="far fa-times-circle fa-3x"></i>
                </button>
                <button 
                    className="app-button button-right"
                    onClick={this.updateRoundAndImage}
                    disabled={this.state.isButtonDisabled}
                    >
                    <i className="far fa-check-circle fa-3x"></i>
                </button>
                </div>
            )
        }
        return null
    }

    disableButtons = () => {
        this.setState({
            isButtonDisabled: true
        });
        setTimeout(() => this.setState({ isButtonDisabled: false }), 900);
    }

    renderRoundMaker(){
        if(this.state.startOfNewRound && !this.state.welcomeScreenRendered && !this.state.favoriteScreenRendered){
            return(
                <div>
                <BetweenRoundScreen />
                <RoundMaker currentRound={this.state.currentRound}/>
                </div>
            )
        }
    }

    startOver = () => {
        this.setState({
            arrOfDogImages: [],
            numPawPrints: 0,            
            currentPosInArr: 0,         
            dogsChosen: {},             
            currentDog: null,          
            currentRound: 0,           
            rulesRendered: false,
            welcomeScreenRendered: true,
            startOfNewRound: true,
            isButtonDisabled: false,
            favoriteDog: null,
            favoriteImage: null,
            favoriteScreenRendered: false
        })
        this.getDogImages(); 
        // console.log(this.state.welcomeScreenRendered)
    }

    renderLogo = () =>{
        if(!this.state.welcomeScreenRendered ){
            return(
                <div className="logo-container">
                    <img className="logo" src={Logo} alt="logo" />
                </div>
            )
        }
        return null
    }

    renderCorrectScreen = () =>{
        return this.state.welcomeScreenRendered 
        ? <div className="app-container">
                <DelayedRules delayTime={500} isMounted={this.state.rulesRendered} />
                {this.renderWelcomeScreen()}
            </div>
        :<div className="play-container">
            {/* {this.renderRoundMaker()} */}
            {this.renderLogo()}
            {this.renderCard()}
            {this.renderButtons()}
            {this.renderFavorite()}
            {this.renderBetweenScreen()}
        </div>
    }




    render(){
        return(
            this.renderCorrectScreen()
        )
    }
}

export default App;
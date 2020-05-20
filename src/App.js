import React from 'react';
import Scoreboard from './components/Header';
import ImageCard from './components/CharacterCard';
import Wrapper from './components/Wrapper';
import images from './components/images.json';
import Title from './components/Title';


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends React.Component {
  // Setting this.state to the json array
  state = {
    images,
    direction: 'Click on an image to begin!',
    score: 0,
    topScore: 0,
    clickedimage: [],
  };

  clicked = (id) => {
    // Setting states
    let score = this.state.score;
    let topScore = this.state.topScore;
    let clickedimage = this.state.clickedimage;

    if (clickedimage.indexOf(id) === -1){
      
      clickedimage.push(id);
    
      this.handleIncrement();

      // shuffle after click
      this.shuffleImages();
    }
    else if (this.state.score === 12){
      // Win condition
      this.setState({
        direction: 'You have won the game!',
        score: 0,
        clickedimage: [],
      });
    }
    else{
      // Loss condition
      this.setState({
        direction: 'You selected the same image twice!',
        score: 0,
        clickedimage: [],
      });
    }

    // Set top score
    if (score > topScore){
      this.setState({
        topScore: score,
      });
    }
  };

  // Score +1
  handleIncrement = () => {
    // setState updates a components
    this.setState({
      score: this.state.score + 1,
      direction: 'Great job! Select again!',
    });
  };

  // Shuffle images
  shuffleImages = () => {
    this.setState({ images: shuffle(images) });
  };

  render(){
    return (
      <div>
        <Scoreboard
          title='Clicky Game'
          direction={this.state.direction}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title title='Clicky Game' />
        <Wrapper>
          {this.state.images.map((image) => (
            <ImageCard
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              clicked={this.clicked}
            />
          ))}
        </Wrapper>        
      </div>
    );
  }
}

export default App;
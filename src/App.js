import './App.css';
import React from 'react';
import myPhoto from './myPhoto.jpeg'

class App extends React.Component {
  state = {
    person: {
      fullName: "Thameur BEN ABDALLAH",
      bio: 'Developer',
      imgSrc: myPhoto,
      profession: 'Electrical Engineer'
    },
    show: true,
    counter: 0
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1000 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  formatCounterTime = (counter) => {
    const date = new Date(counter);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
  };

  renderProfile = () => {
    const { person, counter } = this.state;
    return (
      <div className="profile">
        <img src={person.imgSrc} className="profile-image" alt= {this.state.person.fullName} />
        <div className="profile-details">
          <p className="profile-name">{person.fullName}</p>
          <p className="profile-bio">{person.bio}</p>
          <p className="profile-profession">{person.profession}</p>
          {this.state.show && <p className="profile-counter">{this.formatCounterTime(counter)}</p>}
        </div>
      </div>
    );
  };

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <button className="toggle-button" onClick={this.handleClick}>{show ? 'Hide profile' : 'Show profile'}</button>
          {show && this.renderProfile()}
        </header>
      </div>
    );
  }
}

export default App;

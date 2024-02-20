import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Hotels from './components/Hotels/Hotels'
import './index.css';
import React, { Component } from 'react';


class App extends Component {
      state = {
      hotels:[{
      id: 1,
      name: 'Pod górami',
      city: 'Zakopane',
      rating: '8.3',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:''
      },
      {
      id: 2,
      name: 'Za lasami',
      city: 'Karpacz',
      rating: '8.9',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:''
      }]
  }
  render(){
  return (
    <div className="App">
    <Header />
    <Menu />
    <Hotels hotels={this.state.hotels} />
    </div>
  );
  }
}

export default App;

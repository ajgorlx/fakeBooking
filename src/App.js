import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Hotels from './components/Hotels/Hotels'
import './index.css';
import { Component } from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';


class App extends Component {
  hotels=[
    {
      id: 1,
      name: 'Pod górami',
      city: 'Zakopane',
      rating: 8.3,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:''
    },
    {
      id: 2,
      name: 'Za lasami',
      city: 'Karpacz',
      rating: 8.9,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:''
    }
  ]
    state = {
    hotels: [],
    loading: true,
  };

  searchHandler(term){
    console.log('szukaj z app', term)
    const hotels = [...this.hotels]
                    .filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
    this.setState({ hotels });
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false
      });
    }, 1000);
    console.log("komponent zamontowany")
  }

  render(){
    console.log("komponent wyrenderowany")
  return (
    <div className="App">
    <Header onSearch={(term) => this.searchHandler(term)} />
    <Menu />
    {this.state.loading 
    ? <LoadingIcon />
    : <Hotels hotels={this.state.hotels} />
    }
    </div>
  );
  }
}

export default App;

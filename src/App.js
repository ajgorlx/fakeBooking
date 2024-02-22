import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Hotels from './components/Hotels/Hotels'
import './index.css';
import React, { Component } from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar'
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './components/Context/themeContext';


class App extends Component {
  static contextType = ThemeContext;
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
    theme: 'primary'
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

  changeTheme = () => {
    const newTheme = this.state.theme === 'primary' ? 'warning' : 'primary'
    this.setState({ theme: newTheme })
  }

  render(){

    const header = (
     <Header>
     <Searchbar 
     onSearch={term => this.searchHandler(term)} 
    
     />
    <ThemeButton />
    </Header>
    )
    
    const menu = (
      <Menu/>
    )

    const content = (
    this.state.loading 
    ? <LoadingIcon/>
    : <Hotels 
    hotels={this.state.hotels}
  
     />
    )

    const footer = (
      <Footer />
    )
    
  return (
    <ThemeContext.Provider value={{
      color: this.state.theme,
      changeTheme: this.changeTheme
      
      }}>
    <Layout 
      header={header}
      menu={menu}
      content={content}
      footer={footer}
    />
    </ThemeContext.Provider>
  );
  }
}

export default App;

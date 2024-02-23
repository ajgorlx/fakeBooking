import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Hotels from './components/Hotels/Hotels'
import './index.css';
import { useEffect, useState } from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar'
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './components/Context/themeContext';
import AuthContext from './components/Context/authContext';


const backendHotels = [
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


function App() {

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('primary');
  const [isAuthenticated, setIsaAuthenticated] = useState(false);
  
  const changeTheme = () => {
    const newTheme = theme === 'primary' ? 'warning' : 'primary'
    setTheme(newTheme)
  }

  const searchHandler = term =>{
    console.log('szukaj z app', term)
      const newHotels = [...backendHotels]
        .filter(x => x.name
          .toLowerCase()
          .includes(term.toLowerCase()))
    setHotels(newHotels);
  };

useEffect(() =>{
    setTimeout(() => {
     setHotels(backendHotels);
     setLoading(false);
    }, 1000);
  },[])


  const header = (
  <Header>
    <Searchbar 
    onSearch={term => searchHandler(term)}/>
     <ThemeButton />
   </Header>
   )
   const menu = (
     <Menu/>
   )
   const content = (
   loading 
   ? <LoadingIcon/>
   : <Hotels 
   hotels={hotels}/>
   )
   const footer = (
     <Footer />
   )

return (

<AuthContext.Provider value=
    {{ isAuthenticated: isAuthenticated,
    login: () => setIsaAuthenticated(true),
    logout: () => setIsaAuthenticated(false)
    }}>
    <ThemeContext.Provider value={{
      color: theme,
      changeTheme: changeTheme
      
      }}>
    <Layout 
      header={header}
      menu={menu}
      content={content}
      footer={footer}
    />
    </ThemeContext.Provider>
    </AuthContext.Provider>
);
};

export default App;
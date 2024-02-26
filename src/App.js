import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import './index.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar'
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './components/Context/themeContext';
import AuthContext from './components/Context/authContext';
import InspiringQuote from './components/UI/InspitingQuote/InspitingQuote';
import { initialState, reducer } from './reducer';
import Home from './pages/Home';
import ReducerContext from './components/Context/reducerContext';

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

  const [state, dispatch] = useReducer(reducer, initialState)


  const searchHandler = term =>{
      const newHotels = [...backendHotels]
        .filter(x => x.name
          .toLowerCase()
          .includes(term.toLowerCase()))
    dispatch({ type: 'set-hotels', hotels: newHotels });
  };
  
  const header = (
  <Header>
  <InspiringQuote />
    <Searchbar 
    onSearch={term => searchHandler(term)}/>
     <ThemeButton />
   </Header>
   )
   const content = (
    <>
    <Routes>
      <Route exact path='/' element={<Home />}
      />

      <Route path='/hotel/:id'
      element={
      <h1>To jest jakiś gotel!</h1>
      }
      />

      </Routes>
    </>
   )
   const footer =  <Footer />;
   const menu = <Menu/>;

return (
<Router>
<AuthContext.Provider value=
    {{ isAuthenticated: state.isAuthenticated,
    login: () => dispatch({ type: 'login'}),
    logout: () => dispatch({ type: 'logout'})
    }}>
    <ThemeContext.Provider value={{
      color: state.theme,
      changeTheme: () => dispatch({ type: 'change-theme' })
      
      }}>
    <ReducerContext.Provider value={{
      state: state,
      dispatch: dispatch
    }}>
    <Layout 
      header={header}
      menu={menu}
      content={content}
      footer={footer}
    />
    </ReducerContext.Provider>
    </ThemeContext.Provider>
    </AuthContext.Provider>
    </Router>
);
};

export default App;
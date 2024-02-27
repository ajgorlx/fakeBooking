import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
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
import Hotel from './pages/Hotel';
import Search from './pages/Search';
import Profile from './Profile/Profile';



function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  const header = (
  <Header>
  <InspiringQuote />
    <Searchbar />
     <ThemeButton />
   </Header>
   )
   const content = (
    <>
    <Routes>
      <Route end path='/' element={<Home />}/>
      <Route path='/hotele/:id' element={<Hotel />}/>
      <Route path='/profil' element={<Profile />}/>
      <Route path='/wyszukaj/:term' element={<Search />}/>
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
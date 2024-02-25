import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Hotels from './components/Hotels/Hotels'
import './index.css';
import { useCallback, useEffect, useReducer } from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar'
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './components/Context/themeContext';
import AuthContext from './components/Context/authContext';
import BestHotel from './components/Hotels/BestHotel/BestHotel';
import InspiringQuote from './components/UI/InspitingQuote/InspitingQuote';


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

const reducer = (state, action) => {
  switch (action.type) {
    case 'change-theme':
    const theme = state.theme === 'danger' ? 'primary' : 'danger'
      return {...state, theme};
      case 'set-hotels':
        return {...state, hotels: action.hotels};
      case 'set-loading':
        return {...state, loading: action.loading};
      case 'login':
        return {...state, isAuthenticated: true};
      case 'logout':
        return {...state, isAuthenticated: false};
      default:
        throw new Error('Nie ma takiej akcji' + action.type)
  }
}

const initialState = {
  hotels:[],
  loading: true,
  theme: 'primary',
  isAuthenticated: false
}


function App() {
 
  const [state, dispatch] = useReducer(reducer, initialState)

  const searchHandler = term =>{
      const newHotels = [...backendHotels]
        .filter(x => x.name
          .toLowerCase()
          .includes(term.toLowerCase()))
    dispatch({ type: 'set-hotels', hotels: newHotels });
  };

  const getBestHotel = useCallback((options) => {
    if (state.hotels.length < options.minHotel) {
      return null;
    } else {
      return state.hotels
      .sort((a, b) => a.rating > b.rating ? -1 : 1)
      [0];
    }
  }, [state.hotels])

useEffect(() =>{
    setTimeout(() => {
     dispatch({ type: 'set-hotels', hotels: backendHotels });
     dispatch({ type: 'set-loading', loading: false })
    }, 1000);
  },[])


  const header = (
  <Header>
  <InspiringQuote />
    <Searchbar 
    onSearch={term => searchHandler(term)}/>
     <ThemeButton />
   </Header>
   )
   const content = (
   state.loading 
   ? <LoadingIcon/>
   : (
   <>
   <BestHotel getHotel={getBestHotel}/>
   <Hotels hotels={state.hotels}/>
   </>
   )
   );
   const footer =  <Footer />;
   const menu = <Menu/>;
   
return (

<AuthContext.Provider value=
    {{ isAuthenticated: state.isAuthenticated,
    login: () => dispatch({ type: 'login'}),
    logout: () => dispatch({ type: 'logout'})
    }}>
    <ThemeContext.Provider value={{
      color: state.theme,
      changeTheme: () => dispatch({ type: 'change-theme' })
      
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
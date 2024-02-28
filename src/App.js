import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Suspense, lazy, useReducer } from 'react';
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
import MyHotels from './pages/Profile/MyHotels';
import ProfileDetails from './pages/Profile/ProfileDetails';
import NotFound from './pages/404/404';
import Login from './pages/Auth/Login/Login';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoutes';
import ErrorBoundary from './hoc/ErrorBoundary';


const Profile = lazy(() => import ('./pages/Profile/Profile'));

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
      <Route path='/wyszukaj/:term?' element={<Search />}/>
      <Route path="/zaloguj" element={<Login/>}/>
      <Route path="/profil" element={
        <AuthenticatedRoute isAuthenticated={state.isAuthenticated}>
          <Suspense fallback={<div>Ładowanie...</div>}>
            <Profile />
          </Suspense>
        </AuthenticatedRoute>} >
      <Route path="" element={<ProfileDetails />} />
      <Route path="hotele" element={<MyHotels />} />
      </Route>
    <Route path="*" element={<NotFound />}/>
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
    <ErrorBoundary>
    <Layout 
      header={header}
      menu={menu}
      content={content}
      footer={footer}
    />
    </ErrorBoundary>
    </ReducerContext.Provider>
    </ThemeContext.Provider>
    </AuthContext.Provider>
    </Router>
);
};

export default App;
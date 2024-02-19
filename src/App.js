import './App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Hotels from './components/Hotels/Hotels'
import './index.css';


const App = () => {
  return (
    <div className="App">
    <Header />
    <Menu />
    <Hotels />
    </div>
  );
}

export default App;

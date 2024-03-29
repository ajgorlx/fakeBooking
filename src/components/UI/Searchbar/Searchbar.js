import { useContext, useEffect, useRef, useState } from 'react';
import ThemeContext from '../../Context/themeContext';
import { useNavigate } from 'react-router-dom'


function Searchbar(props){

  const [term, setTerm] = useState('');
  const theme = useContext(ThemeContext)
  const inputRef = useRef();
  const history = useNavigate()

  const search = ( ) => {
    history(`/wyszukaj/${term}`);
  }
  const onKeyDownHandler = e => {
    if (e.key === 'Enter'){
      search();
    }
  }

  const focusInput = () => {
    inputRef.current.focus();
  }
   
  useEffect(() => {
    focusInput()
  }, []);

    return(
      <div className='d-flex'>
        <input 
        style={{
            width: 'calc(100% - 20px)'
        }}
        ref={inputRef}
        value={term}
        onKeyDown={onKeyDownHandler}
        onChange={e => setTerm(e.target.value)}
        className="form-control"
        type="text"
        placeholder="Szukaj..."/> 
    <button
    onClick={search} 
    className={`ml-1 btn btn-${theme.color}`}>
    Szukaj
    </button>
      </div>
    );
}



export default Searchbar;
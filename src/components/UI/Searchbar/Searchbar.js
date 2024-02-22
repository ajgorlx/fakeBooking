import { useContext, useState } from 'react';
import PropTypes from 'prop-types'
import ThemeContext from '../../Context/themeContext';

const propTypes = {
  onSearch: PropTypes.func.isRequired
}

function Searchbar(props){

  const [term, setTerm] = useState('');
  
  const theme = useContext(ThemeContext)

  const search = ( ) => {
    props.onSearch(term);
  }
  
    return(
      <div className='d-flex'>
        <input 
        style={{
            width: 'calc(100% - 20px)'
        }}
        value={term}
        onKeyDown={e => e.key === 'Enter' && search()}
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

Searchbar.propTypes = propTypes

export default Searchbar;
import React, { useState } from 'react';



function Searchbar(){

  const [term, setTerm] = useState('');

  const search = ( ) => {
    console.log('szukaj!', term);
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
    className="btn btn-primary">
    Szukaj
    </button>
      </div>
    );
}

export default Searchbar;
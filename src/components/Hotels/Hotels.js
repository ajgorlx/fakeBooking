import React, { useMemo } from 'react';
import Hotel from './Hotel/Hotel'
import styles from './Hotels.module.css'
import PropTypes from 'prop-types'


const propTypes = {
    hotels: PropTypes.array.isRequired
}

const slowFunction = (count) => {
    for (let i=0; i < 120000000; i++) {}
    return count;
}

function Hotels(props) {
   const count = useMemo(() => {
    return slowFunction(props.hotels.length)
   }, [props.hotels.length])

    return(
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty ({count})</h2>
        {props.hotels.map(hotel => (
          <Hotel 
            onOpen={props.onOpen}
            key={hotel.id} {...hotel} />
        ))}
    </div>
    );
}

Hotels.propTypes = propTypes;


export default Hotels
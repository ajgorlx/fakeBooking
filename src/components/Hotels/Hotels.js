import { Component } from 'react';
import Hotel from './Hotel/Hotel'
import styles from './Hotels.module.css'
import PropTypes from 'prop-types'
import ThemeContext from '../Context/themeContext';

const propTypes = {
    hotels: PropTypes.array.isRequired
}

class Hotels extends Component {
    static contextType = ThemeContext
    render(){
    return(
        <div className={styles.container}>
        <h2 className={styles.title}>Oferty: </h2>
        {this.props.hotels.map(hotel => <Hotel 
        key={hotel.id} {...hotel} 
        />)}
        </div>
    );
    }
}

Hotels.propTypes = propTypes;

export default Hotels;
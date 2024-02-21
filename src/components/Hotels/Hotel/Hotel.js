import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/hotel.jpg'
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

function Hotel(props){
    return(
        <div className={`card ${styles.hotel}`}>
        <div className='card-body'>
        <div className='row'>
        <div className='col-2'>
        <img 
        src={hotelImg}
        alt=""
        className='img-fluid img-thumbnail'/>
        </div>
        <div className='col-4'>
        <div className='row'>
            <div className='col'>
             <p className={styles.title}>{props.name}</p>
             <span className='badge bg-light text-dark'>{props.city}</span>
            </div>
            <div className='col text-end'>
                <h5>
                Ocena: {props.rating}
                </h5>
                 <a href="#" className='btn btn-primary mt-2 px-4'>Pokaż</a>  
            </div>
        </div>
        
        </div>
        <div className='col-12'>
        <p className={styles.description}>
        {props.description}
        </p>
        </div>
        </div>
        </div>
        </div>
    );
}

Hotel.propTypes = propTypes

export default Hotel;
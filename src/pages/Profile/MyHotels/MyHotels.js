import { Link } from "react-router-dom";
import axios from '../../../axios'
import { useEffect, useState } from "react";
import { objectToArrayWithId } from "../../../helpers/objects";
import useAuth from "../../../hooks/useAuth";
import "./Hotel.css"

export default function MyHotels (props){

    const [auth] = useAuth()
    const [hotels, setHotels] = useState([])
    const fetchHotels = async () => {
        try {
            const res = await axios.get('/hotels.json')
            const newHotel = objectToArrayWithId(res.data)
            setHotels(newHotel.filter(hotel => hotel.user_id === auth.userId))
        }catch (ex) {
            console.log(ex.response)
        }
    }

    const deleteHandler= async id => {
        try {
            await axios.delete(`/hotels/${id}.json`)
            setHotels(hotels.filter(x => x.id !== id))
        } catch (ex) {
            console.log(ex.response)
        }
    }

    useEffect(() => {
        fetchHotels()
    },[])
    
    return(
        <div>
        {hotels ? (
            <table className="table">
            <thead>
                <th>Nazwa</th>
                <th className="edit">Status</th>
                <th>Opcje</th>
            </thead>
            <tbody>
               {hotels.map(hotel => (
                <tr>
                    <td>{hotel.name}</td>
                    <td className='edit'>
                    {hotel.status == 1
                    ? <span className="badge bg-success p-2">aktywny</span>
                    : <span className="badge bg-secondary p-2">ukryty</span>
                    }
                    </td>
                    <td>
                        <Link to={`/profil/hotele/edytuj/${hotel.id}`} className="btn btn-warning">Edytuj</Link>
                        <button 
                            onClick={() => deleteHandler(hotel.id)} 
                            className="btn btn-danger m-1">Usuń
                        </button>
                    </td>
                </tr>
               ))}
            </tbody>
            </table>
        ) : (
            <p> Nie masz jeszcze żadnego hotelu.</p>
        )}
        <Link to="/profil/hotele/dodaj" className="btn btn-primary">Dodaj hotel</Link>
        </div>
    );
}
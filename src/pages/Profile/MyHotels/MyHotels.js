import { Link } from "react-router-dom";
import axios from '../../../axios'
import { useEffect, useState } from "react";
import { objectToArrayWithId } from "../../../helpers/objects";
import useAuth from "../../../hooks/useAuth";

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
                <th>Opcje</th>
            </thead>
            <tbody>
               {hotels.map(hotel => (
                <tr>
                    <td>{hotel.name}</td>
                    <td>
                        <button className="btn btn-warning">Edytuj</button>
                        <button 
                            onClick={() => deleteHandler(hotel.id)} 
                            className="btn btn-danger">Usuń
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
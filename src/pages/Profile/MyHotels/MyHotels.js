import { Link } from "react-router-dom";

export default function MyHotels (props){
    return(
        <div>
        <p>Nie masz jeszcze żadnego hotelu!</p>
        <Link to="/profil/hotele/dodaj" className="btn btn-primary">Dodaj hotel</Link>
        </div>
    );
}
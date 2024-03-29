import "./Hotel.css"
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
import HotelForm from "./HotelForm";
import useAuth from "../../../hooks/useAuth";


const AddHotel = props => {
    const [auth] = useAuth()
    const history = useNavigate()    
    const submit = async form => {
        await axios.post(`{/hotels.json?auth=${auth.token}}`, form);
        history ('/profil/hotele')
    }

    return (
<div className="card">
 <div className="card-header">Dodaj hotel</div>
  <div className="card-body">
      <p className="text-muted">Uzupełnij dane hotelu</p>
        <HotelForm 
        buttonText="Dodaj hotel"
        onSubmit={submit} />
   </div>
</div>
    );
};

export default AddHotel
import "./Hotel.css"
import axios from "../../../axios";
import { useNavigate, useParams } from "react-router-dom";
import HotelForm from "./HotelForm";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const EditHotel = props => {
    const [auth] = useAuth()
    const { id } = useParams()
    const history = useNavigate()
    const [hotel, setHotel] = useState(null)    

    const submit = async form => {
        await axios.patch(`/hotels/${id}.json?auth=${auth.token}`, form);
        history ('/profil/hotele')
    }

    const fetchHotels = async () => {
        const res = await axios.get(`/hotels/${id}.json`)
        const hotelData = res.data

        delete(hotelData.user_id);

        setHotel(hotelData)
    }

    useEffect(() => {
        fetchHotels()
    },[])


    return (
<div className="card">
 <div className="card-header">Edytuj hotel</div>
  <div className="card-body">
      <p className="text-muted">Uzupełnij dane hotelu</p>
        <HotelForm
        hotel={hotel}
        buttonText="Zapisz"
        onSubmit={submit} />
   </div>
</div>
    );
};

export default EditHotel
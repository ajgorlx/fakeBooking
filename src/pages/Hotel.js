import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../components/UI/LoadingIcon/LoadingIcon";


function Hotel(props){

    const { id } = useParams();
    const [hotel, setHotel] = useState(null)
    const [loading, setLoading] = useState(true)


    const fetchHotel = () => {

        setHotel({
            id: 1,
            name: 'Pod górami',
            city: 'Zakopane',
            rating: 8.3,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image:''
        });
      setLoading(false);
    }

    useEffect(() => {
        setTimeout(() => {
            fetchHotel();
        },500)
    },[])


    return loading ? <LoadingIcon /> : (
        <h1>Hotel: {hotel.name} </h1>
    );
} 

export default Hotel;
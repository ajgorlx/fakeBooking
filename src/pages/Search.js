import { useParams } from "react-router-dom";

export default function Search(props){
    const searchHandler = term =>{
    //     const newHotels = [...backendHotels]
    //       .filter(x => x.name
    //         .toLowerCase()
    //         .includes(term.toLowerCase()))
    //   dispatch({ type: 'set-hotels', hotels: newHotels });
     };
   const { term } =useParams()
    return(
        <div>
            <h2>
                Wyniki wyszukiwania dla frazy "{term}":
            </h2>
        </div>
    );
}
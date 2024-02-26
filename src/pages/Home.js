import BestHotel from './../components/Hotels/BestHotel/BestHotel';
import LastHotel from './../LastHotel/LastHotel';
import useStateStorage from './../hooks/useStateStorage';
import useWebsiteTitle from './../hooks/useWebsiteTitle';
import { useContext, useEffect } from 'react';
import Hotels from '.././components/Hotels/Hotels'
import ReducerContext from '../components/Context/reducerContext';
import LoadingIcon from '../components/UI/LoadingIcon/LoadingIcon';

const backendHotels = [
    {
      id: 1,
      name: 'Pod górami',
      city: 'Zakopane',
      rating: 8.3,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:''
    },
    {
      id: 2,
      name: 'Za lasami',
      city: 'Karpacz',
      rating: 8.9,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:''
    }
  ]

export default function Home(props){

const [lastHotel, setLastHotel] = useStateStorage(null);
const reducer = useContext(ReducerContext)
useWebsiteTitle('Strona główna')

    const getBestHotel= () => {
        if (reducer.state.hotels.length < 2) {
          return null;
        } else {
          return reducer.state.hotels
          .sort((a, b) => a.rating > b.rating ? -1 : 1)
          [0];
        }
      }
    
      const openHotel = (hotel) => {setLastHotel(hotel);}
      const removeLastHotel = () => setLastHotel(null)

      useEffect(() =>{
        setTimeout(() => {
         reducer.dispatch({ type: 'set-hotels', hotels: backendHotels });
         reducer.dispatch({ type: 'set-loading', loading: false })
        }, 1000);
      },[])

      if (reducer.state.loading) {
        return <LoadingIcon />
      }

    return (
        <>
            {lastHotel ? <LastHotel {...lastHotel} onRemove={removeLastHotel}/> : null}
            {getBestHotel()
            ? <BestHotel getHotel={getBestHotel} />
            : null
            }
            <Hotels onOpen={openHotel} hotels={reducer.state.hotels} />
        </>   
    )
} 
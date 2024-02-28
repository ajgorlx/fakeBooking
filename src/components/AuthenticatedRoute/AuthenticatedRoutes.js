import { useContext } from "react";
import { Navigate} from "react-router-dom";
import ReducerContext from "../Context/reducerContext";
import Profile from "../../pages/Profile/Profile";

export default function AuthenticatedRoute(props){
    const context = useContext(ReducerContext);

    return context.state.isAuthenticated
    ? <Profile /> 
    : <Navigate to='/zaloguj'/>
}
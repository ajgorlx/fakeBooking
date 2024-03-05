import AuthContext from "../components/Context/authContext";
import { useContext, useDebugValue } from "react";

export default function useAuth(){

    const authContext = useContext(AuthContext)

    const auth = authContext.user;

    useDebugValue(auth ? 'Zalogowany' : 'Wylogowany')

    const setAuth = (user) => {
        if (user) {
            authContext.login(user)
            window.localStorage.setItem('token-data', JSON.stringify(user));
        } else {
            authContext.logout()
            window.localStorage.removeItem('token-data');

        }
        
    }
    return [auth, setAuth];
}

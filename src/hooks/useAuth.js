import AuthContext from "../components/Context/authContext";
import { useContext, useDebugValue } from "react";

export default function useAuth(){

    const authContext = useContext(AuthContext)

    const auth = authContext.isAuthenticated;

    useDebugValue(auth ? 'Zalogowany' : 'Wylogowany')

    const setAuth = (value) => {
        if (value) {
            authContext.login()
        } else {
            authContext.logout()
        }
    }
    return [auth, setAuth];
}

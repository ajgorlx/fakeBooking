import { useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";
import axios from '../../../axios-auth'

export default function Login(props) {
    const [auth, setAuth] = useAuth();
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')
    const [valid, setValid] = useState(null)
    const [error, setError] = useState('')



    const submit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const res = await axios.post('/accounts:signInWithPassword?',{
            email,
            password,
            returnSecureToken: true,
        })
        console.log(res)
        setAuth({
            email: res.data.email,
            token: res.data.idToken,
            userId: res.data.localId
        })
        history ('/')
      } catch(ex){
        setError(ex.response.data.error.message)
        setLoading(false);
        console.log(ex.response)
      }
    }

    if (auth) {
        history ('/');
    }

    return(
    <div>
        <h2>Logowanie</h2>

        {valid === false ? (
            <div className="alert alert-danger">Niepoprawne dane logowania</div>
        ) : null}
        <form onSubmit={submit}>
        <div className="form-group">
            <label>Email</label> 
            <input
             value={email}
             type="email" 
             className="form-control"
             onChange={e => setEmail(e.target.value)}
             />   
        </div>
        <div className="form-group">
            <label>Hasło</label> 
            <input 
            type="password" 
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />   
        </div>
        
        {error ? (
        <div className="alert alert-danger">{error}</div>
        ) : null}

        <LoadingButton loading={loading}>Zaloguj</LoadingButton>
    </form>
    </div>
    );
};
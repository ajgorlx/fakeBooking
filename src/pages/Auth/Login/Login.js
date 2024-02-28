import { useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";

export default function Login(props) {

    const [auth, setAuth] = useAuth();
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')
    const [valid, setValid] = useState(null)


    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            if(true){
                setAuth(true);
                history('/');
            } else {
                setValid(false);
                setPassword('');
            }

            setLoading(false);
        }, 500)
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
        <LoadingButton loading={loading}>Zaloguj</LoadingButton>
    </form>
    </div>
    );
};
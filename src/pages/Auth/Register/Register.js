import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";
import { useState } from "react";
import { validate } from "../../../helpers/validations";
import Input from "../../../components/Input/Input";
import "../Register/Register.css"
import axios from "../../../axios";


export default function Register(props){
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        email:{
            value: '',
            error: '',
            showError: false,
            rules: ['required', 'email']
        },
        password:{
            value: '',
            error: '',
            showError: false,
            rules: ['required' ,{rule: 'password', length: 6}]
        },
    });
    
    const valid = !Object.values(form)
    .map(input => input.error)
    .filter(error => error)
    .length;
    
    const submit = async e => {
        e.preventDefault();
        setLoading(true);
    
    const res = await axios.get('/users.json')
    console.log(res)
    
        setTimeout(() => {
            setLoading(false);
        }, 500);
        }

    const changeHandler = (value, fieldName) => {
        const error = validate(form[fieldName].rules, value);
        setForm({
        ...form, 
        [fieldName]: {
            ...form[fieldName],
            value,
            showError: true,
            error: error
        }
            })
    }

    return(
        <div className="card">
 <div className="card-header">Rejestracja</div>
  <div className="card-body">


      <p className="text-muted">Uzupełnij dane</p>



    <form onSubmit={submit}>

        <Input 
            label="Email"
            type="email"
            value={form.email.value}
            onChange={val => changeHandler(val, "email")}
            error={form.email.error}
            showError={form.email.showError} />

        <Input 
            label="Hasło"
            value={form.password.value}
            type="password"
            onChange={val => changeHandler(val, "password")}
            error={form.password.error}
            showError={form.password.showError} />

        <div className="text-right">
            <LoadingButton
            loading={loading}
            disabled={!valid}
            className="btn-success">
                Zarejestruj!
            </LoadingButton>
        </div>

    </form>
   </div>
</div>
    );
};
    

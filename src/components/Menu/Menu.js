import style from './Menu.module.css'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

function Menu(){
    const [auth, setAuth] = useAuth()

    const login = (e) => {
        e.preventDefault();
        setAuth(true);
    }

    const logout = (e) => {
        e.preventDefault();
        setAuth(false);
    }

    return(
        <div className={`${style.menuContainer} --bs-breadcrumb-divider: `}>
            <ul className={`${style.menu} breadcrumb` }>
                <li 
                className={`${style.menuItem} breadcrumb-item`}>
                    <Link to='/'>Home</Link>
                </li>
                    {auth ? (  
                <li 
                className={`${style.menuItem} breadcrumb-item`}>   
                    <a href='#' onClick={logout}>Wyloguj</a>
                </li>
                  ) : (
                <li 
                className={`${style.menuItem} breadcrumb-item`}>     
                     <a href='#' onClick={login}>Zaloguj</a>
                </li>
                  )
                }
            </ul>
        </div>
    );
}

export default Menu;
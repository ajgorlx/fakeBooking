import style from './Menu.module.css'
import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';

function Menu(){
    const [auth, setAuth] = useAuth()

    const logout = (e) => {
        e.preventDefault();
        setAuth(false);
    }

    return(
        <div className={`${style.menuContainer} --bs-breadcrumb-divider: `}>
            <ul className={`${style.menu} breadcrumb` }>
                <li 
                className={`${style.menuItem} breadcrumb-item`}>
                    <NavLink to='/'
                    className={({ isActive }) => 
                    isActive ? style.menuItemActive : style.menuItem}
                    >
                      Home
                    </NavLink>
                </li>
                    {auth ? (  
                <>
                <li 
                className={`${style.menuItem} breadcrumb-item`}>   
                    <NavLink to='/profil'
                    className={({ isActive }) => 
                    isActive ? style.menuItemActive : style.menuItem}
                    > 
                      Mój profil
                    </NavLink>
                </li>
                <li
                className={`${style.menuItem} breadcrumb-item`}>   
                    <a href='#' onClick={logout}>Wyloguj</a>
                </li>
                </>
                  ) : (
                <>
                <li 
                className={`${style.menuItem} breadcrumb-item`}>     
                     <NavLink className={({ isActive }) => 
                    isActive ? style.menuItemActive : style.menuItem}
                    to='/zarejestruj'> Zarejestruj</NavLink>
                </li>
                <li 
                    className={`${style.menuItem} breadcrumb-item`}>     
                     <NavLink className={({ isActive }) => 
                    isActive 
                    ? style.menuItemActive 
                    : style.menuItem}
                     to="zaloguj">Zaloguj
                     </NavLink>
                </li>
                </>
                  )
                }
            </ul>
        </div>
    );
}

export default Menu;
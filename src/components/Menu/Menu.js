import React, { useContext } from 'react';
import style from './Menu.module.css'
import AuthContext from '../Context/authContext';


function Menu(){
    const auth = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        auth.login();
    }

    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    }

    return(
        <div className={`${style.menuContainer} --bs-breadcrumb-divider: `}>
            <ul className={`${style.menu} breadcrumb` }>
                <li 
                className={`${style.menuItem} breadcrumb-item`}>
                    <a href="#">Home</a>
                </li>
                    {auth.isAuthenticated
                  ? (  
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
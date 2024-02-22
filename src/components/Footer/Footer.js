import { useContext } from "react";
import ThemeContext from "../Context/themeContext";

const Footer = (props) => {

    const theme = useContext(ThemeContext)
    return(
        <div className={`text-center m-3 text-${theme.color}`}>
        Noclegi 2024
        </div>
    );
}

export default Footer;
import ThemeContext from "../Context/themeContext";

const Footer = (props) => (
    <ThemeContext.Consumer>
    {({theme}) =>
    <div className={`text-center m-3 text-${theme}`}>
    Noclegi 2024
    </div>
    }
    </ThemeContext.Consumer>
);

export default Footer;
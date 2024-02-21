import ThemeContext from "../Context/themeContext";

const Footer = (props) => (
    <ThemeContext.Consumer>
    {value =>
    <div className={`text-center m-3 text-${value}`}>
    Noclegi 2024
    </div>
    }
    </ThemeContext.Consumer>
);

export default Footer;
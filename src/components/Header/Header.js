import styles from './Header.module.css'
import withMousePosition from '../../hoc/withMousePosition';



function Header(props){

    return (
        <header className={`${styles.header}`}>
        {props.mouseX}
        {props.mouseY}
        {props.children}
        </header>
    );
}

export default withMousePosition(Header);
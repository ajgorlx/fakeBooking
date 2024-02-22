import { useContext } from "react";
import ThemeContext from "../../Context/themeContext";

export default function LoadingIcon(props) {

const theme = useContext(ThemeContext)

    return (

<div class="d-flex justify-content-center">
  <div class={`spinner-border text-${theme.color}`} role="status">
 </div>
</div>
    );
}
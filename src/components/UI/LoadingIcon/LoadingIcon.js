import ThemeContext from "../../Context/themeContext";

export default function LoadingIcon(props) {
    return (
<ThemeContext.Consumer>
{value => 
<div class="d-flex justify-content-center">
  <div class={`spinner-border text-${value}`} role="status">
 </div>
</div>
}
</ThemeContext.Consumer>
    );
}
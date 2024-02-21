import ThemeContext from "../../Context/themeContext";

export default function LoadingIcon(props) {
    return (
<ThemeContext.Consumer>
{({theme }) => 
<div class="d-flex justify-content-center">
  <div class={`spinner-border text-${theme}`} role="status">
 </div>
</div>
}
</ThemeContext.Consumer>
    );
}
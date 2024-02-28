import { Component } from "react"

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    static getDerivedFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo){
        console.log("Erroro Boundary")
        console.log(error, errorInfo)
    }

    render(){
        if (this.state.hasError){
            return(
                <div className="alert alert-danger">
                Wystąpił problem
                </div>
            )
        }
        return this.props.children
    }

}

export default ErrorBoundary
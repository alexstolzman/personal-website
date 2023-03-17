import { useLocation } from "react-router-dom";

export default function Confirmation(){
    const { state } = useLocation()

    return(
        <h1>Hello {state.email}, your email address has been confirmed</h1>
    )
}
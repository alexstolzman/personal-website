import { useNavigate } from 'react-router-dom'
import { useRef } from "react";

export default function Contact(){
const navigate=useNavigate()
const emailRef=useRef(null)

function handleSubmit(event){
    event.preventDefault()
    navigate("/confirmed", { state: { email: emailRef.current.value } });
}

    return(
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" ref={emailRef}></input>
                <input type="submit" value="submit">

                </input>
            </form>
        </div>
        
    )
}
import React, { useState } from "react";
import { validateEmail } from '../utils/helpersE';

function ContactForm() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        if(e.target.name === "email") {
            const isValid = validateEmail(e.target.value); 
            console.log(isValid);
            if(!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage("");
            }
        }
        if(!errorMessage){
        setFormState({...formState, [e.target.name]: e.target.value});
        }
    }
    console.log(formState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contactContainer">
            <h1 className="h1tag" data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="contactLines">
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    name="name" 
                    defaultValue={name}
                    onBlur={handleChange}
                    />
                </div>
                <div className="contactLines">
                    <label htmlFor="email">Email address:</label>
                    <input 
                    type="email" 
                    name="email" 
                    defaultValue={email}
                    onBlur={handleChange}
                    />
                </div>
                <div className="contactLines">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                    name="message" 
                    rows="5" 
                    defaultValue={message}
                    onBlur={handleChange}
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className='btnContainer'>
                <button  className='btnContact' data-testid="submit" type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;
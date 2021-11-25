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
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    console.log(formState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contactContainer">
            <div>
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
                    <button className='btnContact' data-testid="submit" type="submit">Submit</button>
                </div>
            </form>
            </div>

            <div className='address'>
                <iframe title='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.5189159453357!2d-121.28783678437405!3d38.75180057959328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b20481bcbe169%3A0x5623ec523e6f49f3!2s55%20Main%20St%2C%20Roseville%2C%20CA%2095678!5e0!3m2!1sen!2sus!4v1625465566599!5m2!1sen!2sus"
                >
                </iframe>
                <div class="contact-info">
                    <h3>Spartan Compnay</h3>
                    <p>
                        Any questions or concerns before signing up?
                        <br />
                        Let us know and we'll be happy to talk to you!
                    </p>
                    <address>
                        55 Main Street <br />
                        Some town, CA <br />
                        12345 <br />
                        p: 555.Run.BUDZ (555.786.2839) <br />
                        E: <a href="mailto:info@runbuddy.io">Spartan@test.io</a>
                    </address>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
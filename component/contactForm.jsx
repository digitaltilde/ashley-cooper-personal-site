import React from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("myyabyne");
    if (state.succeeded) {
        return (
        <div className="contactForm">
            <h4 className="deliveryMessage">Your message has been delivered!</h4>
        </div>
        );
    }

    const handleChange = function() {
        console.log(state.errors);
    }

    return (<form className="contactForm" onSubmit={handleSubmit}>
        <h2>Contact</h2>
        <div className="formDiv" >

            <label
                style={{gridRow:1}} 
                htmlFor="name"
                className="formLabel"
            >
                Name: 
            </label>
            <input 
                style={{gridRow:1}} 
                name="name" 
                type="text"
                placeholder="Name"
                onChange={handleChange}
                required
            >
            </input>
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />

            <label 
                style={{gridRow:2}}
                htmlFor="email"
                className="formLabel"
            >
                Email:
            </label>
            <input 
                style={{gridRow:2}} 
                name="email" 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
            >
            </input>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />

            <label
                style={{gridRow:3}}
                htmlFor="message"
                className="formLabel"
            >
                Message:
            </label>
            <textarea 
                style={{gridRow:3,height:"100%"}}
                name="message"
                placeholder="Your message here..."
                onChange={handleChange}
                required
                rows="6"
            >
            </textarea>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />

            <input type="hidden" name="_next" value="/contact" />

        </div>
        <button type="submit" disabled={state.submitting}>Send</button>
    </form>)
}
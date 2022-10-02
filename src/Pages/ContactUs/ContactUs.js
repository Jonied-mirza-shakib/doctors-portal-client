import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import { toast } from 'react-toastify';
import './ContactUs.css'

const ContactUs = () => {
    const [state, handleSubmit] = useForm("mvolpkpz");
    if (state.succeeded) {
        toast(`Thank you. We are received your message.`)
        for (const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }
    return (
        <div className='contact-us-page'>
            <div className='contact-container'>
                <h1 className='contact-entry-title'>CONTACT US</h1>

                <form onSubmit={handleSubmit}>
                    <div class="form">
                        <div class="input-container ic1">
                            <input id="firstname" name='firstname' class="input" type="text" placeholder=" " />
                            <ValidationError
                                prefix="firstname"
                                field="firstname"
                                errors={state.errors}
                            />
                            <div class="cut"></div>
                            <label for="firstname" class="placeholder">First name</label>
                        </div>
                        <div class="input-container ic2">
                            <input id="lastname" name='lastname' class="input" type="text" placeholder=" " />
                            <ValidationError
                                prefix="lastname"
                                field="lastname"
                                errors={state.errors}
                            />
                            <div class="cut"></div>
                            <label for="lastname" class="placeholder">Last name</label>
                        </div>
                        <div class="input-container ic3">
                            <input id="email" class="input" type="text" placeholder=" " />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <div class="cut cut-short"></div>
                            <label for="email" class="placeholder">Email</label>
                        </div>

                        <div class="textarea-container ic2">
                            <textarea id="textarea" name='message' class="textarea" placeholder=" " rows='5' style={{ width: '100%' }}></textarea>
                            <ValidationError
                                prefix="message"
                                field="message"
                                errors={state.errors}
                            />
                            <div class="cut cut-short-message"></div>
                            <label for="email" class="placeholder">Your Message</label>
                        </div>
                        <button type="submit" class="submit" disabled={state.submitting}>Submit</button>
                    </div>
                </form>








            </div>
        </div>
    );
};

export default ContactUs;
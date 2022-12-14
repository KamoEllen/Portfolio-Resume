import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via mail:</p>
                           <p className="hire__text white"><strong>kamoellenkganakga@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Name " />
                           <input type="text" className="contact email" placeholder="Email " />
                           <input type="text" className="contact subject" placeholder="Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src="https://avatars.githubusercontent.com/u/108501662?v=4" alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact

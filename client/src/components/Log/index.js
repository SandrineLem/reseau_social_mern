import React from "react";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";


const Log = (props) => {
    const [signUpModal, setSinUpModal] = useState(props.signup);
    const [signInModal, setSinInModal] = useState(props.signin);

    const handleModals = (e) => {
        if(e.target.id === "register") {
            setSinInModal(false);
            setSinUpModal(true)
        } else if(e.target.id === "login") {
            setSinUpModal(false);
            setSinInModal(true);
        }
    }

    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    <li onClick={handleModals} id="register"
                    className={signUpModal ? "active-btn" : null}>S&apos;inscrire</li>
                    <li onClick={handleModals} id="login"
                    className={signInModal ? "active-btn" : null}>Se connecter</li>
                </ul>
                {signUpModal && <SignUpForm />}
                {signInModal && <SignInForm />}
            </div>
        
        </div>
    );
};

export default Log;
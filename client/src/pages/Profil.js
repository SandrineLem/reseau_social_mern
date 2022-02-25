import React from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

const Profil = () => {
    const uid = useContext(UidContext);

    return (
       <div className="profil-page">
       {uid ? (
           <h1>UPDATE PAGE</h1>
       ) : (
        <div className="logo-container">
            <Log signin={false} signup={true} />
            <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
            </div>
        </div>
    )}
       </div>
    );
};


export default Profil;
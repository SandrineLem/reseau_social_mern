import React from "react";
import LeftNav from "../LeftNav";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import { useState } from "react";
import { updateBio } from "../../actions/user.actions";


const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateFrom] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();


  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateFrom(false);
  } ;

  return (
    <div className="profil-container">
      <LeftNav />
      <h1>Profil de {userData.pseudo}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img src={userData.picture} alt="user-pic" />
          <UploadImg />
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateFrom(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateFrom(!updateForm)}>
                Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  typeof="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider modifications</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;

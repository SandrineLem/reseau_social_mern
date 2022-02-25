import React from 'react';
import { useState } from 'react';
import Routes from "./components/Routes";
import { UidContext } from './components/appContext';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  const [uid,setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async() => {
      await axios( {
      
        method:"get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials:true
      })
      .then((res)=> setUid(res.data))
      .catch((err) => console.log("No token"));
    }
    fetchToken();
  }, []);
  return (
    <UidContext.Provider value ={uid}>
    <Routes />
    </UidContext.Provider>
  );
};

export default App;
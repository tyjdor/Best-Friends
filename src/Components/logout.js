import React from 'react';
import{ useGoogleLogout} from 'react-google-login';
import {clientId} from '../config';

function Logout(){
    const onLogoutSuccess =(res)=>{
        alert('Logout successful');
        console.log('Logout Success');
    };
    const onFailure =()=>{
       
        console.log('Handle Failure cases');
    };
   const {signOut} = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });
    
    return(
        <div style={{textAlign:'right'}}>
        <button onClick={signOut} className ="button">
        <img src= "icons/google.svg" alt= "google login"className ="icon"></img>
        <span className = "buttonText"> Sign out</span>
    </button>
    </div>
    );
}
export default Logout;
import React from 'react';
import{ GoogleLogout} from 'react-google-login';
const clientId =process.env.OAUTH_KEY;
function Logout(){
    const onSuccess =()=>{
        alert('Logout successful');
    };
    
    return(
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText='Logout'
            onLogoutSuccess={onSuccess}
            
            ></GoogleLogout>
        </div>
    );
}
export default Logout;
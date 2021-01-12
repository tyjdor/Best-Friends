import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../refreshToken';
import { clientId } from '../config';
import { login } from '../actions/authenticationActions';
import { connect } from 'react-redux';

function Login({ dispatch }) {


    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        refreshTokenSetup(res);
        dispatch(login());
    };
    const onFailure = (res) => {
        console.log('[Login failed]res:', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: false,
        accessType: 'offline',
    });

    return (
        <div style={{ textAlign: 'right' }} >
            <button onClick={signIn} className="button">
                <img src="icons/google.svg" alt="google login" className="icon"></img>
                <span className="buttonText"> Sign in  </span>
            </button>

        </div>
    );
}
export default connect()(Login);
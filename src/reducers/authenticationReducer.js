const initialState = { authenticated: false };
export default function authenticationReducer(state = initialState, action) {
    if (action.type === 'authentication/login') {
        return {
            ...state,
            authenticated: true
        }
    }
    else if (action.type === 'authentication/logout') {
        return {
            ...state,
            authenticated: false
        }
    }
    return state;
}

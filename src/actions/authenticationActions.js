export function login() {
    return {
        type: 'authentication/login'
    };
}
export function logout() {
    return {
        type: 'authentication/logout'
    };
}

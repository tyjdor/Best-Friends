import { createStore } from 'redux';
import authenticationReducer from '../reducers/authenticationReducer'


export default function configureStore() {
    return createStore(
        authenticationReducer
    );
}

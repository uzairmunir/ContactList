import { createStore } from 'redux';
import ContactReducer from './../reducer/ContactReducer';
const store = createStore(ContactReducer);
export default store;

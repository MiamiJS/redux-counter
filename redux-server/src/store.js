import {createStore} from 'redux';
import reducer from './reducer';

const makeStore = () => createStore(reducer)


export default makeStore

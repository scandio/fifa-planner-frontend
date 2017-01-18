import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';

import logger from 'redux-logger';
import reducer from './reducers';


const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://v22017014202143365.hotsrv.de:8080/rest/v1/',
  responseType: 'json'
});

const middleware = applyMiddleware(thunk, axiosMiddleware(client));
export default createStore(reducer, middleware);
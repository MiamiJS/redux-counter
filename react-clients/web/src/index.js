import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, Link} from 'react-router'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import AppContainer from './views/AppContainer'
import store from './store/store'



const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', serverState =>
  store.dispatch({type: 'SYNC_STATE', serverState})
);
const Index = React.createClass({
  render (){
    return <Provider store={store}><AppContainer/></Provider>
  }
})


render(<Index /> , document.getElementById('root'))

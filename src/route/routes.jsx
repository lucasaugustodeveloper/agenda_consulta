import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../home/home'
import Consultas from '../consultas/consultas'

export default props => (
  <Router history={hashHistory}>
    <Route path='/home' component={Home} />
    <Route path='/consultas' component={Consultas} />
    <Redirect from='*' to='/home' />
  </Router>
)

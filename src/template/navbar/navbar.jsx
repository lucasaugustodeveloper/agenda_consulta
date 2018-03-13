import 'modules/font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-inverse'>
        <div className='navbar-header'>
          <a href='#/home' className='navbar-brand'>
            <i className='glyphicon glyphicon-home'></i>
          </a>
        </div>

        <div className='collapse navbar-collapse'>
          <ul className='nav navbar-nav'>
            <li><a href='#/consultas'>Consultas</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar

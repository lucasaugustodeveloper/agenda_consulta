import 'modules/bootstrap/dist/css/bootstrap.min.css'
import './home.css'

import React, { Component } from 'react'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nome: '',
      especialidade: '',
      medico: '',
      crm: '',
      data: '',
      hora: '',
      consultorio: ''
    }
  }

  handleChange (event) {
    this.setState({
      nome: event.target.nome,
      especialidade: event.target.especialidade,
      medico: event.target.medico,
      crm: event.target.crm,
      data: event.target.data,
      hora: event.target.hora,
      consultorio: event.target.consultorio
    })
  }

  render () {
    return (
      <div className='row home'>
        <div className='col-lg-6 col-lg-offset-3'>
          <form action='#'>
            <div className='form-group'>
              <label htmlFor='name'>Nome do Paciente</label>
              <input onChange={this.handleChange} type='text' className='form-control' placeholder='entre com o nome' name='name' value={this.state.nome} id='name' />
            </div>
            <div className='form-group'>
              <label htmlFor='espMedico'>Especialidade Médica</label>
              <input onChange={this.handleChange} type='text' className='form-control' placeholder='entre com a especialidade do médico' name='espMedico' value={this.state.especialidade} id='espMedico' />
            </div>
            <div className='form-group'>
              <div className='row'>
                <div className='col-lg-6'>
                  <label htmlFor='nameMedico'>Nome do Médico</label>
                  <input onChange={this.handleChange} type='text' className='form-control' placeholder='entre com o nome do médico' name='nameMedico' value={this.state.medico} id='nameMedico' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor='crmMedico'>CRM do Médico</label>
                  <input onChange={this.handleChange} type='number' className='form-control' placeholder='entre com o CRM do Médico' name='crmMedico' value={this.state.crm} id='crmMedico' />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <div className='row'>
                <div className='col-lg-6'>
                  <label htmlFor='dateConsulta'>Data da consulta</label>
                  <input onChange={this.handleChange} type='date' className='form-control' placeholder='dd/mm/yy' name='dateConsulta' value={this.state.data} id='dateConsulta' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor='horaConsulta'>Hora da Consulta</label>
                  <input onChange={this.handleChange} type='text' className='form-control' placeholder='00:00' name='horaConsulta' value={this.state.hora} id='horaConsulta' />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='numeroConsultorio'>Nº Consultório</label>
              <input onChange={this.handleChage} type='text' className='form-control' placeholder='entre com o número do consultório' name='numeroConsultorio' value={this.state.consultorio} id='numeroConsultorio' min='1' max='2' />
            </div>
            <div className='form-group'>
              <div className='row'>
                <div className='col-lg-3'>
                  <button className='btn btn-success btn-block btn-lg'>Salvar</button>
                </div>
                <div className='col-lg-3'>
                  <button className='btn btn-warning btn-block btn-lg'>Limpar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Home

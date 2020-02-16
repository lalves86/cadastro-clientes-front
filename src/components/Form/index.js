import React, { Component } from 'react';

import api from '../../services/api';

/*
  Este componente renderiza o formulário de criação de um novo cliente para
  ser armazenado no banco
*/

class Form extends Component {
  state = {
    name: '',
    address: '',
    phone: '',
    status: '',
  };

  setName = e => {
    this.setState({ name: e.target.value });
  };

  setAddress = e => {
    this.setState({ address: e.target.value });
  };

  setPhone = e => {
    this.setState({ phone: e.target.value });
  };

  setStatus = e => {
    this.setState({ status: e.target.value });
  };

  handleSubmit = async e => {
    const { name, address, phone, status } = this.state;
    await api.post('/clients', {
      name,
      address,
      phone,
      status,
    });
  };

  render() {
    const { name, address, phone, status } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.setName}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={this.setAddress}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Telefone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={this.setPhone}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            type="number"
            name="status"
            id="status"
            value={status}
            onChange={this.setStatus}
            required
          >
            <option value="">== Selecione ==</option>
            <option value="ativo">Ativo</option>
            <option value="excluído">Excluído</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;

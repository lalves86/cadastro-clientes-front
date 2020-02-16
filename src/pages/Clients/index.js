import React, { Component } from 'react';

import api from '../../services/api';

import Client from '../../components/Client';
import Form from '../../components/Form';

/*
  Esta classe retorna os clientes cadastrados no banco de dados ao carregar.
  Também define as funções para atualizar e excluir um cliente.
*/

class Clients extends Component {
  // Definição do estado
  state = {
    clients: [],
    edit: false,
  };

  componentDidMount() {
    this.loadClients();
  }

  // Carrega a lista de clientes do banco de dados
  loadClients = async () => {
    const response = await api.get('/clients');

    this.setState({ clients: response.data });
  };

  // Permite a edição de clientes
  handleEditClient = async id => {
    this.setState({ edit: true });

    this.loadClients();
  };

  // Muda o status para excluído
  handleDeleteClient = async id => {
    await api.delete(`/clients/${id}`);

    this.loadClients();
  };

  render() {
    const { clients, edit } = this.state;
    return (
      <div>
        <h1>Listagem de Clientes</h1>
        <div className="container">
          <div className="aside">
            <h2>Cadastrar novo cliente</h2>
            <Form />
          </div>
          <div className="main">
            {clients.map(client => (
              <Client
                key={String(client.id)}
                data={client}
                edit={edit}
                handleEditClient={this.handleEditClient}
                handleDeleteClient={this.handleDeleteClient}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;

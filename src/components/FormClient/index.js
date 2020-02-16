import React, { useState } from 'react';

import api from '../../services/api';

/*
  Este componente renderiza o formulário de edição do cliente no banco,
  caso o usuário aperte o botão de editar
*/

function FormClient({ data, edited }) {
  const [name, setName] = useState(data.name);
  const [address, setAddress] = useState(data.address);
  const [phone, setPhone] = useState(data.phone);
  const [status, setStatus] = useState(data.status);
  const [edit, setEdit] = useState(edited);

  const handleEditName = e => {
    setName(e.target.value);
  };

  const handeEditAddress = e => {
    setAddress(e.target.value);
  };

  const handleEditPhone = e => {
    setPhone(e.target.value);
  };

  const handleEditStatus = e => {
    setStatus(e.target.value);
  };

  const handleSubmit = async () => {
    const { id } = data;
    await api.put(`/clients/${id}`, {
      name,
      address,
      phone,
      status,
    });

    setEdit(false);
  };

  return (
    <>
      <h3>Alterar o cadastro do cliente</h3>
      <form onSubmit={handleSubmit} className="formclient">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleEditName}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handeEditAddress}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleEditPhone}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            type="text"
            name="status"
            id="status"
            value={status}
            onChange={handleEditStatus}
            required
          >
            <option value="">== Selecione ==</option>
            <option value="ativo">Ativo</option>
            <option value="excluído">Excluído</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>
        <button type="submit">Alterar</button>
      </form>
    </>
  );
}

export default FormClient;

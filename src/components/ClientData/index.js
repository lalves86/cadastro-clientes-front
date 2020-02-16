import React from 'react';

/*
  Este componente renderiza as informações do cliente na tela, caso o botão
  de edição não tenha sido pressionado
*/

function ClientData({ data }) {
  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.address}</p>
      <p>{data.phone}</p>
      <p>{data.status}</p>
    </>
  );
}

export default ClientData;

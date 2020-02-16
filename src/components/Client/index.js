import React from 'react';

import ClientData from '../ClientData';
import FormClient from '../FormClient';

/*
  Este componente renderiza o card de cada cliente para mostrar as informações
*/

function Client({ data, edit, handleEditClient, handleDeleteClient }) {
  return (
    <div className="card">
      <div className="row">
        <div className="col">
          {edit ? (
            <FormClient data={data} edited={edit} />
          ) : (
            <>
              <ClientData data={data} />
              <div className="buttons">
                <button type="button" onClick={() => handleEditClient(data.id)}>
                  editar
                </button>
                {data.status !== 'excluído' && (
                  <button
                    type="button"
                    onClick={() => handleDeleteClient(data.id)}
                  >
                    Apagar
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Client;

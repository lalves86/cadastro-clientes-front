import React from 'react';
import ReactExport from 'react-export-excel';

const { ExcelFile } = ReactExport;
const { ExcelSheet } = ReactExport.ExcelFile;
const { ExcelColumn } = ReactExport.ExcelFile;

function ExportExcel({ data }) {
  return (
    <ExcelFile>
      <ExcelSheet data={data} name="Clientes">
        <ExcelColumn label="Nome" value="name" />
        <ExcelColumn label="Endereço" value="address" />
        <ExcelColumn label="Telefone" value="phone" />
        <ExcelColumn label="status" value="status" />
      </ExcelSheet>
    </ExcelFile>
  );
}

export default ExportExcel;

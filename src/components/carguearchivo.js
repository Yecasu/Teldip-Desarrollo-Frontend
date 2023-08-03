import React from "react";
import { FileUpload } from "primereact/fileupload";

const CargueArchivo = () => {
  const templateUrl = "/miplantilla.xlsx"; 

  return (
    <div className="card">
      <a href={templateUrl} download>
        Descargar plantilla guia
      </a>
      <FileUpload
        name="demo[]"
        url={"/api/upload"}
        multiple
        accept=".xlsx" 
        maxFileSize={1000000}
        emptyTemplate={
          <p className="m-0">Arrastra y suelta archivos aquí para cargarlos.</p>
        }
        chooseLabel="Seleccionar" 
        uploadLabel="Subir" 
        cancelLabel="Cancelar" 
      />
    </div>
  );
};

export default CargueArchivo;

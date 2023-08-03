import React from 'react';
import CargueArchivo from './components/carguearchivo';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div>
      <h1>Subir Archivo</h1>
      <CargueArchivo />
    </div>
  );
}

export default App;

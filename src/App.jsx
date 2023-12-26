import { useState } from 'react';
import Listado from './Componentes/Listado.jsx';
import Buscador from './Componentes/Buscador.jsx';
import Formulario from './Componentes/Formulario.jsx';
import Alert from './Componentes/Alert.jsx';
import { BaseColaboradores } from './data/BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([...BaseColaboradores]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alertDuration] = useState(5000);

  const handleError = (errorForm) => {
    setError(errorForm);
    if (errorForm) {
      setTimeout(() => {
        setError(false);
      }, alertDuration);
    }
  };

  const handleDelete = (index) => {
    const updatedColaboradores = [...colaboradores];
    updatedColaboradores.splice(index, 1);
    setColaboradores(updatedColaboradores);
    setColaboradoresFiltrados(updatedColaboradores);
  };

  const handleAgregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setColaboradoresFiltrados([...colaboradores, nuevoColaborador]);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, alertDuration);
  };

  const handleBuscar = (term) => {
    const filteredColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.nombre.toLowerCase().includes(term.toLowerCase());
    });
    setColaboradoresFiltrados(filteredColaboradores);
  };

  return (
    <div className="container-fluid p-5">
      <div className="d-flex flex-column align-items-center">
        <div className="col-md-4">
          <div className="p-2 text-center">
            <Formulario onAgregarColaborador={handleAgregarColaborador} handleError={handleError} />
            {error && <Alert color="danger" message="Debes completar todos los campos" />}
            {success && <Alert color="success" message="Datos enviados correctamente!" />}
          </div>
        </div>
        <div className="col-md-8">
          <div className="d-flex flex-column">
            <Buscador onBuscar={handleBuscar} />
            <Listado colaboradores={colaboradoresFiltrados} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Buscador({ onBuscar }) {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onBuscar(term);
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [term, onBuscar]);

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleClear = () => {
    setTerm('');
    onBuscar('');
  };

  return (
    <InputGroup className="mb-3 mt-3 w-100 p-2">
      <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-magnifying-glass"></i>
      </InputGroup.Text>
      <Form.Control
        type="text"
        className="form-control"
        placeholder="Buscar colaboradores"
        value={term}
        onChange={handleInputChange}
      />
      <Button variant="outline-secondary" onClick={handleClear}>
        Limpiar
      </Button>
    </InputGroup>
  );
}

Buscador.propTypes = {
  onBuscar: PropTypes.func.isRequired,
};

export default Buscador;
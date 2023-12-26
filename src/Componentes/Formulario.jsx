import{ useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { errorAlert, successAlert } from '../helpers/sweetAlert.js';
import { v4 as uuidv4 } from 'uuid';

function Formulario({ onAgregarColaborador, handleError }) {
    const initialState = {
        userName: '',
        userMail: '',
        userAge: '',
        userCargo: '',
        userPhone: ''
    };

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.userName.trim() === '' ||
            formData.userMail.trim() === '' ||
            formData.userAge.trim() === '' ||
            formData.userCargo.trim() === '' ||
            formData.userPhone.trim() === ''
        ) {
            handleError(true);
            errorAlert();
        } else {
            const nuevoColaborador = {
                id: uuidv4(),
                nombre: formData.userName,
                correo: formData.userMail,
                edad: formData.userAge,
                cargo: formData.userCargo,
                telefono: formData.userPhone
            };
            onAgregarColaborador(nuevoColaborador);
            handleError(false);
            successAlert();

            // Resetear los estados
            setFormData(initialState);
        }
    };

    const handleChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value
        });
    };

    return (
        <Form onSubmit={handleSubmit} className="w-100">
            <h1 className='p-2'>Agregar Colaborador</h1>
            <InputGroup className="p-2">
            <InputGroup.Text id="basic-addon1">
            <i className="fa-solid fa-user"></i>
            </InputGroup.Text>
            <Form.Control
                onChange={(e) => handleChange(e, 'userName')}
                value={formData.userName}
                placeholder="Nombre del colaborador"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="text"
            />
             </InputGroup> 

             <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-envelope"></i>
        </InputGroup.Text>        
            <Form.Control
                onChange={(e) => handleChange(e, 'userMail')}
                value={formData.userMail}
                placeholder="Email del colaborador"
                aria-label="Email"
                aria-describedby="basic-addon1"
                type="email"
            />
            </InputGroup>
            
            <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-circle-question"></i>        
        </InputGroup.Text>
            <Form.Control
                onChange={(e) => handleChange(e, 'userAge')}
                value={formData.userAge}
                placeholder="Edad del colaborador"
                aria-label="UserAge"
                aria-describedby="basic-addon1"
                type="number"
                min="1"
                max="100"
            />
            </InputGroup>

            <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-suitcase"></i>        
        </InputGroup.Text>
            <Form.Control
                onChange={(e) => handleChange(e, 'userCargo')}
                value={formData.userCargo}
                placeholder="Cargo del colaborador"
                aria-label="UserCargo"
                aria-describedby="basic-addon1"
                type="text"
            />
            </InputGroup>

            <InputGroup className="p-2">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-phone"></i>        
        </InputGroup.Text>
            <Form.Control
                onChange={(e) => handleChange(e, 'userPhone')}
                value={formData.userPhone}
                placeholder="Teléfono del colaborador"
                aria-label="UserPhone"
                aria-describedby="basic-addon1"
                type="text"
            />
            </InputGroup>

            <Button
                variant="primary"
                type="submit"
                value="submit"
                className='p-2 mt-2'
            >
                <i className="fa-solid fa-user-plus px-2"></i>
                Agregar colaborador
            </Button>
        </Form>
    );
}

export default Formulario;
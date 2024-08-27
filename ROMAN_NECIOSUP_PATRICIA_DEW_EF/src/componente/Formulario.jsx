import { Fragment, useState } from "react";
import { Button, Form } from 'react-bootstrap';

const Formulario = () => {
    const [ Name, setName ] = useState(''), [ Last, setLast ] = useState('');
    const [ Email, setEmail ] = useState('');
    const [ Phone, setPhone ] = useState('');
    const [ errors, setErrors] = useState({});

    const regexTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regexNumero = /^[0-9]{1,9}$/;

    const realizarEnvio = (e) => {
        e.preventDefault();
        const newErrors = {};
        if(!Name) newErrors.Name = 'El nombre es obligatorio';
        if(!Last) newErrors.Last = 'Los apellidos son obligatorio';
        if(!Email) newErrors.Email = 'El email es obligatorio';
        if(!Phone) newErrors.Number = 'El número es obligatorio';
        if(!regexTexto.test(Name)) {alert('El nombre no es válido')};
        if(!regexTexto.test(Last)) {alert('Los apellidos no son válidos')};
        if(!regexTexto.test(Email)) {alert('El email no es válido')};
        if(!regexNumero.test(Phone)) {alert('El Phone no es válido')};
        setErrors(newErrors);
        alert("Datos ingresados: { ${Name}, ${Last}, ${Email}, ${Phone} }");
    }

    const cambioName = (e)=> setName(e.target.value);
    const cambioLast = (e)=> setLast(e.target.value);
    const cambioEmail = (e) => setEmail(e.target.value);
    const cambioPhone = (e) => setPhone(e.target.value);


    return (
        <>
        <Form onSubmit={realizarEnvio}>
            <Form.Group>
                <Form.Control type="text" value={Name} onChange={cambioName} placeholder="First Name"></Form.Control>
                <Form.Control type="text" value={Last} onChange={cambioLast} placeholder="Last Name"></Form.Control>
                <Form.Control type="text" value={Email}  onChange={cambioEmail} placeholder="Email Address"></Form.Control>
                <Form.Control type="text"  value={Phone}  onChange={cambioPhone} placeholder="Phone Number"></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" >Submit</Button>
        </Form>
        </>
    );
}

export default Formulario;
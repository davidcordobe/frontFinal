import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Table from 'react-bootstrap/Table';



const Formulario = () => {
    const [datos, setDatos] = useState([]);
    
    //api de mi data
    
    const DATOS = 'https://backfinal-production-ccdb.up.railway.app/datos';
    
    //Creamos una función para el useEffect
    
    useEffect(() => {
        const getPersonas = async () => {
            try {
                const { data } = await axios.get(DATOS);
                setDatos(data.datos)
                console.log(data.datos);
            } catch (error) {
                console.error(error);
            }
        }
    
        getPersonas()
    }, []);

    const URL = 'https://backfinal-production-ccdb.up.railway.app/crear';

    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        mensaje: ""
    });

    const enviar = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    const handleClick = async () => {

        await axios.post(URL, inputs)
        setInputs({
            nombre: "",
            apellido: "",
            telefono: "",
            mensaje: ""
        })

    };




    return (
        <div className='m-5'>
            <h2 className='titulo mb-5'>
                Contacta con Nosotros!
            </h2>
            <Form className='row from-control'>
                {Object.keys(inputs).map((key, index) => (
                    <Form.Group className="mb-3 formulario" key={index}>
                        <Form.Label id="from" className='texto-mica gap-5 mr-5'>
                            {key}
                        </Form.Label>
                        <Form.Control name={key} value={inputs[key]} onChange={enviar} />
                    </Form.Group>
                ))}

                <div className='text-center'>
                    <Button variant="primary" type="submit" onClick={handleClick} className="enviar">
                        Enviar Datos
                    </Button>
                </div>
            </Form>



            <br />

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className='text-center'>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Mensaje</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map(dato =>
                        <tr className='text-center'>
                            <td>{dato._id}</td>
                            <td>{dato.nombre}</td>
                            <td>{dato.apellido}</td>
                            <td>{dato.mensaje}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Formulario;
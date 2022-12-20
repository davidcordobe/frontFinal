import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Producto from '../componentes/producto';



const Productos = () => {

    const [productos] = useState([
        {
            id: 1,
            img: require('../img/productos/frazco.JPG')
        },
        {
            id: 2,
            img: require('../img/productos/frazco2.JPG')
        },
        {
            id: 3,
            img: require('../img/productos/frazco3.JPG')
        },
        {
            id: 4,
            img: require('../img/productos/frazco4.JPG')
        },
        {
            id: 5,
            img: require('../img/productos/frazco5.JPG')
        },
        {
            id: 6,
            img: require('../img/productos/frazco6.JPG')
        },
        {
            id: 7,
            img: require('../img/productos/frazco7.JPG')
        },
        {
            id: 8,
            img: require('../img/productos/frazco8.JPG')
        },
        {
            id: 9,
            img: require('../img/productos/frazco9.JPG')
        },
        {
            id: 10,
            img: require('../img/productos/muestra.jpeg')
        },
        {
            id: 11,
            img: require('../img/productos/muestra2.jpeg')
        }
    ])
    return (
        <div className='container m-5'>
            <h2 className='titulo'>
                Página de Productos!
            </h2>
            <hr />

            <Carousel fade className='text-center d-flex justify-content-center'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../img/productos/carrusel.png')}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../img/productos/carrusel2.JPG')}
                        alt="EcoGlitter"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../img/productos/carrusel3.JPG')}
                        alt="EcoGlitter"
                    />
                </Carousel.Item>
            </Carousel>

            <hr />

            <div className='productos--img'>
                <Row>
                    {productos.map(producto => {
                        return <Col> <Producto key={producto.id}
                            img={producto.img} />
                        </Col>
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Productos;


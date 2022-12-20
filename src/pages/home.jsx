import React from 'react'


export const Home = (imagen) => {
    return (
        <div className='section m-5'>
            <h2 className='titulo'>
                EcoGlitter
            </h2>
            <div className="container">
                <div className="centrar-logo">
                    <img src={require('../img/logo2.jpg')} alt="EUFORIA" className="logo" /></div>
                    <hr />
                    <br />
                    <br />
                            <div className="grid-mica container mb-5">
                                <img src={require('../img/mica.jpg')} alt="Mica" class="mica-img" />

                                    <p className="texto-mica">Las micas son minerales pertenecientes a un grupo numeroso de silicatos de alúmina,
                                        hierro,
                                        calcio, magnesio y minerales alcalinos caracterizados por su fácil exfoliación en delgadas láminas
                                        flexibles, elásticas y muy brillantes, dentro del subgrupo de los filosilicatos. Su sistema cristalino es
                                        monoclínico. Generalmente se las encuentra en las rocas ígneas tales como el granito y las rocas
                                        metamórficas como el esquisto. Las variedades más abundantes son la biotita y la moscovita.</p>

                                    <div>
                                        <h3 className="texto-mica">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illo error accusantium cum aliquam
                                            nemo alias impedit non, nihil explicabo accusamus sint! Nihil iure quae laborum fugiat facilis quod
                                            culpa.
                                        </h3>
                                        <div>
                                            <p className="texto-mica">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis deleniti quaerat deserunt
                                                eligendi ea alias rem officia, repellendus delectus dolores ab dolorum, repudiandae possimus labore
                                                repellat soluta vitae eaque.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="texto-mica">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus quam suscipit, eius ipsam unde
                                quis aliquid. Natus similique harum nemo sed laudantium, eligendi dolorem illum repellendus qui! Asperiores,
                                dolores.
                            </h3>
                        </div>
            </div>
    )};



        export default Home;
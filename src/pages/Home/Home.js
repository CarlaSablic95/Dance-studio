import Imagen1 from './img/bailarina.png';
import Circulo2 from './img/circulo-2.png';
import Bailarines from './img/bailarines.png';


const Home = () => {
    return (
        <>
            <section className='position-relative z-2'>
                <div className="seccion-principal">
                    <div className='d-flex justify-content-evenly align-items-center'>
                        <h1 className='z-3 mx-3 px-2 titulo-principal text-start'>Expresá tu <span style={{ color: '#4D236C', fontWeight: 'bolder' }}>pasión</span> <br className='d-none d-lg-block' />por la danza, <br className='d-none d-lg-block' /> estudiá con nosotros.</h1>
                        <div className='position-relative contenedor-imagen d-none d-lg-block'>
                            <img src={Imagen1} alt="" className='bailarina' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid'>
                <div className='d-flex justify-content-center align-items-center position-relative'>
                    <img src={Circulo2} alt="" className='circulo-2 position-absolute' />
                    <img src={Circulo2} alt="" className='circulo-3 position-absolute' />
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center d-none d-md-block my-md-3">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <div className="circulo"></div>
                                </div>
                                <div className="col-12 d-flex justify-content-evenly">
                                    <div className="circulo"></div>
                                    <div className="circulo"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 p-3 p-md-5 my-md-5">
                            <h2 className='fw-bolder px-5'>Nosotros</h2>
                            <p className='px-5'>En Dance Studio, nuestra misión es inspirar y nutrir la pasión por la danza en niños, adolescentes y jóvenes. Desde 2015, nos dedicamos a ofrecer clases de danza excepcionales que fomentan el crecimiento personal, la creatividad y el compromiso artístico. Nos esforzamos por proporcionar un ambiente inclusivo y de apoyo en el que nuestros estudiantes puedan aprender y prosperar, independientemente de su nivel de habilidad.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cursos position-relative z-2 py-5 bg-cursos">
                <h2 className='text-center text-white pb-4 text-uppercase'>Cursos</h2>
                <div className="d-flex justify-content-evenly align-items-center">
                    <div className='px-5'>
                        <p className='text-white px-5 fs-3'>Descubrí un mundo de movimientos, ritmo <br className='d-none d-md-block' /> y creatividad en nuestros cursos. <br /> ¡Explora tu pasión y desafía tus límites <br className='d-none d-md-block' /> con Dance Studio!</p>
                        <button className="btn btn-light ms-5">Ver cursos</button>
                    </div>
                    <img src={Bailarines} alt="" className='bailarines d-none d-md-block'/>
                </div>
            </section>
        </>
    )
}

export default Home;
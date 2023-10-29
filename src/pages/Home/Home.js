import Bailarina from './img/bailarina.png';
import Niños from './img/niños.jpg';
import Adolescentes from './img/adolescentes.jpg';
import Jovenes from './img/jovenes.jpg';
import 'animate.css'


const Home = () => {
    return (
        <>
            <section className='position-relative z-2'>
                <div className="seccion-principal">
                    <div className='d-flex justify-content-evenly align-items-center'>
                        <h1 className='z-3 mx-3 px-2 titulo-principal text-start animate__animated animate__backInLeft'>Expresá tu <span style={{ color: '#4D236C', fontWeight: 'bolder' }}>pasión</span> <br className='d-none d-lg-block' />por la danza, <br className='d-none d-lg-block' /> estudiá con nosotros.</h1>
                        <div className='position-relative contenedor-imagen d-none d-lg-block'>
                            <img src={Bailarina} alt="" className='bailarina animate__animated animate__flash' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='container' id='nosotros'>
                <div className='d-flex justify-content-center align-items-center position-relative'>
                    <div className="row">
                        <div className="col-12 col-md-6 position-relative d-none d-md-block my-md-3">
                            <div className="d-flex justify-content-center align-item-center">
                                <div className="estudio"></div>
                                <div className="equipo"></div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 p-3 my-md-5">
                            <h2 className='px-5 text-uppercase text-center text-md-start'>Nosotros</h2>
                            <p className='px-5'>En Dance Studio, nuestra misión es inspirar y nutrir la pasión por la danza en niños, adolescentes y jóvenes. Desde 2015, nos dedicamos a ofrecer clases de danza excepcionales que fomentan el crecimiento personal, la creatividad y el compromiso artístico. Nos esforzamos por proporcionar un ambiente inclusivo y de apoyo en el que nuestros estudiantes puedan aprender y prosperar, independientemente de su nivel de habilidad.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="position-relative z-2 py-5 bg-cursos">
                <h2 className='text-center pb-4 text-uppercase'>Cursos</h2>
                <div className="container">
                <div className="row flex-column flex-md-row justify-content-evenly align-items-center">
                    {/* <div className='px-5'>
                        <p className='text-white px-3 px-md-5 fs-3'>Descubrí un mundo de movimientos, ritmo <br className='d-none d-lg-block' /> y creatividad en nuestros cursos. <br /> ¡Explora tu pasión y desafía tus límites <br className='d-none d-lg-block' /> con Dance Studio!</p>
                        <button className="btn btn-light ms-5">Ver cursos</button>
                    </div> */}

                    <div className="card col-10 col-md-4 mb-5 px-0">
                        <img src={Niños} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-white text-center">
                            <h5 className="card-title">Niños</h5>
                            <p className="card-text">8 a 12 años</p>
                        </div>
                    </div>

                    <div className="card col-10 col-md-4 mb-5 px-0">
                        <img src={Adolescentes} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-white text-center">
                            <h5 className="card-title">Adolescentes</h5>
                            <p className="card-text">13 a 17 años</p>
                        </div>
                    </div>

                    <div className="card col-10 col-md-4 mb-5 px-0">
                        <img src={Jovenes} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-white text-center">
                            <h5 className="card-title">Adultos</h5>
                            <p className="card-text">18+ años</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Home;
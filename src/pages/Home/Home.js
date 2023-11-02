import Bailarina from "./img/bailarina.png";
import Niños from "./img/niños.webp";
import Adolescentes from "./img/adolescentes.jpg";
import Jovenes from "./img/jovenes.jpg";
import "animate.css"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <section className="position-relative z-2">
                <div className="seccion-principal">
                    <div className="d-flex justify-content-evenly align-items-center">
                        <h1 className="z-3 mx-3 px-2 titulo-principal text-center text-md-start animate__animated animate__backInLeft">Expresá tu <span style={{ color: "#4D236C", fontWeight: "bolder" }}>pasión</span> <br className="d-none d-lg-block" />por la danza, <br className="d-none d-md-block" /> estudiá con nosotros.</h1>
                        <div className="position-relative contenedor-imagen d-none d-lg-block">
                            <img src={Bailarina} alt="" className="bailarina animate__animated animate__flash" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-4 py-md-5" id="nosotros">
                <div className="d-flex justify-content-center align-items-center position-relative">
                    <div className="row">
                        <div className="col-12 col-md-6 position-relative d-none d-md-block my-md-3">
                            <div className="d-flex justify-content-center align-item-center">
                                <div className="estudio shadow"></div>
                                <div className="equipo shadow"></div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 p-3 my-md-5">
                            <h2 className="px-5 text-uppercase text-center text-md-start">Nosotros</h2>
                            <p className="px-5">En Dance Studio, nuestra misión es inspirar y nutrir la pasión por la danza en niños, adolescentes y jóvenes. Desde 2015, nos dedicamos a ofrecer clases de danza excepcionales que fomentan el crecimiento personal, la creatividad y el compromiso artístico. Nos esforzamos por proporcionar un ambiente inclusivo y de apoyo en el que nuestros estudiantes puedan aprender y prosperar, independientemente de su nivel de habilidad.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="position-relative z-2 py-3">
                <h2 className="text-center pb-4 text-uppercase">Clases</h2>
                <div className="container">
                    <div className="row flex-column flex-md-row justify-content-evenly align-items-center">

                        <div className="card col-10 col-md-4 mb-5 px-0 clases">
                            <Link to="/clases/niños" className="text-decoration-none">
                                <img src={Niños} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body text-white text-center">
                                    <h5 className="card-title">Niños</h5>
                                    <p className="card-text">8 a 12 años</p>
                                </div>
                            </Link>
                        </div>

                        <div className="card col-10 col-md-4 mb-5 px-0 clases">
                            <Link to="/clases/adolescentes" className="text-decoration-none">
                                <img src={Adolescentes} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body text-white text-center">
                                    <h5 className="card-title">Adolescentes</h5>
                                    <p className="card-text">13 a 17 años</p>
                                </div>
                            </Link>
                        </div>

                        <div className="card col-10 col-md-4 mb-5 px-0 clases">
                            <Link to="/clases/jovenes" className="text-decoration-none">
                                <img src={Jovenes} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body text-white text-center">
                                    <h5 className="card-title">Jovenes</h5>
                                    <p className="card-text">18 a 30 años</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonios" className="container">
                <h2 className="text-center text-uppercase mb-5">Testimonios</h2>
                <div className="row justify-content-evenly mb-5">

                
                    <div class="card col-10 col-md-4 mb-5 px-0 card-testimony mb-3">
                            <div class="card-body">
                                <p class="card-text">Ir a <span className="fw-bolder">Dance Studio</span> es lo más divertido del mundo. La profesora es muy amable y nos enseña pasos de baile increíbles. Me encanta el ballet, es mi pasión. <br />¡Lo recomiendo a todos los niños!</p>
                                <div class="card-footer text-center text-lg-end">Ana - estudiante</div>
                            </div>
                            <div className="overlay"></div>

                        </div>


                    <div class="card col-10 col-md-4 mb-5 px-0 card-testimony mb-3">
                        <div class="card-body">
                            <p class="card-text">No tenía experiencia previa en baile, pero los profesores me han ayudado a descubrir una pasión que no sabía que tenía. <span className="fw-bolder">Dance Studio</span> es un lugar donde podés ser vos mismo y expresarte a través del baile.</p>
                        </div>
                        <div class="card-footer text-center text-lg-end">Lucas - estudiante</div>
                    </div>

                    <div class="card col-10 col-md-4 mb-5 px-0 card-testimony mb-3">
                        <div class="card-body">
                            <p class="card-text">Bailar en <span className="fw-bolder">Dance Studio</span> ha sido una parte fundamental de mi vida durante los últimos años. Las clases son desafiantes, pero también muy gratificantes. Estoy agradecida por todo lo que he aprendido.</p>
                        </div>
                        <div class="card-footer text-center text-lg-end">Delfina - estudiante</div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home;
import Breakdance from "./img/breakdance.jpg";
import Danza from "./img/danza-contempo.png";

const Adolescentes = () => {
    return (
        <>
            <section className="position-relative">
            <div className="portada-2 position-relative"></div>
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1 className="fw-bolder text-uppercase letter-spacing">Adolescentes</h1>
            </div>
            </section>
            
            <section className="container py-5">
                <div className="text-center">
                    <h2>Nivel de edad: 13 a 17 años</h2>
                </div>
                <div className="row justify-content-center align-items-center order-2 px-5 px-md-3 animate__animated animate__fadeIn">
                    <div className="col-12 col-md-5 text-center">
                        <img src={Breakdance} alt="" className="w-50 rounded-circle mb-4"/>
                    </div>
                    <div className="col-12 col-md-5 text-center text-md-end">
                        <h3>Breakdance</h3>
                        <hr />
                        <h4>Descripción:</h4>
                        <p className="mb-1">Este curso está diseñado para adolescentes apasionados por la cultura urbana. Durante este programa, los participantes aprenderán las bases del breakdance, incluyendo movimientos como el <span className="fw-bold">toprock</span>, el <span className="fw-bold">downrock</span>, el <span className="fw-bold">powermove</span> y el <span className="fw-bold">freeze.</span></p>
                        <p>Este curso promueve la confianza en uno mismo y la autoexpresión a través del movimiento, y es ideal para aquellos que deseen formar parte de la vibrante comunidad de la danza urbana.</p>
                        
                        <h4>Duración:</h4>
                        <p>4 meses</p>

                        <h5>Horarios:</h5>
                        <p className="">Sábados 10 a 12hs.</p>
                    </div>

                    <div className="col-12 col-md-5 text-center text-md-start order-2 order-md-0 px-5 px-md-3">
                        <h3>Danza contemporánea</h3>
                        <hr />
                        <h5>Descripción:</h5>
                        <p>Este curso es una experiencia enriquecedora que permite a los jóvenes explorar la expresión artística a través del movimiento. En este programa, los estudiantes se sumergirán en el mundo de la danza contemporánea, que fusiona elementos de ballet, moderno y diversas técnicas de danza contemporánea.</p>

                        <h4>Duración:</h4>
                        <p>4 meses</p>

                        <h5>Horarios:</h5>
                        <p className="">Sábado 12 a 14hs. </p>
                    </div>
                    <div className="col-12 col-md-5 text-center ">
                        <img src={Danza} alt="" className="w-50 rounded-circle mb-4"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Adolescentes;
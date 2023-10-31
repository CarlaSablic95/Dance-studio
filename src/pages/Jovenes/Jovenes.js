import Tango from './img/tango.png';
import HipHop from './img/hip-hop.png';

const Jovenes = () => {
    return (
        <>
            <section className="position-relative">
            <div className='portada-3 position-relative'></div>
            <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
                <h1 className="fw-bolder text-uppercase letter-spacing">Jovenes</h1>
            </div>
            </section>
            
            <section className="container py-5">
                <div className="text-center">
                    <h2>Nivel de edad: 18 a 30 años</h2>
                </div>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12 col-md-5 text-center'>
                        <img src={Tango} alt="" className='w-50 rounded-circle mb-4'/>
                    </div>
                    <div className='col-12 col-md-5 text-center text-md-end'>
                        <h3>Tango</h3>
                        <hr />
                        <h4>Descripción:</h4>
                        <p>Diseñado para niños que desean explorar la gracia y la elegancia del ballet, este curso les ofrece una base sólida en técnica, postura y expresión corporal.</p>
                        <p>Los pequeños bailarines aprenderán movimientos delicados y elegantes mientras desarrollan su coordinación, fuerza y confianza. Además, fomentamos la creatividad y la imaginación en cada paso, permitiendo que los niños cuenten historias a través de la danza.</p>
                        
                        <h4>Duración:</h4>
                        <p>4 meses</p>
                        
                        <h5>Horarios:</h5>
                        <p className=''>Jueves 18:30 a 19:30hs.</p>
                    </div>

                    <div className='col-12 col-md-5 text-center text-md-start'>
                        <h3>Hip-Hop</h3>
                        <hr />
                        <h5>Descripción:</h5>
                        <p>Nuestro curso es una emocionante introducción al mundo del ritmo y la expresión. Diseñado para niños enérgicos y creativos, este curso combina movimientos dinámicos, ritmos pegajosos y un ambiente divertido.</p>
                        <p>Los niños descubrirán el poder de la danza para transmitir emociones y contar historias emocionantes a través del movimiento.</p>

                        <h4>Duración:</h4>
                        <p>4 meses</p>
                        
                        <h5>Horarios:</h5>
                        <p className=''>Martes 17:30 a 18:30hs. </p>
                    </div>
                    <div className='col-12 col-md-5 text-center '>
                        <img src={HipHop} alt="" className='w-50 rounded-circle mb-4'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jovenes;
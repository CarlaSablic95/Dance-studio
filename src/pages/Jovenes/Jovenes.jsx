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
                <div className='row justify-content-center align-items-center animate__animated animate__fadeIn'>
                    <div className='col-12 col-md-5 text-center'>
                        <img src={Tango} alt="" className='w-50 rounded-circle mb-4'/>
                    </div>
                    <div className='col-12 col-md-5 text-center text-md-end mb-5 px-5 px-md-3'>
                        <h3>Tango</h3>
                        <hr />
                        <h4>Descripción:</h4>
                        <p>El curso de tango para jóvenes es una experiencia emocionante que te sumergirá en el mundo apasionado y elegante del tango argentino. Aprenderás los fundamentos del tango, incluyendo pasos básicos, giros, técnica de abrazo y conexión con tu pareja de baile.</p>
                        
                        <h4>Duración:</h4>
                        <p>4 meses</p>
                        
                        <h5>Horarios:</h5>
                        <p className=''>Jueves 18:30 a 19:30hs.</p>
                    </div>

                    <div className='col-12 col-md-5 text-center text-md-start order-2 order-md-0 px-5 px-md-3'>
                        <h3>Hip-Hop</h3>
                        <hr />
                        <h5>Descripción:</h5>
                        <p>¿Te encanta la música moderna y quieres aprender a moverte con estilo? Nuestro curso de hip-hop para jóvenes es la elección perfecta. Aquí, explorarás el emocionante mundo del hip-hop, donde el ritmo, la creatividad y la actitud se combinan para crear una experiencia de baile única. Aprenderás una variedad de movimientos de hip-hop, como pasos, bloqueos, popping y locking, mientras te sumerges en la cultura de la danza urbana. </p>

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
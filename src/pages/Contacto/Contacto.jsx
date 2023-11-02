const Contacto = () => {
    return (
        <>
        <section className="position-relative">
                <div className="bg-contacto position-relative"></div>
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="fw-bolder text-uppercase letter-spacing">Contacto</h1>
                </div>
            </section>
        <section className="py-5">
            <div className="container">
                <div className="row align-items-start justify-content-evenly">
                    <div className="col-12 col-lg-6 text-center p-3 order-2 order-md-0">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.0157773164358!2d-60.6307957714822!3d-32.94934317295204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1d6c3d9bef%3A0x977725f077512ec3!2sRioja%20498%2C%20S2000AYB%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1698343204090!5m2!1ses-419!2sar"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" className="mb-4"
          ></iframe>
          <div className="text-center text-lg-start">
            <h5 className="fw-bolder"><i className="bi bi-geo-alt fs-5"></i> Dirección</h5>
            <p className="text-secondary mb-4">Rioja 498, Rosario, Santa Fe</p>

            <h5 className="fw-bolder"><i className="bi bi-clock fs-5"></i> Horarios de apertura</h5>
            <p className="text-secondary mb-1">
            Lunes a Viernes de <span className="fw-bold">9 a 13hs</span> y de{" "}
            <span className="fw-bold">16 a 21hs.</span>
          </p>
          <p className="text-secondary">
            Sábados de <span className="fw-bold">10 a 14hs.</span>
          </p>
          </div>
                     
                    </div>
                    <div className="col-12 col-lg-6 mb-5">
                        <h2 className="text-center mb-4 fs-1">Consultas</h2>
                        <p className="text-center mb-4 px-5">Ante cualquier duda o consulta sobre nuestros cursos, <br className="d-none d-md-block" /> dejanos tu mensaje y te responderemos a la brevedad.</p>
                        <form className="w-75 mx-auto">
                                <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Juan" />
                                        <label for="floatingInput">Nombre</label>
                                    </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Asunto" />
                                        <label for="floatingInput">Asunto</label>
                                    </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Comentarios</label>
                            </div>
                            <div className="text-center">
                                <button type="button" class="btn btn-primary border-0 text-uppercase">Enviar</button>
                            </div>
                        </form>
                    </div>
               
                </div>
            </div>
        </section>
        </>
    )
}

export default Contacto;
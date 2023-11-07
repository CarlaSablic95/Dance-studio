const Testimonios = () => {
  return (
    <section id="testimonios" className="container">
      <h2 className="text-center text-uppercase mb-5">Testimonios</h2>
      <div className="row justify-content-evenly mb-5">
        <div class="card col-10 col-md-4 mb-5 px-0 card-testimony mb-3">
          <div class="card-body">
            <p class="card-text">
              Ir a <span className="fw-bolder">Dance Studio</span> es lo más
              divertido del mundo. La profesora es muy amable y nos enseña pasos
              de baile increíbles. Me encanta el ballet, es mi pasión. <br />
              ¡Lo recomiendo a todos los niños!
            </p>
            <hr />
            <blockquote class="blockquote mb-0 text-end">
              <cite title="Source Title" className="fs-6">
                Ana - estudiante
              </cite>
            </blockquote>
          </div>
          <div className="overlay"></div>
        </div>

        <div class="card col-10 col-md-4 mb-5 px-0 card-testimony mb-3">
          <div class="card-body">
            <p class="card-text">
              No tenía experiencia previa en baile, pero los profesores me han
              ayudado a descubrir una pasión que no sabía que tenía.{" "}
              <span className="fw-bolder">Dance Studio</span> es un lugar donde
              podés ser vos mismo y expresarte a través del baile.
            </p>
            <hr />
            <blockquote class="blockquote mb-0 text-end">
              <cite title="Source Title" className="fs-6">
                Lucas - estudiante
              </cite>
            </blockquote>
          </div>
        </div>

        <div class="card col-10 col-md-4 mb-5 px-0 card-testimony mb-3">
          <div class="card-body">
            <p class="card-text">
              Bailar en <span className="fw-bolder">Dance Studio</span> ha sido
              una parte fundamental de mi vida durante los últimos años. Las
              clases son desafiantes, pero también muy gratificantes. Estoy
              agradecida por todo lo que he aprendido.
            </p>

            <hr />
            <blockquote class="blockquote mb-0 text-end">
              <cite title="Source Title" className="fs-6">
                Delfina - egresada
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;

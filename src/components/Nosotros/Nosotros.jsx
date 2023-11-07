const Nosotros = () => {
  return (
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
            <h2 className="px-5 text-uppercase text-center text-md-start">
              Nosotros
            </h2>
            <p className="px-5">
              En Dance Studio, nuestra misión es inspirar y nutrir la pasión por
              la danza en niños, adolescentes y jóvenes. Desde 2015, nos
              dedicamos a ofrecer clases de danza excepcionales que fomentan el
              crecimiento personal, la creatividad y el compromiso artístico.
              Nos esforzamos por proporcionar un ambiente inclusivo y de apoyo
              en el que nuestros estudiantes puedan aprender y prosperar,
              independientemente de su nivel de habilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

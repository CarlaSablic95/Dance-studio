import Niños from "./img/niños.webp";
import Adolescentes from "./img/adolescentes.jpg";
import Jovenes from "./img/jovenes.jpg";
import { Link } from "react-router-dom";

const Clases = () => {
  return (
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
              <img
                src={Adolescentes}
                className="card-img-top img-fluid"
                alt="..."
              />
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
  );
};

export default Clases;

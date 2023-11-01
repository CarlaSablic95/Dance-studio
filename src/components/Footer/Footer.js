import Logo from "./img/logo-blanco.png";
const Footer = () => {
  return (
    <footer className="p-4">
      <div className="d-flex flex-column flex-md-row justify-content-center justify-content-evenly mb-4">
        <div className="text-center mb-4">
          <img src={Logo} alt="" />
        </div>

        <div className="text-center mb-3">
          <h4 className="text-white text-uppercase mb-4">Horarios</h4>
          <p className="text-white mb-1">
            Lunes a Viernes de <span className="fw-bold">9 a 13hs</span> y de{" "}
            <span className="fw-bold">16 a 21hs.</span>
          </p>
          <p className="text-white">
            Sábados de <span className="fw-bold">10 a 14hs.</span>
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-white text-uppercase mb-3">Contacto</h4>
          <p className="text-white">
            <i className="bi bi-phone text-white"></i> 3412345678
          </p>
          <p className="text-white">
            <i className="bi bi-envelope-at"></i> dancestudio.contact@gmail.com
          </p>
        </div>

        <div className="text-center mb-3">
          <h4 className="text-white text-uppercase mb-4">Seguinos</h4>
          <i className="bi bi-facebook text-white"></i>
          <i className="bi bi-instagram px-3 text-white"></i>
          <i className="bi bi-youtube text-white"></i>
        </div>
      </div>
      <div className="d-flex flex-column text-white text-center">
        <small>© Dance Studio 2023 | Todos los derechos reservados</small>
        <small>
          Desarrollado por <span className="brittany fs-6">Carla Sablic ♥</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;

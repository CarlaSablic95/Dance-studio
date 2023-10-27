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
            <i class="bi bi-phone text-white"></i> 3412345678
          </p>
          <p className="text-white">
          <i class="bi bi-envelope-at"></i> dance-studio@gmail.com
          </p>
          {/* <p className="text-white">
            <i class="bi bi-geo-alt text-white"></i> Rioja 498, Rosario, Santa
            Fe
          </p> */}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.0157773164358!2d-60.6307957714822!3d-32.94934317295204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1d6c3d9bef%3A0x977725f077512ec3!2sRioja%20498%2C%20S2000AYB%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1698343204090!5m2!1ses-419!2sar"
            width="200"
            height="200"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>

        <div className="text-center mb-3">
          <h4 className="text-white text-uppercase mb-4">Seguinos</h4>
          <i class="bi bi-facebook text-white"></i>
          <i class="bi bi-instagram px-3 text-white"></i>
          <i class="bi bi-youtube text-white"></i>
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

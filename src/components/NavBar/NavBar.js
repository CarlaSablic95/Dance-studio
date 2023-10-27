import './NavBar.scss';
import Logo from './logo.png'; 

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-0 position-absolute z-3 text-uppercase w-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="" className='logo rounded-circle' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <a className="nav-link active text-uppercase" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-uppercase" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item mx-3 dropdown">
                            <a className="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cursos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-uppercase" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
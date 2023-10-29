import { HashLink } from 'react-router-hash-link';
import './NavBar.scss';
import Logo from './logo.png';
import { Link, NavLink } from 'react-router-dom';

const routes = [
    {
        path: '/',
        link: 'Inicio'
    },
    {
        path: '/#nosotros',
        link: 'Nosotros'
    },
    {
        path: '/testimonios',
        link: 'Testimonios'
    },
    {
        path: '/contacto',
        link: 'Contacto'
    },
]

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-0 position-absolute z-3 text-uppercase w-100">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" className='logo rounded-circle' />
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        
                        {/* <li className="nav-item mx-3 dropdown">
                            <a className="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cursos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
{
                            routes.map((route) => (
                                route.link === "Nosotros" ? <HashLink key={route.path} to={route.path} smooth className="mb-3 mb-lg-0 mx-4 text-decoration-none nav-item me-2 text-dark text-center">{route.link}</HashLink>
                                :
                                <NavLink key={route.path} to={route.path} className={({isActive}) => `${isActive ? 'active' : ''} mb-3 mb-lg-0 mx-4 text-decoration-none nav-item me-2 text-dark text-center`}>{route.link}</NavLink>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
import './NavBar.scss';
import Logo from './logo.png';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
        submenu: [
            {
                path: '/clases/niños',
                link: 'Niños',
            },
            {
                path: '/clases/adolescentes',
                link: 'Adolescentes',
            },

            {
                path: '/clases/jovenes',
                link: 'Jovenes',
            }
        ],
    },
    {
        path: '/#testimonios',
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
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" className='logo rounded-circle' />
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center">
                        {
                            routes.map((route) => (
                                route.link === "Nosotros" || route.link === "Testimonios" ? <HashLink key={route.path} to={route.path} smooth className="mb-3 mb-lg-0 mx-4 text-decoration-none nav-item me-2 text-white text-center text-center">{route.link}</HashLink>
                                    :
                                    <NavLink key={route.path} to={route.path} className={({ isActive }) => `${isActive ? 'active' : ''} mb-3 mb-lg-0 me-2 text-decoration-none nav-item me-2 text-white text-center`}>{route.link}</NavLink>
                            ))
                        }

                        <li className="nav-item mx-3 dropdown">
                            <Link className="nav-link dropdown-toggle text-uppercase text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Clases
                            </Link>
                            <ul className="dropdown-menu">
                                {/* El método find devuelve un objeto y puedo acceder a la propiedad submenu, y a su vez puedo acceder a sus propiedades */}
                                {routes.map((route) => (
                                    route.submenu ? (
                                        route.submenu.map((submenuItem) => (
                                            <li key={submenuItem.path}>
                                        <Link className='dropdown-item' to={submenuItem.path} key={submenuItem.path}>{submenuItem.link}</Link>
                                    </li>
                                        ))
                                    ) : null
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
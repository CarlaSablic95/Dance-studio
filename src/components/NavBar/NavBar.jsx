import "./NavBar.scss";
import Logo from "./logo.png";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const routes = [
    {
        path: "/",
        link: "Inicio"
    },
    {
        path: "/#nosotros",
        link: "Nosotros"
    },

    {
        link: "Clases",
        submenu: [
            {
                path: "/clases/niños",
                link: "Niños",
            },

            {
                path: "/clases/adolescentes",
                link: "Adolescentes",
            },

            {
                path: "/clases/jovenes",
                link: "Jovenes",
            }
        ],
    },

    {
        path: "/#testimonios",
        link: "Testimonios"
    },
    
    {
        path: "/contacto",
        link: "Contacto"
    },
]

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-0 position-absolute z-3 text-uppercase w-100">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" className="logo rounded-circle" />
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center py-4">
                        {
                           routes.map((route) => (
                            route.link === "Inicio" ? <NavLink key={route.path} to={route.path} className={({ isActive }) => `${isActive ? "active" : ""} mb-3 mb-lg-0 me-2 text-decoration-none nav-item text-white text-center`}>{route.link}</NavLink>
                                :
                                route.link === "Nosotros" ? <HashLink key={route.path} to={route.path} smooth className="mb-3 mb-lg-0 mx-4 text-decoration-none nav-item me-2 text-white text-center text-center">{route.link}</HashLink>
                                    :
                                    route.submenu ? (
                                        <li key={route.link} className="nav-item mx-3 dropdown mb-3 mb-lg-0">
                                            <Link className="nav-link dropdown-toggle text-uppercase text-white text-center" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {route.link}
                                            </Link>
                                            <ul className="dropdown-menu bg-dark">
                                                {route.submenu.map((submenuItem) => (
                                                    <li key={submenuItem.path}>
                                                        <Link className="dropdown-item text-center text-white" to={submenuItem.path} key={submenuItem.path}>{submenuItem.link}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    )
                                        :
                                        route.link === "Testimonios" ? <HashLink key={route.path} to={route.path} smooth className="mb-3 mb-lg-0 text-decoration-none nav-item me-3 text-white text-center text-center">{route.link}</HashLink>
                                            :
                                            <NavLink key={route.path} to={route.path} className={({ isActive }) => `${isActive ? "active" : ""} mb-3 mb-lg-0 me-2 text-decoration-none nav-item text-white text-center`}>{route.link}</NavLink>
                        ))
                        
                            
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
import Bailarina from "./img/bailarina.png";
import Nosotros from "../../components/Nosotros/Nosotros";
import Clases from "../../components/Clases/Clases";
import Testimonios from "../../components/Testimonios/Testimonios";
import "animate.css";

const Home = () => {
    return (
        <>
            <section className="position-relative z-2">
                <div className="seccion-principal">
                    <div className="d-flex justify-content-evenly align-items-center">
                        <h1 className="z-3 mx-3 px-2 titulo-principal text-center text-md-start animate__animated animate__backInLeft">Expresá tu <span style={{ color: "#4D236C", fontWeight: "bolder" }}>pasión</span> <br className="d-none d-lg-block" />por la danza, <br className="d-none d-md-block" /> estudiá con nosotros.</h1>
                        <div className="position-relative contenedor-imagen d-none d-lg-block">
                            <img src={Bailarina} alt="" className="bailarina animate__animated animate__flash" />
                        </div>
                    </div>
                </div>
            </section>

            <Nosotros />
            <Clases />
            <Testimonios />

        </>
    )
}

export default Home;
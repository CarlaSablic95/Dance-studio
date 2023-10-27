// import { useState } from 'react';

// const Register = () => {

// // nombre, email y contrasenia son variables de estado, su valor inicial es vacío

// const [nombre, setNombre] = useState("");
// const [email, setEmail] = useState("");
// const [contrasenia, setContrasenia] = useState("");

// const validarForm = (event) => {
//     event.preventDefault();
//     if(nombre !== "" || email !== "" || contrasenia !== "") {
//         alert("El campo no puede estar vacío")
//     } else {
//         console.log("nombre: " + nombre)
//         console.log("email: " +email)
//         console.log("contraseña: " +contrasenia)
//     }

// }
// const handleSetNombre = (event) => { // el evento es onChange
//     setNombre(event.target.value);
//     console.log(event.target.value)
// }

// const handleSetEmail = (event) => {
//     setEmail(event.target.value);
//     console.log(event.target.value)
// }

// const handleSetContrasenia = (event) => {
//     setContrasenia(event.target.value);
//     console.log(event.target.value)

// }


//     return (
//         <div>
//             <h1 className="my-3">Registro</h1>
//             <form action="">
//                 <input type="text"
//                 placeholder="Nombre"
//                 className="mb-4"
//                 value={nombre}
//                 onChange={handleSetNombre} /> <br/>
//                 <input type="email"
//                 placeholder="Email"
//                 className="mb-4"
//                 value={email}
//                 onChange={handleSetEmail} /><br/>
//                 <input type="password"
//                 placeholder="Password"
//                 className="mb-4"
//                 value={contrasenia}
//                 onChange={handleSetContrasenia} /><br/>
//                 <button type="button" className="btn btn-primary" onClick={validarForm}>Crear cuenta</button>
//             </form>
//         </div>
//     )
// }

// export default Register;
import React, { Fragment, use, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Juego } from "./Juego";
import { v4 as uuid } from "uuid";


export function Steam() { 


    //inicilizar las variables que estara viendo react
    //para saber si sufre cambios (estado anterior/estado actual)
    //listadoJuegos = nombre de la constante
    //setJuegos = metodo que usar react para ver si hay juegos nuevos o si se elimina de la lista
    //userState = state que provee react para capturar estados


    const [listadoJuegos, setJuegos] = useState([
        { id: 1, titulo: 'AC Origin' }, { id: 2, titulo: 'Silk Song' },
        { id: 3, titulo: 'Doom Eternal' }, { id: 4, titulo: 'Life of P' }
    ]);


    const inputJuego = useRef();

    const agregarJuego = () => {
        // alert('si funciona');
        const inputJuegoTexto = inputJuego.current.value;
        // const id = uuid();
        // alert(id);
        setJuegos((prevJuegos) => {
            const nuevoJuego = {
                id: uuid(),
                titulo: inputJuegoTexto
            }
            inputJuego.current.value = '';
            return [...prevJuegos, nuevoJuego]
        });
    }


    return (
        <Fragment>
            <div className="container">
                <h1 style={{ textAlign: "center" }}> Catálogo de Steam</h1>
                
                <hr></hr>

                <div className="input-group">
                    <input  ref={inputJuego} className="form-control" type="text" placeholder="Ingrese el nombre del juego"></input>
                    <button onClick={agregarJuego} className="btn btn-success"><i className="bi bi-steam"></i></button>
                </div>

                <ul  className="list-group m3">
                    {listadoJuegos.map((juegoActual) => (
                        <Juego
                            juegoprops={juegoActual}
                            key={juegoActual.id}
                        >
                        </Juego>
                    ))}
                </ul> 
            </div>
           
        </Fragment>
    )

}

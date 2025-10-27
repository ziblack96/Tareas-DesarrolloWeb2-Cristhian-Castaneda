'use client'
//import { useState } from "react";
//import { Idioma } from "../Modelos/Idiomas"



export default function Home() {

 // const [ cambio_idioma, setCambioIdioma ]= useState<Idioma[]>([]);


  return (
    <div className="container mx-auto max-w-3xl p-6 bg-emerald-200 rounded">
        <h1 className="text-black text-4xl m-4">Practicas con Next.js</h1>

        <div className="container mx-auto max-w-2xl">

            <form className="align-baseline justify-baseline">

              <label className="text-black text-lg">Nombre:</label> <br />
              <input type="text"  className="text-black text-lg w-75"  placeholder="Ingrese su nombre" /> <br />

              <label className="text-black text-lg">Correo Electronico:</label> <br />
              <input type="email" className="text-black text-lg w-75"  placeholder="Ingrese su correo electronico" /> <br />

              <button type="button" className="rounded m-4 p-4 text-white bg-emerald-800 cursor-pointer">Guardar Informacion</button>

            </form>

        </div>
    </div>
  );
}

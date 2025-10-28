'use client'
import { useState } from "react";
import { Usuario } from "../Modelos/Usuarios"
import UsuarioComponente from "@/Componentes/UsuarioComponente";


export default function Home() {

  const [ lista_Usuario, setListaUsuario ]= useState<Usuario[]>([]);

  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>(''); 


  function agregarUsuario():void{
        
      const nuevoUsuario:Usuario={
          id:lista_Usuario.length+1,
          nombre:nombre,
          correo:correo
        };

        setListaUsuario([... lista_Usuario,nuevoUsuario]);

        alert('Usuario Agregado')
  }

  

  return (
    <div className="container mx-auto max-w-3xl p-6 bg-emerald-200 rounded">
        <h1 className="text-black text-4xl m-4">Practicas con Next.js</h1>

        <div className="container mx-auto max-w-2xl">

            <form className="align-baseline justify-baseline">

              <label className="text-black text-lg">Nombre:</label> <br />
              <input type="text"  className="text-black text-lg w-75  border-2 rounded-lg"  placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/> <br />

              <label className="text-black text-lg">Correo Electronico:</label> <br />
              <input type="email" className="text-black text-lg w-75 border-2 rounded-lg"  placeholder="Ingrese su correo electronico" value={correo} onChange={(e)=>setCorreo(e.target.value)}/> <br />


              <button type="button"  onClick={agregarUsuario}  className="rounded m-4 p-4 text-white bg-emerald-800 cursor-pointer">Guardar Informacion</button>

            </form>

        <UsuarioComponente lista_usuarios={lista_Usuario}></UsuarioComponente>

        </div>
    </div>
  );
}
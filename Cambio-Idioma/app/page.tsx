'use client'
import { useEffect, useState } from "react";
import { Idioma } from "../Modelos/Idioma"
import Lista_Idioma from "../Componentes/Lista_Idioma";


export default function Home() {

  const [listaIdiomas]= useState<Idioma[]>([
          { "idiomaEspañol": "Interfaz de Programación de Aplicaciones", "idiomaIngles": "Application Programming Interface" },
          { "idiomaEspañol": "MARCO DE TRABAJO", "idiomaIngles": "Framework" },
          { "idiomaEspañol": "Lenguaje de Consulta Estructurada", "idiomaIngles": "STRUCTURE SEQUENCE LANGUAGE" },
          { "idiomaEspañol": "Notación de Objetos de JavaScript", "idiomaIngles": "JavaScript Object Notation" },
          { "idiomaEspañol": "Token Web en Notación de Objetos de JavaScript", "idiomaIngles": "(JSON Web Token" },
          { "idiomaEspañol": "Lenguaje de Definición de Datos", "idiomaIngles": "Data Definition Language" },
          { "idiomaEspañol": "Lenguaje de Manipulación de Datos", "idiomaIngles": "Data Manipulation Language" },
          { "idiomaEspañol": "EQUIPO LOCAL", "idiomaIngles": "LOCALHOST" },
          { "idiomaEspañol": "INTERFAZ DE USUARIO", "idiomaIngles": "USER INTERFACE" },
          { "idiomaEspañol": "EXPERIENCIA DE USUARIO", "idiomaIngles": "USER EXPERIENCE" }
  ]);

  const [IdiomaActual, setIdiomaActual] = useState< 'es' | 'en'>('es');
  const [listaMostrada, setListaMostrada] = useState<string[]>([]);

  useEffect(() =>{
    if (IdiomaActual ==='es') {
      setListaMostrada(listaIdiomas.map(p => p.idiomaEspañol));
    }
    else {
      setListaMostrada(listaIdiomas.map(p => p.idiomaIngles));
    }
  }, [IdiomaActual,listaIdiomas]);
  

  return (  
    <div className="container mx-auto max-w-2xl p-6 bg-emerald-200 rounded">
        <h1 className="text-black text-4xl m-4">Lista de Palabras</h1>

        <Lista_Idioma palabras={listaMostrada} />

        <div className="container mx-auto max-w-2xl">
            <button type="button" onClick={() => setIdiomaActual('es')} className="bg-green-400 m-4 w-xs rounded-2xl text-black cursor-pointer">Cambiar Idioma Español</button>          
            <button type="button" onClick={() => setIdiomaActual('en')} className="bg-blue-400 m-4 w-xs rounded-2xl text-black cursor-pointer">Cambiar Idioma Ingles</button>
        </div>
    </div>
  );
}
'use client'
import { useTemasContext } from "./Contexto/ctotemas"
import {Temas} from "./Modelos/temas"
import Link from 'next/link'

export default function Home() {

  const {temas,SwitchTemasInteresantes} = useTemasContext();

  return (

    <div className=" flex min-h-screen flex-row items-center justify-center p-10   bg-green-300">
      
      <div className=" w-full max-w-md p-6 bg-lime-200 rounded-lg shadow-md border border-gray-300">
            
        <h1 className="text-black text-4xl text-center">Pantalla Principal</h1>

        <ul className="space-y-4">
            { temas.map((t:Temas) =>(
                <li key={t.id} className="flex justify-center items-center p-3 rounded-lg">
                  <span className="font-black text-black text-xl"> {t.titulo} </span> 

                  <button onClick={() => SwitchTemasInteresantes(t.id)} className='bg-blue-300 hover:bg-blue-600 text-black font-black rounded p-3 m-3 cursor-pointer'> Interesante</button>
                </li>
              ))
            }
        </ul>

            <div className="flex justify-center mt-6">
                <Link href="/pantallasecundaria/temasinteresantes" className="text-black font-bold  text-2xl ">Visualizar Temas Interesantes</Link>
            </div>        

      </div>
    </div>
  );
}
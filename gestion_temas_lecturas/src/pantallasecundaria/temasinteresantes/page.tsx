'use client'
import Link from 'next/link'
import {useTemasContext} from "../../app/Contexto/ctotemas"
import {Temas} from "../../app/Modelos/temas"

export default function TemasInteresantes() {

        const { temas, SwitchTemasInteresantes} =useTemasContext();
        const interesantes =temas.filter((t:Temas) => t.interesante);
  
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-black text-lg'>TemasInteresantes</h1>
        <ul  className='space-y-4 w-full max-w-md'>
            { interesantes.map ((t:Temas) => (
                <li key={t.id} className='flex justify-center items-center rounded-lg'>
                  {t.titulo}
                  <button onClick={ () =>SwitchTemasInteresantes (t.id)} 
                  className='bg-red-500 text-white rounded px-3 cursor-pointer'  >Desmarcar</button>
                </li>
            ))
            }
        </ul>
        <div className='mt-6'>
          <Link href="/" className='text-blue-600 text-lg'>Volver</Link>
        </div>
    </div>
  )
}
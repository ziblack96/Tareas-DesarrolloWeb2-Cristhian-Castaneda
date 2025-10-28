import { Usuario } from '@/Modelos/Usuarios'
import { usuarioprops } from '@/Modelos/usuariosprops'
import React from 'react'

export default function UsuarioComponente({lista_usuarios}:usuarioprops) {
  return (
    <div>
      <h3 className='text-black text-xl'>Listado de Usuarios</h3>

      <table className='table-auto text-black text-lg space-y-4'>
          <thead>
            <tr>
              <th>ID</th> 
              <th>Nombre</th> 
              <th>Correo</th> 
            </tr>
          </thead>
          <tbody className='space-y-8'>
            {
              lista_usuarios.map((item:Usuario)=>(
                  <tr key={item.id} >
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.correo}</td>
                  </tr>
              ))
            }
          </tbody>
      </table>  
    </div>
  )
}

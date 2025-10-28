'use client'
import React from 'react'

interface Props {
  palabras: string[];
}

export default function Lista_Idioma({ palabras }:Props) {
  return (
    <div className='bg-orange-300 m-4 p-4 rounded-lg w-fit'>
      <ol className='text-black'>
        {
          palabras.map((palabra,i) => (
            <li key={i}>{palabra}</li>
          ))
        }
      </ol>
    </div>
  )
}

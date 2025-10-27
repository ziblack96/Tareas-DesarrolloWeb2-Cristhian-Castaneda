'use client'
import React, { useEffect, useState } from 'react'

export default function FormularioContador() {

    const [texto, setTexto] = useState<string>('');

    const [contadorLetras, setContadorLetras]= useState<number>(0);

    const [color,setColorTexto]=useState<string>('');

    useEffect(() =>{


        const cantidad = texto.length;
        setContadorLetras(cantidad);

        if(cantidad<10)
            setColorTexto('yellow');
        else if(cantidad>10 && cantidad<50)
            setColorTexto('green');
        else 
            setColorTexto('red')


     },[texto]);


    function manejarTexto(e):void{
            setTexto(e.target.value)
    } 


    return (
        <div className='bg-white w-4xl'>
            <h1>Contador de palabras</h1>

            <textarea className='bg-amber-300 w-3xl h-3xl ' placeholder='Ingrese la informacion'
                value={texto}
                onChange={manejarTexto}
                style={{color}}
            
            />
            <h3>Cantidad de letras {contadorLetras}</h3>
        </div>
    )
};
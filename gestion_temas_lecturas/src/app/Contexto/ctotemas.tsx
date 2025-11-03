'use client'
import { createContext, ReactNode } from "react";
import {TemasContext,Temas} from "../Modelos/temas" 
import {useState} from 'react'
import {useContext} from 'react'

const CxtoTemasInteresantes = createContext<TemasContext | undefined>(undefined);

 export   const ProTemas = ({children}: {children:ReactNode}) => {

    const [temas,setTemas] = useState<Temas[]> ([

        {   id:1,  titulo:"Tema1",  interesante:false } ,
        {   id:2,  titulo:"Tema2",  interesante:false } ,
        {   id:3,  titulo:"Tema3",  interesante:false } ,
        {   id:4,  titulo:"Tema4",  interesante:false } ,
        {   id:5,  titulo:"Tema5",  interesante:false } ,
        {   id:6,  titulo:"Tema6",  interesante:false } ,
        {   id:7,  titulo:"Tema7",  interesante:false } ,
        {   id:8,  titulo:"Tema8",  interesante:false } ,
        {   id:9,  titulo:"Tema9",  interesante:false } ,
        {   id:10, titulo:"Tema10", interesante:false } ,
        {   id:11, titulo:"Tema11", interesante:false } ,
        {   id:12, titulo:"Tema12", interesante:false } ,
        {   id:13, titulo:"Tema13", interesante:false } ,
        {   id:14, titulo:"Tema14", interesante:false } ,
        {   id:15, titulo:"Tema15", interesante:false } ,
        {   id:16, titulo:"Tema16", interesante:false } ,
        {   id:17, titulo:"Tema17", interesante:false } ,
        {   id:18, titulo:"Tema18", interesante:false } ,
        {   id:19, titulo:"Tema19", interesante:false } ,
        {   id:20, titulo:"Tema20", interesante:false } ,
        
    ])

            const  SwitchTemasInteresantes = (id:number) => {
                setTemas (prev =>{
                    const nuevoListaTema =[];
                    
                    for (const t of prev){
                        if (t.id === id){
                            nuevoListaTema.push({...t, interesante: !t.interesante});
                        }
                        else{
                            nuevoListaTema.push(t);
                        }
                    }
                    return nuevoListaTema;
                }) 
            };

     return (
        <CxtoTemasInteresantes.Provider value = {{ temas,SwitchTemasInteresantes}}>
            {children}
        </CxtoTemasInteresantes.Provider>
    );
    
};

export const useTemasContext = () => {
  return useContext(CxtoTemasInteresantes)!; 
};
export type typeEstado =  'pendiente' | 'En Proceso' | 'Completado';

export interface TareaVista{
    id:number;
    titulo:string;
    descripcion:string;
    estado: typeEstado;
}
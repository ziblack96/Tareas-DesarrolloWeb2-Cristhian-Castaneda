export interface Temas{
    id:number 
    titulo:string 
    interesante:boolean
}

export interface TemasContext {
    temas: Temas[];
    SwitchTemasInteresantes: (id:number) => void;
}
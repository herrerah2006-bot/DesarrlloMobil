import React from 'react'
import { AreaCuadrado } from './AreaCuadrado'
import { SumaArreglo } from './SumarArreglos'
import { DividirArreglo } from './DividirArreglo'
import { PromedioAlumnos } from './PromedioAlumnos'
import { Acumulador } from './Acumulador'




export const App = () => {
  const listaAlumnos = [
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 }
  ];
  return (
    <div>
      <h1> Ejercicos matematicos </h1>
  <AreaCuadrado lado={5}/>
  <SumaArreglo numeros={[1,2,3,4,5]}/>
  <DividirArreglo arreglo={[5,10,15,20,25,30,35,40,45,50]}/>
 <PromedioAlumnos alumnos={listaAlumnos}/>
 <Acumulador/>
       </div>
  )
}


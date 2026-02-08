interface Props {
  numeros: number[]; 
}

export const SumaArreglo = ({ numeros }: Props) => {
  
  
  const sumarElementos = (arreglo: number[]): number => {
    return arreglo.reduce((acumulado, actual) => acumulado + actual, 0);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid blue', margin: '10px' }}>
      <h1>Suma de Arreglo</h1>
      <p>Los números son: {numeros.join(', ')}</p>
      <h3>El resultado de la suma es: {sumarElementos(numeros)}</h3>
    </div>
  );
};

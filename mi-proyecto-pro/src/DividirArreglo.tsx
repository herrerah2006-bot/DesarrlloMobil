interface Props {
  arreglo: number[];
}

export const DividirArreglo = ({ arreglo }: Props) => {
  
  
  const dividirElementos = (datos: number[]): number[] => {
    return datos.map(numero => numero / 5);
  };

  const nuevoArreglo = dividirElementos(arreglo);

  return (
    <div style={{ padding: '20px', border: '1px solid green', margin: '10px' }}>
      <h1>División de Arreglo</h1>
      <p>Arreglo original: {arreglo.join(', ')}</p>
      <h3>Nuevo arreglo (dividido para 5): {nuevoArreglo.join(', ')}</h3>
    </div>
  );
};
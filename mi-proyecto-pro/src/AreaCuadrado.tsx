interface Props {
  lado: number;
}


export const AreaCuadrado = ({ lado }: Props) => {
  
  
  const calcularArea = (l: number): number => {
    return l * l;
  };

 
  return (
    <div style={{ padding: '20px', border: '1px solid black', margin: '10px' }}>
      <h1>Area Cuadrado</h1>
      <p>El lado del cuadrado es: {lado}</p>
      <h3>El resultado del área es: {calcularArea(lado)}</h3>
    </div>
  );
};
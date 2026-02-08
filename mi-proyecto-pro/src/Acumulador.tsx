import { useState } from 'react';

export const Acumulador = () => {
  
  const [valor, setValor] = useState<number>(5);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid purple', margin: '10px', textAlign: 'center' }}>
      <h1>Acumulador de 5</h1>
      
      <div style={{ fontSize: '25px', marginBottom: '10px' }}>
        Valor actual: <strong>{valor}</strong>
      </div>

      {/* Botones para sumar y restar */}
      <button 
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', marginRight: '5px' }}
        onClick={() => acumular(5)}
      >
        +5
      </button>

      <button 
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
        onClick={() => acumular(-5)}
      >
        -5
      </button>
    </div>
  );
};
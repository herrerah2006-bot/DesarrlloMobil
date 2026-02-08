
interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
}


interface Props {
    alumnos: Alumno[];
}

export const PromedioAlumnos = ({ alumnos }: Props) => {
    const calcularPromedio = (lista: Alumno[]): number => {
        const suma = lista.reduce((acumulado, alumno) => acumulado + alumno.calificacion, 0);
        return suma / lista.length;
    };

    return (
        <div style={{ padding: '20px', border: '1px solid orange', margin: '10px' }}>
            <h1>Promedio de Calificaciones</h1>
            <ul>
                {alumnos.map((alumno, index) => (
                    <li key={index}>
                        {alumno.name} (Edad: {alumno.edad}) - Calificación: {alumno.calificacion}
                    </li>
                ))}
            </ul>
            <hr />
            <h3>El promedio general es: {calcularPromedio(alumnos).toFixed(2)}</h3>
        </div>
    );
};
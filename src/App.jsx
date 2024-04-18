import React, { useState, useEffect } from 'react';
import './index.css';
import FiltroBtn from './Botones';
import PaisajeList from './Carrusel';
import paisajesData from './data';

const App = () => {
  const [diapoActual, setDiapoActual] = useState(0); //Define el estado diapoActual (índice diapo actual en  slider). setDiapoActual actualiza el valor de diapoActual
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas'); //Representa la categoría actualmente filtrada. El inicial es 'todas'. setCategoriaSeleccionada actualiza el valor de categoriaSeleccionada.
  const [FotosMostrar, setFotosMostrar] = useState([]); //Los datos que mostraremos en el slider. al principio es vacío
  const [categorias, setCategorias] = useState([]); //Estado categorías, son las únicas disponibles en las fotos

  useEffect(() => { //Cuando se ejecute por primera vez, mete todos los paisajes a mostrar (empieza con categoría todas)
    setFotosMostrar(paisajesData);
    const categoriasUnicas = Array.from(new Set(paisajesData.map(paisaje => paisaje.categoria))); //Obtiene las categorías únicas de las fotos
    setCategorias(categoriasUnicas); //el estado de categorias es el obtenido en el paso anterior.
  }, []);

  // Función para manejar el clic en los botones de filtro
  const selectorCategoria = (categoria) => {  
    setCategoriaSeleccionada(categoria);// actualiza la categoria seleccionada con la seleccionada por el user en la interfaz
    setDiapoActual(0);                  // mete la diapo actual del slider a 0, una vez filtrado.
  };

  // Avanzar las diapositivas periódicamente
  useEffect(() => {
    const intervalo = setInterval(() => {
      setDiapoActual(prevDiapoActual => (prevDiapoActual + 1) % FotosMostrar.length);
    }, 2000);

    return () => clearInterval(intervalo);
  }, [FotosMostrar.length]);

  return (
    <div id="root">
      <main>
        <section className="section">
          <div className="title">
            <h2>Slider DWEC</h2>
            <div className="underline"></div>
          </div>
          {/* Metemos lo que tenemos en los otros dos componentes (botones de filtro y carrusel) */}
          <FiltroBtn selectorCategoria={selectorCategoria} categorias={categorias} />
          <PaisajeList todosLosPaisajes={FotosMostrar} categoriaSeleccionada={categoriaSeleccionada} diapoActual={diapoActual} />
        </section>
      </main>
    </div>
  );
};

export default App;

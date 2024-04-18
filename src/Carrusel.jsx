import React from 'react';

const FotosMostrar = ({ todosLosPaisajes, categoriaSeleccionada, diapoActual }) => {
  // Filtrar los paisajes según la categoría seleccionada
  const fotosFiltradas = categoriaSeleccionada === 'todas' ? todosLosPaisajes : todosLosPaisajes.filter(paisaje => paisaje.categoria === categoriaSeleccionada);

  return (
    <div className="section-center">
      {fotosFiltradas.map(({ id, src, img }, index) => (
        <article key={id} className={fijaClase(index, diapoActual, fotosFiltradas.length)}>
          <img src={src} alt={img} className="person-img" />
          <h4>{img}</h4>
        </article>
      ))}
    </div>
  );
};

//Lo arrastramos de la práctica anterior para que haga el efecto de transición
function fijaClase(index, diapoActual, paisajesLength) {
    if (index === diapoActual % paisajesLength) {
      return 'activeSlide';
    } else if (index === (diapoActual - 1 + paisajesLength) % paisajesLength) {
      return 'lastSlide';
    } else {
      return 'nextSlide';
    }
  }
  
export default FotosMostrar;

import React from 'react';

//El componente acepta dos propiedades: elegir una categoría y la lista de categorías
const FiltroBtn = ({ selectorCategoria, categorias }) => {
  return (
    <div className="btn-container">
      <button type="button" className="filter-btn" onClick={() => selectorCategoria('todas')}>
        Todas las categorias
      </button>
      {categorias.map((categoria, index) => (
        <button key={index} type="button" className="filter-btn" onClick={() => selectorCategoria(categoria)}>
          {categoria}
        </button>
      ))}
    </div>
  );
};
export default FiltroBtn;
//El primer button lo ponemos fijo, siempre va a estar. Agrupa todas las categorias
//Luego, por cada categoría que tengamos en los datos, creamos un boton. Al hacer click, se elibe esa categoría
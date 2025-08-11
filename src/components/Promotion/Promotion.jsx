import React from 'react';
import './Promotion.css';

const Promotion = () => {
  return (
    <div className="promotion">
      <div className="promotion-left">
        <h3>STARBUCKS</h3>
        <h2>*Hoy el antojo es de un DUO IDEAL*</h2>
        <p className="price">Desde $17.900</p>
        <h1>DUO IDEAL</h1>
        <p>Este julio, tu momento ideal comienza con el duo perfecto: sabor que refresca, combinación que enamora</p>
        <button>Descubre más</button>
      </div>
      <div className="promotion-right">
        <h2>VIAJA POR COLOMBIA DESDE TU TAZA DE CAFÉ</h2>
        <button>Viaja por Colombia</button>
        <p>Conoce más</p>
      </div>
    </div>
  );
};

export default Promotion;
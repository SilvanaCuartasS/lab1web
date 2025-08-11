import React from 'react';
import './Rewards.css';

const Rewards = () => {
  return (
    <div className="rewards">
      <div className="rewards-content">
        <h2>Saluda a la infinidad de opciones y, sí, al café gratis.</h2>
        
        <div className="rewards-item">
          <h3>Acumula Estrellas con cada compra</h3>
          <p>$2000 = 1 Estrella</p>
        </div>
        
        <div className="rewards-item">
          <h3>¡50 Estrellas es una bebida de regalo!</h3>
          <p>¿La única forma en que Starbucks® sabe mejor? Cuando es gratis</p>
          <div className="rewards-buttons">
            <button className="primary">Regístrese ahora</button>
            <button className="secondary">Iniciar sesión</button>
          </div>
        </div>
        
        <div className="rewards-item">
          <h3>100 Estrellas en el año = Nivel Gold</h3>
          <p>El nivel Gold desbloquea emocionantes regalos durante todo el año: bebida o pieza de panadería de regalo y mucho más.</p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
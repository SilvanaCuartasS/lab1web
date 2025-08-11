import React from 'react';
import './Footer.css';
import { footerLinks } from '../../data/footerLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h3>Sobre nosotros</h3>
        <h4>Atención al Cliente</h4>
        <ul>
          {footerLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="footer-legal">
        <p>Términos de uso web</p>
        <p>Aviso de Privacidad</p>
        <p>Política de tratamiento de datos</p>
        <p>Reversión de pago</p>
        <p>Política de garantía</p>
        <p>Términos y Condiciones Starbucks Rewards</p>
      </div>
    </footer>
  );
};

export default Footer;
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/_footer.scss"; // Import footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footer-column">
          <h3>Öppettider</h3>
          <p>Måndag-söndag: 18:00 - 24:00</p>
        </div>
        <div className="footer-column">
          <h3>Adress</h3>
          <p>Drottinggatan 50, 123 45 Stockholm</p>
        </div>
        <div className="footer-column">
          <h3>Kontakt</h3>
          <p>Telefon: +46 370 570 42</p>
          <p>Email: BellaBella@mail.com</p>
        </div>
        <div className="footer-column">
          <h3>Sociala medier</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/yourrestaurant" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/yourrestaurant" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/yourrestaurant" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

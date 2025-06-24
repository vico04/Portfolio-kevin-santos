import '../../components/Footer/Footer.scss';
import contactImg from '../../assets/images/technology-2.jpg';

const Footer = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://getform.io/f/bnlxwexb', {
        method: 'POST',
        body: new FormData(e.currentTarget),
      });
      if (response.ok) {
        window.location.href = 'https://vico04.github.io/Portfolio-kevin-santos/merci.html';
      } else {
        console.error('Erreur lors de l’envoi du formulaire');
      }
    } catch (err) {
      console.error('Erreur réseau', err);
    }
  };

  return (
    <footer className="footer">
      <div className="overlay">
        <section id="contact" className="contact-container" style={{ backgroundImage: `url(${contactImg})` }}>
          <div className="contact-title">
            <h2>Me contacter</h2>
          </div>

          <div className="form-background">
            <form onSubmit={handleSubmit} className="form-box">
              <label htmlFor="name">Nom</label>
              <input type="text" name="name" id="name" required></input>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required></input>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
              <input type="submit" value="Envoyer" className="inputSubmitSize" />
            </form>
          </div>
        </section>
      </div>
      <div className="footer-nav">
        <nav className="footer-menu">
          <a href="#presentation">Présentation</a>
          <a href="#skills">Compétences</a>
          <a href="#project">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

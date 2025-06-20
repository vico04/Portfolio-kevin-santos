import photo from '../../assets/images/IMG_5430-2.jpg';
import '../../components/Presentation/Presentation.scss';

const Presentation = () => {
  return (
    <section id="presentation" className="presentation-section">
      <div className="presentation-container">
        <img src={photo} alt="photo de kevin santos" className="presentation-photo"></img>
        <p>Kévin Santos</p>
      </div>
      <div className="presentation-text">
        <p>
          Je suis un développeur web en reconversion, après plusieurs
          <br />
          années d’expérience dans le secteur bancaire.
          <br />
          <br />
          Curieux, rigoureux et déterminé, j’ai décidé de me lancer dans le développement web pour allier logique,
          <br />
          créativité et impact concret. J’ai récemment suivi une formation où j’ai appris
          <br />
          à concevoir des sites web accessibles, responsives et performants.
          <br />
          <br />
          J’ai une bonne compréhension des fondamentaux du développement web (HTML, CSS / SCSS, JavaScript) et
          <br />
          je suis en train d’approfondir mes connaissances sur React et Node.js
          <br />à travers des projets pratiques.
        </p>
      </div>
    </section>
  );
};

export default Presentation;

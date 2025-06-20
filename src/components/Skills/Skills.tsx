import '../../components/Skills/Skills.scss';
import skillsImg from '../../assets/images/technology-2.jpg';
import frontIcon from '../../assets/logo/front-end.png';
import backIcon from '../../assets/logo/backend-2.png';
import toolsIcon from '../../assets/logo/technical-support-2.png';

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-title" style={{ backgroundImage: `url(${skillsImg})` }}>
        <div className="overlay">
          <h2>Mes compétences</h2>
        </div>
      </div>
      <div className="skills-details">
        <div className="frontend-box">
          <div className="frontend-logotitle">
            <img src={frontIcon} alt="Icon frontend" className="frontend-icon" />
            <h3>Front-end</h3>
          </div>
          <ul className="frontend-details">
            <br />
            <li>
              <strong>Langages :</strong> JavaScript (ES6+), TypeScript
            </li>
            <br />
            <li>
              <strong>Frameworks et Bibliothèques :</strong> React
            </li>
            <br />
            <li>
              <strong>Intégration Web :</strong> HTML5, CSS3 (Flexbox, Grid,
              <br />
              animations CSS), Bootstrap
            </li>
          </ul>
        </div>
        <div className="backend-box">
          <div className="backend-logotitle">
            <img src={backIcon} alt="Logo back-end" className="backend-icon" />
            <h3>Back-end</h3>
          </div>
          <ul className="backend-details">
            <br />
            <li>
              <strong>Langages et Frameworks :</strong> Node.js (Express.js)
            </li>
            <br />
            <li>
              <strong>Bases de Données :</strong> MongoDB
            </li>
            <br />
            <li>
              <strong>API :</strong> Création et consommation d'API REST
            </li>
          </ul>
        </div>
        <div className="tools-box">
          <div className="tools-logotitle">
            <img src={toolsIcon} alt="Logo Outils" className="tools-icon" />
            <h3>Outils</h3>
          </div>
          <ul className="tools-details">
            <br />
            <li>
              <strong>Gestion de Version :</strong> Git, GitHub
            </li>
            <br />
            <li>
              <strong>Environnements :</strong> Visual Studio Code
            </li>
            <br />
            <li>
              <strong>Méthodologies :</strong> Agile, Scrum
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

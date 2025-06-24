import '../../components/Skills/Skills.scss';
import skillsImg from '../../assets/images/technology-2.jpg';
import frontIcon from '../../assets/logo/front-end.png';
import backIcon from '../../assets/logo/backend-2.png';
import toolsIcon from '../../assets/logo/technical-support-2.png';
import reactLogo from '../../assets/logo/react-logo.png';
import jsLogo from '../../assets/logo/js-logo.png';
import nodeLogo from '../../assets/logo/node-logo.png';
import mongoLogo from '../../assets/logo/mongo-logo.png';
import tsLogo from '../../assets/logo/ts-logo.png';

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
              <strong>Langages :</strong>
              <ul className="tech-line">
                <li>
                  <div className="tech-item">
                    JavaScript (ES6+) <img src={jsLogo} alt="Logo JavaScript" />
                  </div>
                </li>
                <li>
                  <div className="tech-item">
                    TypeScript <img src={tsLogo} alt="Logo Typescript" />
                  </div>
                </li>
              </ul>
            </li>
            <br />
            <li>
              <strong>Frameworks et Bibliothèques :</strong>
              <ul className="tech-line">
                <li>
                  <div className="tech-item">
                    React <img src={reactLogo} alt="Logo React" />
                  </div>
                </li>
              </ul>
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
              <strong>Langages et Frameworks :</strong>
              <ul className="tech-line">
                <li>
                  <div className="tech-item">
                    Node.js (Express.js) <img src={nodeLogo} alt="Logo Node.Js" />
                  </div>
                </li>
              </ul>
            </li>
            <br />
            <li>
              <strong>Bases de Données :</strong>
              <ul className="tech-line">
                <li>
                  <div className="tech-item">
                    MongoDB <img src={mongoLogo} alt="Logo MongoDbs" />
                  </div>
                </li>
              </ul>
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

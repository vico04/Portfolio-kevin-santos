import '../../components/Card/Card.scss';
import { Toggle } from '@/components/ui/toggle';

//Définition du type
type CardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[] | string;
  link?: string;
  repo?: string;
};

const Card = ({ title, description, image, technologies, link, repo }: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="techno">
          {/* On vérifie la présence d"un tableau ou non */}
          {Array.isArray(technologies) ? (
            technologies.map((tech, index) => (
              <div key={'tech-' + index} className="tech-box">
                <p>{tech}</p>
              </div>
            ))
          ) : (
            <div>
              <p className="tech-box">{technologies}</p>
            </div>
          )}
        </div>
        <div className="links">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Toggle variant="outline" className="toggle-style">
                Voir le site
              </Toggle>
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <Toggle variant="outline" className="toggle-style">
                Github
              </Toggle>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

import '../../components/Projects/Projects.scss';
import Card from '../../components/Card/Card';
import projects from '../data/projects.json';
import projectsImg from '../../assets/images/technology-2.jpg';

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <div className="projects-title" style={{ backgroundImage: `url(${projectsImg})` }}>
        <div className="overlay">
          <h2>Projets</h2>
        </div>
      </div>
      <div className="cards-container">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

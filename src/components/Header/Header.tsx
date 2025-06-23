import '../../components/Header/Header.scss';
import Banner from '../Banner/Banner';
import imageBanner from '../../assets/images/laptop-3.jpg';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <a href="#presentation">Présentation</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
      <Banner
        image={imageBanner}
        text="KEVIN SANTOS - Développeur Front-End"
        projectLink={{ href: '#projects', label: 'Voir mes projets' }}
        contactLink={{ href: '#contact', label: 'Me contacter' }}
        cvLink={{ href: '/Portfolio-kevin-santos/cv/CV-kevin-santos.pdf', label: 'Télécharger mon CV' }}
      />
    </header>
  );
};

export default Header;

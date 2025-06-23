import '../../components/Banner/Banner.scss';

//Définition du type
type BannerProps = {
  image: string;
  text?: string; //Texte optionnel
  subtitle?: string;
  projectLink?: { href: string; label: string };
  contactLink?: { href: string; label: string };
  cvLink?: { href: string; label: string };
};

const Banner = ({ image, text, subtitle, projectLink, contactLink, cvLink }: BannerProps) => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-intro">
        {text && <h1 className="banner-text">{text}</h1>}
        {subtitle && <p className="subtitle-text">{subtitle} </p>}
      </div>

      <div className="banner-links">
        <div className="link-box">
          {projectLink && (
            <a href={projectLink.href} className="project-link">
              {projectLink.label}
            </a>
          )}
        </div>
        <div className="link-box">
          {contactLink && (
            <a href={contactLink.href} className="contact-link">
              {contactLink.label}
            </a>
          )}
        </div>
        <div className="link-box">
          {cvLink && (
            <a href={cvLink.href} className="/Portfolio-kevin-santos/CV-kevin-santos.pdf">
              {cvLink.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;

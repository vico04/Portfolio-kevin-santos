import Presentation from '../../components/Presentation/Presentation';
import Skills from '../../components/Skills/Skills';
import Projects from '@/components/Projects/Projects';

const Home = () => {
  return (
    <section className="home">
      <Presentation />
      <Skills />
      <Projects />
    </section>
  );
};

export default Home;

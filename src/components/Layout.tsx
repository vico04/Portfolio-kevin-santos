import Header from './Header/Header';
import Footer from './Footer/Footer';
import '../styles/main.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <div className="main-container">
        <div className="header-banner-container">
          <Header />
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

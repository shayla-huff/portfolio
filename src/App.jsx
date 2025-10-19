import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import WorkList from './WorkList';
import Footer from './Footer';
import ContactForm from './ContactForm';
import './App.css';


const About = () => (
  <section className="page about">
    <h2>About</h2>
    <div className="about-content">
      <div className="about-text">
        <p>Hello! My name is Shayla Hufford. I'm a Web Programming & Design student at Purdue University seeking to work in graphic/web design after graduation.</p>
      </div>

      <div className="about-gallery">
        <img src="/images/profile1.jpg" alt="Profile 1" />
        <img src="/images/profile2.jpg" alt="Profile 2" />
        <img src="/images/profile3.jpg" alt="Profile 3" />
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="page contact">
    <h2>Contact</h2>
      <div>
        <ContactForm />
      </div>
  </section>
);

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={
            <>
              <section className="intro"><Intro /></section>
              <section className="work"><WorkList /></section>

            </>
            }
          />
          <Route path="/about" element={<section className="page"><About /></section>} />
          <Route path="/contact" element={<section className="page"><Contact /></section>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import WorkList from './WorkList';
import Footer from './Footer';
import ContactForm from './ContactForm';
import './App.css';

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";


const About = () => (
  <section className="page about">
    <h2>About</h2>
    <div className="about-content">
      <div className="about-text">
        <p>Hello! My name is Shayla Hufford. I'm a Web Programming & Design student at Purdue University seeking to work in graphic/web design after graduation.</p>
      </div>

      <div className="about-gallery">
        <img src={profile1} alt="Profile 1" />
        <img src={profile2} alt="Profile 2" />
        <img src={profile3} alt="Profile 3" />
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

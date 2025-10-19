import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import WorkList from './WorkList';
import Footer from './Footer';
import ContactForm from './ContactForm';
import './App.css';

const About = () => (
  <section className="page about">

    <div className="about-row">
      <div className="about-image">
        <img src={`${import.meta.env.BASE_URL}images/profile1.jpg`} alt="Profile 1" />
      </div>
      <div className="about-text">
        <p>Hello! My name is Shayla Hufford. I'm a Web Programming & Design student at Purdue University seeking to work in graphic/web design after graduation.</p>
      </div>
    </div>

    <div className="about-row reverse">
      <div className="about-image">
        <img src={`${import.meta.env.BASE_URL}images/profile2.jpg`} alt="Profile 2" />
      </div>
      <div className="about-text">
        <p>I'm passionate about creating visually appealing and user-friendly designs that effectively communicate the right message and enhance user experiences.</p>
      </div>
    </div>

    <div className="about-row">
      <div className="about-image">
        <img src={`${import.meta.env.BASE_URL}images/profile3.jpg`} alt="Profile 3" />
      </div>
      <div className="about-text">
        <p>Hello! My name is Shayla Hufford. I'm a Web Programming & Design student at Purdue University seeking to work in graphic/web design after graduation.</p>
      </div>
    </div>

  </section>
);

const Contact = () => (
  <section className="page contact">
    <h2>Reach Out</h2>
    <div className="contact-row">
      <div className="contact-text" style="font-size: 1.2rem;">
        <p>Have a project of collaboration in mind? Please fill out this contact form, or email me at shxylx221@gmail.com so we can discuss further!</p>
      </div>

      <div className="contact-form">
        <ContactForm />
      </div>
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

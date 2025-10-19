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
    <p>Blah blah blah stuff about myself :P</p>
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

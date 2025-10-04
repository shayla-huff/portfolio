import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import WorkList from './WorkList';
import Footer from './Footer';
import ContactForm from './ContactForm';
import './App.css';


const About = () => (
  <section>
    <h2>About</h2>
    <p>Blah blah blah stuff about myself :P</p>
  </section>
);

const Contact = () => (
  <section>
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
              <Intro />
              <WorkList />

            </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;

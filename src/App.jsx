import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Intro from './intro';
import WorkList from './worklist';
import Footer from './footer';  
import './App.css';
import ContactForm from './contactform';

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
              <Footer />
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

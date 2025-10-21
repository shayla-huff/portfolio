import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import WorkList from './WorkList';
import Footer from './Footer';
import ContactForm from './ContactForm';
import FerrisBueller from './pages/FerrisBueller';
import IndependentStudy from './pages/IndependentStudy';
import profile1 from './assets/profile1.jpg';
import profile2 from './assets/profile2.jpg';
import profile3 from './assets/profile3.jpg';


const About = () => (
  <section className="page about">

    <div className="about-row">
      <div className="about-image">
        <img src={profile1} alt="Profile 1" />
      </div>
      <div className="about-text">
        <p>Hello! My name is Shayla Hufford. I'm a Web Programming & Design student at Purdue University seeking to work in graphic/web design after graduation.</p>
      </div>
    </div>

    <div className="about-row reverse">
      <div className="about-image">
        <img src={profile2} alt="Profile 2" />
      </div>
      <div className="about-text">
        <p>I'm passionate about creating visually appealing and user-friendly designs that effectively communicate the right message and enhance user experiences. I'm also pretty passionate about coffee, but that's besides the point.</p>
      </div>
    </div>

    <div className="about-row">
      <div className="about-image">
        <img src={profile3} alt="Profile 3" />
      </div>
      <div className="about-text">
        <p>I love all things vintage, retro, old, whatever you'd like to call it. You can catch me in a thrifted sweater, at a coffee shop, working on any <em>retro</em> designs <strong>you</strong> may need! (Just head over to my contact page, and we can get the ball rolling :) )</p>
      </div>
    </div>

  </section>
);

const Contact = () => (
  <section className="page contact">
    <h2>Reach Out</h2>
    <div className="contact-row">
      <div className="contact-text">
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
    <>
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
          <Route path="/projects/ferris-bueller" element={<FerrisBueller />} />
          <Route path="/projects/independent-study" element={<IndependentStudy />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;

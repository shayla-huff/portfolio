import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate();

    return (
        <section className="intro">
            <h1>ALL THINGS DESIGN</h1>
            <p>I'm a Web Design student at Purdue University, aspiring to become proficient in all things design: web/user interface design, graphic design, branding design, advertising design, </p>
            <button onClick={() => navigate("/contact")}>LET'S TALK</button>
        </section>
    );
};

export default Intro;
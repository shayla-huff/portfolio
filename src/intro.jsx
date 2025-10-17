const Intro = () => {
    return (
        <section className="intro">
            <h1>ALL THINGS DESIGN</h1>
            <p>I'm a Web Design student at Purdue University, aspiring to become proficient in all things design: web/user interface design, graphic design, branding design, advertising design, </p>
            <button onClick={() => window.location.href = '/contact'}>LET'S TALK</button>
        </section>
    );
};

export default Intro;
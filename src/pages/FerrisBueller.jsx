const FerrisBueller = () => {
    return (
        <section className="page ferris-bueller">
            <h2>Ferris Bueller Poster</h2>
            <img src={`${import.meta.env.BASE_URL}images/ferris-bueller.jpg`} alt="Ferris Bueller Poster" className="project-image"/>
            <h3>A mock movie poster made for the well known 1986 classic, <em>Ferris Bueller's Day Off</em> (one of my favorites!)</h3>
            <p>My goal was to advertise the adventurous, youthful vibe of the film through imagery of Chicago, singular shots of the main three cast members, and a cutout from the famous art museum scene.</p>
            <p><em>created for an assignment for CGT 118 at Purdue University</em></p>
        </section>
    );
};

export default FerrisBueller;
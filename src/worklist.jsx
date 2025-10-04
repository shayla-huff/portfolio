import WorkItems from './WorkItems';

const WorkList = () => {
    const workItems = [
        { id: 1, title: 'Ferris Bueller Poster', image: one.jpg },
        { id: 2, title: 'Independent Study', image: two.jpg },
    ];

    return (
        <section>
            <h2>Work</h2>
            <div className="work-grid">
                {workItems.map(work => (
                    <WorkItems key={work.id} title={work.title} image={work.image} />
                ))}
            </div>
        </section>
    );
};

export default WorkList;


import placeholder from './assets/placeholder.svg';
import WorkItems from './WorkItems';

const WorkList = () => {
    const workItems = [
        { id: 1, title: 'Ferris Bueller Poster', image: placeholder },
        { id: 2, title: 'Independent Study', image: placeholder },
    ];

    return (
        <section className="work">
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


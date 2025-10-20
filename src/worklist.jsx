import placeholder from './assets/placeholder.svg';
import WorkItems from './WorkItems';

const WorkList = () => {
    const workItems = [
        { id: 1, title: 'Ferris Bueller Poster', image: placeholder, path: '/projects/ferris-bueller' },
        { id: 2, title: 'Independent Study', image: placeholder },
    ];

    return (
        <section className="work">
            <div className="work-grid">
                {workItems.map(work => (
                    <WorkItems key={work.id} id={work.id} title={work.title} image={work.image} />
                ))}
            </div>
        </section>
    );
};

export default WorkList;


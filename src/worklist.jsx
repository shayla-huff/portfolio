import placeholder from './assets/placeholder.svg';
import FerrisImage from './assets/ferris-bueller.jpg';
import WorkItems from './WorkItems';

const WorkList = () => {
    const workItems = [
        { id: 1, title: 'Ferris Bueller Poster', image: FerrisImage, path: '/projects/ferris-bueller' },
        { id: 2, title: 'Independent Study', image: placeholder, path: '/projects/independent-study' },
    ];

    return (
        <section className="work">
            <div className="work-grid">
                {workItems.map(work => (
                    <WorkItems key={work.id} title={work.title} image={work.image} path={work.path} />
                ))}
            </div>
        </section>
    );
};

export default WorkList;


const WorkItems = ({ title, image }) => {
    return (
        <div className="work-item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default WorkItems;
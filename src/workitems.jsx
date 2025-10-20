import { Link } from "react-router-dom";

const WorkItems = ({ title, image, path }) => {
    return (
        <div className="work-item">
            <link to={path}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
            </link>
        </div>
    );
};

export default WorkItems;
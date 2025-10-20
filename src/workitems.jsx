import { Link } from "react-router-dom";

const WorkItems = ({ title, image, path }) => {
    return (
        <div className="work-item">
            <Link to={path}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    );
};

export default WorkItems;
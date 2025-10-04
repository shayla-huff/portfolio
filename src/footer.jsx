import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to="/">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
import PropTypes from 'prop-types';
import './Card.css'
function Card({name, email}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                <p className="card-text">Welcome to Simpler Technologies.</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default Card;

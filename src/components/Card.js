import './Card_css.css';

const Card = (props) => {

    return (
        <div className="card">
            {props.children}
        </div>
    );
}

export default Card;
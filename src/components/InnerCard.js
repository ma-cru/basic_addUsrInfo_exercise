// import './InnerCard_css.css';

const InnerCard = (props) => {

    return (
        <div className="innerCard">
            {props.children}
        </div>
    );
}

export default InnerCard;
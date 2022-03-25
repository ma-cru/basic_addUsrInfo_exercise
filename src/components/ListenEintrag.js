import './ListenEintrag_css.css';

const ListenEintrag = props => {

    return (
        <p className="eintrag">{props.name}, {props.age}</p>
    );
}

export default ListenEintrag;
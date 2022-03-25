import './ModalMessage_css.css';


const ModalMessage = (props) => {

    return (
        <div id="modalMsg" className='modal'>
            <div className="modalContent">
                <span className="close" onClick={props.modalToggler}>&times;</span>
                <p>{props.modalMsg}</p>
            </div>
        </div>
    );
}

export default ModalMessage;

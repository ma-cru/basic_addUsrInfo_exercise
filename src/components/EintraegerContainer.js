import { useState } from 'react';

import InnerCard from './InnerCard';
import './EintraegerContainer_css.css';
import ModalMessage from './ModalMessage'

const EintraegerContainer = props => {

    // eslint-disable-next-line no-useless-escape
    const namePattern = /\p{L}+[^0-9?\\=)(/&%$§"!][^\s{1,}]+/gui;

    const [initAge, setAge] = useState('');
    const [initName, setName] = useState('');

    const [message, setMessage] = useState({});

    const nameHandler = event => {
        let name = event.target.value;

        setName(name);

        console.log(initName);

    }

    const ageHandler = event => {
        let age = event.target.value;

        setAge(age);

        console.log(initAge);

    }

    const submissionHandler = event => {

        event.preventDefault()

        let msg = { name: initName, age: initAge };
        console.log(msg);

        if (namePattern.test(initName) && initAge > 0) {
            console.log("both name and number match");
            props.updateUser(msg);
        } else {
            console.log("either name or number doesn't match");
            setMessage(msg);
            toggleModalVis();
        }

        setAge('');
        setName('');

    }

    const [initModalVis, setModalVis] = useState('hidden');

    const toggleModalVis = () => {

        initModalVis === 'hidden'
            ? setModalVis('shown')
            : setModalVis('hidden')
    }

    return (
        <InnerCard valueToApp={props.updateUser}>
            <div className="eintraegerContainer">
                <form onSubmit={submissionHandler}>
                    <label>Name:</label><br />
                    <input type="text" value={initName} onChange={nameHandler} required></input><br />
                    <label>Age:</label><br />
                    <input type="number" value={initAge} min="0" onChange={ageHandler} required></input><br />
                    <button type="submit">Add entry</button>
                </form>
            </div>
            <div className={initModalVis}>
                <ModalMessage
                    message={props.message}
                    modalMsg={`Names must be of 1 or more letters long and ages of at least one number above 0. You, however, entered ${message.name} for your name and ${message.age} for your age. Please try again with entries that match the required format.`}
                    modalToggler={toggleModalVis}
                />
            </div>
        </InnerCard>
    );

}

export default EintraegerContainer;

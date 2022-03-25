import React, { useContext } from 'react';
import { UserContext } from '../App';

import ListenEintrag from './ListenEintrag';
import InnerCard from './InnerCard';

import './Liste_css.css';

const Liste = props => {

    const users = useContext(UserContext);

    return (
        <InnerCard>

            <div className="listeContainer">
                {users.map(user => <ListenEintrag
                    key={user.id}
                    name={user.name}
                    age={user.age}
                />)}
            </div>

        </InnerCard>
    );
}

export default Liste;
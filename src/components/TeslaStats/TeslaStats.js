import React from 'react';
import Proptypes from 'prop-types';
import './TeslaStats.css';

const TeslaStats = (props) => {
    const listItems = props.carstats.map((stat) => (
        <li key={stat.model}>
            <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
            <p>{stat.miles}</p>
        </li>
    ));
    return (
        <div className="tesla-stats tesla-stats-animation">
            <ul>
                {listItems}
            </ul>
        </div>
    )  
};

TeslaStats.propTypes = {
    carstats: Proptypes.array
}

export default TeslaStats;
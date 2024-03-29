import React from 'react';
import PropTypes from 'prop-types';
import './TeslaClimate.css';

const TeslaClimate = props => (
    <div className="tesla-climate">
        <label className={`tesla-climate__item ${props.value ? 'tesla-climate__item--active' : '' }  ${!props.limit ? 'tesla-heat':''}`}>
            <p>{props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}</p>
            <i className="tesla-climate__icon"></i>
            <input type="checkbox"
            name="climate"
            checked={props.value}
            onChange={() => {props.handleChangeClimate()}}
            />
        </label>
    </div>
);

TeslaClimate.propTypes = {
    value: PropTypes.bool,
    limit: PropTypes.bool,
    handleChangeCliamte: PropTypes.func
}

export default TeslaClimate;
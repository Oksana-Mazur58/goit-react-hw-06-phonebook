import React from 'react';
import FilterStyle from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ value, onChangeFilter }) => (
    <label className={FilterStyle.Filter__aria}>
        Find contacts by name
        <input type='text' value={value} onChange={onChangeFilter}
            className={FilterStyle.Filter__input}>
        </input>
    </label>
)
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
}

export default Filter


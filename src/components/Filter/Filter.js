import React from 'react';
import FilterStyle from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions'

const Filter = ({ value, onChangeFilter }) => (
    <label className={FilterStyle.Filter__aria}>
        Find contacts by name
        <input type='text' value={value} onChange={onChangeFilter}
            className={FilterStyle.Filter__input}>
        </input>
    </label>
)

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
})
const mapDispatchToProps = (dispatch) => ({
    onChangeFilter: e => dispatch(phonebookActions.changeFilter(e.target.value))
    
})

export default connect(mapStateToProps, mapDispatchToProps )(Filter)
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
}

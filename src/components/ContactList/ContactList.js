import React from 'react';
import './ContactList.css'
import PropTypes from 'prop-types';
const ContactList = ({ showContacts, onDeleteContact }) => {
    return (
        <ul className="">
            {showContacts().map(({ id, name, number }) => (
                <li key={id} className="ContactList__item"
                >{name}: <span className="ContactList__number">{number}</span>
                    <button type='button' className="ContactList__button"
                        onClick={() => onDeleteContact(id)}>Delete</button>

                </li>
            ))}
        </ul>
    )
}
ContactList.propTypes = {
    showContacts: PropTypes.func.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactList
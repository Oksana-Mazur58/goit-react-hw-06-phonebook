import React, { Component } from 'react';
import { render } from 'react-dom';
import ContactFormStyle from './ContactForm.module.css'
import PropTypes from 'prop-types';

class ContactForm extends Component {
    static = {
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        name: '',
        number: '',
    };



    handleChangeName = e => {
        this.setState({ name: e.currentTarget.value })
    }
    handleChangeNumber = e => {
        this.setState({ number: e.currentTarget.value })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.props.onSubmit(this.state.name, this.state.number)

        this.reset()

    }

    reset() {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form className={ContactFormStyle.Contacts__form} onSubmit={this.handleSubmit}>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={this.handleChangeName}

                />
                <p>Number</p>

                <input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={this.handleChangeNumber}
                />
                <button type="submit" className={ContactFormStyle.ContactForm__button}>Add contact</button>

            </form>
        )
    }
}
export default ContactForm
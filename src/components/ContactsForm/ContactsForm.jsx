import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactsForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleInput = evt => {
    const { name, value } = evt.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(state);
    reset();
  };
  const reset = () => {
    setState('');
  };

  return (
    <>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <div className={css.borderContainer}>
        <form className={css.contactsForm} onSubmit={handleSubmit}>
          <label htmlFor={nanoid()} className={css.label}>
            Name
            <input
              id={nanoid()}
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={state.name}
              onChange={handleInput}
              required
            />
          </label>
          <label htmlFor={nanoid()} className={css.label}>
            Number
            <input
              id={nanoid()}
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={state.number}
              onChange={handleInput}
              required
            />
          </label>
          <button className={css.addButton} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;

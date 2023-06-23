import ContactForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    const nameContacts = contacts.find(contact => contact.name === name);
    if (nameContacts) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <ContactForm onSubmit={addContact} />
      <Filter handleFilter={handleFilter} />
      <ContactList
        key={nanoid()}
        listContacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

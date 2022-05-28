import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handlerChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handlerSumbit = e => {
    e.preventDefault();
    this.addContacts();
    this.reset();
  };

  addContacts = name => {
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });

    console.log(visibleContacts);
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handlerSumbit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handlerChange}
              value={this.state.name}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              onChange={this.handlerChange}
              value={this.state.number}
            />
          </label>
          <button type="submit">Add contact </button>
        </form>
        <Filter value={filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

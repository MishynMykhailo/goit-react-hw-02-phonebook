import { Component } from 'react';
import { nanoid } from 'nanoid';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handlerSumbit = e => {
    e.preventDefault();
    this.addContacts();
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
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
  render() {
    return (
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
    );
  }
}

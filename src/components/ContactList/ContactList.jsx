const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

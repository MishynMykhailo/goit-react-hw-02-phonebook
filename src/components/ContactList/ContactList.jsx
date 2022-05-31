import s from '../ContactList/ContactList.module.css';
const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={s.ul}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.li}>
            <div className={s.divItemContainer}>
              {name}: {number}{' '}
              <button className={s.button} onClick={() => onDeleteContacts(id)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

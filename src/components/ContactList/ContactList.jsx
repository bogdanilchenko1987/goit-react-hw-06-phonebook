import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const filteredContacts = () => {
    const FilterlowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(FilterlowerCase)
    );
  };

  return (
    <List>
      {filteredContacts().map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};

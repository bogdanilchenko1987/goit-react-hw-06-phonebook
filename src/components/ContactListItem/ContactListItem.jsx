import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

import { Button, ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {name} : {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

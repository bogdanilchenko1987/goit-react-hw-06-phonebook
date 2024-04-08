import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from './ContactsFilter.styled';
import { filterContacts } from '../../redux/filterSlice';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const changeFilter = ({ currentTarget: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <>
      <Label htmlFor="filter">
        Find contacts:
        <Input
          type="text"
          placeholder="Enter contact name"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
      </Label>
    </>
  );
};

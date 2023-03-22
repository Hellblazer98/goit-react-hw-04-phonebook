import PropTypes from 'prop-types';
import { BsPersonLinesFill, BsFillPersonXFill } from 'react-icons/bs';
import { DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
    return (
        <>
            <BsPersonLinesFill size="20"/>
            <span>{name}: </span>
            <span>{number}</span>
            <DeleteBtn type='button' onClick={() => onDelete(id)}>
                <BsFillPersonXFill size="15" />
                <span>Delete</span>
            </DeleteBtn>
        </>
    )
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  onDelete: PropTypes.func.isRequired,
};
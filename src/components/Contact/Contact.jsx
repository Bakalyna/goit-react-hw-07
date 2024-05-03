import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ userContact }) => {
  const { id, name, number } = userContact;
  const dispatch = useDispatch();
  return (
    <li className={css.contact}>
      <div className={css['contact-wrap-main']}>
        <div className={css['contact-wrap']}>
          <FaUser />
          <p className={css['contact-text']}>{name}</p>
        </div>
        <div className={css['contact-wrap']}>
          <BsTelephone />
          <p className={css['contact-text']}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        name="delete"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;

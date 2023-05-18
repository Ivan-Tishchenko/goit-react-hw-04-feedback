import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <strong className={css.message}>{message}</strong>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

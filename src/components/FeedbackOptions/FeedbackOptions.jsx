import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = props => {
  const { callback, state } = props;
  const keys = Object.keys(state);
  return (
    <>
      {keys.map(name => (
        <button
          key={keys.indexOf(name)}
          className={css.button}
          onClick={() => callback(name)}
        >
          {name}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  callback: PropTypes.func,
  state: PropTypes.object,
};

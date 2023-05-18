import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { Notification } from './Notification/Notification';

export const Statistics = props => {
  const countTotalFeedback = () => {
    return Object.values(props).reduce(
      (accamulator, value) => accamulator + value,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((props.good * 100) / countTotalFeedback());
  };

  const state = {
    ...props,
    total: countTotalFeedback(),
    positivePercentage: countPositiveFeedbackPercentage(),
  };

  const keys = Object.keys(state);

  return (
    <>
      {countTotalFeedback() > 0 ? (
        <ul className={css.list}>
          {keys.map(key => (
            <li key={keys.indexOf(key)} className={css.item}>
              {key === 'positivePercentage' ? 'positive feedback' : key}:{' '}
              {state[key]}
              {key === 'positivePercentage' ? '%' : undefined}
            </li>
          ))}
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};

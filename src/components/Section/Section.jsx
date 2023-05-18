import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = props => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{props.title}</h2>
      <div>{props.children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

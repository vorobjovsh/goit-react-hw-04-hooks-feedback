import PropTypes from 'prop-types';
import s from './Section.module.css'

function Section ({ title, children }) {
  return (
    <>
      <section>
        <h2 className={s.h2}>{title}</h2>
        {children}
      </section>
    </>

  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired
};

export default Section;

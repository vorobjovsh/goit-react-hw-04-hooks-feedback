import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

function FeedbackOptions ({options, onLeaveFeedback}) {
  return (
    <>
        <div>
          {options.map((item) => (
            <button key={item} className={s.feed} onClick={() => {onLeaveFeedback(item)}}>{item}</button>
          ))}
        </div>
    </>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FeedbackOptions;

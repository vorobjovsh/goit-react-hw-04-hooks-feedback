import React, { useState, useEffect } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [posit, setPosit] = useState(0);

  const onLeaveFeedback = (option) => {

    switch (option) {
      case 'good':
        setGood(prevState => (
          prevState + 1
        ))
        break;

      case 'neutral':
        setNeutral(prevState => (
            prevState + 1
        ))
        break;

      case 'bad':
        setBad(prevState => (
                prevState + 1
        ))
        break;

      default:
        return;
    }


  }

  useEffect(() => {
    setTotal(good + neutral + bad);

    const countPositiveFeedbackPercentage = (item) => {
      let positive = 0;
      if (item !== 0) {
        positive = good/(item/100);
      }
      return Math.round(positive);
    }

    setPosit(countPositiveFeedbackPercentage(total));
  },[good, neutral, bad, total]);

  return (
    <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
        </Section>

        <Section title="Statistics">
            {total > 0 ? (
              <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={posit}></Statistics>
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
        </Section>
    </>
  );
};

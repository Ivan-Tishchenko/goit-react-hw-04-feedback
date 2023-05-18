import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

// const state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

export const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickButton = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('error with name button');
    }
  };

  return (
    <>
      <Section title="Please leave feadback">
        <FeedbackOptions
          callback={clickButton}
          state={{ good, neutral, bad }}
        />
      </Section>
      <Section title="Statistic">
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Section>
    </>
  );
};

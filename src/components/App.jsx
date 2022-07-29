import { useState } from 'react';
import { Box } from './box/Box';
import { FeedbackOptions } from './butons/Buttons';
import { Statistics } from './statistics/Statistics';
import { Title } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    const total = totalFeedback();
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  const buttonsArray = ['good', 'neutral', 'bad'];
  const statsArray = [
    ['good', good],
    ['neutral', neutral],
    ['bad', bad],
  ];

  return (
    <Box
      as="div"
      width="75%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color="white"
      ml="auto"
      mr="auto"
      bg="background"
      borderRadius="normal"
      boxShadow="4px 11px 49px 1px #d7dead"
    >
      <Box as="section">
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          options={buttonsArray}
          onLeaveFeedback={handleFeedback}
        />
      </Box>

      <Box as="section" display="flex" flexDirection="column" width="50%">
        <h2>Statistics</h2>

        {totalFeedback() === 0 ? (
          <h3>No feedback given</h3>
        ) : (
          <Statistics
            total={totalFeedback()}
            good={positiveFeedback()}
            statsArray={statsArray}
          />
        )}
      </Box>
    </Box>
  );
}

// Language: javascript

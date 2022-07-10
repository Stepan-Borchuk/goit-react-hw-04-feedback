import { Box } from '../box/Box';
import { ItemsText, TotalResults, Items } from './Statistics.styled';

export const Statistics = ({ statsArray, good, total }) => {
  return (
    <Box
      display="inline-flex"
      alightItems="start"
      flexDirection="column"
      width="100%"
      mb={5}
    >
      <ul>
        {statsArray.map(item => (
          <Items key={item[0]}>
            <ItemsText>
              {item[0]}: {item[1]}
            </ItemsText>
          </Items>
        ))}
      </ul>
      <TotalResults>Total: {total}</TotalResults>
      <TotalResults value={good}> Positive Feedback: {good}%</TotalResults>
    </Box>
  );
};

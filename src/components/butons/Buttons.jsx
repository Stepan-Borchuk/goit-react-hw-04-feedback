import { Box } from '../box/Box';
import { Buttons } from './Buttons.styled';

export const Options = ({ onFeedback, options }) => {
  return (
    <Box
      m={0}
      p={0}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      as="ul"
      background="accent"
    >
      {options.map(button => (
        <li key={button}>
          <Buttons type="button" onClick={() => onFeedback(button)}>
            {button}
          </Buttons>
        </li>
      ))}
    </Box>
  );
};

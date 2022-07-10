import styled from 'styled-components';
export const Items = styled.li`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const ItemsText = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const TotalResults = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

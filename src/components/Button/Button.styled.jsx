import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  min-width: ${p => p.theme.space[8]}px;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
`;

import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  top: ${p => p.theme.space[0]}px;
  left: ${p => p.theme.space[0]}px;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  max-width: ${p => p.theme.space[9]}px;
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
`;

export const SearchbarButton = styled.button`
  min-width: ${p => p.theme.space[5]}px;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
`;

export const SearchbarInput = styled.input`
  display: inline-block;
  min-width: ${p => p.theme.space[5]}px;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  outline: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ::placeholder {
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.secondary};
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

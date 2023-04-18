import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: ReactNode;
  color?: string;
  background?: string;
  name?: string;
}
const StyledButton = styled.button<Props>`
  padding: 6px 12px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  font-size: 1rem;
  line-height: 1.5;

  color: ${p => p.color || 'grey'};
  background: ${p => p.background || 'white'}

  ${(p) => p.name === 'primary' && css`
    color: whtie;
    background: navy;
    border-color: navy;
  `}
`;

export const Button = ({ children, color, background, name }: Props) => {
  return <StyledButton color={color} background={background} name={name}>{children}</StyledButton>
}
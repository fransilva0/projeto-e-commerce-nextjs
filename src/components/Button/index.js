import styled from 'styled-components';

const CommonStyling = styled.button`

  padding: 0.5rem 1rem;
  border: 2px solid ${({theme}) => theme.PrimaryColorBlue};
  transition: all 300ms ease-out;

`;

export const StyledButton = styled(CommonStyling)`
  background: ${props => props.secondary ? "transparent" : ({theme}) => theme.PrimaryColorBlue} ;
  color: ${props => props.secondary ? ({theme}) => theme.PrimaryColorBlue : "#fff"};
  width: ${props => props.secondary ? "none" : "10rem"};
  margin: ${props => props.secondary ? "0.5rem" : "0"};

  &:hover {
    background: ${props => props.secondary ? ({theme}) => theme.PrimaryColorBlue : ({theme}) => theme.SecondaryColorBlue};
    border-color: ${props => props.secondary ? ({theme}) => theme.PrimaryColorBlue : ({theme}) => theme.SecondaryColorBlue};
    color: #fff;

  }
`;



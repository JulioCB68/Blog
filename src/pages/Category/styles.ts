import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 1.5rem;
  background: ${(props) => props.theme.background};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 1500px) { 
    padding: 0 20rem;
  }
`;

export const TagText = styled.h2`
  text-align: center;
  font-weight: 900;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 3rem 0 2rem;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;

  @media only screen and (min-width: 1024px) { 
    font-size: 2rem;
    line-height: 3rem;
  }
`;

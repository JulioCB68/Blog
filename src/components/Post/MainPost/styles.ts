import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 0 1rem;
  border-radius: .5rem;

  img {
    border-radius: .25rem;
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

  .Wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .info {
    display: flex;

    p {
      padding: 0 .25rem 0 0;
    }

    p:first-child {
      font-weight: 900;
      text-transform: uppercase;
    }
  }
  @media only screen and (min-width: 768px) { 
    img {
      min-height: 15rem;
    }

    .Wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  padding: .5rem 0;
`;

export const Title = styled.h3`
  font-weight: 500;
  color: ${(props) => props.theme.title};
  padding: .5rem 0;
`;

export const Text = styled.p<{ size?: string, color?: string, capitalize?: boolean }>`
  font-weight: 400;
  font-size: ${props => props.size};
  text-transform: ${props => props.capitalize ? 'capitalize' : 'initial'};
  color: ${(props) => props.theme.text};
`;

export const TextPost = styled.p`
  height: 9.5rem;
  overflow: hidden;
  color: ${(props) => props.theme.text};
`;

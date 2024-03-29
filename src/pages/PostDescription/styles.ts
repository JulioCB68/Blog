import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: auto;
  
  img {
    width: 100%;
    border-radius: .5rem;
    max-width: 81.125rem;
    max-height: 50.5rem;
    margin: 0 0 3rem;
  }
`;

export const Hero = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  h1 {
    width: 100%;
    padding: 1rem 0 5rem;
    text-align: center;
    color: ${(props) => props.theme.title};
  }

  @media only screen and (min-width: 320px) { 
    h1 {
      font-size: 1.5rem;
      padding: 1rem 0 5rem;
    }
  }
  
  @media only screen and (min-width: 1024px) { 
    padding: 0 11.25rem;
    
    h1 {
      max-width: 60rem;
    }
  }

  @media only screen and (min-width: 1500px) { 
    padding: 0 20rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  text-align: left;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 0 1rem 1rem;
  
  .HeroInfo {
    display: flex;

    h4 {
      width: 100%;
      padding: 0 0.25rem 0;
      padding: 1rem .5rem 3rem 0;
      color: ${(props) => props.theme.text};
    }
  }

  @media only screen and (min-width: 1024px) { 
    padding: 0 11.25rem 2rem;

    p {
      max-width: 100rem;
      font-size: 1.25rem;
      font-weight: 300;
    }
  }

  @media only screen and (min-width: 1500px) { 
    padding: 0 20rem;
  }
`;

export const AuthorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 3rem;

  
  .AuthorPhoto {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  .AuthorInfo {
    flex-direction: column; 
  }

  @media only screen and (min-width: 1024px) { 
    max-width: 120rem;
    padding: 2rem 0 3rem;
  }
`;

export const Photo = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 .75rem 0 0;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.p`
  font-weight: 400;
  line-height: 25px;
  text-transform: capitalize;
  color: ${(props) => props.theme.title};
`;

export const Text = styled.p<{ size?: boolean }>`
  font-weight: 400;
  line-height: ${props => props.size ? 'initial' : '25px'};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-size: ${props => props.size ? '.75rem' : 'initial'};
  padding: 0 0 2rem;
`;

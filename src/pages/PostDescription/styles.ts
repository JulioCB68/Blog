import styled from 'styled-components';

export const Container = styled.div`
  background: #E5E5E5;
  padding: 1rem 0rem;
  min-height: 100vh;
  height: auto;
  
  img {
    width: 100%;
    border-radius: .5rem;
    margin: 1rem 0 0;
  }
  `;

export const WrapperHeader = styled.div`
  padding: 1rem 1rem 0;
  border-radius: .5rem;
  margin: 0 0 1rem;
  `;

export const WrapperContent = styled.div`
  padding: 1rem 1rem;
  border-radius: .5rem;
  `;

export const Content = styled.div`
  width: 100%;
  
  > div {
    display: flex;
  }
  
  h1 {
    padding: 1rem 0;
    font-size: 1.5rem;
  }
  
  h4 {
    padding: 1rem 0.25rem 0;
    opacity: 0.4;
  }
  `;

export const AuthorContainer = styled.div<{ border?: boolean, color?: string}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 1rem;
  border-bottom: ${props => props.border ? `3px solid ${props.color}` : 'initial'};
  
  .AuthorPhoto {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  .AuthorInfo {
    flex-direction: column; 
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
`;

export const Text = styled.p<{color?: string}>`
  font-weight: 400;
  line-height: ${props => props.color ? 'initial' : '25px'};
  text-transform: capitalize;
  color: ${props => props.color ? props.color : 'initial'};
  font-size: ${props => props.color ? '.75rem' : 'initial'};
`;

export const Footer = styled.div`
`;

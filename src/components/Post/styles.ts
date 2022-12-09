import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
  background: #FFFFFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 0 1rem;
  border-radius: .5rem;
  border-left: 7px solid ${props => props.color};

  img {
    border-radius: 0 .5rem 0 0;
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

  @media only screen and (min-width: 1024px) { 
    width: 22.05rem;
    height: 22rem;
    margin: 0 2rem 3rem 0;
    
    img {
      width: 100%;
      object-fit: cover;
      min-height: 10rem;
      max-height: 10rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 1rem 1rem;
`;

export const Title = styled.h3`
  font-weight: 500;
  color: #13131A;
  padding: .5rem 0;
`;

export const Text = styled.p<{ size?: string, color?: string, capitalize?: boolean }>`
  font-weight: 400;
  font-size: ${props => props.size};
  text-transform: ${props => props.capitalize ? 'capitalize' : 'initial'};
  background: ${props => props.color};
`;

export const Footer = styled.div`
  padding: 1.125rem 1rem;
  border-top: 2px dashed #F0F0F5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .AuthorInfo {
    margin: .5rem 0 0;
  }
`;

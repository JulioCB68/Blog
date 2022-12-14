import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;

  @media only screen and (min-width: 1500px) { 
    padding: 3rem 20rem;
  }
`;

export const Text = styled.p<{ bold?: boolean }>`
  font-weight: ${props => props.bold ? '800' : '400'};
  color: ${props => props.bold ? '#3485FF' : '#737380'};
  font-size: 15px;
  line-height: 15px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.5rem 0 0;

  .ButtonContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  `;

export const AddPostButton = styled.button`
  display: flex;
  flex-direction: column;
  
  padding: .5rem;
  border: none;
  background: #FFFFFF;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: .5rem;
  opacity: 0.9;
  @media only screen and (min-width: 1024px) { 
    margin: 0 2rem 0 0;    
  }
`;

export const Tilte = styled.h1`
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 1.875rem;
  color: #13131A;
`;

export const SubTilte = styled.p`
  width: 15rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.875rem;
  color: #737380;
  padding: 1rem 0;
`;

export const PostContainer = styled.div`
  width: 100%;
  padding: 2rem 0 0;


  @media only screen and (min-width: 600px) { 
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media only screen and (min-width: 768px) { 
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1700px) { 
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 2100px) { 
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 2500px) { 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

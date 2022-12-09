import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow-y: auto;
  cursor: pointer;
  white-space: nowrap;
  
  ::-webkit-scrollbar {
    height: 0px;
  }
  
  h4 {
    padding: 1rem .5rem 2rem 0;
    color: #737380;
  }
`;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  background-color: #f5f5f5;
`;

function TestPage() {
  return (
    <Container>
      Hello World
    </Container>
  );
}

export default TestPage; 
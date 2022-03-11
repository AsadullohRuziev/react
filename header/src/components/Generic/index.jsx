import React from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';

const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>Generic {location?.pathname}</h1>
    </Container>
  )
}

export default Generic;



const Container = styled.div`
    /* display: flex; */
`
import { Box, Container } from '@mui/material';
import React from 'react';
import KeyContactCard from './KeyContactCard';
import Person1Img from '../assets/images/person1.jpg';
import Person2Img from '../assets/images/person2.jpg';

function KeyContactSection() {
  return (
    <Box>
      <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { xs: 'space-around', lg: 'space-between' },
        alignItems: 'center'
      }}>
        <KeyContactCard img={Person1Img} name='Tanguy kabore' title='General Manager' tel='+212 060000000' />
        <KeyContactCard img={Person2Img} name='Cheikh Sidiya Haroun' title='Branch Manager' tel='+212 050000000' />
      </Container>
    </Box>
  )
}

export default KeyContactSection;
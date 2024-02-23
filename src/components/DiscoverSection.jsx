import React from 'react';
import { Box } from '@mui/material';
import discoverImg from '../assets/images/discover-img.jpg';
import DiscoverCard from './DiscoverCard';

function DiscoverSection() {
  return (
    <Box sx={{
        height: '75vh',
        backgroundImage: `url(${discoverImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex'
    }}>
    <DiscoverCard
      variant='h5'
      name='Achetez votre premier logement'
      description='Découvrez des logements exceptionnels pour votre premier achat immobilier.'
      buttonTitle='Nos logements'
      buttonLink='/sale'
    />

    </Box>
  )
}

export default DiscoverSection;
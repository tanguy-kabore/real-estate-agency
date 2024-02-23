import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import AboutImg from '../assets/images/about-img.jpg';

function AboutUsSection() {
    return (
        <Box sx={{ marginBottom: '3rem' }}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }
                }}>
                    <Box sx={{
                        width: { xs: '100%', md: '50%' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingRight: { xs: 0, md: '1rem' }
                    }}>
                        <Typography
                            variant='h2'
                            sx={{
                                fontSize: 'clamp(1.8rem, 1.3654rem + 0.9065vw, 2rem)',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginBottom: '1rem'
                            }}
                        >
                            A propos de nous
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'justify'
                            }}>
                            Nous sommes bien plus qu'une agence immobilière ; nous sommes vos partenaires dans la recherche du foyer idéal. Chez Immo Agency, nous comprenons que l'achat, la vente, ou la location d'une propriété est une décision importante, et c'est pourquoi nous nous engageons à offrir un service exceptionnel basé sur l'intégrité, la transparence et une connaissance approfondie du marché immobilier local.
                        </Typography>
                        <Box sx={{
                            marginTop: '1rem'
                        }}>
                            <Link to='/about' >
                                <Button
                                    variant='contained'
                                    color='warning'
                                >
                                    En savoir plus
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            display: 'flex',
                            justifyContent: 'center',
                            paddingLeft: { md: 0, lg: '6rem' },
                            paddingTop: { xs: '2rem', md: 0 }
                        }}>
                        <img
                            src={AboutImg}
                            alt=""
                            style={{
                                height: 'auto',
                                maxWidth: '100%',
                                borderRadius: '5px'
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default AboutUsSection;
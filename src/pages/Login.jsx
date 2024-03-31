import React from 'react';
import Footer from '../components/Footer';
import { Box, Container, Typography, Button, TextField, Checkbox, Link as MuiLink } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { orange } from '@mui/material/colors';

function Login() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'stretch', // Pour s'assurer que les colonnes ont la même hauteur
        marginY: '3rem',
        flex: '1', // Pour que le contenu occupe l'espace restant
      }}>
        <Box sx={{
          width: { xs: '100%', md: '40%' },
          paddingRight: { xs: 0, md: '1rem' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          {/* Contenu de la page de connexion */}
          <Typography
            variant='h2'
            sx={{
              fontSize: '3.5rem'
            }}
          >
            Connectez-vous
          </Typography>

          {/* Formulaire de connexion */}
          <form>
            {/* Champ de nom d'utilisateur */}
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            // Ajoutez la gestion d'état ou la logique nécessaire
            />

            {/* Champ de mot de passe */}
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
              required
            // Ajoutez la gestion d'état ou la logique nécessaire
            />

            {/* Option "Se souvenir de moi" */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                defaultChecked // Vous pouvez gérer l'état de cela comme nécessaire
                color='warning'
              />
              <Typography variant="body2">Se souvenir de moi</Typography>
            </Box>

            {/* Bouton de connexion */}
            <Button variant='contained' color='warning' size='large'>
              Se connecter
            </Button>
          </form>

          {/* Lien pour créer un nouveau compte */}
          <Typography variant="body2" sx={{ marginTop: '1rem' }}>
            Vous n'avez pas encore de compte? <MuiLink href="/register">Créez en un</MuiLink>
          </Typography>
        </Box>

        {/* Image à droite */}
        <Box sx={{
          width: { xs: '100%', md: '60%' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // Ajoutez une marge en haut de la carte
          marginTop: { xs: '20rem', md: 0 },
        }}>
          <Card sx={{
            minWidth: { xs: '200px', sm: '275px' },
            minHeight: 300,
            padding: { xs: '1rem', sm: '2rem' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center', // Centre le contenu de la carte horizontalement
            backgroundColor: orange[800],
            borderRadius: '0'
          }}>
            <CardContent sx={{
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Centre le texte verticalement
            }}>
              <Typography
                variant="h4" // Utilisez la variante appropriée pour augmenter la taille du texte
                sx={{
                  textTransform: 'capitalize',
                  color: 'white',
                  marginBottom: '1rem',
                }}
              >
                Bienvenue
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </Container>
      <Footer />
    </Box>
  );
}

export default Login;

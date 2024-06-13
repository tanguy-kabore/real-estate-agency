import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://real-estate-agency-rest-api.onrender.com/api/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Message envoyé avec succès
        console.log('Message envoyé avec succès !');
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Échec de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Box sx={{
      width: { sx: '100%', md: '60%' }
    }}>
      <form style={{
        display: 'flex',
        flexDirection: 'column'
      }} onSubmit={handleSubmit}>
        <TextField id="name" name="name" label="Name" variant="outlined" value={formData.name} onChange={handleChange} sx={{ marginBottom: '1rem' }} />
        <TextField id="email" name="email" label="Email" variant="outlined" value={formData.email} onChange={handleChange} sx={{ marginBottom: '1rem' }} />
        <TextField id="message" name="message" label="Message" multiline variant="outlined" maxRows={4} value={formData.message} onChange={handleChange} sx={{ marginBottom: '1rem' }} />
        <Box>
          <Button type="submit" variant='contained' color='warning' size='large'>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default ContactForm;
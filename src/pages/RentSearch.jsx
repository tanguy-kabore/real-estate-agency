import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

function RentSearch({ handleSearch, handleReset, searchTitle, setSearchTitle, searchAddress, setSearchAddress, searchPrice, setSearchPrice, searchBedrooms, setSearchBedrooms, searchBathrooms, setSearchBathrooms, searchLivingrooms, setSearchLivingrooms }) {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
      <Grid item>
        <TextField
          label="Titre"
          variant="outlined"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Adresse"
          variant="outlined"
          value={searchAddress}
          onChange={(e) => setSearchAddress(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Prix"
          variant="outlined"
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Chambres"
          variant="outlined"
          value={searchBedrooms}
          onChange={(e) => setSearchBedrooms(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Salles de bain"
          variant="outlined"
          value={searchBathrooms}
          onChange={(e) => setSearchBathrooms(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Salons"
          variant="outlined"
          value={searchLivingrooms}
          onChange={(e) => setSearchLivingrooms(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="warning" onClick={handleSearch}>
          Rechercher
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="warning" onClick={handleReset}>
          Réinitialiser
        </Button>
      </Grid>
    </Grid>
  );
}

export default RentSearch;
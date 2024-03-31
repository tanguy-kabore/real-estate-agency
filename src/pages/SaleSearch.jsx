import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

function SaleSearch({ searchTitle, setSearchTitle, searchAddress, setSearchAddress, searchPrice, setSearchPrice, searchBedrooms, setSearchBedrooms, searchBathrooms, setSearchBathrooms, searchLivingrooms, setSearchLivingrooms, handleSearch, handleReset }) {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <TextField
                    label="Titre"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <TextField
                    label="Adresse"
                    value={searchAddress}
                    onChange={(e) => setSearchAddress(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <TextField
                    label="Prix"
                    value={searchPrice}
                    onChange={(e) => setSearchPrice(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <TextField
                    label="Chambres"
                    value={searchBedrooms}
                    onChange={(e) => setSearchBedrooms(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <TextField
                    label="Salles de bains"
                    value={searchBathrooms}
                    onChange={(e) => setSearchBathrooms(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <TextField
                    label="Salons"
                    value={searchLivingrooms}
                    onChange={(e) => setSearchLivingrooms(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Button variant="contained" color="warning" onClick={handleSearch}>Rechercher</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Button variant="contained" color="warning" onClick={handleReset}>Réinitialiser</Button>
            </Grid>
        </Grid>
    );
}

export default SaleSearch;

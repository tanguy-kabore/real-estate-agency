import React, { useEffect, useState } from 'react';
import RentItem from '../components/RentItem';
import Navigation from '../components/Navigation';
import { Container } from '@mui/material';
import SecondHeader from '../components/SecondHeader';
import RentHeaderImg from '../assets/images/rent-header-img.jpg';
import getRentItems from '../assets/rentItems'; // Importez la fonction pour récupérer les données des propriétés à louer
import Footer from '../components/Footer';
import RentSearch from './RentSearch'; // Importez le composant de recherche

function Rent() {
  const [rentItems, setRentItems] = useState([]);
  const [filteredRentItems, setFilteredRentItems] = useState([]); // Ajoutez un état pour stocker les éléments filtrés
  const [searchTitle, setSearchTitle] = useState(''); // Ajoutez les états pour les valeurs de recherche
  const [searchAddress, setSearchAddress] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [searchBedrooms, setSearchBedrooms] = useState('');
  const [searchBathrooms, setSearchBathrooms] = useState('');
  const [searchLivingrooms, setSearchLivingrooms] = useState('');

  useEffect(() => {
    const fetchRentItems = async () => {
      try {
        const items = await getRentItems(); // Utilisez la fonction getRentItems pour obtenir les données des propriétés à louer
        setRentItems(items);
        setFilteredRentItems(items); // Initialisez les éléments filtrés avec toutes les propriétés à louer au début
      } catch (error) {
        console.error('Error fetching rent items:', error);
      }
    };

    fetchRentItems();
  }, []);

  const handleSearch = () => {
    // Implémentez la logique de filtrage ici en fonction des valeurs de recherche
    const filteredItems = rentItems.filter(item => {
      // Vous pouvez ajouter des conditions de filtrage ici en fonction des champs de recherche
      return (
        item.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        item.address.toLowerCase().includes(searchAddress.toLowerCase()) &&
        item.price.toString().toLowerCase().includes(searchPrice.toLowerCase()) &&
        item.bedrooms.toString().toLowerCase().includes(searchBedrooms.toLowerCase()) &&
        item.bathrooms.toString().toLowerCase().includes(searchBathrooms.toLowerCase()) &&
        item.livingrooms.toString().toLowerCase().includes(searchLivingrooms.toLowerCase())
      );
    });
    setFilteredRentItems(filteredItems); // Mettez à jour les éléments filtrés avec les résultats de la recherche
  };

  const handleReset = () => {
    // Réinitialisez les valeurs de recherche et rétablissez les éléments filtrés à leur état d'origine
    setSearchTitle('');
    setSearchAddress('');
    setSearchPrice('');
    setSearchBedrooms('');
    setSearchBathrooms('');
    setSearchLivingrooms('');
    setFilteredRentItems(rentItems); // Rétablissez les éléments filtrés à leur état d'origine
  };

  return (
    <div>
      <Navigation />
      <SecondHeader title='Louer une propriété' img={RentHeaderImg} imgPosition='bottom' direction='row-reverse' />
      <RentSearch // Intégrez le composant de recherche avec les fonctions de gestion et les états nécessaires
        handleSearch={handleSearch}
        handleReset={handleReset}
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchAddress={searchAddress}
        setSearchAddress={setSearchAddress}
        searchPrice={searchPrice}
        setSearchPrice={setSearchPrice}
        searchBedrooms={searchBedrooms}
        setSearchBedrooms={setSearchBedrooms}
        searchBathrooms={searchBathrooms}
        setSearchBathrooms={setSearchBathrooms}
        searchLivingrooms={searchLivingrooms}
        setSearchLivingrooms={setSearchLivingrooms}
      />
      <Container>
        {filteredRentItems.map(item => (
          <RentItem
            key={item.id}
            id={item.id}
            title={item.title}
            address={item.address}
            price={item.price}
            shortDescription={item.shortDescription}
            bedrooms={item.bedrooms}
            bathrooms={item.bathrooms}
            livingrooms={item.livingrooms}
            img={item.images[0].original}
          />
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default Rent;
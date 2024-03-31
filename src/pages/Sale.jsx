import React, { useEffect, useState } from 'react';
import SaleItem from '../components/SaleItem';
import Navigation from '../components/Navigation';
import { Container } from '@mui/material';
import SecondHeader from '../components/SecondHeader';
import SaleHeaderImg from '../assets/images/sale-header-img.jpg';
//import saleItems from '../assets/saleItems';
import Footer from '../components/Footer';
import getSaleItems from '../assets/saleItems';
import SaleSearch from './SaleSearch';

function Sale() {
  const [saleItems, setSaleItems] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchAddress, setSearchAddress] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [searchBedrooms, setSearchBedrooms] = useState('');
  const [searchBathrooms, setSearchBathrooms] = useState('');
  const [searchLivingrooms, setSearchLivingrooms] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getSaleItems();
        setSaleItems(items);
      } catch (error) {
        console.error('Error fetching sale items:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredItems = saleItems.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTitle.toLowerCase());
      const addressMatch = item.address.toLowerCase().includes(searchAddress.toLowerCase());
      const priceMatch = item.price.toString().toLowerCase().includes(searchPrice.toLowerCase());
      const bedroomsMatch = item.bedrooms.toString().toLowerCase().includes(searchBedrooms.toLowerCase());
      const bathroomsMatch = item.bathrooms.toString().toLowerCase().includes(searchBathrooms.toLowerCase());
      const livingroomsMatch = item.livingrooms.toString().toLowerCase().includes(searchLivingrooms.toLowerCase());
      return titleMatch && addressMatch && priceMatch && bedroomsMatch && bathroomsMatch && livingroomsMatch;
    });
    setSaleItems(filteredItems);
  };

  const handleReset = async () => {
    try {
      setSearchTitle('');
      setSearchAddress('');
      setSearchPrice('');
      setSearchBedrooms('');
      setSearchBathrooms('');
      setSearchLivingrooms('');
      const items = await getSaleItems();
      setSaleItems(items);
    } catch (error) {
      console.error('Error fetching sale items:', error);
    }
  };

  return (
    <div>
      <Navigation />
      <SecondHeader title='Propriétés à vendre' img={SaleHeaderImg} imgPosition='bottom' />
      <SaleSearch
        searchTitle={searchTitle}
        searchAddress={searchAddress}
        searchPrice={searchPrice}
        searchBedrooms={searchBedrooms}
        searchBathrooms={searchBathrooms}
        searchLivingrooms={searchLivingrooms}
        setSearchTitle={setSearchTitle}
        setSearchAddress={setSearchAddress}
        setSearchPrice={setSearchPrice}
        setSearchBedrooms={setSearchBedrooms}
        setSearchBathrooms={setSearchBathrooms}
        setSearchLivingrooms={setSearchLivingrooms}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <Container>
        {saleItems.map((item) => (
          <SaleItem
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

export default Sale;
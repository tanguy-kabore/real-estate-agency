import React, { useEffect, useState } from 'react';
//import saleItems from '../assets/saleItems';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import RentSaleProperty from '../components/RentSaleComponents/RentSaleProperty';
import MortgageCalculator from '../components/MortgageCalculator';
import { Box } from '@mui/material';
import getSaleItems from '../assets/saleItems';

function SaleProperty() {
  const { id } = useParams();
  const [saleItems, setSaleItems] = useState([]);
  const [saleProperty, setSaleProperty] = useState(null);

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
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  useEffect(() => {
    let property = saleItems.find((property) => property.id === id.toString());
    console.log('id:', id);
    console.log('saleItems:', saleItems);
    console.log('found property:', property);
  
    if (property) {
      setSaleProperty(property);
    }
  }, [id, saleItems]);
  

  return (
    <Box>
      <Navigation />

      {
        saleProperty ? (
          <Box>
            <RentSaleProperty propertyAddress={saleProperty.address} propertyImage={saleProperty.image1} propertyImages={saleProperty.images} propertyPrice={saleProperty.price} propertyLongDescription={saleProperty.longDescription} propertyBedrooms={saleProperty.bedrooms} propertyBathrooms={saleProperty.bathrooms} propertyLivingrooms={saleProperty.livingrooms} />
  
            <MortgageCalculator fullPropertyPrice={saleProperty.price} />
          </Box>
        ) : (
          null
        )
      }
      
      <Footer />
    </Box>
  )
}

export default SaleProperty;
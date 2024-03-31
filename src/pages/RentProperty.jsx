import React, { useEffect, useState } from 'react';
// import rentItems from '../assets/rentItems';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import RentSaleProperty from '../components/RentSaleComponents/RentSaleProperty';
import Footer from '../components/Footer';
import getRentItems from '../assets/rentItems';

function RentProperty() {

  const { id } = useParams();
  const [rentItems, setRentItems] = useState([]);
  const [rentProperty, setRentProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getRentItems();
        setRentItems(items);
      } catch (error) {
        console.error('Error fetching sale items:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  useEffect(() => {
    let property = rentItems.find((property) => property.id === id.toString());
    console.log('id:', id);
    console.log('rentItems:', rentItems);
    console.log('found property:', property);
  
    if (property) {
      setRentProperty(property);
    }
  }, [id, rentItems]);

  return (
    <div>
        <Navigation />

        {
          rentProperty ? (
            <RentSaleProperty propertyAddress={rentProperty.address} propertyImage={rentProperty.image1} propertyImages={rentProperty.images} propertyPrice={rentProperty.price} propertyLongDescription={rentProperty.longDescription} propertyBedrooms={rentProperty.bedrooms} propertyBathrooms={rentProperty.bathrooms} propertyLivingrooms={rentProperty.livingrooms} />
          ) : (
            null
          )
        }

        <Footer />
    </div>
  )
}

export default RentProperty;
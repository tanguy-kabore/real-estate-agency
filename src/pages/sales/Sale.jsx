import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SaleHeaderImg from '../../assets/images/sale-header-img.jpg';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import SecondHeader from '../../components/SecondHeader';
import SaleItem from './SaleItem';
import { getSaleItems } from './saleItems';

function Sale() {
  const [saleItems, setSaleItems] = useState([]);

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

  return (
    <div>
      <Navigation />
      <SecondHeader title='Propriétés à vendre' img={SaleHeaderImg} imgPosition='bottom' />
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
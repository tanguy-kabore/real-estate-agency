import React from 'react';
import RentSaleItem from './SaleDetail';

function SaleItem(props) {
  return (
    <RentSaleItem
      itemURL='sale'
      itemId={props.id}
      itemTitle={props.title}
      itemAddress={props.address}
      itemPrice={props.price}
      itemShortDescription={props.shortDescription}
      itemBedrooms={props.bedrooms}
      itemBathrooms={props.bathrooms}
      itemLivingrooms={props.livingrooms}
      itemImg={props.img}
    />
  );
}

export default SaleItem;
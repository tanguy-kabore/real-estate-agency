// Définir la fonction pour récupérer les données de l'API
const fetchPropertiesFromAPI = async () => {
  try {
    const response = await fetch('https://real-estate-agency-rest-api.onrender.com/api/v1/properties');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de l\'API', error);
    throw error;
  }
};

// Mettre à jour saleItems avec les données de l'API
const updateSaleItemsFromAPI = async () => {
  try {
    // Récupérer les données de l'API
    const apiData = await fetchPropertiesFromAPI();

    // Mettre à jour saleItems avec les données de l'API
    const updatedSaleItems = apiData.map(property => ({
      id: property._id,
      title: property.title,
      address: `${property.address.street}, ${property.address.city}, ${property.address.zipCode}, ${property.address.country}`,
      price: parseInt(property.price),
      shortDescription: property.description,
      longDescription: property.description,
      images: property.photos.map(photo => ({
        original: photo.url,
        thumbnail: photo.url,
      })),
      bedrooms: parseInt(property.bedrooms),
      bathrooms: parseInt(property.bathrooms),
      livingrooms: parseInt(property.livingrooms),
    }));

    console.log('Données de saleItems mises à jour avec succès:', updatedSaleItems);

    return updatedSaleItems;  // Retourner les nouvelles données
  } catch (error) {
    console.error('Erreur lors de la mise à jour de saleItems avec les données de l\'API', error);
    throw error;
  }
};

// Exporter une fonction qui retourne saleItems
export const getSaleItems = async () => {
  const saleItems = await updateSaleItemsFromAPI();
  return saleItems;
};
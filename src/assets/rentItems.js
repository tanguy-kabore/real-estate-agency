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

// Mettre à jour rentItems avec les données de l'API
const updateRentItemsFromAPI = async () => {
  try {
    // Récupérer les données de l'API
    const apiData = await fetchPropertiesFromAPI();

    // Filtrer les propriétés avec le statut "for-rent"
    const forRentProperties = apiData.filter(property => property.status === "for-rent");

    // Mettre à jour rentItems avec les données filtrées de l'API
    const updatedRentItems = forRentProperties.map(property => ({
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

    console.log('Données de rentItems mises à jour avec succès:', updatedRentItems);

    return updatedRentItems;  // Retourner les nouvelles données
  } catch (error) {
    console.error('Erreur lors de la mise à jour de rentItems avec les données de l\'API', error);
    throw error;
  }
};

// Exporter une fonction qui retourne rentItems
const getRentItems = async () => {
  const rentItems = await updateRentItemsFromAPI();
  return rentItems;
};

export default getRentItems;
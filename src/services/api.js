// services/api.js

// Dummy data to simulate backend response
const dummyProperties = [
    { id: 1, name: 'Cozy Cottage', price: 200000, bedrooms: 2, bathrooms: 1, location: 'Suburbs' },
    { id: 2, name: 'Luxury Apartment', price: 500000, bedrooms: 3, bathrooms: 2, location: 'Downtown' },
    { id: 3, name: 'Family Home', price: 350000, bedrooms: 4, bathrooms: 3, location: 'Residential' },
    { id: 4, name: 'Beach House', price: 750000, bedrooms: 5, bathrooms: 4, location: 'Coastal' },
    { id: 5, name: 'Mountain Retreat', price: 400000, bedrooms: 3, bathrooms: 2, location: 'Rural' },
  ];
  
  // Simulated API call with filtering
  export const fetchPropertiesAPI = (filters) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let filteredProperties = [...dummyProperties];
  
          if (filters.location) {
            filteredProperties = filteredProperties.filter(prop => prop.location.toLowerCase().includes(filters.location.toLowerCase()));
          }
          if (filters.propertyType) {
            filteredProperties = filteredProperties.filter(prop => prop.type === filters.propertyType);
          }
          if (filters.rentRange) {
            const [min, max] = filters.rentRange.split('-').map(Number);
            filteredProperties = filteredProperties.filter(prop => prop.price >= min && (max ? prop.price <= max : true));
          }
          if (filters.saleType) {
            filteredProperties = filteredProperties.filter(prop => prop.saleType === filters.saleType);
          }
  
          resolve({
            data: filteredProperties,
            status: 200,
            statusText: 'OK',
          });
        } catch (error) {
          reject({
            response: {
              data: { message: 'An error occurred while fetching properties.' },
              status: 500,
              statusText: 'Internal Server Error',
            },
          });
        }
      }, 500);
    });
  };
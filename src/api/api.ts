export const fetchApi = async (page: number, limit: number) => {
  try {
    const response = await fetch(
      `https://5fc9346b2af77700165ae514.mockapi.io/products?page=${page}&limit=${limit}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

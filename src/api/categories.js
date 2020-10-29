import request from "./request"

export const getCategories = async () => {
    const config = {
        url: '/categories',
        method: 'GET',
      };
    
      const response = await request(config);
      return response;
}
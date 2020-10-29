import request from "./request"

export const getNotices = async (category) => {
    const config = {
        url: `/notices/${category}`,
        method: 'GET',
      };
    
      const response = await request(config);
      return response;
}

export const getUserNotices = async (userId) => {
    const config = {
        url: `/user/${userId}/notices`,
        method: 'GET',
      };
    
      const response = await request(config);
      return response;
}
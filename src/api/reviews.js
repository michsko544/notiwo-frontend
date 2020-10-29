import request from "./request"

export const getUserReviews = async (userId) => {
    const config = {
        url: `/user/${userId}/reviews`,
        method: 'GET',
      };
    
      const response = await request(config);
      return response;
}

export const getNoticeReviews = async (noticeId) => {
    const config = {
        url: `/notice/${noticeId}/reviews`,
        method: 'GET',
      };
    
      const response = await request(config);
      return response;
}
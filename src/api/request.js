import axios from 'axios';

const request = async (config) => {
  const response = await axios.request(config);
    if(process.env.NODE_ENV === 'development')
    console.log(response)
  return {
    ok: response?.status >= 200 && response?.status < 400,
    ...response,
  };
};

export default request;
import axios from 'axios';

export default axios.create({
  // create an instance of axios client with some default properties
  // with this, we can load a pre-configured instance of axios into our app
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`
  }
});

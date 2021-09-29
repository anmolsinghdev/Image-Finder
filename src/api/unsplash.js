import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID OKrxcLv2DiTkwYTAeX-IPikhPaAfJL5j5QoA7eZFS4I',
  },
});

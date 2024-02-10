import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8444/users/',
  headers: {
    'Content-Type': 'application/json',
  },
});

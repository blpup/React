import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2ef524161adaec1a6fef3de6290ff73d5321dd449fb96f5bbd62f1627a887ade'
  }
})

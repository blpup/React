import axios from 'axios';

const KEY = 'AIzaSyBqO9UpPYLNE9NGKusPYoPnfp6V9c1UP1o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
})

import axios from 'axios';

const iTunesApi = axios.create({
  baseURL: 'https://itunes.apple.com/us/rss',
});

export default iTunesApi;
